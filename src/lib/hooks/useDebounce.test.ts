import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'

import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500))
    expect(result.current).toBe('initial')
  })

  it('should update the debounced value after the delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      },
    )

    rerender({ value: 'updated', delay: 500 })

    // Value should still be 'initial' because the debounce delay hasn't passed
    expect(result.current).toBe('initial')

    // Fast-forward the timer by 500ms
    act(() => {
      vi.advanceTimersByTime(500)
    })

    // Value should now be 'updated'
    expect(result.current).toBe('updated')
  })

  it('should cancel the timeout if the value changes before the delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      },
    )

    rerender({ value: 'updated-1', delay: 500 })

    // Fast-forward by 300ms, not enough for debounce delay
    act(() => {
      vi.advanceTimersByTime(300)
    })

    // Update the value again before the 500ms delay
    rerender({ value: 'updated-2', delay: 500 })

    // Fast-forward the timer by 500ms from the last change
    act(() => {
      vi.advanceTimersByTime(500)
    })

    // Value should be 'updated-2' as the debounce delay resets
    expect(result.current).toBe('updated-2')
  })
})

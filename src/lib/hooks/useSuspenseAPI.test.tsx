import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import type { Mock } from 'vitest'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { api } from '@/lib/utils/network'

import { useSuspenseAPI } from './useSuspenseAPI'

vi.mock('@/lib/utils/network', () => ({
  api: {
    get: vi.fn(),
  },
}))

describe('useSuspenseAPI', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()
    vi.clearAllMocks()
  })

  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test' }
    ;(api.get as Mock).mockResolvedValue(mockData)

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () => useSuspenseAPI(['test'], '/test-endpoint'),
      { wrapper },
    )

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData)
    })

    expect(api.get).toHaveBeenCalledWith('/test-endpoint')
  })

  it('should throw an error when the API call fails', async () => {
    const mockError = new Error('API Error')
    ;(api.get as Mock).mockRejectedValue(mockError)

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () => useSuspenseAPI(['test'], '/test-endpoint'),
      { wrapper },
    )

    try {
      await result.current
    } catch (error) {
      expect(error).toEqual(mockError)
    }
  })
})

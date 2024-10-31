import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import React from 'react'
import type { Mock } from 'vitest'
import { vi } from 'vitest'

import { useAutocompleteUserData } from './hooks/useAutocompleteUserData'
import { UserSearch } from './UserSearch'

vi.mock('./hooks/useAutocompleteUserData')
vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}))

describe('<UserSearch />', () => {
  const mockPush = vi.fn()
  const mockSetQuery = vi.fn()
  const mockSetShowSuggestions = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useRouter as Mock).mockReturnValue({ push: mockPush })
    ;(useAutocompleteUserData as Mock).mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      suggestions: [],
      isLoading: false,
      showSuggestions: false,
      setShowSuggestions: mockSetShowSuggestions,
    })
  })

  it('renders the search input', () => {
    render(<UserSearch />)
    expect(screen.getByPlaceholderText('Find users')).toBeInTheDocument()
  })

  it('updates query on input change', () => {
    render(<UserSearch />)
    const input = screen.getByPlaceholderText('Find users')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(mockSetQuery).toHaveBeenCalledWith('test')
    expect(mockSetShowSuggestions).toHaveBeenCalledWith(true)
  })

  it('displays suggestions when available and showSuggestions is true', () => {
    const suggestions = [
      {
        id: '1',
        avatarUrl: 'https://example.com/avatar1.jpg',
        username: 'user1',
      },
      {
        id: '2',
        avatarUrl: 'https://example.com/avatar2.jpg',
        username: 'user2',
      },
    ]
    ;(useAutocompleteUserData as Mock).mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      suggestions,
      isLoading: false,
      showSuggestions: true,
      setShowSuggestions: mockSetShowSuggestions,
    })

    render(<UserSearch />)
    expect(screen.getByText('user1')).toBeInTheDocument()
    expect(screen.getByText('user2')).toBeInTheDocument()
  })

  it('navigates to user page when a suggestion is clicked', async () => {
    const suggestions = [
      {
        id: '1',
        avatarUrl: 'https://example.com/avatar1.jpg',
        username: 'user1',
      },
    ]
    ;(useAutocompleteUserData as Mock).mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      suggestions,
      isLoading: false,
      showSuggestions: true,
      setShowSuggestions: mockSetShowSuggestions,
    })

    render(<UserSearch />)
    const suggestion = screen.getByText('user1')
    fireEvent.click(suggestion)

    await waitFor(() => {
      expect(mockSetQuery).toHaveBeenCalledWith('user1')
      expect(mockPush).toHaveBeenCalledWith('/user/user1')
      expect(mockSetShowSuggestions).toHaveBeenCalledWith(false)
    })
  })
})

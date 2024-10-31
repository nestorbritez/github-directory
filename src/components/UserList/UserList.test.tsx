import type {
  QueryObserverResult,
  UseSuspenseQueryResult,
} from '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { Users } from '@/lib/entities/User'

import { useUserListData } from './hooks/useUserListData'
import { UserList } from './UserList'

vi.mock('./hooks/useUserListData')

describe('<UserList />', () => {
  it('renders users correctly', async () => {
    vi.mocked(useUserListData).mockReturnValue({
      data: [
        {
          id: '1',
          username: 'user1',
          avatarUrl: 'https://example.com/avatar1.jpg',
          name: '',
          bio: null,
          company: null,
          location: null,
          blog: '',
          twitter: null,
          followers: 0,
          following: 0,
          publicRepos: 0,
          publicGists: 0,
        },
        {
          id: '2',
          username: 'user2',
          avatarUrl: 'https://example.com/avatar2.jpg',
          name: '',
          bio: null,
          company: null,
          location: null,
          blog: '',
          twitter: null,
          followers: 0,
          following: 0,
          publicRepos: 0,
          publicGists: 0,
        },
      ],
    } as UseSuspenseQueryResult<Users, Error>)

    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>,
    )

    expect(await screen.findByRole('link', { name: /user1/ })).toBeDefined()
    expect(await screen.findByRole('link', { name: /user2/ })).toBeDefined()
  })

  it('renders empty list when no users are returned', () => {
    vi.mocked(useUserListData).mockReturnValue({
      data: [],
      error: null,
      isError: false,
      isPending: false,
      isLoading: false,
      isLoadingError: false,
      isRefetchError: false,
      isSuccess: false,
      status: 'error',
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isInitialLoading: false,
      isPaused: false,
      isRefetching: false,
      isStale: false,
      refetch: function () // options?: RefetchOptions,
      : Promise<QueryObserverResult<Users, Error>> {
        throw new Error('Function not implemented.')
      },
      fetchStatus: 'fetching',
    })

    const { container } = render(<UserList />)

    expect(container.querySelector('.grid')).toBeEmptyDOMElement()
  })

  it('renders correct number of User components', () => {
    const mockUsers: Users = [
      {
        id: '1',
        username: 'user1',
        avatarUrl: 'https://example.com/avatar1.jpg',
        name: '',
        bio: null,
        company: null,
        location: null,
        blog: '',
        twitter: null,
        followers: 0,
        following: 0,
        publicRepos: 0,
        publicGists: 0,
      },
      {
        id: '2',
        username: 'user2',
        avatarUrl: 'https://example.com/avatar2.jpg',
        name: '',
        bio: null,
        company: null,
        location: null,
        blog: '',
        twitter: null,
        followers: 0,
        following: 0,
        publicRepos: 0,
        publicGists: 0,
      },
      {
        id: '3',
        username: 'user3',
        avatarUrl: 'https://example.com/avatar3.jpg',
        name: '',
        bio: null,
        company: null,
        location: null,
        blog: '',
        twitter: null,
        followers: 0,
        following: 0,
        publicRepos: 0,
        publicGists: 0,
      },
    ]

    vi.mocked(useUserListData).mockReturnValue({
      data: mockUsers,
    } as UseSuspenseQueryResult<Users, Error>)

    const { container } = render(<UserList />)

    const userComponents = container.querySelectorAll('.grid > *')
    expect(userComponents).toHaveLength(3)
  })
})

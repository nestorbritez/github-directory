import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

import UserStats from './UserStats'

describe('<UserStats />', () => {
  it('renders all stats correctly', () => {
    const props = {
      followers: 100,
      following: 50,
      publicRepos: 30,
      publicGists: 10,
    }

    render(<UserStats {...props} />)

    expect(screen.getByText('Followers')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()

    expect(screen.getByText('Following')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()

    expect(screen.getByText('Repositories')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()

    expect(screen.getByText('Gists')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('handles zero values correctly', () => {
    render(
      <UserStats followers={0} following={0} publicRepos={0} publicGists={0} />,
    )

    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('renders with large numbers', () => {
    render(
      <UserStats
        followers={1000000}
        following={500000}
        publicRepos={100000}
        publicGists={50000}
      />,
    )

    expect(screen.getByText('1000000')).toBeInTheDocument()
    expect(screen.getByText('500000')).toBeInTheDocument()
    expect(screen.getByText('100000')).toBeInTheDocument()
    expect(screen.getByText('50000')).toBeInTheDocument()
  })
})

import type {
  AutocompletedUser,
  GithubUser,
  GithubUserSearch,
  User,
} from './User'

describe('User types', () => {
  it('should create a valid User object', () => {
    const user: User = {
      id: '123',
      username: 'testuser',
      avatarUrl: 'https://example.com/avatar.jpg',
      name: 'Test User',
      bio: 'A test user',
      company: 'Test Company',
      location: 'Test Location',
      blog: 'https://testblog.com',
      twitter: '@testuser',
      followers: 100,
      following: 50,
      publicRepos: 10,
      publicGists: 5,
    }

    expect(user).toBeDefined()
    expect(user.id).toBe('123')
    expect(user.username).toBe('testuser')
    expect(user.avatarUrl).toBe('https://example.com/avatar.jpg')
  })

  it('should create a valid AutocompletedUser object', () => {
    const autocompletedUser: AutocompletedUser = {
      id: '456',
      username: 'autocompleteuser',
      avatarUrl: 'https://example.com/autocomplete-avatar.jpg',
    }

    expect(autocompletedUser).toBeDefined()
    expect(autocompletedUser.id).toBe('456')
    expect(autocompletedUser.username).toBe('autocompleteuser')
    expect(autocompletedUser.avatarUrl).toBe(
      'https://example.com/autocomplete-avatar.jpg',
    )
  })

  it('should create a valid GithubUser object', () => {
    const githubUser: GithubUser = {
      id: 789,
      login: 'githubuser',
      avatar_url: 'https://github.com/avatar.jpg',
      html_url: 'https://github.com/githubuser',
      name: 'GitHub User',
      company: 'GitHub Inc',
      blog: 'https://githubuser.com',
      location: 'San Francisco',
      email: 'githubuser@example.com',
      bio: 'A GitHub user',
      twitter_username: 'githubuser',
      public_repos: 20,
      public_gists: 5,
      followers: 1000,
      following: 500,
      created_at: '2020-01-01T00:00:00Z',
      updated_at: '2023-01-01T00:00:00Z',
    }

    expect(githubUser).toBeDefined()
    expect(githubUser.id).toBe(789)
    expect(githubUser.login).toBe('githubuser')
    expect(githubUser.avatar_url).toBe('https://github.com/avatar.jpg')
  })

  it('should create a valid GithubUserSearch object', () => {
    const githubUserSearch: GithubUserSearch = {
      total_count: 1,
      incomplete_results: false,
      items: [
        {
          id: 101,
          login: 'searchuser',
          avatar_url: 'https://github.com/searchuser-avatar.jpg',
          html_url: 'https://github.com/searchuser',
          name: 'Search User',
          company: null,
          blog: '',
          location: null,
          email: null,
          bio: null,
          twitter_username: null,
          public_repos: 5,
          public_gists: 0,
          followers: 10,
          following: 20,
          created_at: '2021-01-01T00:00:00Z',
          updated_at: '2023-01-01T00:00:00Z',
        },
      ],
    }

    expect(githubUserSearch).toBeDefined()
    expect(githubUserSearch.total_count).toBe(1)
    expect(githubUserSearch.incomplete_results).toBe(false)
    expect(githubUserSearch.items).toHaveLength(1)
    expect(githubUserSearch.items[0].login).toBe('searchuser')
  })
})

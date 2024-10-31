type User = {
  id: string
  username: string
  avatarUrl: string
  name: string
  bio: string | null
  company: string | null
  location: string | null
  blog: string
  twitter: string | null
  followers: number
  following: number
  publicRepos: number
  publicGists: number
}

type Users = User[]

type AutocompletedUser = Pick<User, 'id' | 'username' | 'avatarUrl'>

type GithubUser = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  blog: string
  location: string | null
  email: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

type GithubUserSearch = {
  total_count: number
  incomplete_results: boolean
  items: GithubUser[]
}

export { AutocompletedUser, GithubUser, GithubUserSearch, User, Users }

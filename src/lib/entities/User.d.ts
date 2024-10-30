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
}

type Users = User[]

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

export { GithubUser, User, Users }

import type { GithubUser, User } from '@/lib/entities/User'

const transformUser = (user: GithubUser): User => ({
  id: user.id.toString(),
  username: user.login,
  avatarUrl: user.avatar_url,
  blog: user.blog,
  company: user.company,
  location: user.location,
  name: user.name,
  bio: user.bio,
  twitter: user.twitter_username,
  followers: user.followers,
  following: user.following,
  publicRepos: user.public_repos,
  publicGists: user.public_gists,
})

export { transformUser }

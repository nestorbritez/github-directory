import type { FC } from 'react'

import { User } from '@/components/User'

const ROWS = [...Array(30).keys()].map((i) => ({
  id: ++i,
  login: 'mojombo_' + i,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mojombo',
  html_url: 'https://github.com/mojombo',
  followers_url: 'https://api.github.com/users/mojombo/followers',
  following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
  gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
  organizations_url: 'https://api.github.com/users/mojombo/orgs',
  repos_url: 'https://api.github.com/users/mojombo/repos',
  events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mojombo/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
}))

const UserList: FC = () => {
  return (
    <>
      {ROWS.map(({ id, login, avatar_url: avatarUrl }) => (
        <User key={id} id={id} name={login} avatarUrl={avatarUrl} />
      ))}
    </>
  )
}

export { UserList }

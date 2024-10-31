import type { NextApiRequest, NextApiResponse } from 'next'

import type { GithubUserSearch, User, Users } from '@/lib/entities/User'
import { github } from '@/lib/utils/network'

const getAutocomplete = (q: string) =>
  github
    .get<
      Users,
      GithubUserSearch
    >(`/search/users`, { params: { per_page: 5, q } })
    .then((result) =>
      result.items.map((user) => ({
        avatarUrl: user.avatar_url,
        username: user.login,
        id: user.id.toString(),
      })),
    )

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Pick<User, 'id' | 'username' | 'avatarUrl'>[]>,
) => {
  res.status(200).json(await getAutocomplete(req.query.q as string))
}

export default handler

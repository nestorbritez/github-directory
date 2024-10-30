import type { NextApiRequest, NextApiResponse } from 'next'

import type { GithubUser, User, Users } from '@/lib/entities/User'
import { github } from '@/lib/utils/network'
import { transformUser } from '@/lib/utils/transform'

const getUser = (username: string) =>
  github.get<User, GithubUser>(`/users/${username}`).then(transformUser)

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<User | Users>,
) => {
  const data = await getUser(req.query.username as string)
  res.status(200).json(data)
}

export default handler

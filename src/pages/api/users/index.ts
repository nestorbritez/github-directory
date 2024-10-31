import type { NextApiRequest, NextApiResponse } from 'next'

import type { GithubUser, User, Users } from '@/lib/entities/User'
import { github } from '@/lib/utils/network'
import { transformUser } from '@/lib/utils/transform'

const getUserList = () =>
  github
    .get<Users, GithubUser[]>(`/users`, { params: { per_page: 99 } })
    .then((users) => users.map(transformUser))

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<User | Users>,
) => {
  res.status(200).json(await getUserList())
}

export default handler

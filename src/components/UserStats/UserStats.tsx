import { Book, FileCode, Users } from 'lucide-react'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import type { User } from '@/lib/entities/User'

const Stats = tw.div`mt-4 grid grid-cols-2 gap-4 md:grid-cols-4`
const Stat = tw.div`flex items-center gap-2`
const Label = tw.p`text-sm text-neutral-500`
const Count = tw.p`font-semibold`

type UserStatsProps = Pick<
  User,
  'followers' | 'following' | 'publicRepos' | 'publicGists'
>

const UserStats: FC<UserStatsProps> = ({
  followers,
  following,
  publicRepos,
  publicGists,
}) => {
  const stats = [
    {
      label: 'Followers',
      count: followers,
      Icon: Users,
      colorClass: 'text-blue-500',
    },
    {
      label: 'Following',
      count: following,
      Icon: Users,
      colorClass: 'text-green-500',
    },
    {
      label: 'Repositories',
      count: publicRepos,
      Icon: Book,
      colorClass: 'text-purple-500',
    },
    {
      label: 'Gists',
      count: publicGists,
      Icon: FileCode,
      colorClass: 'text-orange-500',
    },
  ]

  return (
    <Stats>
      {stats.map(({ Icon, colorClass, label, count }) => (
        <Stat key={label}>
          <Icon className={`size-5 ${colorClass}`} />
          <div>
            <Label>{label}</Label>
            <Count>{count}</Count>
          </div>
        </Stat>
      ))}
    </Stats>
  )
}

export default UserStats

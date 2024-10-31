import Image from 'next/image'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import type { User } from '@/lib/entities/User'
import { Link } from '@/lib/ui/Link'
import { Card } from '@/lib/ui/Structure'

const Content = tw.span`
  flex flex-col items-start justify-center text-xl`

const Avatar = tw(Image)`
  flex aspect-square size-[120px] justify-center border-r dark:border-neutral-800`

const Label = tw.span`
  text-sm text-neutral-500`

const User: FC<User> = ({ id, username, avatarUrl }) => {
  return (
    <Card>
      <Avatar src={avatarUrl} width={120} height={120} alt={username} />
      <Content>
        <Label>#{id}</Label>
        <Link href={`/user/${username}`}>@{username}</Link>
      </Content>
    </Card>
  )
}

export { User }

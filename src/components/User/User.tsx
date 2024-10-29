import Image from 'next/image'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import { Grid } from '@/lib/ui/Structure'

const StyledGrid = tw(Grid)`
  my-4 grid-cols-[80px_auto]
  items-center bg-[var(--bg-card)]
  shadow-md`

const Avatar = tw(Image)`
  flex justify-center`

const UserLink = tw.a`
  flex flex-col
  py-2`

const Label = tw.span`
  text-sm text-neutral-500`

const Name = tw.span``

type UserProps = {
  id: number
  avatarUrl: string
  name: string
}

const User: FC<UserProps> = ({ id, name, avatarUrl }) => {
  const link = `/user/${id}`

  return (
    <StyledGrid $as="section">
      <Avatar src={avatarUrl} width={80} height={80} alt={name} />
      <UserLink href={link}>
        <Label>Github</Label>
        <Name role="heading" aria-level={1}>
          @{name}
        </Name>
      </UserLink>
    </StyledGrid>
  )
}

export { User }

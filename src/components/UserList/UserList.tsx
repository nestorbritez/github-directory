'use client'

import type { FC } from 'react'
import { Suspense } from 'react'
import tw from 'tailwind-styled-components'

import { User } from '@/components/User'
import { Grid } from '@/lib/ui/Structure'

import { useUserListData } from './hooks/useUserListData'

const StyledGrid = tw(Grid)`
  grid-cols-1 lg:grid-cols-3`

const UserList: FC = () => {
  const { data: users } = useUserListData()

  return (
    <StyledGrid>
      <Suspense fallback={<div>Loading...</div>}>
        {users.map(({ ...props }) => (
          <User key={props.id} {...props} />
        ))}
      </Suspense>
    </StyledGrid>
  )
}

export { UserList }

'use client'

import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import { QuerySuspense } from '@/components/QuerySuspense'
import { User } from '@/components/User'
import { Grid } from '@/lib/ui/Structure'

import { useUserListData } from './hooks/useUserListData'

const StyledGrid = tw(Grid)`
  grid-cols-1 lg:grid-cols-3`

const UserList: FC = () => {
  const { data: users, isLoading } = useUserListData()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <QuerySuspense>
      <StyledGrid>
        {users?.map?.(({ ...props }) => <User key={props.id} {...props} />)}
      </StyledGrid>
    </QuerySuspense>
  )
}

export { UserList }

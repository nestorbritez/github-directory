import { FavoriteList } from '@/components/FavoriteList'
import { UserList } from '@/components/UserList'
import { H1 } from '@/lib/ui/Headings'
import { Main } from '@/lib/ui/Structure'

export default function UserListPage() {
  return (
    <Main>
      <H1>Users</H1>
      <FavoriteList />
      <UserList />
    </Main>
  )
}

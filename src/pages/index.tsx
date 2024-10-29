import { Header } from '@/components/Header'
import { UserList } from '@/components/UserList'
import { Container, Wrapper } from '@/lib/ui/Structure'

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <UserList />
      </Container>
    </Wrapper>
  )
}

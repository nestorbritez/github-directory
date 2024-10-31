import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { UserSearch } from '@/components/UserSearch'
import { Container, Wrapper } from '@/lib/ui/Structure'

const StyledLink = tw(Link)`flex items-center gap-2`

const Logo = tw(GithubIcon)`size-8`

const StyledWrapper = tw(Wrapper)`
  sticky top-0 z-10
  bg-gradient-to-r from-fuchsia-100 to-indigo-100
  py-4 shadow
  dark:from-fuchsia-500 dark:to-indigo-500`

const StyledContainer = tw(Container)`
  flex flex-row items-center justify-between gap-2`

const Actions = tw.div`
  flex gap-3`

export const Header: FC = () => {
  return (
    <StyledWrapper $as="header">
      <StyledContainer>
        <StyledLink href="/">
          <Logo /> Github Directory
        </StyledLink>

        <UserSearch />

        <Actions>
          <ThemeSwitcher />
        </Actions>
      </StyledContainer>
    </StyledWrapper>
  )
}

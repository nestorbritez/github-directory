import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { UserSearch } from '@/components/UserSearch'
import { Container, Wrapper } from '@/lib/ui/Structure'

const LOGO_URL = '/vercel.svg'

const Logo = tw(Image)`
  min-w-[40px] contrast-0`

const StyledWrapper = tw(Wrapper)`
  sticky top-0 z-10
  bg-white py-4 shadow
  dark:bg-black`

const StyledContainer = tw(Container)`
  flex flex-row items-center justify-between gap-2`

const Actions = tw.div`
  flex gap-3`

export const Header: FC = () => {
  return (
    <StyledWrapper $as="header">
      <StyledContainer>
        <Link href="/">
          <Logo src={LOGO_URL} alt="Github Logo" width={40} height={40} />
        </Link>

        <UserSearch />

        <Actions>
          <ThemeSwitcher />
        </Actions>
      </StyledContainer>
    </StyledWrapper>
  )
}

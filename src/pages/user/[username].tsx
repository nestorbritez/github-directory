import { Building2, LinkIcon, MapPin, Twitter } from 'lucide-react'
import type { GetServerSidePropsContext } from 'next'
import type { FC } from 'react'
import tw from 'tailwind-styled-components'

import { FavoriteButton } from '@/components/FavoriteButton'
import { useFavorites } from '@/components/FavoriteList/hooks/useFavorites'
import UserStats from '@/components/UserStats/UserStats'
import type { User } from '@/lib/entities/User'
import { H1 } from '@/lib/ui/Headings'
import { Link } from '@/lib/ui/Link'
import { Card, Grid, Main } from '@/lib/ui/Structure'
import { api } from '@/lib/utils/network'

type UserPageProps = {
  user: User
  error?: string
}

export const Content = tw(Grid)`
  m-8
  md:grid-cols-[auto_1fr]`

export const Avatar = tw.img`
  size-32 rounded-full shadow-lg ring-4 ring-white dark:ring-neutral-800`

export const Info = tw(Grid)`
  gap-0`

export const Headline = tw(Grid)`
  gap-1`

export const Name = tw(H1)``

export const Username = tw(Link)`
  max-w-max text-xl`

export const Bio = tw.p`
  text-neutral-500`

export const Details = tw.div`
  m-4 grid grid-cols-1 gap-2`

export const DetailItem = tw.div`
  flex items-center gap-2`

const UserPage: FC<UserPageProps> = ({ user, error }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  if (error) {
    return <Main>{error}</Main>
  }

  const {
    id,
    avatarUrl,
    bio,
    company,
    location,
    name,
    username,
    blog,
    twitter,
    following,
    followers,
    publicRepos,
    publicGists,
  } = user

  const isFavoriteUser = isFavorite(username)

  const handleFavoriteClick = () => {
    if (isFavoriteUser) {
      removeFavorite(username)
    } else {
      addFavorite(user)
    }
  }

  return (
    <Main>
      <H1>
        <Link href="/">Users</Link> / Details
      </H1>
      <Card className="mx-auto max-w-screen-md">
        <Content>
          <Avatar src={avatarUrl} alt={`${name}'s avatar`} />
          <Info>
            <Headline>
              <small>User # {new Intl.NumberFormat().format(Number(id))}</small>
              <span className="flex gap-3">
                <Name>{name}</Name>
                <FavoriteButton
                  isFavorite={isFavoriteUser}
                  onClick={handleFavoriteClick}
                />
              </span>
              <Username
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{username}
              </Username>
              {bio && <Bio>{bio}</Bio>}
            </Headline>

            <Details>
              {company && (
                <DetailItem>
                  <Building2 className="size-5" />
                  <span>{company}</span>
                </DetailItem>
              )}
              {location && (
                <DetailItem>
                  <MapPin className="size-5" />
                  <span>{location}</span>
                </DetailItem>
              )}
              {blog && (
                <DetailItem>
                  <LinkIcon className="size-5" />
                  <Link
                    href={blog.startsWith('http') ? blog : `https://${blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog}
                  </Link>
                </DetailItem>
              )}
              {twitter && (
                <DetailItem>
                  <Twitter className="size-5" />
                  <Link
                    href={`https://x.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{twitter}
                  </Link>
                </DetailItem>
              )}
            </Details>
            <UserStats
              followers={followers}
              following={following}
              publicGists={publicGists}
              publicRepos={publicRepos}
            />
          </Info>
        </Content>
      </Card>
    </Main>
  )
}

const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const { username } = context.query
    const user = await api.get<User, User>(`/users/${username}`)

    return {
      props: {
        user,
      },
    }
  } catch (error) {
    return {
      props: {
        user: null,
        error: error instanceof Error ? error.message : 'Failed to fetch user',
      },
    }
  }
}

export default UserPage
export { getServerSideProps }

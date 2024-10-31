import { Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import tw from 'tailwind-styled-components'

import { Button } from '@/lib/ui/Button'
import { H1 } from '@/lib/ui/Headings'
import { Card } from '@/lib/ui/Structure'

import { useFavorites } from './hooks/useFavorites'

const Wrapper = tw.div`
  overflow-scroll transition-all duration-500 ease-in`

const Section = tw(Card)`
  flex flex-col items-start gap-6 p-6`

const Title = tw(H1)`
  flex flex-row items-center gap-2 text-lg`

const StyledList = tw.div`flex flex-wrap gap-3`

const FavoriteItem = tw(Button)`
  flex items-center gap-3`

const FavoriteList = () => {
  const router = useRouter()
  const { favorites } = useFavorites()

  return (
    <Wrapper
      className={`${favorites.length > 0 ? 'max-h-lvh' : 'invisible max-h-0'}`}
    >
      <Section $as="section">
        <Title>
          <Star />
          Favorites
        </Title>
        <StyledList>
          {favorites.map((favorite) => (
            <FavoriteItem
              $intent="neutro"
              key={favorite.username}
              onClick={() => router.push(`/user/${favorite.username}`)}
            >
              <Image
                src={favorite.avatarUrl}
                alt={favorite.username}
                className="size-8 rounded-full"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">
                  @{favorite.username}
                </span>
              </div>
            </FavoriteItem>
          ))}
        </StyledList>
      </Section>
    </Wrapper>
  )
}

export { FavoriteList }

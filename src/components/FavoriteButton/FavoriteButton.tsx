import { Star, StarOff } from 'lucide-react'
import type { FC } from 'react'
import React from 'react'
import tw from 'tailwind-styled-components'

import { Button } from '@/lib/ui/Button'

interface FavoriteButtonProps {
  isFavorite: boolean
  onClick: () => void
}

const StyledStar = tw(Star)`size-6 fill-yellow-500 text-yellow-500`
const StyledStarOff = tw(StarOff)`size-6 text-gray-400 hover:text-yellow-500`

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  isFavorite,
  onClick,
}) => (
  <Button
    $size="icon"
    $intent="ghost"
    onClick={onClick}
    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
  >
    {isFavorite ? <StyledStar /> : <StyledStarOff />}
  </Button>
)

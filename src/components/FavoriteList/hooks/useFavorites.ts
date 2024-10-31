import { useEffect, useState } from 'react'

import type { User } from '@/lib/entities/User'

const STORAGE_KEY = 'github-favorites'

type FavoriteUser = Pick<User, 'username' | 'avatarUrl'>

const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteUser[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const addFavorite = (user: User) => {
    const newFavorite = {
      username: user.username,
      avatarUrl: user.avatarUrl,
    }

    setFavorites((prev) => {
      const updated = [...prev, newFavorite]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const removeFavorite = (targetUsername: User['username']) => {
    setFavorites((prev) => {
      const updated = prev.filter(({ username }) => username !== targetUsername)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const isFavorite = (targetUsername: string) => {
    return favorites.some(({ username }) => username === targetUsername)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }
}

export { useFavorites }

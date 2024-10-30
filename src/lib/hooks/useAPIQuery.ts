'use client'

import type { QueryKey } from '@tanstack/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'

import { api } from '@/lib/utils/network'

const useAPIQuery = <T>(queryKey: QueryKey, endpoint: string) => {
  const { data, error, isFetching } = useSuspenseQuery<T>({
    queryKey,
    queryFn: () => api.get(endpoint),
  })

  if (error && !isFetching) {
    throw error
  }

  return data
}

export { useAPIQuery }

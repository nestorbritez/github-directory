'use client'

import type { QueryKey, UseSuspenseQueryOptions } from '@tanstack/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'

import { api } from '@/lib/utils/network'

const useSuspenseAPI = <T>(
  queryKey: QueryKey,
  endpoint: string,
  options?: Partial<UseSuspenseQueryOptions<T, Error>>,
) => {
  const response = useSuspenseQuery<T>({
    queryKey,
    queryFn: () => api.get(endpoint),
    ...options,
  })

  if (response.error && !response.isFetching) {
    throw response.error
  }

  return response
}

export { useSuspenseAPI }

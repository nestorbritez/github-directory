import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import type { AutocompletedUser } from '@/lib/entities/User'
import { useDebounce } from '@/lib/hooks/useDebounce'
import { api } from '@/lib/utils/network'

const useAutocompleteUserData = () => {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debouncedQuery = useDebounce(query, 300)

  const { data: suggestions = [], isLoading } = useQuery<AutocompletedUser[]>({
    queryKey: ['userSearch', debouncedQuery],
    queryFn: () =>
      api.get('/users/autocomplete', {
        params: {
          q: debouncedQuery,
        },
      }),
    enabled: debouncedQuery.length >= 2,
  })

  return {
    query,
    setQuery,
    suggestions,
    isLoading,
    showSuggestions,
    setShowSuggestions,
  }
}

export { useAutocompleteUserData }

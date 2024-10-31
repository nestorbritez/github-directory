import { Loader2, Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC, FormEvent } from 'react'
import { useEffect } from 'react'
import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'

import { Input } from '@/lib/ui/Form'
import { Card } from '@/lib/ui/Structure'

import { useAutocompleteUserData } from './hooks/useAutocompleteUserData'

const Wrapper = tw.div`
  relative w-full max-w-md`

const UserList = tw(Card)`
  absolute z-10 w-full translate-y-1
  flex-col gap-0 overflow-auto rounded border shadow-md
  dark:border-neutral-800`

const UserDetails = tw.button`
  flex w-full items-center gap-3 px-4 py-2
  text-left transition-colors
  hover:bg-purple-50
  dark:hover:bg-purple-700`

const StyledInput = tw(Input)`
  w-full pl-10`

const UserSearch: FC = () => {
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const {
    query,
    setQuery,
    suggestions,
    isLoading,
    showSuggestions,
    setShowSuggestions,
  } = useAutocompleteUserData()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setShowSuggestions])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/user/${query.trim()}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = async (suggestion: string) => {
    setQuery(suggestion)
    await router.push(`/user/${suggestion}`)
    setShowSuggestions(false)
  }

  return (
    <Wrapper ref={wrapperRef}>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div className="relative w-full">
            <StyledInput
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Find users"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {isLoading ? (
                <Loader2 className="size-5 animate-spin text-neutral-400" />
              ) : (
                <Search className="size-5 text-neutral-400" />
              )}
            </div>
          </div>
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <UserList>
          {suggestions.map(({ id, avatarUrl, username }) => (
            <UserDetails
              key={id}
              onClick={() => handleSuggestionClick(username)}
            >
              <Image
                src={avatarUrl}
                alt={username}
                className="rounded-full"
                width={32}
                height={32}
              />
              <span>{username}</span>
            </UserDetails>
          ))}
        </UserList>
      )}
    </Wrapper>
  )
}

export { UserSearch }

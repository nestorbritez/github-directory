import { useRouter } from 'next/router'
import React, { useState } from 'react'
import tw from 'tailwind-styled-components'

import { Button } from '@/lib/ui/Button'
import { Input } from '@/lib/ui/Form'

const Form = tw.form`
  flex w-full max-w-md gap-2`

const UserSearch = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      router.push(`/user/${username.trim()}`)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Github username"
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}

export { UserSearch }

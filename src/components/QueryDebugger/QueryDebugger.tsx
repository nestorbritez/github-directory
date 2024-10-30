import { useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

const ReactQueryDevtools = dynamic(
  () =>
    import('@tanstack/react-query-devtools').then(
      (mod) => mod.ReactQueryDevtools,
    ),
  { ssr: false },
)

const QueryDebugger: FC = () => {
  const [isClient, setIsClient] = useState(false)
  const queryClient = useQueryClient()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <ReactQueryDevtools client={queryClient} /> : undefined
}

export default QueryDebugger

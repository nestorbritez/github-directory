import { QueryErrorResetBoundary } from '@tanstack/react-query'
import type { FC, ReactNode } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import tw from 'tailwind-styled-components'

import { Button } from '@/lib/ui/Button'

const Content = tw.div`flex flex-col items-center gap-4 p-10`

type Props = {
  children: ReactNode
}

const ErrorBoundary: FC<Props> = ({ children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Content>
              There was an error!{' '}
              <Button onClick={() => resetErrorBoundary()}>Try again</Button>
              <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            </Content>
          )}
          onReset={reset}
        >
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export { ErrorBoundary }

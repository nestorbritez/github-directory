import { QueryErrorResetBoundary } from '@tanstack/react-query'
import type { FC, ReactNode } from 'react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Button } from '@/lib/ui/Button'

type Props = {
  children: ReactNode
}

const QuerySuspense: FC<Props> = ({ children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              There was an error!{' '}
              <Button onClick={() => resetErrorBoundary()}>Try again</Button>
              <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            </div>
          )}
          onReset={reset}
        >
          <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export { QuerySuspense }

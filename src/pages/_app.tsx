import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Header } from '@/components/Header'
import QueryDebugger from '@/components/QueryDebugger/QueryDebugger'
import { Container, Wrapper } from '@/lib/ui/Structure'

// TODO: Persist queries to localStorage
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60,
      staleTime: 1000 * 60,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Wrapper>
            <Header />
            <Container>
              <Component {...pageProps} />
            </Container>
          </Wrapper>

          <QueryDebugger />
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

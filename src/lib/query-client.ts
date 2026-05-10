import { QueryClient } from '@tanstack/react-query'

/**
 * Client TanStack Query unique pour toute l’app.
 * staleTime par défaut : données catalogue typiquement « fresh » 1 min côté UX premium.
 */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}

import { QueryClient } from '@tanstack/react-query';

export const query_client = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: 300000, refetchOnWindowFocus: false, staleTime: 300000, retry: 1, useErrorBoundary: true },
  },
});

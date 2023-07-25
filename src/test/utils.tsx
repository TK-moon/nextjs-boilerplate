import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const query_client = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: 300000, refetchOnWindowFocus: false, staleTime: 300000, retry: false },
  },
});

/**
 * @NOTE
 * Storybook decorator가 동작하지 않아 따로 제작
 */
export const QueryClientWrapper = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={query_client}>{children}</QueryClientProvider>;
};

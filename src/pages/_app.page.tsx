import useAwaitMSWinit from '@/hooks/useAwaitMSW';
import GlobalStyle from '@/styles/GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { query_client as singleton_query_client } from '@/api/query_client';

export default function App({ Component, pageProps }: AppProps) {
  const { msw_load_complete } = useAwaitMSWinit();
  const [query_client] = useState(() => singleton_query_client);

  if (!msw_load_complete) {
    return null;
  }

  return (
    <>
        <GlobalStyle />
        <QueryClientProvider client={query_client}>
          <Component {...pageProps} />
        </QueryClientProvider>
    </>
  );
}

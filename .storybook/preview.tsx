import React from 'react';
import GlobalStyle from '../src/styles/GlobalStyle';
import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClientProvider } from '@tanstack/react-query';
import { query_client } from '../src/test/utils';

// Initialize MSW
initialize();

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

type Decorator = NonNullable<Preview['decorators']>[number];

export const queryClientDecorator: Decorator = (Story) => {
  return (
    <QueryClientProvider client={query_client}>
      <Story />
    </QueryClientProvider>
  );
};

const globalStoryDecorator: Decorator = (Story) => {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  );
};

const decorators: Preview['decorators'] = [mswDecorator, queryClientDecorator, globalStoryDecorator];

export { decorators };

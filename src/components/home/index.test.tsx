import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import { ComponentProps } from 'react';

describe('Home/HomeMain', () => {
  const { Template } = composeStories(stories);
  const setup = (props?: ComponentProps<typeof Template>) => render(<Template {...props} />, {});
});

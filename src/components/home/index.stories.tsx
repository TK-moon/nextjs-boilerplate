import type { Meta, StoryObj } from '@storybook/react';

import HomeMain from './index';

const meta: Meta<typeof HomeMain> = {
  title: 'Home/HomeMain',
  component: HomeMain,
  excludeStories: /.__./,
};

export default meta;
type Story = StoryObj<typeof HomeMain>;

export const Template: Story = {};

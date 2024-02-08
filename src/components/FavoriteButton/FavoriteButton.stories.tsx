import { withRouter } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';
import FavoriteButton from './FavoriteButton';
import { withLoggedInUser } from '../../../.storybook/decorators/userDecorators';

const meta: Meta<typeof FavoriteButton> = {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  decorators: [withRouter, withLoggedInUser],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isLoading: false, isFavorite: false, toggleFavorite: () => {} },
};

export const Liked: Story = {
  args: { isLoading: false, isFavorite: true, toggleFavorite: () => {} },
};

export default meta;

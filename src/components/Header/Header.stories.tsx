import { withRouter } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { ThemeProvider } from '../../contexts/themeContext';
import {
  withLoggedInUser,
  withLoggedOutUser,
} from '../../../.storybook/decorators/userDecorators';
import '../../styles/index.css';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    withLoggedInUser,
  ],
};

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {
  decorators: [withLoggedOutUser],
};

export default meta;

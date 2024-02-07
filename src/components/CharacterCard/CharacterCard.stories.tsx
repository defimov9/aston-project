import { withRouter } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/index.css';
import { withLoggedInUser } from '../../../.storybook/decorators/userDecorators';
import CharacterCard from './CharacterCard';

const mockCharacter = {
  id: '361',
  name: 'Toxic Rick',
  status: 'Dead',
  species: 'Humanoid',
  type: "Rick's Toxic Side",
  gender: 'Male',
  origin: {
    name: 'Alien Spa',
    url: 'https://rickandmortyapi.com/api/location/64',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/27'],
  url: 'https://rickandmortyapi.com/api/character/361',
  created: '2018-01-10T18:20:41.703Z',
};

const meta: Meta<typeof CharacterCard> = {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  decorators: [withRouter, withLoggedInUser],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: mockCharacter,
  },
};

export const Liked: Story = {
  args: {
    character: mockCharacter,
    isFavorite: true,
  },
};

export default meta;

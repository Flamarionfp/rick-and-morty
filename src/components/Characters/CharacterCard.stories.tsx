import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CharacterCard } from './CharacterCard';

export default {
  title: 'mainComponents/CharacterCard',
  component: CharacterCard,
} as ComponentMeta<typeof CharacterCard>;

const Template: ComponentStory<typeof CharacterCard> = (args) => <CharacterCard {...args} />;

export const _CharacterCard = Template.bind({});

_CharacterCard.args = {
  name: 'Rick',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  species: 'Human',
  status: 'Alive',
  gender: 'Male'
};
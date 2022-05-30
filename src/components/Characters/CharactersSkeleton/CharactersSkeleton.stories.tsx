import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CharactersSkeleton } from './CharactersSkeleton';

export default {
  title: 'mainComponents/CharactersSkeleton',
  component: CharactersSkeleton,
} as ComponentMeta<typeof CharactersSkeleton>;

const Template: ComponentStory<typeof CharactersSkeleton> = (args) => <CharactersSkeleton {...args} />;

export const _CharacterCard = Template.bind({});

_CharacterCard.args = {

};
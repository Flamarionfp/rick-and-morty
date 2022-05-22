import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'mainComponents/CharacterCard',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const _Header = Template.bind({});

_Header.args = {
  isLogoVisible: true,
  isSearchInputVisible: true,
};
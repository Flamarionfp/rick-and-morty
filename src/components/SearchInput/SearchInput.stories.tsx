import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from './SearchInput';

export default {
  title: 'components/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const _SearchInput = Template.bind({});

_SearchInput.args = {};
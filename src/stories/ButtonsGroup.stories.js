import React from 'react';

import { ButtonsGroup } from './ButtonsGroup';
import * as YourComponentStories from './YourComponent.stories';

export default {
  title: 'ButtonsGroup',
  component: ButtonsGroup,
};

const Template = (args) => <ButtonsGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [ ...YourComponentStories.Primary.args, ...YourComponentStories.Secondary.args ],
  orientation: 'horizontal',
}
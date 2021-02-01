import React from 'react';

import { YourComponent } from './YourComponent';

export default {
  title: 'YourComponent',
  component: YourComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <YourComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'YourComponent',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'YourComponent',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'YourComponent',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'YourComponent',
};

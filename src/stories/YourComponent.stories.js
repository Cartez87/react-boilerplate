import React from 'react';

import { YourComponent } from './YourComponent';

export default {
  title: 'YourComponent',
  component: YourComponent,
  decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
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
Secondary.parameters = {
  backgrounds: {
    values: [
       { name: 'RED', value: '#f00', },
       { name: 'grEEn', value: '#0f0', },
       { name: 'blue', value: '#00f', },
    ]
  }
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

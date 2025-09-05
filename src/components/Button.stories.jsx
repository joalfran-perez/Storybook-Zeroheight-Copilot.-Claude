import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'object',
    },
    rightIcon: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
    size: 'medium',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Button',
    size: 'medium',
  },
};

export const Small = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const Large = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};

export const Disabled = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

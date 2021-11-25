import Button from '../Button'

export default {
  component: Button,
  title: 'Global/Button',
  argTypes: {

    label: {
      option: String,
      control: 'text',
    },

    styling: {
      options: ['btn__primary'],
      control: { type: 'select' }
    },

    icon: {
      options: ['Disable', 'Enable'],
      control: { type: 'select' }
    }

  }
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click this button',
  styling: 'btn__primary',
  icon: 'Disable',
};
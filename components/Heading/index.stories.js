import Heading from '../Heading'

export default {
  component: Heading,
  title: 'Global/Heading',
  argTypes: {

    title: {
      option: String,
      control: 'text',
    },

    styling: {
      options: ['Default', 'Shadow', 'Distortion'],
      control: { type: 'select' }
    }

  }
}

const Template = (args, { argTypes }) => ({
  components: { Heading },
  props: Object.keys(argTypes),
  template: '<Heading v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'This is a sample heading',
  styling: 'Default',
};
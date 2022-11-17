import MainButton from "../components/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: MainButton,
  argTypes: { handleClick: { action: "Button Clicked" } },
};

const Template = args => <MainButton {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Click Here",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  ...Red.args,
  backgroundColor: "blue",
  label: "😄👍😍💯",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  backgroundColor: "red",
  label: "Click Here",
  size: "sm",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  backgroundColor: "red",
  label: "Click Here",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Button with Long Label",
  size: "md",
};

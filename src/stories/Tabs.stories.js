import React from "react";
import Tabs from "../components/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = args => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <div label="One">Tab One</div>,
    <div label="Two">Tab Two</div>,
    <div label="Three">Tab Three</div>,
  ],
};

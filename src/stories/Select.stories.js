import React from "react";
import Select from "../components/Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "medium",
  label: "Select an Option",
  options: [
    { value: "material", description: "Material UI" },
    { value: "bootstrap", description: "Bootstrap" },
    { value: "bulma", description: "Bulma" },
  ],
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
  label: "Select an Option",
  options: [
    { value: "material", description: "Material UI" },
    { value: "bootstrap", description: "Bootstrap" },
    { value: "bulma", description: "Bulma" },
  ],
};

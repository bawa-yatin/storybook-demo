import CustomCard from "../components/Card";

export default {
  title: "Components/Card",
  component: CustomCard,
};

const Template = args => <CustomCard {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
  tag: "nature",
  targetlabel: "Learn More",
};

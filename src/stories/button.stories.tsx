import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  children: "click",
};

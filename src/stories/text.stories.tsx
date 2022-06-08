import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../components";

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  children: "Null-Palette",
};

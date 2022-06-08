import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "../components";

export default {
  title: "Example/Link",
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>{args.children}</Link>
);

export const Primary = Template.bind({});
Primary.args = {
  to: "#",
  children: "Click Me!",
  targetNewTab: false
};

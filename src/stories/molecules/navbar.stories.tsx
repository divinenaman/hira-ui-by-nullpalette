import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavBar, Link } from "../../components";

export default {
  title: "Example/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args}>
    <Link to={"#"}>link 1</Link>
    <Link to={"#"}>link 2</Link>
  </NavBar>
);

export const Primary = Template.bind({});
Primary.args = {
  width: "100%",
  height: 300,
  brandingSection: "Branding",
  style: { backgroundColor: "black", color: "white" },
  menuPosition: "left",
  menuColor: "white",
  menuSize: 24,
  showHelperBoundaries: true,
};

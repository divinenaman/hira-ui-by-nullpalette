import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer, FooterLinkColumn, Link } from "../components";

export default {
  title: "Example/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <FooterLinkColumn title={"col-1"}>
      <Link to={"#"}>link 1</Link>

      <Link to={"#"}>link 2</Link>
    </FooterLinkColumn>
    <FooterLinkColumn title={"col-2"}>
      <Link to={"#"}>link 1</Link>

      <Link to={"#"}>link 2</Link>
    </FooterLinkColumn>
    <FooterLinkColumn title={"col-3"}>
      <Link to={"#"}>link 1</Link>

      <Link to={"#"}>link 2</Link>
    </FooterLinkColumn>
  </Footer>
);

export const Primary = Template.bind({});
Primary.args = {
  width: "100%",
  height: 300,
  brandingSection: "Branding",
  copyrightSection: "copyright 2021",
  numOfLinkColumns: 2,
  style: { backgroundColor: "black", color: "white" },
  showHelperBoundaries: true,
};

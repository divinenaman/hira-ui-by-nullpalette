import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Overlay } from "../../components";

export default {
  title: "Example/Overlay",
  component: Overlay,
  argTypes: {
    overlayBackgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>{args.children}</Overlay>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Image",
  displayType: "hover",
  slide: "bottom",
  overlayBackgroundColor:
    "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 38%, rgba(0,212,255,0.5526315789473684) 100%)",
  className: "",
  style: { width: "min-content", height: "min-content", padding: 20 },
  overlayComponent: "",
  showHelperBoundaries: false,
};

var m=Object.defineProperty,p=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(r,o,t)=>o in r?m(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,l=(r,o)=>{for(var t in o||(o={}))i.call(o,t)&&n(r,t,o[t]);if(e)for(var t of e(o))x.call(o,t)&&n(r,t,o[t]);return r},a=(r,o)=>p(r,s(o));import{j as d}from"./jsx-runtime.b63ab980.js";import{T as c}from"./index.1c8f28fe.js";import"./index.9abb7908.js";var b={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Text } from "../components";\r
\r
export default {\r
  title: "Example/Text",\r
  component: Text,\r
  argTypes: {\r
    color: { control: "color" },\r
  },\r
} as ComponentMeta<typeof Text>;\r
\r
const Template: ComponentStory<typeof Text> = (args) => (\r
  <Text {...args}>{args.children}</Text>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
  color: "blue",\r
  children: "Null-Palette",\r
};\r
`,locationsMap:{primary:{startLoc:{col:46,line:14},endLoc:{col:1,line:16},startBody:{col:46,line:14},endBody:{col:1,line:16}}}}},title:"Example/Text",component:c,argTypes:{color:{control:"color"}}};const y=r=>d(c,a(l({},r),{children:r.children})),T=y.bind({});T.args={color:"blue",children:"Null-Palette"};const h=["Primary"];export{T as Primary,h as __namedExportsOrder,b as default};
//# sourceMappingURL=text.stories.d2b220b9.js.map

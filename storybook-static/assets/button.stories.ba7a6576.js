var m=Object.defineProperty,p=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var e=(r,o,n)=>o in r?m(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,c=(r,o)=>{for(var n in o||(o={}))u.call(o,n)&&e(r,n,o[n]);if(t)for(var n of t(o))d.call(o,n)&&e(r,n,o[n]);return r},a=(r,o)=>p(r,s(o));import{j as l}from"./jsx-runtime.b63ab980.js";import"./index.1c8f28fe.js";import"./index.9abb7908.js";function i({backgroundColor:r="black",children:o}){return l("button",{style:{backgroundColor:r,color:"white"},children:o})}var C={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Button } from "../components";\r
\r
export default {\r
  title: "Example/Button",\r
  component: Button,\r
  argTypes: {\r
    backgroundColor: { control: "color" },\r
  },\r
} as ComponentMeta<typeof Button>;\r
\r
const Template: ComponentStory<typeof Button> = (args) => (\r
  <Button {...args}>{args.children}</Button>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
  backgroundColor: "blue",\r
  children: "click",\r
};\r
`,locationsMap:{primary:{startLoc:{col:48,line:14},endLoc:{col:1,line:16},startBody:{col:48,line:14},endBody:{col:1,line:16}}}}},title:"Example/Button",component:i,argTypes:{backgroundColor:{control:"color"}}};const y=r=>l(i,a(c({},r),{children:r.children})),b=y.bind({});b.args={backgroundColor:"blue",children:"click"};const h=["Primary"];export{b as Primary,h as __namedExportsOrder,C as default};
//# sourceMappingURL=button.stories.ba7a6576.js.map

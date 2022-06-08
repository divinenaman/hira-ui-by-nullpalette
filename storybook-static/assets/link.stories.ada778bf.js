var l=Object.defineProperty,p=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var e=(r,n,o)=>n in r?l(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,a=(r,n)=>{for(var o in n||(n={}))s.call(n,o)&&e(r,o,n[o]);if(t)for(var o of t(n))d.call(n,o)&&e(r,o,n[o]);return r},i=(r,n)=>p(r,c(n));import{j as k}from"./jsx-runtime.b63ab980.js";import"./index.1c8f28fe.js";import{L as m}from"./index.280571e5.js";import"./index.9abb7908.js";var h={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Link } from "../components";\r
\r
export default {\r
  title: "Example/Link",\r
  component: Link\r
} as ComponentMeta<typeof Link>;\r
\r
const Template: ComponentStory<typeof Link> = (args) => (\r
  <Link {...args}>{args.children}</Link>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
  to: "#",\r
  children: "Click Me!",\r
  targetNewTab: false\r
};\r
`,locationsMap:{primary:{startLoc:{col:46,line:11},endLoc:{col:1,line:13},startBody:{col:46,line:11},endBody:{col:1,line:13}}}}},title:"Example/Link",component:m};const y=r=>k(m,i(a({},r),{children:r.children})),L=y.bind({});L.args={to:"#",children:"Click Me!",targetNewTab:!1};const M=["Primary"];export{L as Primary,M as __namedExportsOrder,h as default};
//# sourceMappingURL=link.stories.ada778bf.js.map

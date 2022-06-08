var g=Object.defineProperty,u=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var s=(a,r,n)=>r in a?g(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,t=(a,r)=>{for(var n in r||(r={}))B.call(r,n)&&s(a,n,r[n]);if(l)for(var n of l(r))N.call(r,n)&&s(a,n,r[n]);return a},c=(a,r)=>u(a,y(r));import{a as o,j as e}from"./jsx-runtime.b63ab980.js";import"./index.1c8f28fe.js";import{L as m}from"./index.280571e5.js";import{r as x}from"./index.9abb7908.js";function d({width:a="100%",height:r=200,brandingSection:n="",hamburgerPosition:p="left",style:h={},children:v,className:b="",showHelperBoundaries:k=!1}){const[i,f]=x.exports.useState(!1);return o("div",{className:`hira-navbar ${b}`,style:t({width:a,height:r},h),"data-help":k,children:[o("div",{className:"hira-navbar_branding","data-ham":p,children:[e("div",{className:"hira-navbar_hamburger",onClick:()=>f(!i),tabIndex:1,children:"click"}),n]}),e("div",{className:"hira-navbar_link","data-active":i,children:v})]})}var E={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { NavBar, Link } from "../components";\r
\r
export default {\r
  title: "Example/NavBar",\r
  component: NavBar,\r
} as ComponentMeta<typeof NavBar>;\r
\r
const Template: ComponentStory<typeof NavBar> = (args) => (\r
  <NavBar {...args}>\r
    <Link to={"#"}>link 1</Link>\r
    <Link to={"#"}>link 2</Link>\r
  </NavBar>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
  width: "100%",\r
  height: 300,\r
  brandingSection: "Branding",\r
  style: { backgroundColor: "black", color: "white" },\r
  hamburgerPosition: "left",\r
  showHelperBoundaries: true,\r
};\r
`,locationsMap:{primary:{startLoc:{col:48,line:11},endLoc:{col:1,line:16},startBody:{col:48,line:11},endBody:{col:1,line:16}}}}},title:"Example/NavBar",component:d};const L=a=>o(d,c(t({},a),{children:[e(m,{to:"#",children:"link 1"}),e(m,{to:"#",children:"link 2"})]})),C=L.bind({});C.args={width:"100%",height:300,brandingSection:"Branding",style:{backgroundColor:"black",color:"white"},hamburgerPosition:"left",showHelperBoundaries:!0};const M=["Primary"];export{C as Primary,M as __namedExportsOrder,E as default};
//# sourceMappingURL=navbar.stories.057dfed3.js.map

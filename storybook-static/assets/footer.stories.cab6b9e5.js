var y=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var s=(r,n,o)=>n in r?y(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,a=(r,n)=>{for(var o in n||(n={}))F.call(n,o)&&s(r,o,n[o]);if(m)for(var o of m(n))_.call(n,o)&&s(r,o,n[o]);return r},d=(r,n)=>g(r,C(n));import{a as i,j as t}from"./jsx-runtime.b63ab980.js";import"./index.1c8f28fe.js";import{L as e}from"./index.280571e5.js";import"./index.9abb7908.js";function c({title:r="",style:n={},children:o,className:l}){return i("div",{className:`hira-footer_link_column ${l}`,style:n,children:[t("div",{className:"hira-footer_link_column_title",children:r}),t("div",{className:"hira-footer_link_column_link",children:o})]})}function k({width:r="100%",height:n=400,brandingSection:o="",copyrightSection:l="",numOfLinkColumns:h=2,style:p={},children:u,className:L="",showHelperBoundaries:f=!1}){return i("div",{className:`hira-footer ${L}`,style:a({width:r,height:n},p),"data-help":f,children:[t("div",{className:"hira-footer_branding",children:o}),t("div",{className:"hira-footer_link",style:{gridTemplateColumns:`repeat(${h}, 1fr)`},children:u}),t("div",{className:"hira-footer_copyright",children:l})]})}var P={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Footer, FooterLinkColumn, Link } from "../components";\r
\r
export default {\r
  title: "Example/Footer",\r
  component: Footer,\r
} as ComponentMeta<typeof Footer>;\r
\r
const Template: ComponentStory<typeof Footer> = (args) => (\r
  <Footer {...args}>\r
    <FooterLinkColumn title={"col-1"}>\r
      <Link to={"#"}>link 1</Link>\r
\r
      <Link to={"#"}>link 2</Link>\r
    </FooterLinkColumn>\r
    <FooterLinkColumn title={"col-2"}>\r
      <Link to={"#"}>link 1</Link>\r
\r
      <Link to={"#"}>link 2</Link>\r
    </FooterLinkColumn>\r
    <FooterLinkColumn title={"col-3"}>\r
      <Link to={"#"}>link 1</Link>\r
\r
      <Link to={"#"}>link 2</Link>\r
    </FooterLinkColumn>\r
  </Footer>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
  width: "100%",\r
  height: 300,\r
  brandingSection: "Branding",\r
  copyrightSection: "copyright 2021",\r
  numOfLinkColumns: 2,\r
  style: { backgroundColor: "black", color: "white" },\r
  showHelperBoundaries: true,\r
};\r
`,locationsMap:{primary:{startLoc:{col:48,line:11},endLoc:{col:1,line:29},startBody:{col:48,line:11},endBody:{col:1,line:29}}}}},title:"Example/Footer",component:k};const b=r=>i(k,d(a({},r),{children:[i(c,{title:"col-1",children:[t(e,{to:"#",children:"link 1"}),t(e,{to:"#",children:"link 2"})]}),i(c,{title:"col-2",children:[t(e,{to:"#",children:"link 1"}),t(e,{to:"#",children:"link 2"})]}),i(c,{title:"col-3",children:[t(e,{to:"#",children:"link 1"}),t(e,{to:"#",children:"link 2"})]})]})),v=b.bind({});v.args={width:"100%",height:300,brandingSection:"Branding",copyrightSection:"copyright 2021",numOfLinkColumns:2,style:{backgroundColor:"black",color:"white"},showHelperBoundaries:!0};const T=["Primary"];export{v as Primary,T as __namedExportsOrder,P as default};
//# sourceMappingURL=footer.stories.cab6b9e5.js.map

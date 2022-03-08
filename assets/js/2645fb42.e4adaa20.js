"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[727],{6233:function(n,t,e){e.r(t),e.d(t,{contentTitle:function(){return y},default:function(){return A},frontMatter:function(){return x},metadata:function(){return h},toc:function(){return f}});var o=e(7462),r=e(3366),l=e(7294),a=e(3905),i=e(1059),c=e(1736),s=e(1119),u='import React from \'react\';\nimport { Annotations, Annotation, LineSeries, Plot, Axis } from \'react-plot\';\nexport default function PlotAnnotations() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <Annotations>\n        <Annotation.Line\n          x1="10"\n          y1="10"\n          x2="100"\n          y2="100"\n          color="yellow"\n          strokeWidth="4"\n        />\n        <Annotation.Arrow\n          x1="10"\n          y1="30"\n          x2="100"\n          y2="130"\n          color="yellow"\n          strokeWidth="4"\n        />\n        <Annotation.Circle\n          r="20"\n          x="200"\n          y="20"\n          color="blue"\n        ></Annotation.Circle>\n        <Annotation.Ellipse\n          rx="20"\n          ry="10"\n          x="200"\n          y="100"\n          color="green"\n        ></Annotation.Ellipse>\n        <Annotation.Rectangle\n          x1="20"\n          y1="100"\n          x2="50"\n          y2="150"\n          color="violet"\n        ></Annotation.Rectangle>\n        <Annotation.Text\n          x="150"\n          y="200"\n          fontSize="30"\n          fontFamily="monospace"\n          fontWeight="bold"\n          textAnchor="middle"\n          color="orange"\n        >\n          Hello world\n        </Annotation.Text>\n      </Annotations>\n      <Axis position="bottom" />\n      <Axis position="left" />\n    </Plot>\n  );\n}\n',m=function(){return l.createElement(i.XN,{width:300,height:300},l.createElement(i.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),l.createElement(i.uN,null,l.createElement(i.q6.Line,{x1:"10",y1:"10",x2:"100",y2:"100",color:"yellow",strokeWidth:"4"}),l.createElement(i.q6.Arrow,{x1:"10",y1:"30",x2:"100",y2:"130",color:"yellow",strokeWidth:"4"}),l.createElement(i.q6.Circle,{r:"20",x:"200",y:"20",color:"blue"}),l.createElement(i.q6.Ellipse,{rx:"20",ry:"10",x:"200",y:"100",color:"green"}),l.createElement(i.q6.Rectangle,{x1:"20",y1:"100",x2:"50",y2:"150",color:"violet"}),l.createElement(i.q6.Text,{x:"150",y:"200",fontSize:"30",fontFamily:"monospace",fontWeight:"bold",textAnchor:"middle",color:"orange"},"Hello world")),l.createElement(i.RD,{position:"bottom"}),l.createElement(i.RD,{position:"left"}))};function p(){var n=(0,l.useState)(!1),t=n[0],e=n[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"demo-example-wrapper"},l.createElement(m,null),l.createElement("div",{className:"demo-example-buttons"},l.createElement("button",{onClick:function(){return e((function(n){return!n}))},type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),l.createElement(s.Z,{name:"plot-annotations",source:u,dependencies:{react:"^17.0.2","react-plot":"^0.16.0"}},(function(){return l.createElement("button",{type:"submit"},"Open sandbox")})))),t&&l.createElement(c.Z,{className:"language-jsx"},u))}var d=["components"],x={},y="Annotations",h={unversionedId:"annotations/intro",id:"annotations/intro",title:"Annotations",description:"Currently we support the following annotations:",source:"@site/docs/300_annotations/intro.md",sourceDirName:"300_annotations",slug:"/annotations/intro",permalink:"/annotations/intro",editUrl:"https://github.com/zakodium/react-plot-docs/tree/main/docs/300_annotations/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Axis",permalink:"/axis/intro"},next:{title:"Hooks",permalink:"/hooks/intro"}},f=[{value:"Shape",id:"shape",children:[],level:2},{value:"Group",id:"group",children:[],level:2}],k={toc:f};function A(n){var t=n.components,e=(0,r.Z)(n,d);return(0,a.kt)("wrapper",(0,o.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotations"},"Annotations"),(0,a.kt)("p",null,"Currently we support the following annotations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arrow"),(0,a.kt)("li",{parentName:"ul"},"Circle"),(0,a.kt)("li",{parentName:"ul"},"Ellipse"),(0,a.kt)("li",{parentName:"ul"},"Line"),(0,a.kt)("li",{parentName:"ul"},"Polygon"),(0,a.kt)("li",{parentName:"ul"},"Polyline"),(0,a.kt)("li",{parentName:"ul"},"Rectangle"),(0,a.kt)("li",{parentName:"ul"},"Shape"),(0,a.kt)("li",{parentName:"ul"},"Text")),(0,a.kt)(p,{mdxType:"AnnotationsDemo"}),(0,a.kt)("h2",{id:"shape"},"Shape"),(0,a.kt)("h2",{id:"group"},"Group"))}A.isMDXComponent=!0}}]);
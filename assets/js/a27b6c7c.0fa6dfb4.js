"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[849],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),f=u(t),m=o,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(y,a(a({ref:e},p),{},{components:t})):r.createElement(y,a({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1087:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},c="Annotations",u={unversionedId:"annotations/intro",id:"annotations/intro",title:"Annotations",description:"Currently we support the following annotations:",source:"@site/docs/annotations/intro.md",sourceDirName:"annotations",slug:"/annotations/intro",permalink:"/annotations/intro",editUrl:"https://github.com/zakodium/react-plot-docs/tree/main/docs/annotations/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react-plot",permalink:"/"},next:{title:"fetch",permalink:"/live/fetch"}},p=[{value:"Shape",id:"shape",children:[],level:2},{value:"Group",id:"group",children:[],level:2}],s={toc:p};function f(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Currently we support the following annotations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arrow"),(0,i.kt)("li",{parentName:"ul"},"Circle"),(0,i.kt)("li",{parentName:"ul"},"Ellipse"),(0,i.kt)("li",{parentName:"ul"},"Line"),(0,i.kt)("li",{parentName:"ul"},"Polygon"),(0,i.kt)("li",{parentName:"ul"},"Polyline"),(0,i.kt)("li",{parentName:"ul"},"Rectangle"),(0,i.kt)("li",{parentName:"ul"},"Shape"),(0,i.kt)("li",{parentName:"ul"},"Text")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Demo() {\n  const { Line, Circle, Ellipse, Rectangle, Text, Arrow } = Annotation;\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <Annotations>\n        <Line\n          x1="10"\n          y1="10"\n          x2="100"\n          y2="100"\n          color="yellow"\n          strokeWidth="4"\n        />\n        <Arrow\n          x1="10"\n          y1="30"\n          x2="100"\n          y2="130"\n          color="yellow"\n          strokeWidth="4"\n        />\n        <Circle r="20" x="200" y="20" color="blue"></Circle>\n        <Ellipse rx="20" ry="10" x="200" y="100" color="green"></Ellipse>\n        <Rectangle x1="20" y1="100" x2="50" y2="150" color="violet"></Rectangle>\n        <Text\n          x="150"\n          y="200"\n          fontSize="30"\n          fontFamily="monospace"\n          fontWeight="bold"\n          textAnchor="middle"\n          color="orange"\n        >\n          Hello world\n        </Text>\n      </Annotations>\n      <Axis position="bottom" />\n      <Axis position="left" />\n    </Plot>\n  );\n}\n')),(0,i.kt)("h2",{id:"shape"},"Shape"),(0,i.kt)("h2",{id:"group"},"Group"))}f.isMDXComponent=!0}}]);
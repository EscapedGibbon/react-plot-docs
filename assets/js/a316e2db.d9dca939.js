"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[467],{9016:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(412);function a(){if(r.Z.canUseDOM)return n(4576).O}},1299:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return E}});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),c=n(4100),l=n(1059),s=n(9016),m=n(1736),u=n(1119),p='import React from \'react\';\nimport { xyToXYObject } from \'ml-spectra-processing\';\nimport { useEffect, useState } from \'react\';\nimport {\n  Annotations,\n  Axis,\n  LineSeries,\n  Plot,\n  PlotController,\n  SeriesPoint,\n  useRectangularZoom,\n} from \'react-plot\';\n\nimport getConvertJcamp from \'../../src/util/getConvertJcamp\';\n\nexport default function InfraredZoomablePlot() {\n  return (\n    <PlotController>\n      <ZoomablePlot />\n    </PlotController>\n  );\n}\n\nfunction ZoomablePlot() {\n  const [data, setData] = useState<SeriesPoint[]>([]);\n  const zoom = useRectangularZoom();\n\n  useEffect(() => {\n    fetch(\'/data/ir.jdx\').then((response) => {\n      response.text().then((jcamp) => {\n        const data = xyToXYObject(\n          getConvertJcamp()(jcamp).flatten[0].spectra[0].data,\n        ).map((point) => ({ x: point.x, y: point.y * 100 }));\n        setData(data);\n      });\n    });\n  }, []);\n\n  return (\n    <Plot width={800} height={300}>\n      <LineSeries data={data} xAxis="x" yAxis="y" />\n      <Axis\n        id="x"\n        position="bottom"\n        label="Wavenumber (cm-1)"\n        displayPrimaryGridLines\n        flip={true}\n      />\n      <Axis\n        id="y"\n        position="left"\n        label="Transmitance (%)"\n        displayPrimaryGridLines\n      />\n      <Annotations>{zoom.annotations}</Annotations>\n    </Plot>\n  );\n}\n',d=function(){return o.createElement(l.aE,null,o.createElement(x,null))};function f(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return o.createElement(o.Fragment,null,o.createElement("div",{className:"demo-example-wrapper"},o.createElement(d,null),o.createElement("div",{className:"demo-example-buttons"},o.createElement("button",{onClick:function(){return n((function(e){return!e}))},type:"button",style:{backgroundColor:t?"#dbeafe":void 0}},"Code"),o.createElement(u.Z,{name:"infrared-zoomable-plot",source:p,dependencies:{react:"^17.0.2","ml-spectra-processing":"^9.1.0","react-plot":"^0.16.0"}},(function(){return o.createElement("button",{type:"submit"},"Open sandbox")})))),t&&o.createElement(m.Z,{className:"language-jsx"},p))}function x(){var e=(0,o.useState)([]),t=e[0],n=e[1],r=(0,l.NU)();return(0,o.useEffect)((function(){fetch("/data/ir.jdx").then((function(e){e.text().then((function(e){var t=(0,c.G0)((0,s.Z)()(e).flatten[0].spectra[0].data).map((function(e){return{x:e.x,y:100*e.y}}));n(t)}))}))}),[]),o.createElement(l.XN,{width:800,height:300},o.createElement(l.eh,{data:t,xAxis:"x",yAxis:"y"}),o.createElement(l.RD,{id:"x",position:"bottom",label:"Wavenumber (cm-1)",displayPrimaryGridLines:!0,flip:!0}),o.createElement(l.RD,{id:"y",position:"left",label:"Transmitance (%)",displayPrimaryGridLines:!0}),o.createElement(l.uN,null,r.annotations))}var b=["components"],y={},g="Infrared spectrum",v={unversionedId:"experimental/ir",id:"experimental/ir",title:"Infrared spectrum",description:"Example of code loading and converting a jcamp (using jcampconverter)",source:"@site/docs/500_experimental/ir.md",sourceDirName:"500_experimental",slug:"/experimental/ir",permalink:"/experimental/ir",editUrl:"https://github.com/zakodium/react-plot-docs/tree/main/docs/500_experimental/ir.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/hooks/intro"},next:{title:"Mass spectrum",permalink:"/experimental/mass"}},E=[],h={toc:E};function k(e){var t=e.components,n=(0,a.Z)(e,b);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infrared-spectrum"},"Infrared spectrum"),(0,i.kt)("p",null,"Example of code loading and converting a jcamp (using ",(0,i.kt)("inlineCode",{parentName:"p"},"jcampconverter"),")"),(0,i.kt)(f,{mdxType:"InfraredDemo"}))}k.isMDXComponent=!0}}]);
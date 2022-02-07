"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[514,608],{6756:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),o=n(2434),i=n(6010),c=n(5773),s=n(5537),d=n(7462);var u=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},m=n(5999),p=n(3366),b=n(9960),f=n(3919),v=n(541),h="menuLinkText_QVir",E="hasHref_VCh3",g=n(2389),C=["item"],_=["item","onItemClick","activePath","level","index"],k=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.item,n=(0,p.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(N,(0,d.Z)({item:t},n)):a.createElement(S,(0,d.Z)({item:t},n))}function N(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,s=e.index,u=(0,p.Z)(e,_),f=n.items,v=n.label,C=n.collapsible,k=n.className,Z=n.href,N=function(e){var t=(0,g.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),S=(0,c._F)(n,l),I=(0,c.uR)({initialState:function(){return!!C&&(!S&&n.collapsed)}}),T=I.collapsed,x=I.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:S,collapsed:T,setCollapsed:x});var M=(0,c.fP)(),L=M.expandedItem,P=M.setExpandedItem;function w(e){void 0===e&&(e=!T),P(e?null:s),x(e)}var A=(0,c.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){C&&L&&L!==s&&A&&x(!0)}),[C,L,s,x,A]),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":T},k)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":C&&!Z,"menu__link--active":S},t[h]=!C,t[E]=!!N,t)),onClick:C?function(e){null==r||r(n),Z?w(!1):(e.preventDefault(),w())}:function(){null==r||r(n)},"aria-current":S?"page":void 0,href:C?null!=N?N:"#":N},u),v),Z&&C&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),w()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(y,{items:f,tabIndex:T?-1:0,onItemClick:r,activePath:l,level:o+1})))}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(e.index,(0,p.Z)(e,k)),s=t.href,u=t.label,m=t.className,h=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,f.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var I=["items"];function T(e){var t=e.items,n=(0,p.Z)(e,I);return a.createElement(c.D_,null,t.map((function(e,t){return a.createElement(Z,(0,d.Z)({key:t,item:e,index:t},n))})))}var y=(0,a.memo)(T),x="sidebar_CW9Y",M="sidebarWithHideableNavbar_FoYL",L="sidebarHidden_D64r",P="sidebarLogo_FJUI",w="menu_SkdO",A="menuWithAnnouncementBar_x19h",F="collapseSidebarButton_cwdi",B="collapseSidebarButtonIcon_xORG";function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(u,{className:B}))}function R(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(x,(t={},t[M]=p,t[L]=d,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",w,(n={},n[A]=u,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:l,activePath:r,level:1}))),b&&a.createElement(H,{onClick:o}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return a.createElement(c.Cv,{component:D,props:e})}var O=a.memo(R),Y=a.memo(W);function j(e){var t=(0,c.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(Y,e))}var z=n(5514),q=n(4608),U="backToTopButton_RiI4",G="backToTopButtonShow_ssHd";function J(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var V=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=J(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||d(),n<300)r(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,U,(e={},e[G]=n,e)),type:"button",onClick:function(){return s()}})},X=n(6775),K={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},Q=n(2859);function $(e){var t,n,l,s=e.currentDocRoute,d=e.versionMetadata,p=e.children,b=e.sidebarName,f=(0,c.Vq)(),v=d.pluginId,h=d.version,E=(0,a.useState)(!1),g=E[0],C=E[1],_=(0,a.useState)(!1),k=_[0],Z=_[1],N=(0,a.useCallback)((function(){k&&Z(!1),C((function(e){return!e}))}),[k]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,c.os)(v,h)}},a.createElement("div",{className:K.docPage},a.createElement(V,null),f&&a.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&g&&Z(!0)}},a.createElement(j,{key:b,sidebar:f,path:s.path,onCollapse:N,isHidden:k}),k&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(u,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=g||!f,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(l={},l[K.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:z.Z},p)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,X.LX)(r.pathname,e)}));if(!o)return a.createElement(q.default,null);var i=o.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:i},(0,l.Z)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(2434),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2365:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(7462),r=n(3366),l=n(7294),o=n(776),i=n(6010),c=n(5999),s=n(2263),d=n(1262),u=n(5773),m="playgroundContainer_TGbA",p="playgroundHeader_qwyd",b="playgroundEditor_PvJ1",f="playgroundPreview_bb8I",v="headerChevron_jj6N",h=n(2389),E=n(7219),g=["children","transformCode"];function C(e){var t=e.onClick,n=e.children;return l.createElement("div",{style:t?{cursor:"pointer"}:null,onClick:function(){return t()},className:(0,i.Z)(p)},n)}function _(){return l.createElement("div",null,"Loading...")}function k(){return l.createElement("div",{className:f},l.createElement(d.Z,{fallback:l.createElement(_,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null))})))}function Z(e){var t=e.visible,n=(0,h.Z)();return l.createElement(o.uz,{key:n,className:b,style:t?{maxHeight:"1000px"}:{maxHeight:0}})}function N(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return l.createElement(l.Fragment,null,l.createElement(C,{onClick:function(){return n((function(e){return!e}))}},t?"Hide ":"Show ",l.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),l.createElement(E.Tfp,{style:t?{transform:"rotate(90deg)"}:{},className:v,size:"25"})),l.createElement(Z,{visible:t}))}function S(e){var t=e.children,n=e.transformCode,i=(0,r.Z)(e,g),c=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.pJ)());return l.createElement("div",{className:m},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e+";"},theme:c},i),l.createElement(k,null),l.createElement(N,null)))}},6922:function(e,t,n){var a=n(7462),r=n(7294),l=n(7676),o=n(2255),i=n(8449),c=n(2660),s=n(412);var d=Object.assign({React:r},r,{ButtonExample:function(e){return r.createElement("button",(0,a.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}},l,{ObjectInspector:o.vu,xyToXYObject:i.G0,parseXY:c._,convertJcamp:function(){if(s.Z.canUseDOM)return n(4293).O}()});t.Z=d}}]);
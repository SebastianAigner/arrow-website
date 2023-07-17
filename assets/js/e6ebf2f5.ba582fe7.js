"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[9152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66569:(e,t,r)=>{r.d(t,{k:()=>s});var n=r(67294),o=r(39960),c=r(44996);const a={linkCard:"linkCard_uxt7",icon:"icon_lqTJ",cardHeader:"cardHeader_NaDd",cardBody:"cardBody_svEQ",paragraph:"paragraph_UbEf"};function i(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:a.linkCard},r)}function l(e){let{title:t,icon:r,body:o}=e;return n.createElement("div",{className:"card"},n.createElement("div",{className:`card__header ${a.cardHeader}`},n.createElement("img",{className:a.icon,src:(0,c.Z)(`/img/${r}`),alt:`${t} category`,title:`${t} category`,width:"48px",height:"48px"}),n.createElement("h2",{title:t,className:"text--truncate"},t)),n.createElement("div",{className:`card__body ${a.cardBody}`},n.createElement("p",{className:`${a.paragraph}`},o)))}const s=e=>n.createElement(i,{href:e.href},n.createElement(l,e))},97048:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),o=r(53438),c=r(66569);const a="icon-tutorial.svg";function i(e){let{item:t}=e;const r=function(){try{return(0,o.jA)()}catch{return}}()?.customProps?.icon,i={title:t.label,icon:t.customProps?.icon||r||a,href:t.href,body:t.customProps?.description??("link"===t.type&&(0,o.xz)(t.docId??void 0)).description??void 0};return n.createElement(c.k,i)}const l={container:"container_Mg1N"};function s(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(u,{items:r.items,className:t})}function u(e){const{items:t,className:r}=e;if(!t)return n.createElement(s,e);const c=(0,o.MN)(t);return n.createElement("section",{className:`${l.container} ${r}`},c.map(((e,t)=>n.createElement("article",{key:t},n.createElement(i,{item:e})))))}},56720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),c=r(53438),a=r(97048);const i={title:"Collections and functions"},l="<decorated-text icon={useCurrentSidebarCategory().customProps.icon} title={frontMatter.title} />",s={unversionedId:"learn/collections-functions/index",id:"learn/collections-functions/index",title:"Collections and functions",description:"{useCurrentSidebarCategory().customProps.description}",source:"@site/content/docs/learn/collections-functions/index.md",sourceDirName:"learn/collections-functions",slug:"/learn/collections-functions/",permalink:"/learn/collections-functions/",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/collections-functions/index.md",tags:[],version:"current",frontMatter:{title:"Collections and functions"},sidebar:"learnSidebar",previous:{title:"Reflection",permalink:"/learn/immutable-data/reflection"},next:{title:"Non-empty collections",permalink:"/learn/collections-functions/non-empty"}},u={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decorated-text-iconusecurrentsidebarcategorycustompropsicon-titlefrontmattertitle-"},(0,o.kt)("decorated-text",{icon:(0,c.jA)().customProps.icon,title:i.title})),(0,o.kt)("p",null,(0,c.jA)().customProps.description),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);
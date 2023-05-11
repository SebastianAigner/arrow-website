"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[1409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const i={title:"Domain Model Validation In Kotlin: Part 1",image:"https://miro.medium.com/max/1400/1*Xc0B4542z3WHiQ3DvLXcYg.png",category:"articles",tags:["core","articles"],link:"https://medium.com/@tibtof/domain-model-validation-in-kotlin-part-1-21fa44c60ef3"},a=void 0,l={permalink:"/community/blog/2022/02/22/domain-model-validation-in-kotlin-part-1",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2022-02-22-domain-model-validation-in-kotlin-part-1.md",source:"@site/content/blog/2022-02-22-domain-model-validation-in-kotlin-part-1.md",title:"Domain Model Validation In Kotlin: Part 1",description:"In the first article in this series, Tiberiu Tofan describes his team's journey using Kotlin and Arrow for domain model validation,",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"core",permalink:"/community/blog/tags/core"},{label:"articles",permalink:"/community/blog/tags/articles"}],readingTime:.16,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Domain Model Validation In Kotlin: Part 1",image:"https://miro.medium.com/max/1400/1*Xc0B4542z3WHiQ3DvLXcYg.png",category:"articles",tags:["core","articles"],link:"https://medium.com/@tibtof/domain-model-validation-in-kotlin-part-1-21fa44c60ef3"},prevItem:{title:"Domain Model Validation In Kotlin: Part 2",permalink:"/community/blog/2022/03/03/domain-model-validation-in-kotlin-part-2"},nextItem:{title:"Announcing Arrow Analysis - a Kotlin compiler plug-in",permalink:"/community/blog/2022/02/02/announcing-arrow-analysis"}},c={authorsImageUrls:[]},m=[],s={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the first article in this series, Tiberiu Tofan describes his team's journey using Kotlin and Arrow for domain model validation,\nstarting by setting the domain model's foundation in a type-safe way."))}u.isMDXComponent=!0}}]);
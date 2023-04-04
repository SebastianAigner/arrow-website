"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[2631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),m=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),s=n,w=u["".concat(c,".").concat(s)]||u[s]||g[s]||o;return r?i.createElement(w,a(a({ref:t},p),{},{components:r})):i.createElement(w,a({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}s.displayName="MDXCreateElement"},52326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=r(87462),n=(r(67294),r(3905));const o={title:"Writing a Kotlin Compiler Plugin with Arrow Meta",image:"https://meta.arrow-kt.io/img/demos/hello-world-compiler-plugin.gif",category:"articles",tags:["meta","articles"],link:"https://medium.com/@heyitsmohit/writing-kotlin-compiler-plugin-with-arrow-meta-cf7b3689aa3e"},a=void 0,l={permalink:"/community/blog/2020/04/08/writing-compiler-plugin-with-with-arrow-meta",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2020-04-08-writing-compiler-plugin-with-with-arrow-meta.md",source:"@site/content/blog/2020-04-08-writing-compiler-plugin-with-with-arrow-meta.md",title:"Writing a Kotlin Compiler Plugin with Arrow Meta",description:"Learn how to write and test the debuglog compiler plugin in Arrow Meta. Here is the compiler plugin debulog-arrow-meta explained in the article.",date:"2020-04-08T00:00:00.000Z",formattedDate:"April 8, 2020",tags:[{label:"meta",permalink:"/community/blog/tags/meta"},{label:"articles",permalink:"/community/blog/tags/articles"}],readingTime:.115,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Writing a Kotlin Compiler Plugin with Arrow Meta",image:"https://meta.arrow-kt.io/img/demos/hello-world-compiler-plugin.gif",category:"articles",tags:["meta","articles"],link:"https://medium.com/@heyitsmohit/writing-kotlin-compiler-plugin-with-arrow-meta-cf7b3689aa3e"},prevItem:{title:"Android architectures with Arrow Fx",permalink:"/community/blog/2020/05/06/android-architectures-arrow-fx"},nextItem:{title:"Template-Oriented-Programming to Ship Faster, Part-1",permalink:"/community/blog/2020/04/06/template-oriented-programming-talk"}},c={authorsImageUrls:[]},m=[],p={toc:m},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Learn how to write and test the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kevinmost/debuglog"},"debuglog")," compiler plugin in Arrow Meta. Here is the compiler plugin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/msya/debuglog-arrow-meta"},"debulog-arrow-meta")," explained in the article."))}g.isMDXComponent=!0}}]);
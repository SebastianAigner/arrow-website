"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4576],{45104:(e,t,a)=>{a.d(t,{j:()=>l});var i=a(67294),n=a(39960);const r={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function l(e){let{title:t,ctaList:a,className:l}=e;return i.createElement("div",{className:`${r.wrapperContainer} ${l}`},i.createElement("div",{className:`container ${r.container}`},i.createElement("h1",null,t),i.createElement("div",{className:r.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return i.createElement(n.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},8730:(e,t,a)=>{a.d(t,{T:()=>s});var i=a(67294),n=a(39960),r=a(44996);const l={borderlessCard:"borderlessCard_sjEN",infoMode:"infoMode_oa1U",icon:"icon_c5iy",cardHeader:"cardHeader_Melu",title:"title_AiRZ",cardBody:"cardBody__x5U",cardFooter:"cardFooter_BYOD",link:"link_YPJo"};function s(e){let{title:t,icon:a,href:s,body:c}=e;const o=!s,m=o?"64px":"32px";return i.createElement("div",{className:`card ${l.borderlessCard} ${o&&l.infoMode}`},i.createElement("div",{className:`card__header ${l.cardHeader}`},i.createElement("img",{className:l.icon,src:(0,r.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,height:m,width:m}),i.createElement("h3",{className:l.title},t)),i.createElement("div",{className:`card__body ${l.cardBody}`},i.createElement("p",null,c)),!o&&i.createElement("div",{className:`card__footer ${l.cardFooter}`},i.createElement("strong",null,i.createElement(n.Z,{href:s,className:l.link},"Learn more"))))}},78914:(e,t,a)=>{a.d(t,{V:()=>l});var i=a(67294),n=a(39960);const r={hero:"hero_wgFg",container:"container_Iw7w",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function l(e){let{title:t,subtitle:a,ctaList:l,className:s}=e;return i.createElement("div",{className:`hero ${r.hero} ${s}`},i.createElement("div",{className:`container ${r.container}`},i.createElement("h1",{className:"hero__title"},t),a&&i.createElement("h2",{className:r.subtitle},a),i.createElement("div",{className:r.ctaList},l&&l.map((e=>{let{title:t,href:a}=e;return i.createElement(n.Z,{key:t,href:a,className:"button button--primary button--lg"},t)})))))}},3555:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(87462),n=a(67294),r=a(52263),l=a(47916),s=a(78914),c=a(8730),o=a(45104);const m={hero:{title:"Support",subtitle:"Morbi ornare arcu massa, a sodales augue vulputate quis. Nunc faucibus lectus augue, posuere pulvina",ctaList:[{title:"Our Slack channel",href:"/learn/overview"}]},links:[{title:"Documentation",href:"/learn/quickstart",icon:"icon-quickstart.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"GitHub",href:"/learn/typed-errors",icon:"icon-typed-errors.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Slack channel",href:"/learn/immutable-data",icon:"icon-immutable-data.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Stack Overflow",href:"/learn/design",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Blog",href:"/learn/design",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Events",href:"/learn/design",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."}],banner:{title:"Want to know more about Arrow?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},u={verticalRhythm:"verticalRhythm_kkKO",textContainer:"textContainer_noJu",navigationContainer:"navigationContainer_g_p8"};function d(){const{siteConfig:e}=(0,r.Z)();return n.createElement(l.Z,{title:"Support",description:e.tagline},n.createElement(s.V,{title:m.hero.title,subtitle:m.hero.subtitle,ctaList:m.hero.ctaList,className:u.verticalRhythm}),n.createElement("main",null,n.createElement("section",{className:`container text--center ${u.textContainer}`},n.createElement("h1",null,"Community support"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est")),n.createElement("section",{className:`container ${u.navigationContainer} ${u.verticalRhythm}`},m.links.map((e=>n.createElement(c.T,(0,i.Z)({key:e.title},e))))),n.createElement("section",null,n.createElement(o.j,{title:m.banner.title,ctaList:m.banner.ctaList}))))}}}]);
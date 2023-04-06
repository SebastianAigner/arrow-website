"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},o="Saga",s={unversionedId:"learn/resilience/saga",id:"learn/resilience/saga",title:"Saga",description:"In a distributed system, sometimes you need a concept similar to a transaction",source:"@site/content/docs/learn/resilience/saga.md",sourceDirName:"learn/resilience",slug:"/learn/resilience/saga",permalink:"/learn/resilience/saga",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/resilience/saga.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Circuit breaker",permalink:"/learn/resilience/circuitbreaker"},next:{title:"Immutable Data",permalink:"/learn/immutable-data/"}},c={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"saga"},"Saga"),(0,r.kt)("p",null,"In a distributed system, sometimes you need a concept similar to a ",(0,r.kt)("em",{parentName:"p"},"transaction"),"\nin a database. That is, several operations spanning different microservices\nmust succeed or fail as a unit; otherwise, we may end up in an inconsistent state.\nA ",(0,r.kt)("strong",{parentName:"p"},"saga")," implements this concept by providing for each action a corresponding\n",(0,r.kt)("em",{parentName:"p"},"compensating")," action, which is executed if any of the following steps fail.\nThe role of the compensating action is to undo any changes performed by the\naction, hence taking the system to the state before the entire operation\nbeginning its execution."),(0,r.kt)("admonition",{title:"Additional context for this pattern",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga"},"Saga distributed transactions pattern"),"\nin ",(0,r.kt)("em",{parentName:"p"},"Cloud Design Patterns"),".")),(0,r.kt)("p",null,"Arrow Resilience provides the ",(0,r.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/saga.html"},(0,r.kt)("inlineCode",{parentName:"a"},"saga")),"\nfunction, which creates a new scope where compensating actions can be declared\nalongside the action to perform. This is done by the ",(0,r.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/-saga-scope/saga.html"},(0,r.kt)("inlineCode",{parentName:"a"},"saga")," function in\n",(0,r.kt)("inlineCode",{parentName:"a"},"SagaScope")),".\nThe resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"Saga<A>")," doesn't perform any actions, though; you need to call\n",(0,r.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-resilience/arrow.resilience/transact.html"},(0,r.kt)("inlineCode",{parentName:"a"},"transact")),"\nto keep the chain going."),(0,r.kt)("p",null,"Let's use a small counter as an example, which we implement using the\n",(0,r.kt)("a",{parentName:"p",href:"../../coroutines/concurrency-primitives/#atomic"},(0,r.kt)("inlineCode",{parentName:"a"},"Atomic"))," type provided\nby Arrow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import arrow.atomic.AtomicInt\nimport arrow.resilience.*\n\nval INITIAL_VALUE = 1\n\nobject Counter {\n  val value = AtomicInt(INITIAL_VALUE)\n\n  fun increment() {\n    value.incrementAndGet()\n  }\n\n  fun decrement() {\n    value.decrementAndGet()\n  }\n}\n")),(0,r.kt)("p",null,"Now we create a saga with a couple of operations. The first one increments the\ncounter, so the compensating action must be decrementing it. The second action\nsimply fails; we include no compensation because we know that part is never\nreached."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val PROBLEM = Throwable("problem detected!")\n\n// describe the transaction\nval transaction: Saga<Int> = saga {\n  saga({\n    // action to perform\n    Counter.increment()\n  }) {\n    // inverse action for rolling back\n    Counter.decrement()\n  }\n  saga({\n    throw PROBLEM\n  }) {}\n  // final value of the saga\n  Counter.value.get()\n}\n')),(0,r.kt)("p",null,"Executing the transaction gives the expected results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The exception raised in the second step bubbles up to the caller of\n",(0,r.kt)("inlineCode",{parentName:"li"},"transact"),". In this case, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"Either.catch")," to turn it into ",(0,r.kt)("inlineCode",{parentName:"li"},"Either"),"."),(0,r.kt)("li",{parentName:"ul"},"The counter has been correctly decremented as part of the compensation\nprocess in the saga.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun example() {\n  // perform the transaction\n  val result = Either.catch { transaction.transact() }\n  result shouldBe PROBLEM.left()\n  Counter.value.get() shouldBe INITIAL_VALUE\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Saga and ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"../../coroutines/resource-safety/"},"Resource")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"SagaScope")," has many parallels with ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceScope"),": both ensure that some\noperations are performed at a certain point, and ",(0,r.kt)("inlineCode",{parentName:"p"},"saga")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"install"),' require\nan action that "undoes" something. The main difference is that ',(0,r.kt)("inlineCode",{parentName:"p"},"ResourceScope"),"\n",(0,r.kt)("strong",{parentName:"p"},"always")," runs the release actions, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"SagaScope")," only runs compensation\n",(0,r.kt)("strong",{parentName:"p"},"if")," the entire action fails.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Saga and ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"../../coroutines/stm/"},"STM")),(0,r.kt)("p",{parentName:"admonition"},"If you need to perform several actions as a unit over ",(0,r.kt)("strong",{parentName:"p"},"local")," data,\n",(0,r.kt)("a",{parentName:"p",href:"../../coroutines/stm/"},"Software Transactional Memory")," is a better tool than\nSagas and Atomic references.")))}u.isMDXComponent=!0}}]);
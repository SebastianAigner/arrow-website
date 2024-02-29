"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[6116],{69561:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(85893),s=o(11151);const i={sidebar_position:2},r="Pre and post-conditions",a={id:"ecosystem/analysis/conditions",title:"Pre and post-conditions",description:"In Quickstart we've introduced the idea of pre and post-conditions of functions as promises that either the caller or the body of the function should obey. Here we go deeper in the topic, about how these conditions may look, how they compose, and which way they are checked.",source:"@site/content/docs/ecosystem/analysis/conditions.md",sourceDirName:"ecosystem/analysis",slug:"/ecosystem/analysis/conditions",permalink:"/ecosystem/analysis/conditions",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/ecosystem/analysis/conditions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ecosystemSidebar",previous:{title:"Quickstart",permalink:"/ecosystem/analysis/quickstart"},next:{title:"Control operators",permalink:"/ecosystem/analysis/control"}},c={},l=[{value:"Pre-conditions",id:"pre-conditions",level:2},{value:"Errors related to pre-conditions",id:"errors-related-to-pre-conditions",level:3},{value:"Disabling checks",id:"disabling-checks",level:2},{value:"Post-conditions",id:"post-conditions",level:2},{value:"Errors related to post-conditions",id:"errors-related-to-post-conditions",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pre-and-post-conditions",children:"Pre and post-conditions"}),"\n",(0,t.jsx)(n.p,{children:"In Quickstart we've introduced the idea of pre and post-conditions of functions as promises that either the caller or the body of the function should obey. Here we go deeper in the topic, about how these conditions may look, how they compose, and which way they are checked."}),"\n",(0,t.jsx)(n.h2,{id:"pre-conditions",children:"Pre-conditions"}),"\n",(0,t.jsxs)(n.p,{children:["When using Arrow Analysis, each function may declare one or more ",(0,t.jsx)(n.em,{children:"pre-conditions"}),", which describes what should be true of the arguments of each call to it. In other words, the ",(0,t.jsx)(n.strong,{children:"caller"})," of the function must ensure that pre-conditions are true on every single call."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'import arrow.analysis.pre\n\nfun increment(x: Int): Int {\n  pre(x > 0) { "value must be positive" }\n  return x + 1\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Each pre-condition takes a Boolean condition and a block with a message describing such condition. Even though the Kotlin compiler allows any expression to appear in those positions, there are heavy restrictions on what is actually understood by Arrow Analysis."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Pre-conditions may only talk about parameters to the function, including ",(0,t.jsx)(n.code,{children:"this"})," when inside a class method or defining an extension function;"]}),"\n",(0,t.jsx)(n.li,{children:"You can only create Boolean expressions using basic arithmetic operations (addition, subtraction, etc.), comparisons, and simple Boolean operations (and, or, not). In particular, you cannot define a Boolean function and use it in a condition;"}),"\n",(0,t.jsxs)(n.li,{children:["You may use ",(0,t.jsx)(n.code,{children:"if"})," or ",(0,t.jsx)(n.code,{children:"when"}),", but in the latter case only ",(0,t.jsx)(n.em,{children:"without"})," a subject;"]}),"\n",(0,t.jsxs)(n.li,{children:["The final block must be a simple constant string. We follow this pattern for compatibility with Kotlin's built-in ",(0,t.jsx)(n.code,{children:"require"})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"errors-related-to-pre-conditions",children:"Errors related to pre-conditions"}),"\n",(0,t.jsx)(n.p,{children:"The most common error in Arrow Analysis is calling a function while not satisfying its pre-conditions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val example = increment(-1)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"e: pre-condition `value must be positive` is not satisfied in `increment(-1)`\n  -> unsatisfiable constraint: `(-1 > 0)`\n"})}),"\n",(0,t.jsx)(n.p,{children:"When more than one block of pre-conditions is present, the tool also checks that those pre-conditions are not inconsistent. Imagine we require for the a number to be both positive and negative:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'import arrow.analysis.pre\n\nfun wat(x: Int): Int {\n  pre(x > 0) { "value must be positive" }\n  pre(x < 0) { "value must be negative" }\n  return 0\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"e: `wat` has inconsistent pre-conditions: (x < 0), (x > 0)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Think about it: there's no value that can satisfy the requirements imposed by ",(0,t.jsx)(n.code,{children:"wat"}),". Such a restriction usually points to an error in the specification of the function, since any usage would be completely forbidden otherwise."]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-checks",children:"Disabling checks"}),"\n",(0,t.jsx)(n.p,{children:'If you are completely sure that a pre-condition is satisfied, even though Arrow Analysis is not able to "see" it, you can disable checking. This case usually arises for data which comes from external input. However, we still encourage you to handle the possibility of failure, instead of blindly disabling the checks: an exception may be hiding behind that call... Arrow Analysis gives three different ways to disable checks, depending on the desired level of granularity.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"unsafeCall"})," disables checks only for the call ",(0,t.jsx)(n.em,{children:"directly nested"})," within it. If you need to disable a check, this is the recommended choice, because it removes the fewer guarantees."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"import arrow.analysis.unsafeCall\n\nval wrong1 = unsafeCall(increment(-2)) // no errors reported\nval wrong2 = unsafeCall(increment(increment(-2)))\n                   //   ^         ^\n                   //   disabled  not disabled\n                   //      error: pre-condition is not satisfied in `increment(-2)`\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"unsafeBlock"})," disables checks for everything inside that block. If you want to silence all errors in a function or value declaration, wrap its entire body with ",(0,t.jsx)(n.code,{children:"unsafeBlock"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"import arrow.analysis.unsafeBlock\n\nval wrong3 = unsafeBlock { increment(increment(-2)) } // no errors reported\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@Suppress"})," can be attached to a declaration to silence an entire type of errors or warnings in their body. For example, ",(0,t.jsx)(n.code,{children:'"UnsatCallPre"'})," are those errors coming from ",(0,t.jsx)(n.strong,{children:"unsat"}),"isfied ",(0,t.jsx)(n.strong,{children:"pre"}),"conditions on ",(0,t.jsx)(n.strong,{children:"call"}),"s."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Suppress("UnsatCallPre")\nval wrong4: Int = increment(emptyList().first())\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"post-conditions",children:"Post-conditions"}),"\n",(0,t.jsxs)(n.p,{children:["Post-conditions describe the ",(0,t.jsx)(n.strong,{children:"promises"})," we give about the result of the function. They are quite important when composing larger programs, because post-conditions define which information about the inner computation we want to expose about to the rest of the program. For example, these two programs are valid:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'import arrow.analysis.post\n\nfun one() = 1.post({ it == 1 }) { "result is exactly 1" }\nfun positive() = 1.post({ it > 0 }) { "result is positive" }\n'})}),"\n",(0,t.jsx)(n.p,{children:"but in the latter case we only promise that the result is positive. This leaves us room for changing the code later on, while keeping the rest of the code which depended on that condition untouched."}),"\n",(0,t.jsxs)(n.p,{children:["Post-conditions are attached to the result value by calling the ",(0,t.jsx)(n.code,{children:"post"})," extension function. The restrictions for the arguments are similar to those of pre-conditions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The first argument should be a ",(0,t.jsx)(n.strong,{children:"block"})," whose body talks only about the parameters of the function and the formal parameter of the block, which represents the return value."]}),"\n",(0,t.jsx)(n.li,{children:"The Boolean expression and the message follow the same restrictions as above."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"errors-related-to-post-conditions",children:"Errors related to post-conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The most common error message related to post-conditions is for them not being true in the ",(0,t.jsx)(n.em,{children:"general"})," case. This means that there's at least one set of values for the parameters for which the post-condition is not true. Take the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'import arrow.analysis.pre\nimport arrow.analysis.post\n\nfun nope(x: Int): Int {\n  pre(x >= 0) { "value >= 0" }\n  return (x + 1).post({ it > 1 }) { "result > 1" }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"e: declaration `nope` fails to satisfy the post-condition: ($result > 1)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, when ",(0,t.jsx)(n.code,{children:"x"})," is ",(0,t.jsx)(n.code,{children:"0"}),", the result value is ",(0,t.jsx)(n.code,{children:"1"}),", which is not strictly greater than ",(0,t.jsx)(n.code,{children:"1"}),". Unfortunately, the error messages produced in this case by Arrow Analysis are not always very useful to diagnose where the problem lies; we are currently working on improving this feature."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(67294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
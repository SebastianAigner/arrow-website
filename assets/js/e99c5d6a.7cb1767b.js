"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[5418],{56682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151);const a={sidebar_position:4},i="Traversals",o={id:"learn/immutable-data/traversal",title:"Traversals",description:"The framework laid out by optics extends very nicely to values like lists, which",source:"@site/content/docs/learn/immutable-data/traversal.md",sourceDirName:"learn/immutable-data",slug:"/learn/immutable-data/traversal",permalink:"/learn/immutable-data/traversal",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/immutable-data/traversal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Optionals",permalink:"/learn/immutable-data/optional"},next:{title:"Prisms & Isos",permalink:"/learn/immutable-data/prism-iso"}},l={},c=[{value:"<code>Every</code> element in a collection",id:"every-element-in-a-collection",level:2},{value:"More than <code>getAll</code>",id:"more-than-getall",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"traversals",children:"Traversals"}),"\n",(0,s.jsx)(n.p,{children:"The framework laid out by optics extends very nicely to values like lists, which\ncontain any potential number of elements. Traversals is the name of that kind of\noptic."}),"\n",(0,s.jsx)(n.admonition,{title:"In a rush?",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Traversals focus on an indefinite number of values."}),"\n",(0,s.jsxs)(n.li,{children:["To access all the values, use ",(0,s.jsx)(n.code,{children:"getAll"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Traversals provide an API similar to those of collections."}),"\n",(0,s.jsxs)(n.li,{children:["To modify every value focused by the traversal, use ",(0,s.jsx)(n.code,{children:"modify"}),"."]}),"\n"]})}),"\n",(0,s.jsxs)(n.h2,{id:"every-element-in-a-collection",children:[(0,s.jsx)(n.code,{children:"Every"})," element in a collection"]}),"\n",(0,s.jsxs)(n.p,{children:["As with other kinds of optics, ",(0,s.jsx)(n.code,{children:"Traversal<T, A>"})," represents a reference to elements\nof type ",(0,s.jsx)(n.code,{children:"A"})," within a larger structure of type ",(0,s.jsx)(n.code,{children:"T"}),". As hinted above, most\ntraversals arise from focusing on elements in a collection; in Arrow Optics,\nthose basic traversals live in the ",(0,s.jsx)(n.code,{children:"Every"})," object."]}),"\n",(0,s.jsx)(n.p,{children:"Let's introduce a small data class for our examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@optics data class Person(val name: String, val age: Int, val friends: List<Person>) {\n  companion object\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If we want to update the age of every ",(0,s.jsx)(n.code,{children:"Person"})," in a list, the usual way is to\nuse the ",(0,s.jsx)(n.code,{children:"map"})," function from the standard library."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun List<Person>.happyBirthdayMap(): List<Person> =\n  map { Person.age.modify(it) { age -> age + 1 } }\n"})}),"\n",(0,s.jsx)(n.p,{children:"The same code can be rewritten using only optics by leveraging a traversal for\nlists."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun List<Person>.happyBirthdayOptics(): List<Person> =\n  Every.list<Person>().age.modify(this) { age -> age + 1 }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Traversals become more useful when composed with other optics. Imagine that we\nwant to update the age of all the friends of a ",(0,s.jsx)(n.code,{children:"Person"}),"; the usual implementation\nwith ",(0,s.jsx)(n.code,{children:"map"})," and ",(0,s.jsx)(n.code,{children:"copy"})," becomes quite complex."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun Person.happyBirthdayFriends(): Person =\n  copy(\n    friends = friends.map { friend -> friend.copy(age = friend.age + 1) }\n  )\n"})}),"\n",(0,s.jsx)(n.p,{children:"The implementation using optics hides all the complexity related to mapping\nand copying, and simply focuses on the path to access the values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun Person.happyBirthdayFriendsOptics(): Person =\n  Person.friends.every(Every.list()).age.modify(this) { it + 1 }\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Every(List)",type:"note",children:(0,s.jsxs)(n.p,{children:["You might be wondering why we need to write ",(0,s.jsx)(n.code,{children:"Every.list()"})," as argument to ",(0,s.jsx)(n.code,{children:"every"}),",\ngiven that we know that ",(0,s.jsx)(n.code,{children:"Person.friends"})," focuses on a ",(0,s.jsx)(n.code,{children:"List<Person>"}),".\nThe reason is ",(0,s.jsx)(n.a,{href:"https://kotlinlang.org/docs/generics.html#type-erasure",children:"type erasure"}),":\nthe compiler cannot differentiate between ",(0,s.jsx)(n.code,{children:"Lens<Person, List<Person>>"}),"\nand ",(0,s.jsx)(n.code,{children:"Lens<Person, Map<String, Person>>"}),", so there's no way to tell which\nis the right traversal to apply in each case. However, if we provide the\nhint ourselves by giving ",(0,s.jsx)(n.code,{children:"Every.list()"})," as argument, the compiler is able\nto ",(0,s.jsx)(n.em,{children:"check"})," that our usage is correct."]})}),"\n",(0,s.jsxs)(n.h2,{id:"more-than-getall",children:["More than ",(0,s.jsx)(n.code,{children:"getAll"})]}),"\n",(0,s.jsxs)(n.p,{children:["The counterpart to ",(0,s.jsx)(n.code,{children:"get"})," and ",(0,s.jsx)(n.code,{children:"getOrNull"})," when speaking about traversals is called\n",(0,s.jsx)(n.code,{children:"getAll"}),", and returns a list of focused elements. But you don't always have to\ngo through an intermediate list to obtain information about the elements focused\nby a ",(0,s.jsx)(n.code,{children:"Traversal"}),", we provide a ",(0,s.jsx)(n.a,{href:"https://apidocs.arrow-kt.io/arrow-optics/arrow.optics/-getter/index.html",children:"large API"}),"\nbased on Kotlin's collections in the standard library."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, you can call ",(0,s.jsx)(n.code,{children:"isEmpty"})," to check whether the traversal matches any\nelement. Or, more generally, you can call ",(0,s.jsx)(n.code,{children:"size"}),' to obtain the number of elements\nit matches. Note that, in any case, these operations are "optics-first", so\nyou need to provide the value they operate on as an argument.']})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
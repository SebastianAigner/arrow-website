"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[7463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Receivers vs. flatMap",sidebar_position:3},r=void 0,s={unversionedId:"learn/design/receivers-flatmap",id:"learn/design/receivers-flatmap",title:"Receivers vs. flatMap",description:"The Arrow project promotes a particular style of Kotlin to achieve the composability of effects. Functional programming patterns inspire many concepts, but the implementation differs significantly from Haskell's or Scala's typical way of doing things (monads, IO, and transformers). This article aims to clarify how this style works in Kotlin, compare it to other sibling languages, and discuss the main limitations.",source:"@site/content/docs/learn/design/receivers-flatmap.md",sourceDirName:"learn/design",slug:"/learn/design/receivers-flatmap",permalink:"/learn/design/receivers-flatmap",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/design/receivers-flatmap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Receivers vs. flatMap",sidebar_position:3},sidebar:"learnSidebar",previous:{title:"Effects and contexts",permalink:"/learn/design/effects-contexts"},next:{title:"Why suspend over IO",permalink:"/learn/design/suspend-io"}},l={},p=[{value:"Effects",id:"effects",level:2},{value:"Two Kotlin built-in features",id:"two-kotlin-built-in-features",level:2},{value:"No monads, no higher-kinded types",id:"no-monads-no-higher-kinded-types",level:2},{value:"Composition of effects",id:"composition-of-effects",level:3},{value:"Errors everywhere!",id:"errors-everywhere",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://xebia.com/blog/the-suspend-receivers-style-in-kotlin/"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"This article was originally published at ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://xebia.com/blog/the-suspend-receivers-style-in-kotlin/"},"Xebia's blog"),". ")),(0,o.kt)("p",null,"The Arrow project promotes a particular style of Kotlin to achieve the composability of effects. Functional programming patterns inspire many concepts, but the implementation differs significantly from Haskell's or Scala's typical way of doing things (monads, ",(0,o.kt)("inlineCode",{parentName:"p"},"IO"),", and transformers). This article aims to clarify how this style works in Kotlin, compare it to other sibling languages, and discuss the main limitations."),(0,o.kt)("p",null,"We assume the reader is familiar with the transformer-style of effects. Good resources to understand that style are ",(0,o.kt)("a",{parentName:"p",href:"https://underscore.io/books/scala-with-cats/"},"Scala with Cats"),", ",(0,o.kt)("a",{parentName:"p",href:"https://leanpub.com/pfp-scala"},"Practical FP in Scala"),", or the ",(0,o.kt)("a",{parentName:"p",href:"https://leanpub.com/book-of-monads"},"Book of Monads"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Context receivers are still experimental. There are still some rough edges when mixing them with ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inline"),", but the Kotlin team is putting lots of effort into making them stable.")),(0,o.kt)("h2",{id:"effects"},"Effects"),(0,o.kt)("p",null,"Before diving into the technical portion, let's discuss what we ",(0,o.kt)("em",{parentName:"p"},"aim")," to achieve when talking about ",(0,o.kt)("em",{parentName:"p"},"effects"),". The idea is to be ",(0,o.kt)("em",{parentName:"p"},"explicit")," about the visible behavior of a function in its signature, since that allows for more powerful compiler checks and analyses. By default, this is only the case for ",(0,o.kt)("em",{parentName:"p"},"pure"),' functions, which is a fancy way of saying "functions that only do computation." Take the following function:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun add(x: Int, y: Int): Int = x + y\n")),(0,o.kt)("p",null,'Here the types are "honest;" we always get back a number, and such a number depends only on the input arguments. In Kotlin, we can easily sneak in other behaviors, which we often call ',(0,o.kt)("em",{parentName:"p"},"side effects"),". We could print some value,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun loggingAdd(x: Int, y: Int): Int {\n  println("x = $x, y = $y")\n  return x + y\n}\n')),(0,o.kt)("p",null,"or, going further, roll back the execution trace with an exception, but only at some random times."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun crazyAdd(x: Int, y: Int): Int {\n  if (Random.nextInt() == 42) throw WhatsHappeningException()\n  return x + y\n}\n")),(0,o.kt)("p",null,"The goal is to shed light on those effects, making the potential behavior directly apparent. A function like the latter gets a type closer to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(Raise<WhatsHappeningError>, Random)\nfun crazyAdd(x: Int, y: Int): Int\n")),(0,o.kt)("p",null,"Again, this is an extreme example, but think of those effects as network communication, access to the file system; or, more granularly, reading the initial configuration or using the repository object for some part of the domain. The following signature is very explicit in telling that the function may or not return a value (because of the nullable return type), it may use the user repository (so we expect some kind of database access), and there's the possibility of an error (which is different from a non-existing value)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(Raise<WhatsHappeningError>, UserRepository)\nsuspend fun getUserById(id: UserId): User?\n")),(0,o.kt)("p",null,"The question is: how do we encode those effects using the ",(0,o.kt)("em",{parentName:"p"},"type system"),"? This is where the Kotlin and Haskell / Scala ways significantly differ."),(0,o.kt)("h2",{id:"two-kotlin-built-in-features"},"Two Kotlin built-in features"),(0,o.kt)("p",null,"To model and execute effects in a performant fashion, we recommend using ",(0,o.kt)("em",{parentName:"p"},"coroutines")," and ",(0,o.kt)("em",{parentName:"p"},"context receivers")," profusely in Kotlin. This section briefly introduces each feature and discusses its role in the overall pattern."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-overview.html"},"Coroutines")," are ",(0,o.kt)("em",{parentName:"p"},"suspendable")," functions. From the developer's point of view, these functions are marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," keyword,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun getUserById(id: UserId): User?\n")),(0,o.kt)("p",null,"The Kotlin language knows how to combine several suspended functions without the developer's intervention. In other words, coroutines are transparent for developers, except for the requirement of marking functions using them. We can even mix suspended functions with regular functions, as with the ",(0,o.kt)("inlineCode",{parentName:"p"},".name")," field access here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun getUserName(id: UserId): String? =\n  getUserById(id)?.name\n")),(0,o.kt)("p",null,"Although coroutines are often explained together with the concurrency mechanisms from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines"},(0,o.kt)("inlineCode",{parentName:"a"},"kotlinx.coroutines")),", those are separate ideas. Coroutines allow ",(0,o.kt)("em",{parentName:"p"},"fine-grained control")," over the computations within a ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," block. Concurrency is one form of exercising this control, deciding when and in which threads computations will happen. But this is not the only one,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://serranofp.com/inikio/"},"Inikio")," is a library that leverages ",(0,o.kt)("inlineCode",{parentName:"li"},"suspend"),' to create "imperative" syntax for domain-specific languages;'),(0,o.kt)("li",{parentName:"ul"},"Arrow provides ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/arrow-kt/arrow/tree/main/arrow-libs/core/arrow-core/src/commonMain/kotlin/arrow/core/computations"},"computation builders")," where you can write functions over ",(0,o.kt)("inlineCode",{parentName:"li"},"Either"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Result"),", or nullable types without having to check for the error path at each step.")),(0,o.kt)("p",null,"The ability to control computation in that way comes from the transformation performed by the compiler into ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Haskell/Continuation_passing_style"},(0,o.kt)("em",{parentName:"a"},"continuation-passing style")),'. Long story short, our functions above really take an additional argument -- the continuation -- which is "fed" the resulting value of the function.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun getUserById(id: UserId, k: Continuation<User?>)\n\nfun getUserName(id: UserId, k: Continuation<String?>) =\n  getUserById(id) { user -> user?.let { k.resume(it.name) } }\n")),(0,o.kt)("p",null,"At a conceptual level, you can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"Continuation<A>")," as simply a function ",(0,o.kt)("inlineCode",{parentName:"p"},"(A) -> Unit"),'. This means the caller can change how the function "returns," but changing the continuation passed as parameter ',(0,o.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,o.kt)("p",null,"The second feature in the Kotlin language required for the proposed style is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/KEEP/blob/master/proposals/context-receivers.md"},"context receivers"),", which were introduced in version 1.6.20. For an in-depth discussion of this new feature, you can check this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2oiRCYnqhDs"},"talk")," or the corresponding ",(0,o.kt)("a",{parentName:"p",href:"https://serranofp.com/kotlin-xl-ctx/slides"},"slides"),". Very briefly, context receivers can be thought of as ",(0,o.kt)("em",{parentName:"p"},"implicit")," parameters, or as a sort of built-in dependency injection. Let's say we define an interface for our user repository,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface UserRepository {\n  suspend fun getUserById(id: UserId): User?\n}\n")),(0,o.kt)("p",null,"Then we can make that repository available in another function by putting it as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(UserRepository)\nsuspend fun getUserName(id: UserId): String? =\n  getUserById(id)?.name\n")),(0,o.kt)("p",null,"This signature could also be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend context(UserRepository) fun"),", but we've decided to write the contexts first to highlight them."),(0,o.kt)("p",null,"The example above shows that, if you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),", then you can call any other function requiring that context -- here ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserById")," -- without further ceremony. This composability extends as much as you want; the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserName")," may again be called by another function with the same context. At some point, we need to ",(0,o.kt)("em",{parentName:"p"},"inject")," the actual implementation, though; this is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," function,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun example() {\n  createDbConnection().use { db ->\n    with(DbUserRepository(db)) {\n      println(getUserName(UserId(1)))\n    }\n  }\n}\n")),(0,o.kt)("p",null,"In this case, the implementation connects to a database, but we could also inject a different in-memory object for testing. This is where the ",(0,o.kt)("em",{parentName:"p"},"dependency injection")," idea comes into play."),(0,o.kt)("p",null,"Context receivers are a generalization of an older Kotlin feature called ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/extensions.html"},"extension receivers"),'. Although its original use was to "extend" the functionality of a class while preserving the ',(0,o.kt)("inlineCode",{parentName:"p"},".function")," syntax for access members, they've also been used to describe ",(0,o.kt)("em",{parentName:"p"},"scopes")," where certain additional functionality is available. Here's the (simplified) signature of the ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html"},(0,o.kt)("inlineCode",{parentName:"a"},"async"))," function, which spawns a computation in a new lightweight thread,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun <T> CoroutineScope.async(block: suspend CoroutineScope.() -> T): Deferred<T>\n")),(0,o.kt)("p",null,"This signature states that ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," may only be called ",(0,o.kt)("em",{parentName:"p"},"within")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," block, and that the spawned computation represented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," argument also gets access to another ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),', so it can launch other jobs itself. If we "modernize" the signature using context receivers,'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(CoroutineScope)\nfun <T> async(block: context(CoroutineScope) suspend () -> T): Deferred<T>\n")),(0,o.kt)("p",null,"we can see that those scopes are nothing else than ",(0,o.kt)("em",{parentName:"p"},"effects"),"! This notion is visible in several places in the Arrow library,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/arrow-kt/arrow/blob/arrow-2/arrow-libs/fx/arrow-fx-coroutines/src/commonMain/kotlin/arrow/fx/coroutines/Resource.kt"},(0,o.kt)("inlineCode",{parentName:"a"},"ResourceScope"))," brings the ability to acquire and release resources correctly,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/arrow-kt/arrow/blob/arrow-2/arrow-libs/fx/arrow-fx-stm/src/commonMain/kotlin/arrow/fx/stm/STM.kt"},(0,o.kt)("inlineCode",{parentName:"a"},"STM"))," introduces the concept of transactional variables, whose concurrent access is protected.")),(0,o.kt)("p",null,"To perform their duty, ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceScope"),' (the "runner" for ',(0,o.kt)("inlineCode",{parentName:"p"},"ResourceScope"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"atomically"),' (the "runner" for ',(0,o.kt)("inlineCode",{parentName:"p"},"STM"),") need control over the computation. That's precisely where the coroutine system becomes necessary."),(0,o.kt)("p",null,"The emphasis on context receivers comes from their ability to ",(0,o.kt)("em",{parentName:"p"},"compose"),", unlike the other extension receivers. If a function requires both resource handling and a user repository, we can easily express this using the former"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(UserRepository, ResourceScope)\nfun whoKnowsWhatItDoes(name: String)\n")),(0,o.kt)("p",null,"but there's no (simple) way with the latter. We hope this composability encourages developers to create more and finer-grained scopes/effects to be as concrete as possible about the behavior of the functions."),(0,o.kt)("h2",{id:"no-monads-no-higher-kinded-types"},"No monads, no higher-kinded types"),(0,o.kt)("p",null,"Traditionally, the ability to control execution in a similar way to what the coroutine system in Kotlin offers was offered by a ",(0,o.kt)("em",{parentName:"p"},"monadic")," interface. More concretely, monads provide a function to combine one sequence of steps with the next step to be performed; this operation is known as ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bind")," (",(0,o.kt)("inlineCode",{parentName:"p"},">>=")," if you're a Haskeller)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun <A, B> M<A>.flatMap(next: (A) -> M<B>): M<B>\n")),(0,o.kt)("p",null,"Since the implementor of each particular monad controls the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap"),", at that point, any additional control can be injected. For example, the nullability monad short-circuits any further behavior when a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," is produced in one of the steps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun <A, B> A?.flatMap(next: (A) -> B?): B? = \n  when (this) {\n    null -> null\n    else -> next(this)\n  }\n")),(0,o.kt)("p",null,"One important monad for both Haskell and Scala is the ",(0,o.kt)("inlineCode",{parentName:"p"},"IO"),' monad, which marks the code as "impure", that is, as having potential side effects like writing or reading from a device. Note that in the case of Scala, there\'s not a unified ',(0,o.kt)("inlineCode",{parentName:"p"},"IO")," monad; we have ",(0,o.kt)("a",{parentName:"p",href:"https://typelevel.org/cats-effect/api/3.x/cats/effect/IO.html"},"Cats Effect")," and ",(0,o.kt)("a",{parentName:"p",href:"https://zio.dev/overview/getting-started"},"ZIO")," as main examples. In Kotlin ",(0,o.kt)("a",{parentName:"p",href:"https://arrow-kt.io/docs/effects/io/"},"the same can be achieved with ",(0,o.kt)("inlineCode",{parentName:"a"},"suspend")),"; to start running a suspended computation, we need to call it from ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or from ",(0,o.kt)("inlineCode",{parentName:"p"},"runBlocking"),", which amounts to the same guarantees as found in Haskell and Scala."),(0,o.kt)("p",null,"Alas, code written with monads tends to break under the weight of all the ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap"),"s in the way and the nesting associated with them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"doOneThing().flatMap { x ->\n  doAnotherThing(x).flatMap { y ->\n    // imagine if your code was even longer!\n    return x to y\n  }\n}\n")),(0,o.kt)("p",null,"Therefore, both Scala and Haskell provide specialized syntax to work with monads -- ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," comprehensions for the former, and ",(0,o.kt)("inlineCode",{parentName:"p"},"do")," notation for the latter. The same code can be written much more clearly as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  x <- doOneThing()\n  y <- doAnotherThing(x)\n} yield (x, y)\n")),(0,o.kt)("p",null,"This is a step in the right direction, but not ",(0,o.kt)("em",{parentName:"p"},"perfect"),". In particular, monadic notation enforces a strong divide in style between monadic and non-monadic code. If you even need to introduce some effect to a function, you are forced to ",(0,o.kt)("em",{parentName:"p"},"rewrite"),' it from the "pure" subset of the language to the "monadic" one. This problem extends not only to blocks of code, but also to the operators available to them. The famous ',(0,o.kt)("a",{parentName:"p",href:"https://impurepics.com/posts/2020-10-03-always-traverse.html"},(0,o.kt)("inlineCode",{parentName:"a"},"traverse"))," operation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def traverse[F[_], A, B](x: List[A], f: A => F[B]): F[List[B]]\n")),(0,o.kt)("p",null,"is nothing else than your regular list ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", but where ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," may incorporate some effects. Once again, the solution is good, but in a perfect world, you wouldn't ask developers to learn two sets of abstractions if one could do."),(0,o.kt)("p",null,"The signature of ",(0,o.kt)("inlineCode",{parentName:"p"},"traverse")," shows another essential part of the monadic style of effects, namely ",(0,o.kt)("em",{parentName:"p"},"higher-kinded types"),". Since monads are types that take other types as parameters -- like ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," --, to provide utility functions that work over different monads, one must have a way to refer to those types. In Scala, this is made explicit by the number of underscores after the type name, like ",(0,o.kt)("inlineCode",{parentName:"p"},"F[_]")," above; in Haskell, this is not made explicit in the signature but is still checked by the compiler. Even decades after their inception, higher-kinded types are still considered an advanced feature and haven't made their way into mainstream programming languages."),(0,o.kt)("p",null,'Kotlin doesn\'t require higher-kinded types to provide similar abstraction because the same functions which work over "regular" functions, like ',(0,o.kt)("inlineCode",{parentName:"p"},"map"),", keep working when used in the coroutine world. Continuing with the example above, we can obtain the names of every user's friend by combining ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserName"),", even though the latter is a suspended function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(UserRepository)\nsuspend fun getUserFriends(id: UserId): List<String> =\n  getUserFriendIds(id).map { getUserName(it) }\n")),(0,o.kt)("p",null,"Kotlin language designers have found, in my opinion, a great point in the design space, in which they can offer the same abilities but without the cost of such a complex feature."),(0,o.kt)("h3",{id:"composition-of-effects"},"Composition of effects"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=eZ9FpG8May8"},"Monads have some inherent problems with composition"),", which in practice means that you cannot easily create a new one from the effects of two of them. There are several techniques to overcome this problem, but the main one is ",(0,o.kt)("em",{parentName:"p"},"monad transformers"),'. Instead of being a monad itself, a transformer "wraps" another monad adding some additional capability. For example, the composition of "we keep a stateful ',(0,o.kt)("inlineCode",{parentName:"p"},"DbConnection"),'" with "we require a ',(0,o.kt)("inlineCode",{parentName:"p"},"Config"),' in context" with "we may perform I/O actions" is represented as follows.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"StateT[DbConnection, ReaderT[Config, IO], User]\n")),(0,o.kt)("p",null,"Note that a transformer like ",(0,o.kt)("inlineCode",{parentName:"p"},"StateT")," has a higher-kind than a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),' monad. The latter takes one "regular" type as a parameter, whereas the former takes a monad (that is, a type with a hole) as a parameter. This is one of the most challenging mountains to climb to understand how effects work in Haskell and Scala.'),(0,o.kt)("p",null,"We propose to move away from this style in Kotlin and simply enlarge the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," required for a function. Context receivers compose without any further instruction from the developer; in that sense, they work similarly to algebraic effects, like those in ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/effectful"},(0,o.kt)("inlineCode",{parentName:"a"},"effectful"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/polysemy"},(0,o.kt)("inlineCode",{parentName:"a"},"polysemy")),". More concretely, unlike monad transformers, you have no fixed order of injection of contexts."),(0,o.kt)("h2",{id:"errors-everywhere"},"Errors everywhere!"),(0,o.kt)("p",null,"One interesting application of this style is an ergonomic interface for errors. In Arrow 2.0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arrow-kt/arrow/blob/arrow-2/arrow-libs/core/arrow-core/src/commonMain/kotlin/arrow/core/continuations/Raise.kt"},(0,o.kt)("inlineCode",{parentName:"a"},"Raise<E>"))," is the name of the scope/effect of short-circuiting with an error of type ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),". A function with signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(Raise<E>) () -> A\n")),(0,o.kt)("p",null,"can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arrow-kt/arrow/blob/arrow-2/arrow-libs/core/arrow-core/src/commonMain/kotlin/arrow/core/continuations/Builders.kt"},"executed")," into an ",(0,o.kt)("inlineCode",{parentName:"p"},"Either"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," (is ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),"), and many other similar types. However, nothing stops you from having more than one ",(0,o.kt)("inlineCode",{parentName:"p"},"Raise")," in your context if you want to be completely explicit about errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"context(Raise<DbConnectionError>, Raise<MalformedQuery>)\nsuspend fun queryUsers(q: UserQuery): List<User>\n")),(0,o.kt)("p",null,"Context receivers play well with variance, so injecting a receiver for ",(0,o.kt)("inlineCode",{parentName:"p"},"Raise<Any>")," can work for ",(0,o.kt)("em",{parentName:"p"},"both")," elements in the context simultaneously. Compare this with ",(0,o.kt)("inlineCode",{parentName:"p"},"EitherT[DbConnectionError, EitherT[MalformedQuery, IO], List[User]]"),", where you need to handle each of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EitherT")," independently, and in the order given by the monadic stack."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Continuations are really powerful; in fact ",(0,o.kt)("a",{parentName:"p",href:"https://www.schoolofhaskell.com/school/to-infinity-and-beyond/pick-of-the-week/the-mother-of-all-monads"},"you can use ",(0,o.kt)("inlineCode",{parentName:"a"},"Cont")," to emulate any other monad"),". However, this doesn't speak of the ergonomics of using such emulation, so that argument is not really valid for this discussion. Furthermore, Kotlin imposes some limitations on how coroutines can be used, which limit, in turn, the expressivity of the proposed style."),(0,o.kt)("p",null,"Kotlin's continuations are ",(0,o.kt)("em",{parentName:"p"},"one-shot"),", meaning they can only be called ",(0,o.kt)("em",{parentName:"p"},"once"),". This is enough to model many interesting effects; for those like ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceScope")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),", you want to call the continuation normally; for those like errors, you may not call them, but that's also allowed. This limitation kicks in, though, if you try to implement the ",(0,o.kt)("em",{parentName:"p"},"list")," (also known as ",(0,o.kt)("em",{parentName:"p"},"non-determinism"),") monad in Kotlin. To give a concrete example, we needed one such abstraction in Arrow Analysis, and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arrow-kt/arrow-analysis/blob/main/analysis/common/src/main/kotlin/arrow/meta/continuations/ContSeq.kt"},"solution")," requires an explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap")," whenever you may run the same code more than once."),(0,o.kt)("p",null,"We shouldn't be too quick to flag one-shot continuations as a mistake. If you are guaranteed to call your code at most once, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://kt.academy/article/cc-under-the-hood"},"all kinds of mutable states")," to optimize how they work. The cost of allowing several calls means creating a whole closure at each ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," call, which is not always negligible. I think the Kotlin designers found a great point in the design space again, knowing that any performance hit would be taken badly by the JVM community they are targeting."),(0,o.kt)("p",null,"The lack of higher-kinded types in Kotlin means that some patterns can",(0,o.kt)("em",{parentName:"p"},"not")," be abstracted. We already discussed how some of them are no longer needed -- like ",(0,o.kt)("inlineCode",{parentName:"p"},"traverse")," -- but others are still relevant. In particular, higher-kinded types enable abstracting away the typical structure of a monad in the ",(0,o.kt)("a",{parentName:"p",href:"https://apfelmus.nfshost.com/articles/operational-monad.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Operational"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.tweag.io/blog/2018-02-05-free-monads/"},(0,o.kt)("inlineCode",{parentName:"a"},"Free"))," monads. This is impossible in Kotlin, so we must resort to code generation, as done with the ",(0,o.kt)("a",{parentName:"p",href:"http://serranofp.com/inikio/-inikio/fp.serrano.inikio.plugin/index.html"},"Inikio KSP plug-in"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,'We\'ve described a style of programming in Kotlin based on continuations + context receivers. This style is idiomatic for Kotliners and improves upon the "monadic style" available in other functional languages. Repeat after me: no more ',(0,o.kt)("inlineCode",{parentName:"p"},"flatMap"),"!"))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4690],{39706:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=i(85893),t=i(11151);const o={id:"migration",title:"Migration to Arrow 1.2.0",description:"Migration guide to upgrade to Arrow 1.2.0.",sidebar_position:4},s="Migration to Arrow 1.2.0",l={id:"learn/quickstart/migration",title:"Migration to Arrow 1.2.0",description:"Migration guide to upgrade to Arrow 1.2.0.",source:"@site/content/docs/learn/quickstart/migration.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/migration",permalink:"/learn/quickstart/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/quickstart/migration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"migration",title:"Migration to Arrow 1.2.0",description:"Migration guide to upgrade to Arrow 1.2.0.",sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Compose and UIs",permalink:"/learn/quickstart/compose"},next:{title:"Typed Errors",permalink:"/learn/typed-errors/"}},d={},a=[{value:"Either DSL, Effect &amp; EffectScope",id:"either-dsl-effect--effectscope",level:2},{value:"Using <code>Either</code>",id:"using-either",level:2},{value:"Replace <code>either { }</code>",id:"replace-either--",level:3},{value:"Replace <code>either.eager { }</code>",id:"replace-eithereager--",level:3},{value:"Replace <code>EffectScope</code>/<code>EagerEffectScope</code>",id:"replace-effectscopeeagereffectscope",level:3},{value:"Using <code>Effect</code>",id:"using-effect",level:2},{value:"Using <code>EagerEffect</code>",id:"using-eagereffect",level:2},{value:"Traverse",id:"traverse",level:3},{value:"Zip",id:"zip",level:3},{value:"Validated &amp; Either",id:"validated--either",level:2},{value:"Traverse ~&gt; mapOrAccumulate",id:"traverse--maporaccumulate",level:3},{value:"Zip",id:"zip-1",level:3},{value:"Semigroup &amp; Monoid",id:"semigroup--monoid",level:2},{value:"foldMap",id:"foldmap",level:3},{value:"combine",id:"combine",level:3},{value:"combineAll",id:"combineall",level:3},{value:"replicate",id:"replicate",level:3},{value:"Ior",id:"ior",level:2},{value:"crosswalk",id:"crosswalk",level:3},{value:"traverse",id:"traverse-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migration-to-arrow-120",children:"Migration to Arrow 1.2.0"}),"\n",(0,r.jsx)(n.p,{children:"Arrow 1.2.0-RC is a big step in Arrow and marks the last minor version in the 1.x series, and serves as a long term version to over a graceful transition to Arrow 2.0.\nAll non-deprecated code in 1.2.0-RC is source compatible with 2.0.0, so you can slowly and gracefully migrate your codebase to Arrow 2.0.0 as soon as you want."}),"\n",(0,r.jsx)(n.p,{children:"Arrow includes a lot of improvements and changes in Arrow 1.2.0-RC, all based on the feedback we've received from the community, and experience from teaching Functional Programming, building applications and knowledge from the other languages and communities.\nAny criticism is welcome, and we'll try to improve the migration guide and the library to make it as easy as possible to migrate to Arrow 2.0.0."}),"\n",(0,r.jsxs)(n.p,{children:["In case a deprecated method is crucial for you, please file an issue in the ",(0,r.jsx)(n.a,{href:"https://github.com/arrow-kt/arrow/issues",children:"Arrow repository"}),", and so Arrow can consider keeping it in the library or finding an alternative solution.\nIf you have any issues or questions, feel free to contact the Arrow maintainers in the ",(0,r.jsx)(n.a,{href:"https://slack-chats.kotlinlang.org/c/arrow",children:"KotlinSlack Arrow Channel"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"either-dsl-effect--effectscope",children:"Either DSL, Effect & EffectScope"}),"\n",(0,r.jsxs)(n.p,{children:["Arrow 1.0.0 introduced DSLs to work over functional data types such as ",(0,r.jsx)(n.code,{children:"Either"}),", and enabled several DSLs to work with ",(0,r.jsx)(n.em,{children:"typed errors"})," in convenient ways.\nThese DSLs were built on top of ",(0,r.jsx)(n.code,{children:"Effect"})," and ",(0,r.jsx)(n.code,{children:"EffectScope"}),", from the ",(0,r.jsx)(n.code,{children:"arrow.core.continuations"})," package and had several issues, and were deprecated in Arrow 1.2.0-RC.\nThe biggest issue was that they were not compatible with Kotlin's ",(0,r.jsx)(n.code,{children:"suspend"})," functions, and you needed to explicitly differentiate between ",(0,r.jsx)(n.code,{children:"suspend"})," and ",(0,r.jsx)(n.code,{children:"non-suspend"})," functions."]}),"\n",(0,r.jsxs)(n.p,{children:["Arrow 1.2.0-RC introduces a new ",(0,r.jsxs)(n.a,{href:"https://github.com/arrow-kt/arrow/pull/2912",children:[(0,r.jsx)(n.code,{children:"Raise"})," DSL"]}),", which resolves this problem and allows Arrow to provide uniform APIs for typed errors across the board.\nThis heavily reduces the API surface, and makes it easier to learn and use Arrow, and additionally it allows us to build more powerful and flexible APIs.\nIf you want to learn more about the new ",(0,r.jsx)(n.code,{children:"Raise"})," DSL, check out the ",(0,r.jsx)(n.a,{href:"../../typed-errors",children:"Typed Errors"})," guide."]}),"\n",(0,r.jsxs)(n.p,{children:["There are two ways of migrating from the old ",(0,r.jsx)(n.code,{children:"Either"})," DSL to the new ",(0,r.jsx)(n.code,{children:"Raise"})," based DSL.\nA third way using ",(0,r.jsx)(n.a,{href:"https://docs.openrewrite.org",children:"OpenRewrite"})," is in the works, and will be added to this guide once it's ready.\nYou can track the progress in ",(0,r.jsx)(n.a,{href:"https://github.com/arrow-kt/rewrite-arrow",children:"rewrite-arrow"}),", and will provide fully automated large-scale migrations."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Manual migration using Find + Replace"}),(0,r.jsxs)(n.h2,{id:"using-either",children:["Using ",(0,r.jsx)(n.code,{children:"Either"})]}),(0,r.jsxs)(n.h3,{id:"replace-either--",children:["Replace ",(0,r.jsx)(n.code,{children:"either { }"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.either"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.either"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.ensureNotNull"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.ensureNotNull"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.computations.either"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.either"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.computations.ensureNotNull"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.ensureNotNull"})]}),"\n"]}),(0,r.jsxs)(n.h3,{id:"replace-eithereager--",children:["Replace ",(0,r.jsx)(n.code,{children:"either.eager { }"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.either.eager"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.either"}),"\n=> Might introduce duplicate import for ",(0,r.jsx)(n.code,{children:"arrow.core.raise.either"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"either.eager {"})," -> ",(0,r.jsx)(n.code,{children:"either {"})]}),"\n"]}),(0,r.jsxs)(n.h3,{id:"replace-effectscopeeagereffectscope",children:["Replace ",(0,r.jsx)(n.code,{children:"EffectScope"}),"/",(0,r.jsx)(n.code,{children:"EagerEffectScope"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.EffectScope"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.Raise"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.EagerEffectScope"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.Raise"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.ensureNotNull"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.ensureNotNull"})]}),"\n"]}),(0,r.jsxs)(n.h2,{id:"using-effect",children:["Using ",(0,r.jsx)(n.code,{children:"Effect"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.Effect"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.Effect"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.ensureNotNull"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.ensureNotNull"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["=> Requires manually adding missing imports for ",(0,r.jsx)(n.code,{children:"fold"}),", error handlers, and all ",(0,r.jsx)(n.code,{children:"Effect"})," methods since they're replaced by extension functions."]}),(0,r.jsxs)(n.h2,{id:"using-eagereffect",children:["Using ",(0,r.jsx)(n.code,{children:"EagerEffect"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.EagerEffect"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.EagerEffect"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find + Replace ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.ensureNotNull"})," -> ",(0,r.jsx)(n.code,{children:"arrow.core.raise.ensureNotNull"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["=> Requires manually adding missing imports for ",(0,r.jsx)(n.code,{children:"fold"}),", error handlers, and all ",(0,r.jsx)(n.code,{children:"EagerEffect"})," methods since they're replaced by extension functions."]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Semi-automated using KScript and IntelliJ"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://gist.github.com/nomisRev/e01ddc354c84b8b626c23d024706b916#file-migrate-main-kts",children:"This migration script"})," attempts to automatically migrate ",(0,r.jsx)(n.code,{children:"arrow.core.computations.*"})," and ",(0,r.jsx)(n.code,{children:"arrow.core.continuations.*"})," on a best effort to ",(0,r.jsx)(n.code,{children:"arrow.core.raise.*"}),".\nIt has been tested on several real-life projects with 100% success, being able to automatically migrate the entire codebase."]}),(0,r.jsxs)(n.p,{children:["The run this ",(0,r.jsx)(n.code,{children:"kts"})," script you need ",(0,r.jsx)(n.code,{children:"kotlinc"})," install on your machine.\nThe official documentation on how to install ",(0,r.jsx)(n.a,{href:"https://kotlinlang.org/docs/command-line.html",children:(0,r.jsx)(n.code,{children:"kotlinc"})}),"."]}),(0,r.jsxs)(n.p,{children:["Some methods like ",(0,r.jsx)(n.code,{children:"ensure"})," in the DSL became top-level, and ",(0,r.jsx)(n.code,{children:"fold"})," if you're using ",(0,r.jsx)(n.code,{children:"Effect"})," or ",(0,r.jsx)(n.code,{children:"EagerEffect"}),".\nThese new ",(0,r.jsx)(n.em,{children:"top-level imports"})," cannot be automatically migrated, and there are two ways of dealing with the necessary imports."]}),(0,r.jsx)(n.p,{children:"There is two ways to use this script for migration:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Recommended: automatic ",(0,r.jsx)(n.em,{children:"imports"})," handling, adds too many imports and uses IntelliJ's ",(0,r.jsx)(n.em,{children:"optimise imports"})]}),"\n",(0,r.jsxs)(n.li,{children:["Manual imports, doesn't add import for ",(0,r.jsx)(n.code,{children:"fold"}),", and ",(0,r.jsx)(n.code,{children:"ensure"})," and requires manually importing them on a usage basis."]}),"\n"]}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Recommended usage"}),(0,r.jsxs)(n.p,{children:["Once installed you can run the script with default params: ",(0,r.jsx)(n.code,{children:"kotlinc -script migrate.main.kts ."}),"."]}),(0,r.jsxs)(n.p,{children:["You need to have Arrow version ",(0,r.jsx)(n.code,{children:"1.2.0-RC"})," (or newer) in order to compile your project after the script finishes running."]}),(0,r.jsxs)(n.p,{children:["The script ",(0,r.jsx)(n.em,{children:"might"})," leave you with some unused imports, to fix this you can run ",(0,r.jsx)(n.em,{children:"optimise imports"})," on your ",(0,r.jsx)(n.em,{children:"project root"})," or ",(0,r.jsx)(n.em,{children:"src"})," folder."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.em,{children:"src"})," or _project root",(0,r.jsx)(n.code,{children:"+"}),"\u2303 \u2325 O",(0,r.jsx)(n.code,{children:"or"}),"Ctrl+Alt+O`."]}),"\n",(0,r.jsxs)(n.li,{children:["Right-click ",(0,r.jsx)(n.em,{children:"project root"})," or ",(0,r.jsx)(n.em,{children:"src"})," in ",(0,r.jsx)(n.em,{children:"project view"}),", and select ",(0,r.jsx)(n.em,{children:"Optimise imports"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["This should remove all ",(0,r.jsx)(n.em,{children:"unused imports"})," this might also affect other unrelated imports."]})]}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Alternative"}),(0,r.jsxs)(n.p,{children:["If you don't want to rely on IntelliJ's ",(0,r.jsx)(n.em,{children:"optimise imports"})," you can still use the migration script to do 99,99% of the work,\nexcept import ",(0,r.jsx)(n.code,{children:"ensure"})," (and ",(0,r.jsx)(n.code,{children:"fold"})," for ",(0,r.jsx)(n.code,{children:"Effect"}),"/",(0,r.jsx)(n.code,{children:"EagerEffect"}),")."]}),(0,r.jsxs)(n.p,{children:["Easiest way to fix the imports is run ",(0,r.jsx)(n.code,{children:"./gradlew build"})," and add missing imports in files that fail to compile."]}),(0,r.jsx)(n.p,{children:"Thank you for using Arrow, and your support. I hope this script was able to simplify your migration process to 2.0.0"})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Below we discuss ",(0,r.jsx)(n.code,{children:"traverse"})," & ",(0,r.jsx)(n.code,{children:"zip"})," which will be adopted by ",(0,r.jsx)(n.a,{href:"https://github.com/cashapp/quiver",children:"Quiver"})," in the future.\nSo if you like using these ",(0,r.jsx)(n.em,{children:"functional combinators"})," you can ignore their deprecated status, and continue using them with ",(0,r.jsx)(n.a,{href:"https://github.com/cashapp/quiver",children:"Quiver"})," after 2.0.0\nWe will also provide ",(0,r.jsx)(n.a,{href:"https://docs.openrewrite.org",children:"OpenRewrite"})," recipes through ",(0,r.jsx)(n.a,{href:"https://github.com/arrow-kt/rewrite-arrow",children:"rewrite-arrow"})," when 2.0.0 is released to automatically migrate to ",(0,r.jsx)(n.a,{href:"https://github.com/cashapp/quiver",children:"Quiver"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"traverse",children:"Traverse"}),"\n",(0,r.jsxs)(n.p,{children:["All ",(0,r.jsx)(n.code,{children:"traverse"})," functionality has been deprecated in favor of Kotlin's ",(0,r.jsx)(n.code,{children:"map"})," function, and it ",(0,r.jsx)(n.em,{children:"should"})," be possible to migrate automatically using Kotlin & IntelliJ's ",(0,r.jsx)(n.code,{children:"ReplaceWith"}),".\nLet's look at a simple example to illustrate the difference between ",(0,r.jsx)(n.code,{children:"traverse"}),", and the ",(0,r.jsx)(n.em,{children:"new"})," resulting code. We'll be using ",(0,r.jsx)(n.code,{children:"Either"})," in this example, but it should be the same for any other collection type that has a ",(0,r.jsx)(n.code,{children:"traverse"})," method.\nThe rationale behind this change is while ",(0,r.jsx)(n.code,{children:"traverse"})," is a very well known method within the FP community, it's not as well known outside of it.\nUsing ",(0,r.jsx)(n.code,{children:"map"})," is more familiar to most developers, and using ",(0,r.jsx)(n.code,{children:"bind"})," gives a more consistent experience with the rest of the DSL. Additionally, when working over ",(0,r.jsx)(n.code,{children:"Raise<E>"})," the ",(0,r.jsx)(n.code,{children:"bind"})," method would disappear and ",(0,r.jsx)(n.code,{children:"map === traverse"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"accumulating errors",type:"warning",children:(0,r.jsxs)(n.p,{children:["If you're refactoring code using ",(0,r.jsx)(n.code,{children:"Validated"})," check the ",(0,r.jsx)(n.a,{href:"#validated--either",children:"Validated & Either"})," section."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun one(): Either<String, Int> = Either.Right(1)\n\nval old: Either<String, List<Int>> = \n  listOf(1, 2, 3).traverse { one() }\n\nval new: Either<String, List<Int>> = either {\n  listOf(1, 2, 3).map { one().bind() }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"zip",children:"Zip"}),"\n",(0,r.jsxs)(n.p,{children:["In similar fashion to ",(0,r.jsx)(n.code,{children:"traverse"}),", all ",(0,r.jsx)(n.code,{children:"zip"})," methods have been deprecated in favor of the DSL, and it ",(0,r.jsx)(n.em,{children:"should"})," be possible to migrate automatically using Kotlin & IntelliJ's ",(0,r.jsx)(n.code,{children:"ReplaceWith"}),".\nThe rationale behind deprecating ",(0,r.jsx)(n.code,{children:"zip"})," was that it's behavior is now duplicated by the ",(0,r.jsx)(n.code,{children:"bind"})," method, and since the DSLs are now fully ",(0,r.jsx)(n.code,{children:"inline"})," it makes ",(0,r.jsx)(n.code,{children:"zip"})," redundant.\nWorking with ",(0,r.jsx)(n.code,{children:"zip"})," requires dealing with the ",(0,r.jsx)(n.em,{children:"arity-n"})," problem, which means that the ",(0,r.jsx)(n.code,{children:"zip"})," method is only defined for ",(0,r.jsx)(n.code,{children:"9 arguments"})," in Arrow but can be defined for any ",(0,r.jsx)(n.code,{children:"n"})," number of arguments.\nThe DSL, and ",(0,r.jsx)(n.code,{children:"bind"}),", don't suffer from this problem, and it's possible to use ",(0,r.jsx)(n.code,{children:"bind"})," with any number of arguments thus getting rid of this problem. See ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/72782045/arrow-validation-more-then-10-fields/72782420#72782420",children:"this question on StackOverflow"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's look at a simple example to illustrate the difference between ",(0,r.jsx)(n.code,{children:"zip"}),", and the ",(0,r.jsx)(n.em,{children:"new"})," resulting code.\nWe'll be using ",(0,r.jsx)(n.code,{children:"Either"})," in this example, but it should be the same for any other data type that has a ",(0,r.jsx)(n.code,{children:"zip"})," method."]}),"\n",(0,r.jsx)(n.admonition,{title:"accumulating errors",type:"warning",children:(0,r.jsxs)(n.p,{children:["If you're refactoring code using ",(0,r.jsx)(n.code,{children:"Validated"})," check the ",(0,r.jsx)(n.a,{href:"#validated--either",children:"Validated & Either"})," section."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun one(): Either<String, Int> = Either.Right(1)\n\nval old: Either<String, Int> = one().zip(one()) { x, y -> x + y }\n\nval new: Either<String, Int> =\n  either { one().bind() + one().bind() }\n\nval new2 : Either<String, Int> = either { \n  val x = one().bind()\n  val y = one().bind()\n  x + y\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"validated--either",children:"Validated & Either"}),"\n",(0,r.jsxs)(n.p,{children:["In Arrow 1.2.0-RC we've deprecated ",(0,r.jsx)(n.code,{children:"Validated"})," in favor of ",(0,r.jsx)(n.code,{children:"Either"}),", and ",(0,r.jsx)(n.code,{children:"ValidatedNel"})," in favor of ",(0,r.jsx)(n.code,{children:"EitherNel"}),".\nRationale was that ",(0,r.jsx)(n.code,{children:"Either"})," and ",(0,r.jsx)(n.code,{children:"Validated"})," offer the same abstraction of ",(0,r.jsx)(n.em,{children:"either"})," an error of type ",(0,r.jsx)(n.code,{children:"E"})," or a value of type ",(0,r.jsx)(n.code,{children:"A"}),".\nThe main reason is that ",(0,r.jsx)(n.code,{children:"zip"})," and ",(0,r.jsx)(n.code,{children:"traverse"})," behave differently in these data types. Where ",(0,r.jsx)(n.code,{children:"Validated"})," allows ",(0,r.jsx)(n.em,{children:"accumulating errors"})," using ",(0,r.jsx)(n.code,{children:"zip"})," and ",(0,r.jsx)(n.code,{children:"traverse"}),", ",(0,r.jsx)(n.code,{children:"Either"})," short-circuits on the first error."]}),"\n",(0,r.jsxs)(n.p,{children:["This behavior can be bridged by concrete APIs in the new ",(0,r.jsx)(n.code,{children:"Raise"})," DSL whilst supporting ",(0,r.jsx)(n.strong,{children:"both"})," working over ",(0,r.jsx)(n.code,{children:"E"})," and ",(0,r.jsx)(n.code,{children:"NonEmptyList<E>"})," in singular APIs.\nSo you don't have to redundantly lift all your return types to work over ",(0,r.jsx)(n.code,{children:"NonEmptyList<E>"})," when you're actually returning a single error ",(0,r.jsx)(n.code,{children:"E"}),". That can be transparently supported inside the new ",(0,r.jsx)(n.code,{children:"Raise"})," DSL APIs to ",(0,r.jsx)(n.em,{children:"accumulate"})," errors.\nThese new APIs still support ",(0,r.jsx)(n.code,{children:"Validated"})," until it's actually removed in Arrow 2.0.0, and we advise to migrate those before actually migrating ",(0,r.jsx)(n.code,{children:"Validated"})," to ",(0,r.jsx)(n.code,{children:"Either"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To migrate from ",(0,r.jsx)(n.code,{children:"Validated"})," to ",(0,r.jsx)(n.code,{children:"Either"})," you need to simply construct ",(0,r.jsx)(n.code,{children:"Either"})," values instead of ",(0,r.jsx)(n.code,{children:"Validated"}),", and leverage the new APIs clarified below."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Semi-automatic migration using ReplaceWith"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start leveraging the ",(0,r.jsx)(n.code,{children:"Raise"})," ",(0,r.jsx)(n.em,{children:"accumulate error"})," APIs before migrating ",(0,r.jsx)(n.code,{children:"Validated"})," to ",(0,r.jsx)(n.code,{children:"Either"}),": ",(0,r.jsx)(n.code,{children:"zip"})," -> ",(0,r.jsx)(n.code,{children:"zipOrAccumulate"})," & ",(0,r.jsx)(n.code,{children:"traverse"})," to ",(0,r.jsx)(n.code,{children:"mapOrAccumulate"})," using ",(0,r.jsx)(n.em,{children:"Replace in entire project action"})," from IntelliJ"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Migrate all remaining APIs to their ",(0,r.jsx)(n.code,{children:"Either"})," equivalent ",(0,r.jsx)(n.code,{children:"tapInvalid"}),", ",(0,r.jsx)(n.code,{children:"withEither"}),", etc. All overlapping APIs such as ",(0,r.jsx)(n.code,{children:"map"}),", ",(0,r.jsx)(n.code,{children:"fold"}),", ",(0,r.jsx)(n.code,{children:"getOrElse"})," can be ignored."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Migrate all constructors:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Validated.Valid"})," -> ",(0,r.jsx)(n.code,{children:"Either.Right"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Validated.Invalid"})," -> ",(0,r.jsx)(n.code,{children:"Either.Left"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"A.valid()"})," -> ",(0,r.jsx)(n.code,{children:"A.right()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"A.validNel()"})," -> ",(0,r.jsx)(n.code,{children:"A.right()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"E.invalid()"})," -> ",(0,r.jsx)(n.code,{children:"E.left()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"E.invalidNel()"})," -> ",(0,r.jsx)(n.code,{children:"E.leftNel()"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Replace in entire project ",(0,r.jsx)(n.code,{children:"Either#toEither()"})," intermediate method"]}),"\n"]}),"\n"]}),(0,r.jsx)("video",{width:"100%",height:"100%","data-autoplay":!0,"data-loop":!0,src:"https://user-images.githubusercontent.com/12424668/220732907-27933876-3349-41d5-b0f2-a53b12f2f217.mov",type:"video/webm"})]}),"\n",(0,r.jsx)(n.h3,{id:"traverse--maporaccumulate",children:"Traverse ~> mapOrAccumulate"}),"\n",(0,r.jsxs)(n.p,{children:["The behavior of ",(0,r.jsx)(n.code,{children:"traverse"})," for ",(0,r.jsx)(n.code,{children:"Validated"})," is now supported by ",(0,r.jsx)(n.code,{children:"mapOrAccumulate"})," so let's take a quick look at what it looks like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'fun one(): Either<String, Int> = "error-1".left()\nfun two(): Either<NonEmptyList<String>, Int> = nonEmptyListOf("error-2", "error-3").left()\n\nfun example() {\n  listOf(1, 2).mapOrAccumulate {\n    one().bind()\n  } shouldBe nonEmptyListOf("error-1", "error-1").left()\n  \n  listOf(1, 2).mapOrAccumulate {\n    two().bind()\n  } shouldBe nonEmptyListOf("error-2", "error-3", "error-2", "error-3").left()\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"zip-1",children:"Zip"}),"\n",(0,r.jsxs)(n.p,{children:["The behavior of ",(0,r.jsx)(n.code,{children:"zip"})," for ",(0,r.jsx)(n.code,{children:"Validated"})," is now supported by ",(0,r.jsx)(n.code,{children:"zipOrAccumulate"})," so let's take a quick look at what it looks like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'fun one(): Either<String, Int> = "error-1".left()\nfun two(): Either<NonEmptyList<String>, Int> = nonEmptyListOf("error-2", "error-3").left()\n\nfun example() {\n  either<NonEmptyList<String>, Int> {\n    zipOrAccumulate(\n      { one().bind() },\n      { two().bindNel() }\n    ) { x, y -> x + y }\n  } shouldBe nonEmptyListOf("error-1", "error-2", "error-3").left()\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"semigroup--monoid",children:"Semigroup & Monoid"}),"\n",(0,r.jsxs)(n.p,{children:["Both ",(0,r.jsx)(n.code,{children:"Semigroup"})," and ",(0,r.jsx)(n.code,{children:"Monoid"})," are deprecated in Arrow ",(0,r.jsx)(n.code,{children:"1.2.0"})," and will be removed in ",(0,r.jsx)(n.code,{children:"2.0.0"}),". The migration of\nsome deprecated methods may need to add an extra manual step, besides the automatic replacement."]}),"\n",(0,r.jsx)(n.h3,{id:"foldmap",children:"foldMap"}),"\n",(0,r.jsxs)(n.p,{children:["The replacement of deprecated ",(0,r.jsx)(n.code,{children:"foldMap"})," for ",(0,r.jsx)(n.code,{children:"Iterable"}),", ",(0,r.jsx)(n.code,{children:"Option"})," and ",(0,r.jsx)(n.code,{children:"Either"})," requires to replace the ",(0,r.jsx)(n.code,{children:"Monoid"})," parameter\nwith an ",(0,r.jsx)(n.code,{children:"empty"})," value of the type contained in the removed ",(0,r.jsx)(n.code,{children:"Monoid"}),".\nLet's see this in action:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'fun booleanToString(b: Boolean): String = if (b) "IS TRUE! :)" else "IS FALSE.... :(" \n\nfun deprecatedFoldMap() {\n   val e1: Either<String, Boolean> = false.right()\n   e1.foldMap(Monoid.string(), ::booleanToString) shouldBe "IS FALSE.... :("\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// Executing automatic replacement\nfun migrateFoldMap() {\n   val e1: Either<String, Boolean> = false.right()\n   e1.fold({empty}, ::booleanToString) shouldBe "IS FALSE.... :(" // empty is not found\n}\n \n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'// Adding the empty value to complete the replacement of the deprecated method\nfun migrateFoldMap() {\n   val e1: Either<String, Boolean> = false.right()\n   e1.fold({""}, ::booleanToString) shouldBe "IS FALSE.... :("\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"combine",children:"combine"}),"\n",(0,r.jsxs)(n.p,{children:["All deprecated ",(0,r.jsx)(n.code,{children:"combine"})," methods are suggested to be replaced by the lambda ",(0,r.jsx)(n.code,{children:"{a, b -> a + b}"}),", which will cover almost all\npossible replacements successfully. One of the cases that will need some manual fix is the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun deprecatedZip() {\n   val nullableLongMonoid = object : Monoid<Long?> {\n      override fun empty(): Long? = 0\n      override fun Long?.combine(b: Long?): Long? =\n         nullable { this@combine.bind() + b.bind() }\n   }\n\n   val validated: Validated<Long?, Int?> = 3.valid()\n   val res = validated.zip(nullableLongMonoid, Valid(Unit)) { a, _ -> a } // zip and Monoid are deprecated\n   res shouldBe Validated.Valid(3)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When we replace the deprecated ",(0,r.jsx)(n.code,{children:"zip"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Executing automatic replacement\nfun migrateZip(){ \n   val validated: Validated<Long?, Int?> = 3.valid()\n   val res = Either.zipOrAccumulate(\n      { e1, e2 -> e1 + e2 }, // compilation error\n      validated.toEither(), \n      Valid(Unit).toEither()\n   ) { a, _ -> a }.toValidated()\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, we do not have the ",(0,r.jsx)(n.code,{children:"+"})," operation for ",(0,r.jsx)(n.code,{children:"Long?"}),", so we need to add it manually:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun migrateZip() {\n   val validated: Validated<Long?, Int?> = 3.valid()\n   val res = Either.zipOrAccumulate(\n      { e1, e2 -> nullable { e1.bind() + e2.bind() } },\n      validated.toEither(),\n      Valid(Unit).toEither()\n   ) { a, _ -> a }.toValidated()\n   res shouldBe Validated.Valid(3)\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"combineall",children:"combineAll"}),"\n",(0,r.jsxs)(n.p,{children:["In a similar situation like ",(0,r.jsx)(n.a,{href:"#foldmap",children:"foldMap"}),", the replacement of deprecated ",(0,r.jsx)(n.code,{children:"combineAll"})," for ",(0,r.jsx)(n.code,{children:"Iterable"}),", ",(0,r.jsx)(n.code,{children:"Option"})," and\n",(0,r.jsx)(n.code,{children:"Validate"})," needs to add manually the ",(0,r.jsx)(n.code,{children:"initial"})," parameter, in the replacement with ",(0,r.jsx)(n.code,{children:"fold"})," method. Let's do a replacement\nto see how to achieve this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun deprecatedCombineAll() {\n   val l: List<Int> = listOf(1, 2, 3, 4, 5)\n   l.combineAll(Monoid.int()) shouldBe 10\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Executing automatic replacement\nfun migrateCombineAll(){\n   val l: List<Int> = listOf(1, 2, 3, 4, 5) \n   l.fold(initial) { a1, a2 -> a1 + a2 } shouldBe 10 // initial is not found\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// Adding the initial value to complete the replacement of the deprecated method\nfun migrateCombineAll() {\n   val l: List<Int> = listOf(1, 2, 3, 4, 5)\n   l.fold(0) { a1, a2 -> a1 + a2 } shouldBe 10\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"replicate",children:"replicate"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"replicate"})," also needs a bit of ",(0,r.jsx)(n.em,{children:"help"})," when removing the deprecated ",(0,r.jsx)(n.code,{children:"Monoid"})," for ",(0,r.jsx)(n.code,{children:"Option"})," and ",(0,r.jsx)(n.code,{children:"Either"}),". Again,\n",(0,r.jsx)(n.code,{children:"fold"})," is the recommended replacement method, so we'll need to provide the ",(0,r.jsx)(n.code,{children:"initial"})," parameter in the ",(0,r.jsx)(n.code,{children:"fold"}),". Let's see this\nwith an ",(0,r.jsx)(n.code,{children:"Either"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun deprecatedReplicate() {\n   val rEither: Either<String, Int> = 125.right()\n   val n = 3\n   rEither.replicate(n, Monoid.int()) shouldBe Either.Right(375)\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Executing automatic replacement\nfun migrateReplicate(){\n   val rEither: Either<String, Int> = 125.right() \n   val n = 3\n   val res = if (n <= 0) Either.Right(initial) \n   else rEither.map { b -> List<Int>(n) { b }.fold(initial) { r, t -> r + t } } // initial is not found\n   res shouldBe Either.Right(375)\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// Adding the empty value to complete the replacement of the deprecated method\nfun migrateReplicate() {\n   val rEither: Either<String, Int> = 125.right()\n   val n = 3\n   val res = if (n <= 0) Either.Right(0)\n   else rEither.map { b -> List<Int>(n) { b }.fold(0) { r, t -> r + t } }\n\n   res shouldBe Either.Right(375)\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ior",children:"Ior"}),"\n",(0,r.jsxs)(n.p,{children:["Most of the ",(0,r.jsx)(n.code,{children:"Ior"})," data type deprecated method migrations related to ",(0,r.jsx)(n.code,{children:"traverse"})," and ",(0,r.jsx)(n.code,{children:"crosswalk"}),",\nmust be replaced manually. The main reason is that ",(0,r.jsx)(n.code,{children:"Intellij"})," does not know how to infer some types when we're using\ngenerics. Although this situation can be a bit annoying, this is a good excuse for the user to navigate and get more expertise\non the ",(0,r.jsx)(n.code,{children:"Arrow"})," source code. Let's see a few examples to be more familiar with these special cases:"]}),"\n",(0,r.jsx)(n.h3,{id:"crosswalk",children:"crosswalk"}),"\n",(0,r.jsxs)(n.p,{children:["Given the ",(0,r.jsx)(n.code,{children:"Ior"})," implementation of ",(0,r.jsx)(n.code,{children:"crosswalk"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"public inline fun <C> crosswalk(fa: (B) -> Iterable<C>): List<Ior<A, C>> =\n    fold(\n      { emptyList() },\n      { b -> fa(b).map { Right(it) } },\n      { a, b -> fa(b).map { Both(a, it) } }\n    )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And an example that use ",(0,r.jsx)(n.code,{children:"crosswalk"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun deprecatedCrosswalk() {\n   val rightIor: Ior<String, Int> = Ior.Right(124)\n   val result = rightIor.crosswalk { listOf(it) }\n   result shouldBe listOf(Ior.Right(124))\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result of replacing manually the ",(0,r.jsx)(n.code,{children:"crosswalk"})," call using the ",(0,r.jsx)(n.code,{children:"fold"})," implementation would be:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun migrateCrosswalk() {\n   val rightIor: Ior<String, Int> = Ior.Right(124)\n   val result = rightIor.fold(\n      { emptyList<Int>() },\n      { b -> listOf(b).map { Ior.Right(it) } },\n      { a, b -> listOf(b).map { Ior.Both(a, it) } }\n   )\n   result shouldBe listOf(Ior.Right(124))\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"traverse-1",children:"traverse"}),"\n",(0,r.jsxs)(n.p,{children:["In a similar situation we have the ",(0,r.jsx)(n.code,{children:"Ior"})," ",(0,r.jsx)(n.code,{children:"traverse"})," method for a function that returns an ",(0,r.jsx)(n.code,{children:"Option"}),".\nGiven the implementation of ",(0,r.jsx)(n.code,{children:"traverse"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"public inline fun <C> traverse(fa: (B) -> Option<C>): Option<Ior<A, C>> {\n    return fold(\n      { a -> Some(Left(a)) },\n      { b -> fa(b).map { Right(it) } },\n      { a, b -> fa(b).map { Both(a, it) } }\n    )\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And an example that use ",(0,r.jsx)(n.code,{children:"traverse"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun evenOpt(i: Int): Option<Int> = if(i % 2 == 0) i.some() else None\n\nfun deprecatedTraverse() {\n   val rightIor: Ior<String, Int> = Ior.Right(124)\n   val result = rightIor.traverse { evenOpt(it) }\n\n   result shouldBe Some(Ior.Right(124))\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result of replacing manually the ",(0,r.jsx)(n.code,{children:"traverse"})," call using the ",(0,r.jsx)(n.code,{children:"fold"})," implementation would be:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun evenOpt(i: Int): Option<Int> = if(i % 2 == 0) i.some() else None\n\nfun migrateTraverse() {\n   val rightIor: Ior<String, Int> = Ior.Right(124)\n   val result = rightIor.fold(\n      { a -> Some(Ior.Left(a)) },\n      { b -> evenOpt(b).map { Ior.Right(it) } },\n      { a, b -> evenOpt(b).map { Ior.Both(a, it) } }\n   )\n\n   result shouldBe Some(Ior.Right(124))\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var r=i(67294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7457],{7577:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var a=s(5893),l=s(1151);const i={author:"Tomasz Godzik",title:"Metals v0.10.1 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},n=void 0,h={permalink:"/metals/blog/2021/04/06/tungsten",source:"@site/blog/2021-04-06-tungsten.md",title:"Metals v0.10.1 - Tungsten",description:"We're happy to announce the release of Metals v0.10.1, which mainly concentrated",date:"2021-04-06T00:00:00.000Z",formattedDate:"April 6, 2021",tags:[],readingTime:6.775,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.10.1 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},unlisted:!1,prevItem:{title:"Metals v0.10.2 - Tungsten",permalink:"/metals/blog/2021/04/20/tungsten"},nextItem:{title:"Metals v0.10.0 - Tungsten",permalink:"/metals/blog/2021/02/24/tungsten"}},r={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Smoother main and test discovery",id:"smoother-main-and-test-discovery",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.1 (2021-04-06)",id:"v0101-2021-04-06",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"We're happy to announce the release of Metals v0.10.1, which mainly concentrated\non bugfixes together with a couple of smaller improvements. We also added\nsupport for the almost ready Scala 3 version 3.0.0-RC2. Its final release is\ncoming soon and Metals will try to make it an amazing experience!"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Commits since last release"}),(0,a.jsx)("td",{align:"center",children:"173"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Merged PRs"}),(0,a.jsx)("td",{align:"center",children:"86"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Contributors"}),(0,a.jsx)("td",{align:"center",children:"9"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Closed issues"}),(0,a.jsx)("td",{align:"center",children:"29"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"New features"}),(0,a.jsx)("td",{align:"center",children:"2"})]})]})}),"\n",(0,a.jsxs)(t.p,{children:["For full details: ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/35?closed=1",children:"https://github.com/scalameta/metals/milestone/35?closed=1"})]}),"\n",(0,a.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,a.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,a.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,a.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,a.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsxs)(t.p,{children:["Check out ",(0,a.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Support for Scala 3.0.0-RC2"}),"\n",(0,a.jsx)(t.li,{children:"Smoother main and test discovery"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"smoother-main-and-test-discovery",children:"Smoother main and test discovery"}),"\n",(0,a.jsxs)(t.p,{children:["Thanks to some great ideas (and obviously execution) by\n",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"@ckipp01"})," it is now possible to specify alternative\ndebug parameters that enable users to:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Run the main class in the current file, or in case that there are multiple\nmain classes quick pick window will appear for the users to choose the exact\nmain class to run."}),"\n",(0,a.jsx)(t.li,{children:"Run all tests in the current file."}),"\n",(0,a.jsx)(t.li,{children:"Run all tests in the current target."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To make that work some additional fields must be sent while starting the debug\nsession:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"path"})," - uri to the file that is currently open."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"runType"})," - enum value that can either be ",(0,a.jsx)(t.code,{children:"run"}),", ",(0,a.jsx)(t.code,{children:"testFile"})," or ",(0,a.jsx)(t.code,{children:"testTarget"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'The "args", "jvmOptions", "env", and "envFile" are all valid keys that can be\nsent as well with the same format as usual.'}),"\n",(0,a.jsx)(t.p,{children:"In VS Code this is achieved via 3 new commands, that can easily bound to\nshortcuts:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"metals.run-current-file"})," - run main classes in the current file"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"metals.test-current-file"})," - run test classes in the current file"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"metals.test-current-target"})," - run test classes in the current target"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["More information can be found in the\n",(0,a.jsx)(t.a,{href:"https://scalameta.org/metals/docs/integrations/debug-adapter-protocol#how-to-add-support-for-debugging-in-my-editor",children:"Debug Adapter Protocol"}),"\nsection of the documentation."]}),"\n",(0,a.jsx)(t.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Support for Ammonite scripts using Scala 2.12.13 and 2.13.5."}),"\n",(0,a.jsx)(t.li,{children:"Fix outline for documents with Scala 3 syntax."}),"\n",(0,a.jsx)(t.li,{children:"Remove println that would sometimes print files while indexing them :("}),"\n",(0,a.jsx)(t.li,{children:"Show an error when user adds bad dependency into a worksheet."}),"\n",(0,a.jsx)(t.li,{children:"Fix issues on Windows with renames not being applied on current file."}),"\n",(0,a.jsx)(t.li,{children:"Change project directory to lower case when using New Scala Project."}),"\n",(0,a.jsx)(t.li,{children:"Renaming renamed imports now works correctly within a file."}),"\n",(0,a.jsx)(t.li,{children:"Fix renaming named parameters in constructors."}),"\n",(0,a.jsx)(t.li,{children:"Find alternative symbol references (such as companion object for a case class)\nwhen not searching from the definition file."}),"\n",(0,a.jsx)(t.li,{children:"Automatically backtick symbols when renaming."}),"\n",(0,a.jsx)(t.li,{children:"Fix highlighting overloaded methods."}),"\n",(0,a.jsx)(t.li,{children:"Fix classloader issues when using worksheets."}),"\n",(0,a.jsx)(t.li,{children:"Fix issue where override was inserted twice for symbols that were already\noverriden."}),"\n",(0,a.jsx)(t.li,{children:"Infer type for higher kinded functions correctly."}),"\n",(0,a.jsx)(t.li,{children:"Show better type decorations for higher kinded types."}),"\n",(0,a.jsxs)(t.li,{children:["Improve indexing of Scala 3 sources, a lot of hard work by\n",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"@dos65"}),"!"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,a.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.10.0..v0.10.1\nTomasz Godzik\nChris Kipp\nVadim Chelyshov\nAJ Zawawi\nAlexandre Archambault\nArthur McGibbon\nEric Peters\nGreg Atkinson\nMicha\u0142 Bednarz\n"})}),"\n",(0,a.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,a.jsxs)(t.h2,{id:"v0101-2021-04-06",children:[(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.10.1",children:"v0.10.1"})," (2021-04-06)"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.10.0...v0.10.1",children:"Full Changelog"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Get behind unified slash syntax.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2677",children:"#2677"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Mtags: fix Scala3 parsing for Windows.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2678",children:"#2678"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update org.eclipse.lsp4j to 0.12.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2669",children:"#2669"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix issues with old typesafe config in the worksheets\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2674",children:"#2674"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-ci-release to 1.5.7\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2671",children:"#2671"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala3] Support new Scala3 syntax in symbol index\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2600",children:"#2600"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalameta to 4.4.11\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2667",children:"#2667"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update requests to 0.6.6\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2649",children:"#2649"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["A few changes to docs including a User Configuration section.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2642",children:"#2642"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mdoc_2.12, sbt-mdoc to 2.2.19\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2660",children:"#2660"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafix-interfaces to 0.9.27\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2664",children:"#2664"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update pprint to 0.6.3 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2648",children:"#2648"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scribe, scribe-file, scribe-slf4j to 3.5.1\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2651",children:"#2651"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update guava to 30.1.1-jre\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2647",children:"#2647"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update directories to 24\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2652",children:"#2652"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update coursier to 2.0.16\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2653",children:"#2653"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ammonite-runner to 0.3.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2654",children:"#2654"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update undertow-core to 2.2.7.Final\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2655",children:"#2655"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update jna, jna-platform to 5.8.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2656",children:"#2656"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 7.7.1\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2658",children:"#2658"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update jol-core to 0.15\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2659",children:"#2659"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update munit-docs, sbt-munit to 0.7.23\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2661",children:"#2661"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ujson to 1.3.9 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2650",children:"#2650"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-scalafix, scalafix-interfaces to 0.9.27\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2645",children:"#2645"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-debug-adapter to 1.1.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2644",children:"#2644"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-dotty to 0.5.4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2643",children:"#2643"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add test to check for occurrences of anonymous using params\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2640",children:"#2640"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Make sure that universal types deco are printed properly\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2638",children:"#2638"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add support for Scala 3.0.0-RC2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2639",children:"#2639"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Make sure higher kinded functions in signatures are inferred properly\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2636",children:"#2636"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Do not insert override twice\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2635",children:"#2635"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update geny to 0.6.7 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2633",children:"#2633"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Use correct parent classloader for worksheets.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2631",children:"#2631"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add documentation for online IDEs\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2370",children:"#2370"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/MichalBednarz",children:"MichalBednarz"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Bump amm version and amm scala 2.13 version\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2632",children:"#2632"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update organize imports rule to 0.5.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2630",children:"#2630"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Welcome Adrien to the team!\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2623",children:"#2623"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Welcome Vadim to the team!\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2624",children:"#2624"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix highlighting overloaded methods\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2622",children:"#2622"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Run Scala 3 migrate on mtags sources\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2617",children:"#2617"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update dead links ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2620",children:"#2620"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ajzawawi",children:"ajzawawi"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add init option to strip color from DAP communication.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2615",children:"#2615"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Show better message if no semanticdb is found for testFile.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2602",children:"#2602"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Automatically backtick symbols when renaming\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2605",children:"#2605"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 7.7.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2612",children:"#2612"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Revert cache-action update\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2614",children:"#2614"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Find alternative symbol references when not searching from the definition file\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2601",children:"#2601"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt, scripted-plugin to 1.4.9\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2613",children:"#2613"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update undertow-core to 2.2.5.Final\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2611",children:"#2611"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scribe, scribe-file, scribe-slf4j to 3.5.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2610",children:"#2610"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-ci-release to 1.5.6\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2607",children:"#2607"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update pprint to 0.6.2 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2608",children:"#2608"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update jackson-databind to 2.12.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2606",children:"#2606"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix renaming renamed imports when cursor is at the rename\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2604",children:"#2604"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ujson to 1.3.0 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2609",children:"#2609"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Link to the actual metals client commands\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2603",children:"#2603"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Handle changed but locked files on Windows\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2599",children:"#2599"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/Arthurm1",children:"Arthurm1"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Upgrade Coursier from 2.0.12 to 2.0.13 for bootstrap launcher enhancement to\ndownload artifacts using global credentials.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2597",children:"#2597"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/greg-a-atkinson",children:"greg-a-atkinson"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add tests for Scala 3 semanticdb and additional ones for hovers\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2589",children:"#2589"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix renaming named parameters in constructors\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2596",children:"#2596"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Run recent snapshot of scalafmt on Scala 3 sources\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2587",children:"#2587"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update cache-action to v6\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2588",children:"#2588"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/alexarchambault",children:"alexarchambault"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix renaming renamed imports\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2586",children:"#2586"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Change project directory to lower case when using New Scala Project\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2585",children:"#2585"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Set compilationUnit when using Dotty parser\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2584",children:"#2584"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Try to capture a better message on BSP exceptions.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2581",children:"#2581"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Smoother main and test discovery\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2532",children:"#2532"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update millw scripts to the latest released ones\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2579",children:"#2579"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update metals doctor hint to match exact 'Import build' instead of 'Build\nimport' ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2578",children:"#2578"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/er1c",children:"er1c"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafix ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2577",children:"#2577"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala 3] Don't suggest inferred type code action\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2576",children:"#2576"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix issues with renames on Windows\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2574",children:"#2574"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Ensure token edit distance is always calculated with correct dialect.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2552",children:"#2552"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala3] FoldingRange - tests for new syntax\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2543",children:"#2543"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update munit-docs, sbt-munit to 0.7.22\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2572",children:"#2572"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update interface to 1.0.3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2567",children:"#2567"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mdoc_2.12, sbt-mdoc to 2.2.18\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2571",children:"#2571"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 7.5.4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2568",children:"#2568"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update coursier to 2.0.12\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2566",children:"#2566"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scribe, scribe-file, scribe-slf4j to 3.4.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2565",children:"#2565"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-scalafix, scalafix-interfaces to 0.9.26\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2564",children:"#2564"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Show an error to the user if they are using a bad dep in a worksheet.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2560",children:"#2560"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Remove println in SemanticdbTextDocumentProvider\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2557",children:"#2557"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala3] DocumentSymbols - use proper dialect for tree rendering\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2553",children:"#2553"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add support for Ammonite scripts with Scala 2.12.13\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2548",children:"#2548"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add release notes for Metals v0.10.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2529",children:"#2529"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>n});var a=s(7294);const l={},i=a.createContext(l);function n(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
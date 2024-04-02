"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7475],{1801:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var a=s(4848),i=s(8453);const l={author:"Tomasz Godzik",title:"Metals v0.10.3 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},n=void 0,r={permalink:"/metals/blog/2021/05/17/tungsten",source:"@site/blog/2021-05-17-tungsten.md",title:"Metals v0.10.3 - Tungsten",description:"We're happy to announce the release of Metals v0.10.3, which brings support for",date:"2021-05-17T00:00:00.000Z",tags:[],readingTime:4.73,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.10.3 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},unlisted:!1,prevItem:{title:"Metals v0.10.4 - Tungsten",permalink:"/metals/blog/2021/05/31/tungsten"},nextItem:{title:"Metals v0.10.2 - Tungsten",permalink:"/metals/blog/2021/04/20/tungsten"}},c={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Extract class code action",id:"extract-class-code-action",level:2},{value:"Rename file as class",id:"rename-file-as-class",level:2},{value:"[Scala 3] Auto imports in completions and code actions",id:"scala-3-auto-imports-in-completions-and-code-actions",level:2},{value:"Support same names in different build targets",id:"support-same-names-in-different-build-targets",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.3 (2021-05-17)",id:"v0103-2021-05-17",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"We're happy to announce the release of Metals v0.10.3, which brings support for\nthe long awaited Scala 3.0.0 version together with some important improvements."}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Commits since last release"}),(0,a.jsx)("td",{align:"center",children:"104"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Merged PRs"}),(0,a.jsx)("td",{align:"center",children:"49"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Contributors"}),(0,a.jsx)("td",{align:"center",children:"6"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Closed issues"}),(0,a.jsx)("td",{align:"center",children:"12"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"New features"}),(0,a.jsx)("td",{align:"center",children:"6"})]})]})}),"\n",(0,a.jsxs)(t.p,{children:["For full details: ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/38?closed=1",children:"https://github.com/scalameta/metals/milestone/38?closed=1"})]}),"\n",(0,a.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,a.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,a.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,a.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,a.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsxs)(t.p,{children:["Check out ",(0,a.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[Scala 3] Scala 3.0.0 support!"}),"\n",(0,a.jsxs)(t.li,{children:["Scala 2.13.6 along with ",(0,a.jsx)(t.code,{children:"-Xsource:3"})," support."]}),"\n",(0,a.jsx)(t.li,{children:"Extract class code action."}),"\n",(0,a.jsx)(t.li,{children:"Rename file as class."}),"\n",(0,a.jsx)(t.li,{children:"[Scala 3] Auto imports in completions and code actions."}),"\n",(0,a.jsx)(t.li,{children:"Support same names in different build targets."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"extract-class-code-action",children:"Extract class code action"}),"\n",(0,a.jsxs)(t.p,{children:["Due to the great work by ",(0,a.jsx)(t.a,{href:"https://github.com/Giggiux",children:"@Giggiux"})," Metals now\nprovides a new ",(0,a.jsx)(t.code,{children:"Extract to file"})," code action, which is available when there are\nmultiple definitions in the source file. This works for classes, traits, enums,\nand objects. The code action will not show if the definition we are extracting\nis or extends a ",(0,a.jsx)(t.code,{children:"sealed"})," definition."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/dKKkLcL.gif",alt:"gif1"})}),"\n",(0,a.jsx)(t.p,{children:"The extraction happens via a code action on the definition's name, it will also\nextract any relevant package definition, imports, and, if available, the\ncompanion."}),"\n",(0,a.jsx)(t.h2,{id:"rename-file-as-class",children:"Rename file as class"}),"\n",(0,a.jsx)(t.p,{children:"It is also now possible when there is only a single definition in a file that\ndoesn't have the same name as the definition, to quickly rename the file\naccording to its content."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/pUADnMn.gif",alt:"gif2"})}),"\n",(0,a.jsx)(t.h2,{id:"scala-3-auto-imports-in-completions-and-code-actions",children:"[Scala 3] Auto imports in completions and code actions"}),"\n",(0,a.jsxs)(t.p,{children:["Previously, the experience of writing Scala 3 code might be spoiled because\nthese usual features weren't implemented for Scala 3 in Metals. We are happy to\nsay that there is no more need to write imports by hand and remember the exact\npath to the symbol. Now, completions in Scala 3 sources provide symbols from the\nworkspace and libraries and their application automatically adds the necessary\nimport. Code action ",(0,a.jsx)(t.code,{children:"AutoImport"})," also started working."]}),"\n",(0,a.jsx)(t.p,{children:"Enjoy writing Scala 3!"}),"\n",(0,a.jsxs)(t.p,{children:["This required some huge amounts of effort and is working thanks to\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")."]}),"\n",(0,a.jsx)(t.h3,{id:"support-same-names-in-different-build-targets",children:"Support same names in different build targets"}),"\n",(0,a.jsxs)(t.p,{children:["This change fixes navigation issues that previously happened in case of having\nclashing names across libraries and projects. An additional thing you might\nnotice with this change is the presence of library names in ",(0,a.jsx)(t.code,{children:".metals/readonly"}),"\ndirectory. Previously, for example, if jump into ",(0,a.jsx)(t.code,{children:"String"})," the file was extracted\ninto ",(0,a.jsx)(t.code,{children:"./metals/readonly/scala/Predef.scala"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Now it will be\n",(0,a.jsx)(t.code,{children:"./metals/readonly/dependencies/scala-library-$scalaVersion-sources.jar/scala/Predef.scala"})]}),"\n",(0,a.jsx)(t.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Support names with dots for "Implement all members" code action.'}),"\n",(0,a.jsx)(t.li,{children:"Fix invalid auto imports with wrong prefix."}),"\n",(0,a.jsx)(t.li,{children:'Fix flaky "Organize imports" behaviour.'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,a.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.10.2..v0.10.3\nTomasz Godzik\nLuigi Frunzio\nVadim Chelyshov\nChris Kipp\nAmaal Ali\nEvgeny Kurnevsky\n"})}),"\n",(0,a.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,a.jsxs)(t.h2,{id:"v0103-2021-05-17",children:[(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.10.3",children:"v0.10.3"})," (2021-05-17)"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.10.2...v0.10.3",children:"Full Changelog"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Add support for Scala 2.13.6\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2805",children:"#2805"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala3] Completions - fix ",(0,a.jsx)(t.code,{children:"Renamed"})," and ",(0,a.jsx)(t.code,{children:"specifyOwner"})," Autoimports\napplication ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2804",children:"#2804"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix field ordering in completions\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2803",children:"#2803"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scala3] Completions - do not backtick NamedArg completion values\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2802",children:"#2802"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Forward dialect to ScalaMtags to avoid parsing fallback\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2799",children:"#2799"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Ignore NoSuchFileException since it only comes from badly configured jar\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2797",children:"#2797"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["SemanticdbDefinition - use correct dialect\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2780",children:"#2780"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt-jmh to 0.4.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2794",children:"#2794"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Remove most soft keywords from being backticked.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2796",children:"#2796"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update requests to 0.6.9\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2786",children:"#2786"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update geny to 0.6.10 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2784",children:"#2784"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ujson to 1.3.13 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2787",children:"#2787"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mill-contrib-testng to 0.9.7\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2785",children:"#2785"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update interface to 1.0.4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2788",children:"#2788"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 7.9.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2789",children:"#2789"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt, scripted-plugin to 1.5.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2791",children:"#2791"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalameta, semanticdb-scalac, ... to 4.4.17\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2793",children:"#2793"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scala-java8-compat to 1.0.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2790",children:"#2790"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mdoc, sbt-mdoc to 2.2.21\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2792",children:"#2792"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Delete unused ",(0,a.jsx)(t.code,{children:"Scala3ToplevelMtags"}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2782",children:"#2782"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add support for Scala 3.0.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2779",children:"#2779"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Scala3 - AutoImports and completions from workspace\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2728",children:"#2728"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Code action to move classes to their own files if requirements are met\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2723",children:"#2723"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/Giggiux",children:"Giggiux"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Properly adjust folding range end on windows\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2774",children:"#2774"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Surface error to user when they pass in an invalid envFile.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2770",children:"#2770"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix failing tests: SbtBloopSuite + FoldingRangeSuite (Windows)\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2767",children:"#2767"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update link to Mill's new website\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2772",children:"#2772"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/amaalali",children:"amaalali"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update Scalameta to 4.4.15\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2765",children:"#2765"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafmt-dynamic to 2.7.5\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2761",children:"#2761"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mdoc, sbt-mdoc to 2.2.20\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2759",children:"#2759"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update sbt, scripted-plugin to 1.5.1\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2758",children:"#2758"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 7.8.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2757",children:"#2757"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scribe, scribe-file, scribe-slf4j to 3.5.4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2756",children:"#2756"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ujson to 1.3.12 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2755",children:"#2755"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update requests to 0.6.8\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2754",children:"#2754"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update pprint to 0.6.5 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2753",children:"#2753"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update geny to 0.6.9 ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2752",children:"#2752"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["[Scalafix] Report problems with invalid path and fix flaky behaviour\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2749",children:"#2749"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Toplevel Mtags: use single indexer implementation\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2745",children:"#2745"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix wrong import when working with akka\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2739",children:"#2739"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["SymbolIndex: multiply symbol locations\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2668",children:"#2668"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update emacs documentation.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2733",children:"#2733"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kurnevsky",children:"kurnevsky"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add extra check before auto-connecting to server.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2737",children:"#2737"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Support 3.16.0 lsp specification with compatibility for non ",(0,a.jsx)(t.code,{children:"array"}),"/`\u2026\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2735",children:"#2735"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/Giggiux",children:"Giggiux"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add in the parentUri when offering the newSymbol code action.\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2734",children:"#2734"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ImplementAsbtractMembers"})," - support names with dots\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2732",children:"#2732"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Remove munit sbt plugin to fix CI\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2731",children:"#2731"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Remove test reports ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2730",children:"#2730"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add release notes for Metals 0.10.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2729",children:"#2729"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var a=s(6540);const i={},l=a.createContext(i);function n(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
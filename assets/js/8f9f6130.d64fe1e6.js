"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1667],{7089:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=s(5893),i=s(1151);const l={author:"Rikito Taniguchi",title:"Metals v0.11.6 - Aluminium",authorURL:"https://twitter.com/tanishiking25",authorImageURL:"https://github.com/tanishiking.png"},n=void 0,r={permalink:"/metals/blog/2022/06/03/aluminium",source:"@site/blog/2022-06-03-aluminium.md",title:"Metals v0.11.6 - Aluminium",description:"We're happy to announce the release of Metals v0.11.6 which continues to improve the Scala 3 support along with many other fixes.",date:"2022-06-03T00:00:00.000Z",formattedDate:"June 3, 2022",tags:[],readingTime:7.35,hasTruncateMarker:!1,authors:[{name:"Rikito Taniguchi",url:"https://twitter.com/tanishiking25",imageURL:"https://github.com/tanishiking.png"}],frontMatter:{author:"Rikito Taniguchi",title:"Metals v0.11.6 - Aluminium",authorURL:"https://twitter.com/tanishiking25",authorImageURL:"https://github.com/tanishiking.png"},unlisted:!1,prevItem:{title:"Metals v0.11.7 - Aluminium",permalink:"/metals/blog/2022/07/04/aluminium"},nextItem:{title:"Metals v0.11.5 - Aluminium",permalink:"/metals/blog/2022/04/28/aluminium"}},o={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Reduce file watcher memory usage",id:"reduce-file-watcher-memory-usage",level:2},{value:"[Scala3] Override Completions",id:"scala3-override-completions",level:2},{value:"[Scala3] Show scaladoc on hover for Scala 3 project",id:"scala3-show-scaladoc-on-hover-for-scala-3-project",level:2},{value:"[Scala3] Support <code>completionItem/resolve</code>",id:"scala3-support-completionitemresolve",level:3},{value:"Show parent scaladoc if implementation is returning empty",id:"show-parent-scaladoc-if-implementation-is-returning-empty",level:2},{value:"[Scala 3] Show scaladocs for signature help",id:"scala-3-show-scaladocs-for-signature-help",level:2},{value:"[MUnit] Test Explorer can find helper methods from parent classes",id:"munit-test-explorer-can-find-helper-methods-from-parent-classes",level:2},{value:"Support Cats Effect stacktraces in stacktrace analyzer",id:"support-cats-effect-stacktraces-in-stacktrace-analyzer",level:2},{value:"Improve implement all completion and code action",id:"improve-implement-all-completion-and-code-action",level:2},{value:"Improve rewrite to braces/parenthesis code action",id:"improve-rewrite-to-bracesparenthesis-code-action",level:2},{value:"Automatically setup java home for the Bloop build server",id:"automatically-setup-java-home-for-the-bloop-build-server",level:2},{value:"Support for Scala 3.1.3-RC4, 3.1.3-RC3",id:"support-for-scala-313-rc4-313-rc3",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.11.6 (2022-06-03)",id:"v0116-2022-06-03",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"We're happy to announce the release of Metals v0.11.6 which continues to improve the Scala 3 support along with many other fixes."}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Commits since last release"}),(0,a.jsx)("td",{align:"center",children:"165"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Merged PRs"}),(0,a.jsx)("td",{align:"center",children:"56"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Contributors"}),(0,a.jsx)("td",{align:"center",children:"12"})]})]})}),"\n",(0,a.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the\n",(0,a.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,a.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,a.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,a.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"reduce memory usage in large projects"}),"\n",(0,a.jsx)(t.li,{children:"override completions for Scala3"}),"\n",(0,a.jsx)(t.li,{children:"improved scaladoc support in both Scala2 and Scala3"}),"\n",(0,a.jsx)(t.li,{children:"better UX in the test explorer"}),"\n",(0,a.jsx)(t.li,{children:"automatically setup java home for the Bloop build server"}),"\n",(0,a.jsx)(t.li,{children:"support for Scala 3.1.3-RC3 and RC4"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Check out ",(0,a.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,a.jsx)(t.h2,{id:"reduce-file-watcher-memory-usage",children:"Reduce file watcher memory usage"}),"\n",(0,a.jsx)(t.p,{children:"Previously, Metals consumed a huge amount of memory for file watchers in large projects, especially on macOS.\nNow, Metals uses a memory-efficient way to watch files to detect changes and consume less memory."}),"\n",(0,a.jsxs)(t.p,{children:["For more technical details, see the original PR: ",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3758",children:"#3758"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"scala3-override-completions",children:"[Scala3] Override Completions"}),"\n",(0,a.jsx)(t.p,{children:"Override completions for Scala3 are now available with Metals 0.11.6!\nNow, Metals shows the scaladoc on hover for Scala3 projects. (Before this release, Metals was unable to show the scaladoc for the symbols from third-party modules)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/Go3sMxy.gif",alt:"override-completion"})}),"\n",(0,a.jsx)(t.h2,{id:"scala3-show-scaladoc-on-hover-for-scala-3-project",children:"[Scala3] Show scaladoc on hover for Scala 3 project"}),"\n",(0,a.jsx)(t.p,{children:"Previously, scaladocs were missing for a lot of classes and methods in Scala 3, especially for the symbols from third-party modules. From this release, Metals will always show the scaladoc on hover for Scala3 projects."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/Svzq5DD.png",alt:"hover-scala3"})}),"\n",(0,a.jsxs)(t.h3,{id:"scala3-support-completionitemresolve",children:["[Scala3] Support ",(0,a.jsx)(t.code,{children:"completionItem/resolve"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"completionItem/resolve"})," is a feature that provides on-demand, more detailed information when moving through the list of suggested completions. It will show documentation, proper parameter names for Java methods, and default values for Scala 3 methods. Now, this is also available for use in Scala 3."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/Tz6AOsx.gif",alt:"completion-item-resolve"})}),"\n",(0,a.jsx)(t.h2,{id:"show-parent-scaladoc-if-implementation-is-returning-empty",children:"Show parent scaladoc if implementation is returning empty"}),"\n",(0,a.jsxs)(t.p,{children:["Scaladocs can be inspected whenever you hover, use a completion or signature help. Up until recently we only showed you the documentation if the exact method you are using had the scaladocs written, which meant that if you overrode a method and didn't add the scaladoc comments again we would not show you any documentation. One example of such method is ",(0,a.jsx)(t.code,{children:"headOption"})," on ",(0,a.jsx)(t.code,{children:"List"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"From this release we will also search the parent method in case the current method's scaladoc are empty."}),"\n",(0,a.jsx)(t.h2,{id:"scala-3-show-scaladocs-for-signature-help",children:"[Scala 3] Show scaladocs for signature help"}),"\n",(0,a.jsx)(t.p,{children:"As mentioned in the previous paragraph, Metals can show you documentation in three different places. That, however, was true only for Scala 2 previously. In this release, we will now show you proper documentation whenever invoking signature help."}),"\n",(0,a.jsxs)(t.p,{children:["As a reminder, signature help is used to indicate what parameters can be used in a method. It should pop up automatically after writing ",(0,a.jsx)(t.code,{children:"("}),", but you can also invoke it manually. In VS Code that takes the form of ",(0,a.jsx)(t.code,{children:"editor.action.triggerParameterHints"})," command, which can also be bound to a shortcut and by default is."]}),"\n",(0,a.jsx)(t.h2,{id:"munit-test-explorer-can-find-helper-methods-from-parent-classes",children:"[MUnit] Test Explorer can find helper methods from parent classes"}),"\n",(0,a.jsxs)(t.p,{children:["MUnit allows to use ",(0,a.jsx)(t.a,{href:"https://scalameta.org/munit/docs/tests.html#declare-tests-inside-a-helper-function",children:"helper functions"})," when declaring tests. Very often those helper methods are extracted to some parent classes which are extended by many test suites.\nNow, Metals can find usages of those helper methods and display them in Test Explorer."]}),"\n",(0,a.jsx)(t.p,{children:"This feature is available for Bloop and SBT 1.7.0-M2 or later."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://imgur.com/GGRDpXA.gif",alt:"MUnit-helper-methods"})}),"\n",(0,a.jsx)(t.h2,{id:"support-cats-effect-stacktraces-in-stacktrace-analyzer",children:"Support Cats Effect stacktraces in stacktrace analyzer"}),"\n",(0,a.jsxs)(t.p,{children:["Cats Effect offers ",(0,a.jsx)(t.a,{href:"https://typelevel.org/cats-effect/docs/tracing#asynchronous-stack-tracing",children:"asynchronous stack tracing"})," which augments exceptions with additional information.",(0,a.jsx)(t.br,{}),"\n","Now, Stacktrace Analyzer is able to recognize CE's stacktraces and provide link to location in code. Say no to tedious debugging when you have only stacktrace from the logs!"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://imgur.com/5fMvcYd.gif",alt:"cats-effect-stacktraces"})}),"\n",(0,a.jsx)(t.h2,{id:"improve-implement-all-completion-and-code-action",children:"Improve implement all completion and code action"}),"\n",(0,a.jsxs)(t.p,{children:['Previously, when we invoked the "implement all members" completion and code action, Metals used ',(0,a.jsx)(t.code,{children:"x$0"})," for Java parameter names. Now, Metals fills these with the correct parameter names."]}),"\n",(0,a.jsx)(t.h2,{id:"improve-rewrite-to-bracesparenthesis-code-action",children:"Improve rewrite to braces/parenthesis code action"}),"\n",(0,a.jsxs)(t.p,{children:["Sometimes, it wasn't clear which code would be affected by ",(0,a.jsx)(t.a,{href:"https://scalameta.org/metals/blog/2021/09/06/tungsten#replace--with--in-functions-and-vice-versa",children:"rewrite to braces/parenthesis"})," code action.\nNow, code action's description contains name of the function/method which will be affected by executing action.\n",(0,a.jsx)(t.img,{src:"https://imgur.com/SkHolsJ.gif",alt:"rewrite-braces-parens"}),"\nTheme: ",(0,a.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme",children:"One Dark Pro"})]}),"\n",(0,a.jsx)(t.h2,{id:"automatically-setup-java-home-for-the-bloop-build-server",children:"Automatically setup java home for the Bloop build server"}),"\n",(0,a.jsxs)(t.p,{children:["In previous versions of Metals, if users wanted to change the java version of the Bloop build server, they would need to manually update ",(0,a.jsx)(t.code,{children:".bloop/bloop.json"})," file in their user home directory. With this version, we ensure that the Bloop Java version will correspond to Metals one to avoid weird compilation issues that could arise from different versions being used."]}),"\n",(0,a.jsxs)(t.p,{children:["Now, each time you update ",(0,a.jsx)(t.code,{children:"javaHome"})," or ",(0,a.jsx)(t.code,{children:"bloopJvmProperties"})," settings, Metals will ask you whether to forward those changes to the Bloop configuration file. If you modified that file previously or want to use a custom one, you can dismiss the Metals notification. Otherwise, everything will automatically be set up for you once you decide to apply the changes. If you never created the file, we will create it before starting Bloop, so you should not notice anything out of order."]}),"\n",(0,a.jsx)(t.h2,{id:"support-for-scala-313-rc4-313-rc3",children:"Support for Scala 3.1.3-RC4, 3.1.3-RC3"}),"\n",(0,a.jsx)(t.p,{children:"Metals 0.11.6 supports Scala 3.1.3-RC3 and RC4."}),"\n",(0,a.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,a.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.11.5..v0.11.6\n    34\tRikito Taniguchi\n    18\tTomasz Godzik\n    14\tScala Steward\n    11\tVadim Chelyshov\n    10\tzmerr\n     7\tKamil Podsiadlo\n     5\tPavol Vidli\u010dka\n     5\tckipp01\n     4\tArman Bilge\n     2\tIan Tabolt\n     1\tArthur McGibbon\n     1\ttgodzik\n"})}),"\n",(0,a.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,a.jsxs)(t.h2,{id:"v0116-2022-06-03",children:[(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.11.6",children:"v0.11.6"})," (2022-06-03)"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.11.5...v0.11.6",children:"Full Changelog"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["bugfix: Escape java home path on windows\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3969",children:"#3969"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["bugfix: Remove Wconf from scalac options in worksheets\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3976",children:"#3976"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["bugfix: Show all synthetics inside for comprehensions\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3974",children:"#3974"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: revert temporal changes in completions tests for 3.2.*-NIGHTLY\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3970",children:"#3970"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["docs: remove status-bar as option for slowTaskProvider\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3967",children:"#3967"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["bugfix: Fallback to sourcepath if jar cannot be found\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3962",children:"#3962"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: prevent npe in filewatcher\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3964",children:"#3964"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feat: add function name to rewrite parens/braces code action\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3965",children:"#3965"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["(scala3) Override completions\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3897",children:"#3897"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["actions: return release job lock\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3944",children:"#3944"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix SBT version check in Doctor\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3946",children:"#3946"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/iantabolt",children:"iantabolt"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix issues with synthetics in for comprehension's yield\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3948",children:"#3948"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["chore: Add support for Scala 3.1.3-RC4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3947",children:"#3947"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update Bloop Java Home to that of Metals\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3871",children:"#3871"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/zmerr",children:"zmerr"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["chore: speedup lsp tests\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3925",children:"#3925"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feature: [Scala 3] Show correct inferred type in signature help\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3941",children:"#3941"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["docs(test-explorer): add note about test-user-interface\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3943",children:"#3943"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: avoid out of bounds for editors that treat \\n as a line end\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3942",children:"#3942"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feature: Show scaladocs for signature help\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3934",children:"#3934"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["update ",(0,a.jsx)(t.code,{children:"metals_ref"})," for mtags-release\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3940",children:"#3940"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix nightlies tests and uncomment SignaturePat suite tests\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3932",children:"#3932"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Include proper names when using implement all completion and code action\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3930",children:"#3930"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Fix expression type for inlined methods and show all flags for methods\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3931",children:"#3931"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feature: [Scala 3] Add completion item resolution\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3914",children:"#3914"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["chore(docs): ensure metals_2.12 is replaced with metals_2.13\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3924",children:"#3924"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: symbolSearch - support encoded names from classpath\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3917",children:"#3917"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafmt-dynamic to 3.5.3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3921",children:"#3921"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update mill-contrib-testng to 0.10.4\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3920",children:"#3920"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalameta, semanticdb-scalac, ... to 4.5.6\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3922",children:"#3922"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafmt-core to 3.5.3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3916",children:"#3916"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["chore: update scala3 version in welcome msg\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3919",children:"#3919"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["chore, docs: simplify cats-effect stacktrace regex, add docstring\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3918",children:"#3918"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["refactor: fix warning from Scala3 in ScaladocParser.scala\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3912",children:"#3912"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add support for Scala 3.1.3-RC3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3911",children:"#3911"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update Bloop and Scala Debug adapter\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3910",children:"#3910"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: scala3 - do not provide completions for invalid quals\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3909",children:"#3909"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feat, test explorer: search for test methods in parent classes\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3898",children:"#3898"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add semanticdb-javac to ",(0,a.jsx)(t.code,{children:"TestInternal"}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3907",children:"#3907"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/armanbilge",children:"armanbilge"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update munit to newest milestone\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3906",children:"#3906"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["docs: fix broken documents (Integrating a new editor)\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3905",children:"#3905"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["fix: broken link display in vim docs\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3904",children:"#3904"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["feat: handle cats-effect async stacktrace in stacktrace analyzer\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3900",children:"#3900"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Don't create the Presentation Compiler for Java files\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3887",children:"#3887"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Handle modules in stacktrace analyzer\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3896",children:"#3896"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/Arthurm1",children:"Arthurm1"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalafmt-dynamic to 3.5.2\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3893",children:"#3893"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ujson to 2.0.0\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3890",children:"#3890"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update xnio-nio to 3.8.7.Final\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3892",children:"#3892"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update flyway-core to 8.5.10\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3891",children:"#3891"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update ammonite-util to 2.5.3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3889",children:"#3889"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Reduce file watcher memory usage\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3758",children:"#3758"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/pvid",children:"pvid"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Update scalameta, semanticdb-scalac, ... to 4.5.5\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3894",children:"#3894"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["docs: fix latest versions\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3886",children:"#3886"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Show parent scaladoc if implementation is returning empty\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3881",children:"#3881"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Add scaladocs on hover for Scala 3\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3865",children:"#3865"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["0.11.5 - update versions\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3883",children:"#3883"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["0.11.5 release notes\n",(0,a.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3882",children:"#3882"}),"\n(",(0,a.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var a=s(7294);const i={},l=a.createContext(i);function n(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6776],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=l.createContext({}),p=function(t){var e=l.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),h=p(a),c=n,d=h["".concat(o,".").concat(c)]||h[c]||u[c]||r;return a?l.createElement(d,i(i({ref:e},m),{},{components:a})):l.createElement(d,i({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[h]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2368:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={author:"Vadim Chelyshov",title:"Metals v0.10.8 - Tungsten",authorURL:"https://twitter.com/_dos65",authorImageURL:"https://github.com/dos65.png"},o=void 0,p={permalink:"/metals/blog/2021/10/26/tungsten",source:"@site/blog/2021-10-26-tungsten.md",title:"Metals v0.10.8 - Tungsten",description:"We're happy to announce the release of Metals v0.10.8, which brings a lot of new features in addition to Scala 3.1.0 support!",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[],readingTime:7.19,hasTruncateMarker:!1,authors:[{name:"Vadim Chelyshov",url:"https://twitter.com/_dos65",imageURL:"https://github.com/dos65.png"}],frontMatter:{author:"Vadim Chelyshov",title:"Metals v0.10.8 - Tungsten",authorURL:"https://twitter.com/_dos65",authorImageURL:"https://github.com/dos65.png"},prevItem:{title:"Metals v0.10.9 - Tungsten",permalink:"/metals/blog/2021/11/03/tungsten"},nextItem:{title:"Metals v0.10.7 - Tungsten",permalink:"/metals/blog/2021/09/16/tungsten"}},m={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Expression Evaluator",id:"expression-evaluator",level:2},{value:"Type annotations on code selection",id:"type-annotations-on-code-selection",level:2},{value:"Source file analyzer",id:"source-file-analyzer",level:2},{value:"Find text in dependency JAR files",id:"find-text-in-dependency-jar-files",level:2},{value:"VSCode extension - workspace symbol search fix",id:"vscode-extension---workspace-symbol-search-fix",level:2},{value:"Scala 3.1.0 and completion improvements",id:"scala-310-and-completion-improvements",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.8 (2021-10-26)",id:"v0108-2021-10-26",level:2}],u={toc:h},c="wrapper";function d(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)(c,(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.10.8, which brings a lot of new features in addition to Scala 3.1.0 support!"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"162")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"70")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"16")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"11")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"4")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/43?closed=1"},"https://github.com/scalameta/metals/milestone/43?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expression evaluator for Scala 2"),(0,r.kt)("li",{parentName:"ul"},"[Scala 2]"," Type annotations on code selection "),(0,r.kt)("li",{parentName:"ul"},"Source file analyzer"),(0,r.kt)("li",{parentName:"ul"},"Find text in dependency JAR files"),(0,r.kt)("li",{parentName:"ul"},"VSCode - workspace symbol search fix"),(0,r.kt)("li",{parentName:"ul"},"Scala 3.1.0 and completion improvements")),(0,r.kt)("h2",{id:"expression-evaluator"},"Expression Evaluator"),(0,r.kt)("p",null,"The long awaited ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/issues/3051"},"issue #3051")," was close to celebrating its 2 years birthday but\ndue to the impressive work by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tdudzik"},"@tdudzik")," and help from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adpi2"},"@adapi")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tgodzik"},"@tgodzik")," Metals\nfinally has support for expression evaluation during debugging!\nThe implementation is based on the initial idea from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smarter"},"@smarter"),"'s for expression evaluation in the Dotty Language Server."),(0,r.kt)("p",null,"Currently, it's implemented only for Scala 2, however the work on Scala3 support is in progress."),(0,r.kt)("p",null,"Since expression evaluation is a complex feature there might still be some bugs that we didn't account for, so do not hesitate to report anything that doesn't look right."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1b17Vtm.gif",alt:"evaluator"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Editors support"),": every client that implements DAP"),(0,r.kt)("h2",{id:"type-annotations-on-code-selection"},"Type annotations on code selection"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KacperFKorban"},"@KacperFKorban"),", yet another long awaited ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/issues/3059"},"issue #3059")," was closed.\nPreviously, hover in Metals was limited by the LSP protocol and only worked for a single position, however it turns out that it was possible to work around this limitation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/39772805/130333128-dc357170-116e-4a10-b58d-b55c536a2e15.gif",alt:"selection"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Editors support"),": VS Code, nvim-metals"),(0,r.kt)("h2",{id:"source-file-analyzer"},"Source file analyzer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Show Tasty command")," from the previous release was extended.\nNow, Metals also can show javap and semanticdb outputs from the source.\nThanks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Arthurm1"},"@Arthurm1")," for javap/semanticdb implementation and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kpodsiad"},"@kpodsiad")," for aligning all views into a single feature."),(0,r.kt)("p",null,"The full list of commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-tasty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-javap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-javap-verbose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-semanticdb-compact")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-semanticdb-detailed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metals.show-semanticdb-proto"))),(0,r.kt)("p",null,"In VS Code you can notice that there is a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Metals Analyze Source")," submenu in file pop-up menu that provides a list of all these commands."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/6tGSvuI.gif",alt:"analyze"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Editors support"),": VS Code, nvim-metals"),(0,r.kt)("h2",{id:"find-text-in-dependency-jar-files"},"Find text in dependency JAR files"),(0,r.kt)("p",null,"This release also introduces another helpful feature, it's possible now to do text search through files in classpath jars and source-jars.\nThanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Z1kkurat"},"@ Z1kkurat")," for his contribution!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/o1Drd12.gif",alt:"find-in-jars"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Editors support"),": VS Code, nvim-metals"),(0,r.kt)("h2",{id:"vscode-extension---workspace-symbol-search-fix"},"VSCode extension - workspace symbol search fix"),(0,r.kt)("p",null,"Initially, workspace symbol search in Metals allowed you to extend the search in a couple of ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It was possible to look through all the dependencies by adding the semicolon ",(0,r.kt)("inlineCode",{parentName:"p"},";")," at the end or to search. This was done by default if no results were found in the current workspace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users could use the full path for symbols such as ",(0,r.kt)("inlineCode",{parentName:"p"},"j.n.f.Path")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"java.nio.file.Path")," ."))),(0,r.kt)("p",null,"Unfortunately, this stopped being possible in some later Visual Studio Code versions. To work around that issue a new command was added: ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.symbol-search"),", which allows for the additional search features. This already works for all other editors.\nIn addition, Metals extension now overrides default keybing for symbol search: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+T"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd+T")," executes this Metals command."),(0,r.kt)("p",null,"An important notice: we can't fix the default workspace symbol search. It still uses default VS Code implementation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5816952/133675550-c199e79a-55cc-4df6-871d-c8a3b1f0b3a3.gif",alt:"symbol-search"})),(0,r.kt)("h2",{id:"scala-310-and-completion-improvements"},"Scala 3.1.0 and completion improvements"),(0,r.kt)("p",null,"And lastly this new Metals release comes with a new compiler version support - 3.1.0. As well as support for the next release candidate ",(0,r.kt)("inlineCode",{parentName:"p"},"3.1.1-RC1"),", which will be later updated in the SNAPSHOT Metals versions in case of further release candidates.\nWe also further improved the support for Scala 3:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Completion items ordering were reworked and now it should match the behaviour of Scala 2"),(0,r.kt)("li",{parentName:"ul"},"Type descriptions in completion now shows the precise type for generic methods")),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix type decorations for sbt/standalone files ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"@tgodzik")),(0,r.kt)("li",{parentName:"ul"},"Use Scala 3 syntax by default. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/smarter"},"@smarter")),(0,r.kt)("li",{parentName:"ul"},"Support more scenarios in rewrite parent/braces code action. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"@kpodsiad")),(0,r.kt)("li",{parentName:"ul"},"Fix go to parent code lenses for local symbols. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik")),(0,r.kt)("li",{parentName:"ul"},"Strip out ","[info]"," for stacktraces. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01")),(0,r.kt)("li",{parentName:"ul"},"[sbt server]"," Fix meta-build-target configuration. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2")),(0,r.kt)("li",{parentName:"ul"},"Add build server version to the doctor view. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"))),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.10.7..v0.10.8\n25  Tomasz Godzik\n20  Vadim Chelyshov\n13  Z1kkurat\n10  Adrien Piquerez\n8   Kamil Podsiadlo\n4   ckipp01\n3   Gabriele Petronella\n2   tdudzik\n2   \xd3lafur P\xe1ll Geirsson\n1   Alexandre Archambault\n1   Arthur McGibbon\n1   Guillaume Martres\n1   Kacper Korban\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v0108-2021-10-26"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.10.8"},"v0.10.8")," (2021-10-26)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.10.7...v0.10.8"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compilers: try to fix NPE\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3227"},"#","3227"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Print exact type for expressions containing generics\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3223"},"#","3223"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update debug adapter to 2.0.8\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3226"},"#","3226"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tdudzik"},"tdudzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Always show hover on a non empty range selection\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3222"},"#","3222"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Reset diagnostics on build import\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3220"},"#","3220"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Z1kkurat"},"Z1kkurat"),")"),(0,r.kt)("li",{parentName:"ul"},"Add Scala 3.1.0 support\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3212"},"#","3212"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop to 1.4.10\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3218"},"#","3218"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump debug adapter\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3216"},"#","3216"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"[Scala3]"," Completions - show applied type for ",(0,r.kt)("inlineCode",{parentName:"li"},"Select"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3188"},"#","3188"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Allow to generate run lenses for bsp servers which have debug capability\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3210"},"#","3210"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Use sbt-debug-adapter explicity in metals.sbt\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3211"},"#","3211"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Use SemanticdbPlugin in sbt-metals\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3200"},"#","3200"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Workflows: ignore sourcegraph upload error\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3208"},"#","3208"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"EndpointLogger: close trace writer\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3207"},"#","3207"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump Bloop and scala-debug-adapter\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3209"},"#","3209"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.6.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3205"},"#","3205"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 8.0.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3206"},"#","3206"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ujson to 1.4.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3204"},"#","3204"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-debug-adapter to 2.0.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3203"},"#","3203"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Find in jar minor fixes\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3198"},"#","3198"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix flaky cancel compile suite\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3202"},"#","3202"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Add new suites to TestGroups\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3199"},"#","3199"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"[sbt server]"," Fix meta-build-target configuration\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3194"},"#","3194"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Decode file refactor\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3160"},"#","3160"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't use ",(0,r.kt)("inlineCode",{parentName:"li"},"window/showMessage")," to report generic Scalafix error\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3192"},"#","3192"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Wait with loading compiler and compilation\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3190"},"#","3190"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Implement 'find in JAR files' LSP extension\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3093"},"#","3093"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Z1kkurat"},"Z1kkurat"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't throw an exception is compiling semanticdb times out\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3187"},"#","3187"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Wait for build tool information when generating semanticdb\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3184"},"#","3184"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump bloop to fix some debug issues\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3185"},"#","3185"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove unused ",(0,r.kt)("inlineCode",{parentName:"li"},"bspEnabled := false"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3186"},"#","3186"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Updage scalafmt + use optional braces syntax for scala3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3165"},"#","3165"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't create file system when debugging\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3183"},"#","3183"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove extra boolean from the ",(0,r.kt)("inlineCode",{parentName:"li"},"goto-position")," server command in ",(0,r.kt)("inlineCode",{parentName:"li"},"StacktraceAnalyzer"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3179"},"#","3179"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Upgrade scala3 rc version\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3182"},"#","3182"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Strip out ","[info]"," for stacktraces.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3180"},"#","3180"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Avoid IllegalArgumentException when trying to get type of range.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3178"},"#","3178"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure generate-sources phase is always run for Maven\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3164"},"#","3164"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scala-java8-compat to 1.0.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3175"},"#","3175"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Try to fix flaky tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3163"},"#","3163"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalafmt-dynamic to 3.0.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3177"},"#","3177"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jsoup to 1.14.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3174"},"#","3174"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 7.15.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3173"},"#","3173"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update undertow-core to 2.2.12.Final\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3172"},"#","3172"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update guava to 31.0.1-jre\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3171"},"#","3171"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.15\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3170"},"#","3170"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jackson-databind to 2.13.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3169"},"#","3169"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Add completion support to expression evaluator\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3159"},"#","3159"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Reconnect to BSP server upon buildTarget/didChange\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3145"},"#","3145"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexarchambault"},"alexarchambault"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't search for all symbols in go-to-parent code lenses\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3161"},"#","3161"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump Bloop and sbt-debug-adapter\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3166"},"#","3166"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Create dependency files on step if they don't exist\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3167"},"#","3167"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix go to parent code lenses for local symbols\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3154"},"#","3154"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't close source jars\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3162"},"#","3162"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add position to show tasty command\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3148"},"#","3148"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Use scala-debug-adapter 2.x to enable code evaluation\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2959"},"#","2959"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Type annotation on code selection\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3060"},"#","3060"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KacperFKorban"},"KacperFKorban"),")"),(0,r.kt)("li",{parentName:"ul"},"Make commands parametrized and easier to use\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3149"},"#","3149"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Generate symbol information for standalone files, worksheets and sbt files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3019"},"#","3019"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Sourcegraph workflow to use ",(0,r.kt)("inlineCode",{parentName:"li"},"lsif-java index")," command.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3152"},"#","3152"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Only set sbt dialect when file has indeed .sbt extension\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3144"},"#","3144"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Support more scenarios with 'replace () with {}' code action\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3130"},"#","3130"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"add javap/semanticdb file viewer\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3107"},"#","3107"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,r.kt)("li",{parentName:"ul"},"Add build server version to the doctor view\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3141"},"#","3141"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalafix to 0.9.31\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3138"},"#","3138"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add docs for Metals custom search command\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3139"},"#","3139"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"[Scala3]"," Improve completions ordering\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3115"},"#","3115"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Set the default fallbackScalaVersion to scala 3 instead of 2.12\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3134"},"#","3134"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/smarter"},"smarter"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump Scalafmt version\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3137"},"#","3137"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for Metals v0.10.7\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3132"},"#","3132"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}d.isMDXComponent=!0}}]);
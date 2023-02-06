"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[867],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var l=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,i=function(t,e){if(null==t)return{};var a,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=l.createContext({}),p=function(t){var e=l.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),h=p(a),c=i,d=h["".concat(o,".").concat(c)]||h[c]||u[c]||r;return a?l.createElement(d,n(n({ref:e},m),{},{components:a})):l.createElement(d,n({ref:e},m))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,n=new Array(r);n[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[h]="string"==typeof t?t:i,n[1]=s;for(var p=2;p<r;p++)n[p]=a[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2602:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var l=a(7462),i=a(3366),r=(a(7294),a(3905)),n=["components"],s={author:"Kamil Podsiadlo",title:"Metals v0.11.2 - Aluminium",authorURL:"https://twitter.com/podsiadel",authorImageURL:"https://github.com/kpodsiad.png"},o=void 0,p={permalink:"/metals/blog/2022/03/08/aluminium",source:"@site/blog/2022-03-08-aluminium.md",title:"Metals v0.11.2 - Aluminium",description:"We're happy to announce the release of Metals v0.11.2, which focuses on improving overall user experience.",date:"2022-03-08T00:00:00.000Z",formattedDate:"March 8, 2022",tags:[],readingTime:8.285,hasTruncateMarker:!1,authors:[{name:"Kamil Podsiadlo",url:"https://twitter.com/podsiadel",imageURL:"https://github.com/kpodsiad.png"}],frontMatter:{author:"Kamil Podsiadlo",title:"Metals v0.11.2 - Aluminium",authorURL:"https://twitter.com/podsiadel",authorImageURL:"https://github.com/kpodsiad.png"},prevItem:{title:"Metals v0.11.3 - Aluminium",permalink:"/metals/blog/2022/04/26/aluminium"},nextItem:{title:"Towards better releases",permalink:"/metals/blog/2022/02/23/towards-better-releases"}},m={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Reduce indexing time in monorepos on MacOS",id:"reduce-indexing-time-in-monorepos-on-macos",level:2},{value:"Display build target info",id:"display-build-target-info",level:2},{value:"vscode View source jar files as virtual docs",id:"vscode-view-source-jar-files-as-virtual-docs",level:2},{value:"Improve completions for Scala 3",id:"improve-completions-for-scala-3",level:2},{value:"Test Explorer Detect and run single tests for JUnit4",id:"test-explorer-detect-and-run-single-tests-for-junit4",level:2},{value:"vscode Add mirror setting to help coursier set up",id:"vscode-add-mirror-setting-to-help-coursier-set-up",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.11.2 (2022-03-08)",id:"v0112-2022-03-08",level:2}],u={toc:h},c="wrapper";function d(t){var e=t.components,a=(0,i.Z)(t,n);return(0,r.kt)(c,(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.11.2, which focuses on improving overall user experience."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"197")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"94")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"11")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"19")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"7")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/?closed=1"},"https://github.com/scalameta/metals/milestone/?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduce indexing time in monorepos on MacOS"),(0,r.kt)("li",{parentName:"ul"},"Display build target info"),(0,r.kt)("li",{parentName:"ul"},"View source jar files as virtual docs"),(0,r.kt)("li",{parentName:"ul"},"Improve completions for Scala 3"),(0,r.kt)("li",{parentName:"ul"},"[Test Explorer]"," Detect and run single tests for JUnit4")),(0,r.kt)("h2",{id:"reduce-indexing-time-in-monorepos-on-macos"},"Reduce indexing time in monorepos on MacOS"),(0,r.kt)("p",null,"Thanks to changes made by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Duhemm"},"Duhemm"),", Metals on MacOS can now index monorepo workspaces much faster than before. After changes, we observed at times ",(0,r.kt)("strong",{parentName:"p"},"over 10 times faster")," indexing times in the workspaces where only a few submodules needed to be imported."),(0,r.kt)("p",null,"Here are a few examples of indexing improvement. They are not actual benchmarks of any kind, but more of rough estimations of improvements in a couple of example repos."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Before"),(0,r.kt)("th",{parentName:"tr",align:null},"After"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">","10minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"~30seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"~40seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"~4s")))),(0,r.kt)("p",null,"However, take into mind that indexing speedup heavily depends on your repository structure. The more imported modules which don't need to be imported, the greater the speed improvement is."),(0,r.kt)("p",null,"If you are interested in details you can check out the related ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/pull/3665"},"pull request"),"."),(0,r.kt)("h2",{id:"display-build-target-info"},"Display build target info"),(0,r.kt)("p",null,"Thanks to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Arthurm1"},"Arthurm1")," Metals is now able to display all important information about modules.\nThis brand new feature gathers in one view information such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"javac and scalac options"),(0,r.kt)("li",{parentName:"ul"},"dependent modules"),(0,r.kt)("li",{parentName:"ul"},"projects classpath"),(0,r.kt)("li",{parentName:"ul"},"and many more")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/XGyJEsl.gif",alt:"display-build-target-info"})),(0,r.kt)("h2",{id:"vscode-view-source-jar-files-as-virtual-docs"},"[vscode]"," View source jar files as virtual docs"),(0,r.kt)("p",null,"Previously, when the client wanted to browse files in source jars source, these files were extracted and saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metals/readonly/dependencies")," directory. With the help of ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/extension-guides/virtual-documents"},"virtual documents")," Metals can show you dependencies in readonly files without unnecessary copying.\nThanks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Arthurm1"},"Arthurm1")," for this feature!"),(0,r.kt)("p",null,"Together with Metals tab, this feature could be used to browse through your dependencies' sources. Just run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metals: Reveal Active File in Side Bar")," command and browse through both dependencies and source code seamlessly."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgur.com/HsuW8Hn.gif",alt:"virtual-docs-navigation"})),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"Metals: Reveal Active File in Side Bar")," works only for Scala 2."),(0,r.kt)("h2",{id:"improve-completions-for-scala-3"},"Improve completions for Scala 3"),(0,r.kt)("p",null,"Completion suggestions for different Scala keywords now work with most of the Scala 3 keywords. This includes for example ",(0,r.kt)("inlineCode",{parentName:"p"},"given")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),", it should also work even if defining things in toplevel without a wrapping class or object.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4BUxCDK.gif",alt:"keyword-completions"})),(0,r.kt)("p",null,"Another improvement for Scala 3 completions is better support for showing scope completions, when writing in an empty line. Previously, we would not show correct completions when no identifier was specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object Foo:\n  def bar: Int = 42\n  def baz: Int =\n    val x = 1\n    val y = 2\n  @@\n")),(0,r.kt)("p",null,"In the above situation with cursor position indicated by ",(0,r.kt)("inlineCode",{parentName:"p"},"@@")," we will now properly show ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"baz")," completions."),(0,r.kt)("h2",{id:"test-explorer-detect-and-run-single-tests-for-junit4"},"[Test Explorer]"," Detect and run single tests for JUnit4"),(0,r.kt)("p",null,"We're actively working on improving the Test Explorer and making it better with each release.\nFrom this release, Metals is able to run or debug single test in JUnit4."),(0,r.kt)("p",null,"Currently, this feature ",(0,r.kt)("strong",{parentName:"p"},"only works when using Bloop as your build server"),", but in a future release there will be support added for sbt as well."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgur.com/FbgSTGr.gif",alt:"test-explorer-single-tests"})),(0,r.kt)("h2",{id:"vscode-add-mirror-setting-to-help-coursier-set-up"},"[vscode]"," Add mirror setting to help coursier set up"),(0,r.kt)("p",null,"In order to bootstrap Metals, vscode's extension uses the coursier script which needs access to ",(0,r.kt)("inlineCode",{parentName:"p"},"repo1.maven.org"),". Previously, this URL couldn't be configured which was causing problems on the machines that didn't have access to repo1.maven.org."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tgodzik"},"tgodzik"),"'s work from now on it's possible to define ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.coursierMirror")," property."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgur.com/iLB079M.png",alt:"coursier-mirror"})),(0,r.kt)("p",null,"More information about mirrors can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://get-coursier.io/blog/#mirrors"},"coursier documentation"),"."),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show implicit decorations in worksheets\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3582"},"#","3582"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add current env variables to bloopInstall\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3662"},"#","3662"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix issues with Ammonite multistage scripts\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3627"},"#","3627"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Print information about candidates searched when missing JDK sources\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3606"},"#","3606"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.11.1..v0.11.2\n    37  Tomasz Godzik\n    24  Vadim Chelyshov\n    22  Scala Steward\n    15  Arthur McGibbon\n     8  Kamil Podsiadlo\n     7  ckipp01\n     6  Kamil Podsiad\u0142o\n     1  Martin Duhem\n     1  Adrien Piquerez\n     1  Jerome Wuerf\n     1  Hugo van Rijswijk\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v0112-2022-03-08"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.11.2"},"v0.11.2")," (2022-03-08)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.11.1...v0.11.2"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to definition of synthetic symbols.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3683"},"#","3683"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't watch entire workspace on MacOS\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3665"},"#","3665"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Duhemm"},"Duhemm"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: Add test case for topelevel tuple hover\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3676"},"#","3676"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Scala3 PC refactorings\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3651"},"#","3651"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: Add tests for Scala 3 toplevel enums\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3674"},"#","3674"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"chore: fix flaky test provider suite\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3673"},"#","3673"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.8.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3669"},"#","3669"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc-interfaces to 2.3.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3672"},"#","3672"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc, mdoc-interfaces, sbt-mdoc to 2.3.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3671"},"#","3671"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-buildinfo to 0.11.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3667"},"#","3667"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update guava to 31.1-jre\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3668"},"#","3668"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 8.5.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3670"},"#","3670"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: Add test case when using Left class and Scala 3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3666"},"#","3666"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Change hashing to lastModified\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3611"},"#","3611"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop to 1.4.13\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3664"},"#","3664"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix issues with nightlies tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3663"},"#","3663"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: do not show test explorer related error for client which don't implement it\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3661"},"#","3661"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Add current env variables to bloopInstall\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3662"},"#","3662"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: add a post about release-related changes\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3653"},"#","3653"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: support Scala 2.11 PC on jdk higher than 8\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3658"},"#","3658"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"feat: allow running single test\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3619"},"#","3619"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump scalameta to 4.5.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3652"},"#","3652"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Change displayBuildTarget to listBuildTargets\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3649"},"#","3649"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix issues in tests for Scala 3 Nightlies\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3650"},"#","3650"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: release workflow - prevent parallel publishing to sonatype\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3644"},"#","3644"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Cancel PRs automatically if new commits are pushed\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3646"},"#","3646"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: check scala3 nigtly - exclude existing latest\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3645"},"#","3645"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Scala3 emptyline completions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3629"},"#","3629"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Update millw to 0.4.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3641"},"#","3641"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: actions, discover new scala3 nigtly properly\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3640"},"#","3640"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix FileDecoderProviderLspSuite to work locally\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3639"},"#","3639"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.7.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3634"},"#","3634"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix showing virtual docs in jars with paths that need escaping\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3632"},"#","3632"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update undertow-core to 2.2.16.Final\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3635"},"#","3635"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 8.4.4\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3636"},"#","3636"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ammonite-util to 2.5.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3633"},"#","3633"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.6.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3638"},"#","3638"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update xnio-nio to 3.8.6.Final\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3637"},"#","3637"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Index non-scala target dependency sources\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3628"},"#","3628"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix issues with Ammonite multistage scripts\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3627"},"#","3627"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"View source jar files as virtual docs\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3143"},"#","3143"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump debug-adapter to 2.0.13\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3626"},"#","3626"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: provide latest versions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3618"},"#","3618"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: describe how to add new Scala version support to the existing release\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3617"},"#","3617"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"feat, refactor: use notification to send test updates\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3554"},"#","3554"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Display build target info\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3380"},"#","3380"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,r.kt)("li",{parentName:"ul"},"scalafmt - newlines.inInterpolation = avoid\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3614"},"#","3614"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"refactor: ","[Scala 3]"," Extract hover to a separate file\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3613"},"#","3613"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"chore(fmt): bump scalafmt to 3.4.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3610"},"#","3610"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: compare long numbers in TVP\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3607"},"#","3607"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scribe to 3.6.10\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3598"},"#","3598"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Ignore UncheckedIOException coming from broken source jars\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3609"},"#","3609"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Print information about candidates searched when missing JDK sources\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3606"},"#","3606"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"feat: add range to symbol definition\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3605"},"#","3605"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Revert to Mdoc 2.2.24 for Scala 2.11\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3601"},"#","3601"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"chore(ci): update setup-action\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3603"},"#","3603"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Migrate to the newest H2 version\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3595"},"#","3595"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"refactor: ",(0,r.kt)("inlineCode",{parentName:"li"},"SemanticdbFeatureProvider")," trait\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3602"},"#","3602"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Do not insert inferred type on variable bound to another\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3600"},"#","3600"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Show implicit decorations in worksheets\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3582"},"#","3582"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.33\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3592"},"#","3592"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc, mdoc-interfaces, sbt-mdoc to 2.3.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3591"},"#","3591"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 8.4.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3590"},"#","3590"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ujson to 1.5.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3588"},"#","3588"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update geny to 0.7.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3587"},"#","3587"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.10.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3585"},"#","3585"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix goto definition for local synthetics\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3580"},"#","3580"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"minor: remove non-relevant things\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3564"},"#","3564"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure we only analyze stacktrace lines that do look the part\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3578"},"#","3578"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"docs(ammonite): add note about ammonite support\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3579"},"#","3579"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't focus diagnotics if compialtion returned with error\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3577"},"#","3577"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Pass -Xsource:3 to scalafix organize-imports action if present\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3574"},"#","3574"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hugo-vrijswijk"},"hugo-vrijswijk"),")"),(0,r.kt)("li",{parentName:"ul"},"Insert missing comma\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3573"},"#","3573"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ossScharom"},"ossScharom"),")"),(0,r.kt)("li",{parentName:"ul"},"cleanup: remove unused stuff from CompilerInterfaces\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3572"},"#","3572"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: add possibility to define callback for ",(0,r.kt)("inlineCode",{parentName:"li"},"BatchedFunction"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3571"},"#","3571"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: Open other window when using Analyze Stacktrace\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3540"},"#","3540"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"feature: Add support for Scala 3.1.2-RC1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3569"},"#","3569"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"fix: ","[Scala 3]"," Show exact literal type\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3567"},"#","3567"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"feature: ","[Scala 3]"," Add keyword completions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3560"},"#","3560"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"release: fix last 5 nigtly version selection\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3558"},"#","3558"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for Scala 3.1.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3555"},"#","3555"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"actions: mtags release adjustments\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3557"},"#","3557"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," Mtags publishing - move all logic to ci-script\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3553"},"#","3553"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: mention about pre-release version of Metals extension\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3552"},"#","3552"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," Mtags release\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3551"},"#","3551"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: Add docs for discover-test-suites\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3546"},"#","3546"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"docs: add a small note about decode not working on extra file types.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3549"},"#","3549"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," Scala3 Nightly check - yet another fix\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3548"},"#","3548"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," One more fix to check_scala3_nightly job\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3547"},"#","3547"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Compare only uppercase MD5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3545"},"#","3545"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"[JavaInteractiveSemanticdb]"," Add test-case to cover --patch-module flag usage\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3538"},"#","3538"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," Install coursier for nightly checks\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3543"},"#","3543"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"refactor: check lowercase test-user-interface\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3544"},"#","3544"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"[Actions]"," Trigger Scala3-nightly mtags publishing automatically\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3541"},"#","3541"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for 0.11.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3524"},"#","3524"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}d.isMDXComponent=!0}}]);
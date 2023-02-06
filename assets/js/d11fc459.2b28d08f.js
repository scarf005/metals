"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5780],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(o,".").concat(c)]||u[c]||h[c]||r;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},727:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={author:"Tomasz Godzik",title:"Metals v0.10.2 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},o=void 0,p={permalink:"/metals/blog/2021/04/20/tungsten",source:"@site/blog/2021-04-20-tungsten.md",title:"Metals v0.10.2 - Tungsten",description:"We're happy to announce the release of Metals v0.10.2, which mainly adds support",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[],readingTime:3.755,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.10.2 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.10.3 - Tungsten",permalink:"/metals/blog/2021/05/17/tungsten"},nextItem:{title:"Metals v0.10.1 - Tungsten",permalink:"/metals/blog/2021/04/06/tungsten"}},m={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Add/remove string interpolation",id:"addremove-string-interpolation",level:2},{value:"Offer to organize imports when on an unused import",id:"offer-to-organize-imports-when-on-an-unused-import",level:2},{value:"Scala 3 Better names for types in completions and hovers.",id:"scala-3-better-names-for-types-in-completions-and-hovers",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.2 (2021-04-20)",id:"v0102-2021-04-20",level:2}],h={toc:u},c="wrapper";function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)(c,(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.10.2, which mainly adds support\nfor Scala 3.0.0-RC3 as well a couple of smaller improvements."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"62")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"30")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"8")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"8")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"4")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/37?closed=1"},"https://github.com/scalameta/metals/milestone/37?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Scala 3]"," Support for Scala 3.0.0-RC3"),(0,r.kt)("li",{parentName:"ul"},"Add code action to add/remove string interpolation."),(0,r.kt)("li",{parentName:"ul"},"Offer to organize imports when on an unused import."),(0,r.kt)("li",{parentName:"ul"},"[Scala 3]"," Better names for types in completions and hovers.")),(0,r.kt)("h2",{id:"addremove-string-interpolation"},"Add/remove string interpolation"),(0,r.kt)("p",null,"Thanks to some great work by our newest contributor\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Giggiux"},"Giggiux")," it's now possible to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"easily add string interpolation to an existing string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val message = "Hello this is a message"\n')),(0,r.kt)("p",null,"When the cursor is positioned inside of the string we can invoke the code action\nand get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val message = s"Hello this is a message"\n')),(0,r.kt)("p",null,"While this is a simpler code action, it can be paired with other things like\ncompletions that allow for a workflow with less manual steps."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove string interpolation if no splices are found")),(0,r.kt)("p",null,"When the cursor is positioned inside a string interpolation, that does not contain\nany splices ( ",(0,r.kt)("inlineCode",{parentName:"p"},"$identifier"),"), we will now offer an action to quickly get rid of\nthe additional ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val message = s"Hello this is a message without splices"\n')),(0,r.kt)("p",null,"will change to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val message = "Hello this is a message without splices"\n')),(0,r.kt)("h2",{id:"offer-to-organize-imports-when-on-an-unused-import"},"Offer to organize imports when on an unused import"),(0,r.kt)("p",null,'In addition to the usual "organize imports", to try to improve the user\nexperience, Metals now offers a code action to organize imports whenever the\ncursor is situated on an unused import reported by the diagnostics. Thanks\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/ckipp01"},"ckipp01")," for this new feature!"),(0,r.kt)("h2",{id:"scala-3-better-names-for-types-in-completions-and-hovers"},"[Scala 3]"," Better names for types in completions and hovers."),(0,r.kt)("p",null,"Thanks to another great PR by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tanishiking"},"tanishiking"),"\nMetals will offer completions and hovers that include shorter names instead of\nfully qualified ones whenever they are currently in scope. They will also be\nmore similar to the ones that you might be accustomed to in Scala 2. You can\nfind some more examples of improvements in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/pull/2637"},"pull request")," itself."),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make insert type work with renamed imports."),(0,r.kt)("li",{parentName:"ul"},"Treat ",(0,r.kt)("inlineCode",{parentName:"li"},".srcjar")," as jars to support Bazel in the future (thanks\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/darl"},"darl"),"!).")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.10.1..v0.10.2\nTomasz Godzik\nAyoub Benali\nChris Kipp\nAdrien Piquerez\nLuigi Frunzio\nRikito Taniguchi\nToshiyuki Takahashi\nVladislav Dolbilov\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v0102-2021-04-20"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.10.2"},"v0.10.2")," (2021-04-20)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.10.1...v0.10.2"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Better names for types in completions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2637"},"#","2637"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for Scala 3.0.0-RC3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2727"},"#","2727"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Make insert type work with renamed imports\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2699"},"#","2699"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalafmt to 3.0.0-RC1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2726"},"#","2726"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Treat .srcjar as jars ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2710"},"#","2710"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/darl"},"darl"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ujson to 1.3.11 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2718"},"#","2718"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.13\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2721"},"#","2721"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update directories to 26\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2719"},"#","2719"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 7.7.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2720"},"#","2720"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update requests to 0.6.7\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2717"},"#","2717"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update pprint to 0.6.4 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2716"},"#","2716"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update geny to 0.6.8 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2715"},"#","2715"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.11\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2713"},"#","2713"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jackson-databind to 2.12.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2712"},"#","2712"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix issues with DAP tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2709"},"#","2709"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Document Sublime support for metals/didFocusTextDocument\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2711"},"#","2711"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,r.kt)("li",{parentName:"ul"},"Add hint to welcome messages to use '-F' flag\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2708"},"#","2708"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump sbt-debug-adapter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2695"},"#","2695"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Add testframeworks back in to ensure tests run.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2705"},"#","2705"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump sbt to 1.5.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2703"},"#","2703"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't override testSettings in unit tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2702"},"#","2702"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Print exception stack trace in DAP tests\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2696"},"#","2696"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop to the newest SNAPSHOT\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2698"},"#","2698"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Sublime Text documentation regarding Decoration protocol support\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2701"},"#","2701"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure that a correct targetroot is reported\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2693"},"#","2693"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Offer organize imports when on an unused import.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2688"},"#","2688"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add code action to add/remove string interpolation\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2682"},"#","2682"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Giggiux"},"Giggiux"),")"),(0,r.kt)("li",{parentName:"ul"},"Update the documentation to recommend using company-capf\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2672"},"#","2672"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tototoshi"},"tototoshi"),")"),(0,r.kt)("li",{parentName:"ul"},"Typo in release notes ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2684"},"#","2684"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for Metals v0.10.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2673"},"#","2673"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9026],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var l=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),s=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||h[c]||n;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3958:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],o={author:"Tomasz Godzik",title:"Metals v0.8.3 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},p=void 0,s={permalink:"/metals/blog/2020/03/19/cobalt",source:"@site/blog/2020-03-19-cobalt.md",title:"Metals v0.8.3 - Cobalt",description:"We are happy to announce the release of Metals v0.8.3, which main purpose is",date:"2020-03-19T00:00:00.000Z",formattedDate:"March 19, 2020",tags:[],readingTime:2.74,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.8.3 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.8.4 - Cobalt",permalink:"/metals/blog/2020/04/10/cobalt"},nextItem:{title:"Metals v0.8.1 - Cobalt",permalink:"/metals/blog/2020/02/26/cobalt"}},m={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Miscellaneous improvements",id:"miscellaneous-improvements",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.8.3 (2020-03-20)",id:"v083-2020-03-20",level:2}],h={toc:u},c="wrapper";function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,n.kt)(c,(0,l.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce the release of Metals v0.8.3, which main purpose is\nadding support for the new Scala version, 2.12.11. Additionally, we included a\ncouple of recent fixes."),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Commits since last release"),(0,n.kt)("td",{align:"center"},"61")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Merged PRs"),(0,n.kt)("td",{align:"center"},"18")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Contributors"),(0,n.kt)("td",{align:"center"},"9")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Closed issues"),(0,n.kt)("td",{align:"center"},"14")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"New features"),(0,n.kt)("td",{align:"center"},"1")))),(0,n.kt)("p",null,"For full details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/21?closed=1"},"https://github.com/scalameta/metals/milestone/21?closed=1")),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,n.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"support for Scala 2.12.11"),(0,n.kt)("li",{parentName:"ul"},"recent minor improvements")),(0,n.kt)("h2",{id:"miscellaneous-improvements"},"Miscellaneous improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix bug where worksheets got stuck evaluating forever"),(0,n.kt)("li",{parentName:"ul"},"fix issue where Metals would incorrectly prompt about a Bloop version change"),(0,n.kt)("li",{parentName:"ul"},"fix a bug where rename symbol produced invalid code for class hierarchies\nusing generics"),(0,n.kt)("li",{parentName:"ul"},"ignore return type when renaming overriden methods and fields"),(0,n.kt)("li",{parentName:"ul"},"fix bug where docstrings for workspace sources returned stale documentation"),(0,n.kt)("li",{parentName:"ul"},"goto definition now works for standalone source files, even if the build has\nnot been imported"),(0,n.kt)("li",{parentName:"ul"},"fix issue with string alignment when multiple multiline strings were present\nin a file")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.8.1..v0.8.3\nTomasz Godzik\nOlafur Pall Geirsson\nChris Kipp\nKrzysztof Bochenek\nTomasz Pasternak\nWin Wang\n\u0141ukasz Wawrzyk\nLorenzo Gabriele\nRikito Taniguchi\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("h2",{id:"v083-2020-03-20"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.8.3"},"v0.8.3")," (2020-03-20)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.8.1...v0.8.3"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Undeprecate 2.12.10 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1517"},"#","1517"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Always launch IntelliJ in the project's root directory\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1516"},"#","1516"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tpasternak"},"tpasternak"),")"),(0,n.kt)("li",{parentName:"ul"},"Generate bloop.settings.json with project refresh command\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1506"},"#","1506"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukaszwawrzyk"},"lukaszwawrzyk"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes for v0.8.2 and bump versions\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1515"},"#","1515"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not include scala boot library\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1507"},"#","1507"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Use a custom IDEA launcher under a new flag.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1513"},"#","1513"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for Scala 2.12.11\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1510"},"#","1510"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Only check relevant text for default indent\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1505"},"#","1505"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Export packagePrefix to bloop\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1470"},"#","1470"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukaszwawrzyk"},"lukaszwawrzyk"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalameta to 4.3.4 and fix existing tests\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1499"},"#","1499"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add helper to pre-download Metals dependencies.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1501"},"#","1501"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Add in new scalafmt default version\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1504"},"#","1504"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not generate synthetic modules\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1500"},"#","1500"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tpasternak"},"tpasternak"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix Bloop sending a restart message when custom version of Bloop is used\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1491"},"#","1491"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"create")," option:--no-root-project option\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1490"},"#","1490"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tpasternak"},"tpasternak"),")"),(0,n.kt)("li",{parentName:"ul"},"Handle fatal exceptions when evaluating worksheets.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1498"},"#","1498"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Update github actions to checkout@v2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1492"},"#","1492"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Skip coursier download in fastpass create with --coursier-binary option\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1486"},"#","1486"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wiwa"},"wiwa"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't delete bloop.settings.json when exporting Pants builds\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1488"},"#","1488"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukaszwawrzyk"},"lukaszwawrzyk"),")"),(0,n.kt)("li",{parentName:"ul"},"Add ability to specify zipkin url for fastpass\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1481"},"#","1481"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wiwa"},"wiwa"),")"),(0,n.kt)("li",{parentName:"ul"},"During rename matching methods ignore return type\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1485"},"#","1485"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix rename for hierarchy with generics\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1484"},"#","1484"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,n.kt)("li",{parentName:"ul"},"Bump mill default version\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1480"},"#","1480"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lolgab"},"lolgab"),")"),(0,n.kt)("li",{parentName:"ul"},"Add in math max when looking for lastIndex\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1479"},"#","1479"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Add in new statusline info from latest release\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1476"},"#","1476"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Expire docstrings' cache on save\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1473"},"#","1473"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove properties that are no longer needed\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1475"},"#","1475"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix issue when warning about Bloop version change\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1472"},"#","1472"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes for the 0.8.1 release\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1468"},"#","1468"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}k.isMDXComponent=!0}}]);
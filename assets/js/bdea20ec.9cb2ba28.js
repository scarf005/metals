"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1181],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),h=l,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(d,o(o({ref:e},m),{},{components:a})):n.createElement(d,o({ref:e},m))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3283:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],i={author:"Tomasz Godzik",title:"Metals v0.10.7 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s=void 0,p={permalink:"/metals/blog/2021/09/16/tungsten",source:"@site/blog/2021-09-16-tungsten.md",title:"Metals v0.10.7 - Tungsten",description:"We're happy to announce the release of Metals v0.10.7, which mostly focuses on",date:"2021-09-16T00:00:00.000Z",formattedDate:"September 16, 2021",tags:[],readingTime:3.345,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.10.7 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.10.8 - Tungsten",permalink:"/metals/blog/2021/10/26/tungsten"},nextItem:{title:"Metals v0.10.6 - Tungsten",permalink:"/metals/blog/2021/09/06/tungsten"}},m={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Indent on paste improvements",id:"indent-on-paste-improvements",level:2},{value:"Show TASTy command",id:"show-tasty-command",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.7 (2021-09-16)",id:"v0107-2021-09-16",level:2}],c={toc:u},h="wrapper";function d(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)(h,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.10.7, which mostly focuses on\nsupport for Scala 2.12.15 and refines the indent on paste functionality."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"42")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"14")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"1")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/42?closed=1"},"https://github.com/scalameta/metals/milestone/42?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scala 2.12.15 and 3.1.0-RC2 support."),(0,r.kt)("li",{parentName:"ul"},"Indent on paste improvements."),(0,r.kt)("li",{parentName:"ul"},"Show TASTy command.")),(0,r.kt)("h2",{id:"indent-on-paste-improvements"},"Indent on paste improvements"),(0,r.kt)("p",null,"In Metals 0.10.6 we introduced a new feature that would adjust the indentation\nof any pasted snippet. You can read about it in\n",(0,r.kt)("a",{parentName:"p",href:"/blog/2021/09/06/tungsten#automatically-adjust-indentation-on-paste"},"previous release notes"),"."),(0,r.kt)("p",null,"The feature was not fully mature and despite our best intentions it could cause\na lot of issues for the users. To help with that we introduced two changes."),(0,r.kt)("p",null,"Firstly, we will now use the current indentation of the cursor and adjust any\npasted snippet to use that level of indentation."),(0,r.kt)("p",null,"For example in case of a simple snippet like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def hello() =\n    println("Hello!")\n')),(0,r.kt)("p",null,"if we paste it into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def main() =\n  println("Main")\n  |\n')),(0,r.kt)("p",null,"after pasting we will have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def main =\n  println("Main")\n  def hello() =\n    println("Hello!")\n')),(0,r.kt)("p",null,"However, if we move the cursor back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def main() =\n  println("Main")\n|\n')),(0,r.kt)("p",null,"the result will be different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def main =\n  println("Main")\ndef hello() =\n  println("Hello!")\n')),(0,r.kt)("p",null,"You can use it to paste anything at the indentation level you need."),(0,r.kt)("p",null,"Moreover, we also added a new setting ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.enableIndentOnPaste"),", which you\ncan use to turn the feature on and off. Currently, it's ",(0,r.kt)("strong",{parentName:"p"},"off")," by default. We\nhighly recommend turning it on, testing out some more and reporting any new\nissues."),(0,r.kt)("p",null,"We also included a number of fixes for indentation in the Visual Studio Code\nextension, which should fix some problems in the Scala 3 optional braces code."),(0,r.kt)("h2",{id:"show-tasty-command"},"Show TASTy command"),(0,r.kt)("p",null,"What is TASTy? According to the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/scala3/guides/tasty-overview.html"},"official Scala documentation"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TASTy is an acronym that comes from the term Typed Abstract Syntax Trees. It's\na high-level interchange format for Scala 3, and in this document we'll refer to\nit as Tasty. Tasty files are generated by the scalac compiler, and contain all\nof the information about your source code, including the syntactic structure of\nyour program, and complete information about types, positions, and even\ndocumentation.")),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kpodsiad"},"kpodsiad"),", Metals can now show TASTy of\na currently opened file using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.show-tasty")," command. However, keep\nin mind that currently, this feature works only for Scala 3 sources. You can use\nthis new command already in nvim-metals and Visual Studio Code."),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.10.6..v0.10.7\nKamil Podsiadlo\nTomasz Godzik\nVadim Chelyshov\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v0107-2021-09-16"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.10.7"},"v0.10.7")," (2021-09-16)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.10.6...v0.10.7"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add setting to enable indentation on paste\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3129"},"#","3129"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump Scala 3 RC version to 3.1.0-RC2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3131"},"#","3131"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Use the current indentation as reference when pasting\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3127"},"#","3127"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Show TASTy for open file command\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3063"},"#","3063"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for Scala 2.12.15\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3126"},"#","3126"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix overindenting when the indentation is more than expected\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3109"},"#","3109"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop to 1.4.9 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3124"},"#","3124"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix renaming class hierarchy inside a method\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3116"},"#","3116"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 7.14.1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3122"},"#","3122"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ujson to 1.4.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3121"},"#","3121"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"bug report template - downgrade version\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3117"},"#","3117"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix process exiting ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3112"},"#","3112"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix message about unsupported version for RC Scala 3 versions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3114"},"#","3114"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure that classpath does not contain invalid files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3111"},"#","3111"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"bump snapshot version to 0.10.7\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3106"},"#","3106"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for Metals v0.10.6\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3104"},"#","3104"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"scripts",title:"Scripts support"},l=void 0,c={unversionedId:"features/scripts",id:"features/scripts",title:"Scripts support",description:"Working with a script",source:"@site/target/docs/features/scripts.md",sourceDirName:"features",slug:"/features/scripts",permalink:"/metals/docs/features/scripts",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/features/scripts.md",tags:[],version:"current",frontMatter:{id:"scripts",title:"Scripts support"},sidebar:"docs",previous:{title:"Code Actions",permalink:"/metals/docs/features/codeactions"},next:{title:"Overview",permalink:"/metals/docs/build-tools/overview"}},p={},u=[{value:"Working with a script",id:"working-with-a-script",level:3},{value:"Advanced information",id:"advanced-information",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"working-with-a-script"},"Working with a script"),(0,i.kt)("p",null,"Whenever, Metals opens a script file with ",(0,i.kt)("inlineCode",{parentName:"p"},"*.sc")," extension, but only when it's\nnot ",(0,i.kt)("inlineCode",{parentName:"p"},"*.worksheet.sc")," or a build server has not already started for it, users will\nbe prompted to choose whether they want to use ",(0,i.kt)("a",{parentName:"p",href:"http://ammonite.io/"},"Ammonite"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://scala-cli.virtuslab.org/"},"Scala CLI")," to power the script."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ghR1Src.gif",alt:"scala-cli"})),(0,i.kt)("p",null,"Scripts are usually used for smaller programs and the main difference is that\nstatements can be put on top level without a need for additional objects or\nmethods."),(0,i.kt)("p",null,"Once a user has chosen a specific scripting tool, Metals will also suggest to\nimport all newly opened scripts automatically or to always to do that manually."),(0,i.kt)("p",null,"Both tools will start a build server in the background that will be able to\ncompile your code and provide Metals with all the necessary information."),(0,i.kt)("p",null,"Scala CLI scripts can also be used standalone when Scala CLI generated ",(0,i.kt)("inlineCode",{parentName:"p"},".bsp"),"\ndirectory after running ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli compile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli setup-ide")," on that\nscript."),(0,i.kt)("h3",{id:"advanced-information"},"Advanced information"),(0,i.kt)("p",null,"Additionally, advanced users can start the underlying build server manually with\n",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: Start Scala CLI BSP server")," (",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli-start"),") or\n",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: Start Ammonite BSP server")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ammonite-start"),"). They will also be able\nto stop it with ",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: Stop Scala CLI BSP server"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli-stop"),") or\n",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: Stop Ammonite BSP server"),"(ammonite-stop). These commands can be used\nfor more fine grained control when to turn on or of scripting support. This is\nespecially useful since the additional build server running underneath can take\nup some additional resources."),(0,i.kt)("p",null,"If the script is in a dedicated folder, by default we will treat all the scripts\nand scala files in that directory as ones that can be used together. So you\nwould be able to import method and classes from those files. However, if the\nscript is contained within a directory that also contains other sources, that\nscript will be treated as a standalone one in order to avoid flaky compilation\nerrors coming from normal files in the workspace."),(0,i.kt)("p",null,"Current limitations can be found:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues?q=is%3Aopen+is%3Aissue+label%3A%22ammonite+support%22"},"here for Ammonite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues?q=is%3Aopen+is%3Aissue+label%3Ascala-cli"},"here for Scala CLI"))),(0,i.kt)("p",null,"For troubleshooting take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/troubleshooting/faq#ammonite-scripts"},"FAQ")))}f.isMDXComponent=!0}}]);
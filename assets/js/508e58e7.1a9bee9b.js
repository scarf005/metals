"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9952],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return o?n.createElement(m,s(s({ref:t},p),{},{components:o})):n.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7732:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),s=["components"],i={id:"faq",title:"Frequently asked questions"},l=void 0,u={unversionedId:"troubleshooting/faq",id:"troubleshooting/faq",title:"Frequently asked questions",description:"This is a collection of frequently asked questions. We do our best to ensure",source:"@site/target/docs/troubleshooting/faq.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/faq",permalink:"/metals/docs/troubleshooting/faq",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/troubleshooting/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently asked questions"},sidebar:"docs",previous:{title:"Proxy and mirrors",permalink:"/metals/docs/troubleshooting/proxy"}},p={},c=[{value:"How do I get more debugging information?",id:"how-do-i-get-more-debugging-information",level:2},{value:"I&#39;m using Scala 2.13.x but doctor shows me <code>*-build</code> and <code>*-build-build</code> at 2.12.x",id:"im-using-scala-213x-but-doctor-shows-me--build-and--build-build-at-212x",level:2},{value:"Why do I see this popup about Bloop when I upgrade?",id:"why-do-i-see-this-popup-about-bloop-when-i-upgrade",level:2},{value:"Worksheets",id:"worksheets",level:2},{value:"How do I run a worksheet?",id:"how-do-i-run-a-worksheet",level:3},{value:"I don&#39;t see evaluations",id:"i-dont-see-evaluations",level:3},{value:"I can&#39;t access symbols from my workspace in my worksheet",id:"i-cant-access-symbols-from-my-workspace-in-my-worksheet",level:3},{value:"Ammonite scripts",id:"ammonite-scripts",level:2},{value:"How do I use Scala 2.x.x for my script?",id:"how-do-i-use-scala-2xx-for-my-script",level:3},{value:"Can I use a specific version of Ammonite?",id:"can-i-use-a-specific-version-of-ammonite",level:3},{value:"Why do I get a warning to save my file when I try to organize imports?",id:"why-do-i-get-a-warning-to-save-my-file-when-i-try-to-organize-imports",level:2},{value:"Can&#39;t connect to sbt BSP on Apple M1",id:"cant-connect-to-sbt-bsp-on-apple-m1",level:2}],d={toc:c},h="wrapper";function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a collection of frequently asked questions. We do our best to ensure\neverything is included in the docs in the relevant places, but sometimes it's\neither hard to explain in the context of the docs or there just isn't a good\nenough place to stick it. This is an attempt to document some of the most common\nquestions that we see related to Metals."),(0,r.kt)("h2",{id:"how-do-i-get-more-debugging-information"},"How do I get more debugging information?"),(0,r.kt)("p",null,"If you are using VS Code add ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dmetals.loglevel=debug")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"metals.serverProperties")," setting, otherwise just add that property as an\nadditional parameter for starting Metals server."),(0,r.kt)("h2",{id:"im-using-scala-213x-but-doctor-shows-me--build-and--build-build-at-212x"},"I'm using Scala 2.13.x but doctor shows me ",(0,r.kt)("inlineCode",{parentName:"h2"},"*-build")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"*-build-build")," at 2.12.x"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/mgnRXse.png",alt:"build-build-doctor"})),(0,r.kt)("p",null,"When using sbt and Metals you get completions and hovers in your sbt build\nfiles. This is done by extra BSP connections with Bloop. So your build is\nactually a build target as well as your meta-build. This is why for example you\nsee nested ",(0,r.kt)("inlineCode",{parentName:"p"},"project/project/metals.sbt")," files. The version of Scala that sbt\nuses is 2.12.12 at this moment, so you will see that reflected in Doctor since\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"*-build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*-build-build")," represent your build and meta-build. If you\nsee that it's even an older version of Scala, like 2.12.7, this can be fixed by\nbumping your sbt version so you don't get a warning about unsupported versions\nof Scala in your project."),(0,r.kt)("p",null,"Note: ",(0,r.kt)("em",{parentName:"p"},"If you use sbt as your BSP server as well as your build tool, you won't\nsee this in the Doctor since sbt does not yet have sbt file support.")),(0,r.kt)("h2",{id:"why-do-i-see-this-popup-about-bloop-when-i-upgrade"},"Why do I see this popup about Bloop when I upgrade?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0rtoIxy.png",alt:"update-bloop"})),(0,r.kt)("p",null,"Sometimes when you update to the latest version of Metals you will see this\npopup. Remember that ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop")," runs in the\nbackground on your machine. Once it's started, even if you close Metals, it\ndoesn't shut down. So let's say you start Metals and no Bloop is running. Metals\nwill then start Bloop with the current version that Metals knows about. For\nexample, let's say it starts 1.4.4. Later that day a new version of Metals comes\nout that uses Bloop 1.4.5. When you update, Metals detects that 1.4.4 is\nrunning, and then you see the prompt in the image saying that it needs a newer\nversion. Probably to either include a bug fix from Bloop, a new feature, etc.\nWhy doesn't Metals just shut down Bloop and restart automatically? That's a\ngreat question, and one that we're exploring. However, it's a bit tricky since\ncurrently there is no way for Metals to know if it started Bloop or if you\nmanually started Bloop. In the latter situation, we wouldn't want to shut down\nthe server that you may have manually started at a specific version. For the\nvast majority of users, when you see this update, just click ",(0,r.kt)("strong",{parentName:"p"},"Turn off old\nserver"),"."),(0,r.kt)("h2",{id:"worksheets"},"Worksheets"),(0,r.kt)("p",null,"Make sure to check out the ",(0,r.kt)("inlineCode",{parentName:"p"},"worksheet")," section on your editor page. For example,\nyou can find information on worksheets in\n",(0,r.kt)("a",{parentName:"p",href:"/metals/docs/editors/vscode#worksheets"},"VS Code here"),"."),(0,r.kt)("h3",{id:"how-do-i-run-a-worksheet"},"How do I run a worksheet?"),(0,r.kt)("p",null,"Keep in mind that worksheets work a bit differently than you may be used to with\nMetals. Whereas in other editors you may need to ",(0,r.kt)("em",{parentName:"p"},"run")," your worksheet to see the\nresults, worksheets in Metals evaluate on save, so there is no need to ",(0,r.kt)("em",{parentName:"p"},"run"),"\nyour worksheet."),(0,r.kt)("h3",{id:"i-dont-see-evaluations"},"I don't see evaluations"),(0,r.kt)("p",null,"If you don't see any evaluations, make sure the name of your file is\n",(0,r.kt)("inlineCode",{parentName:"p"},"*.worksheet.sc"),"."),(0,r.kt)("h3",{id:"i-cant-access-symbols-from-my-workspace-in-my-worksheet"},"I can't access symbols from my workspace in my worksheet"),(0,r.kt)("p",null,"If you find you can't include a package, class, or really any symbol from your\nworkspace, keep in mind that where you create your worksheets matter. If you\nhave created your worksheet in a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory, you should have full access to\nyour classpath and your worksheet Scala version should match that of your\nproject. If you create your worksheet in the root of your project, you will be\non the default Scala version (2.12.12), and you won't have access to anything\nexcept for the standard lib on your classpath."),(0,r.kt)("h2",{id:"ammonite-scripts"},"Ammonite scripts"),(0,r.kt)("h3",{id:"how-do-i-use-scala-2xx-for-my-script"},"How do I use Scala 2.x.x for my script?"),(0,r.kt)("p",null,"Under the hood Metals uses\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexarchambault/ammonite-runner"},"alexarchambault/ammonite-runner"),"\nto help with Ammonite support. One of the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"ammonite-runner")," is that\nit allows you to specify the version of Scala for your script in a comment\nbefore you code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// scala 2.13.3\n")),(0,r.kt)("h3",{id:"can-i-use-a-specific-version-of-ammonite"},"Can I use a specific version of Ammonite?"),(0,r.kt)("p",null,"Sure, the same as the above, but instead of specifying the version of Scala,\nspecify the version of Ammonite."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// ammonite 2.2.0\n")),(0,r.kt)("h2",{id:"why-do-i-get-a-warning-to-save-my-file-when-i-try-to-organize-imports"},"Why do I get a warning to save my file when I try to organize imports?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/g8d82bV.png",alt:"organize-imports-warning"})),(0,r.kt)("p",null,"You'll currently see this if you try to use your editor action to organize\nimports. You'll also see this if you use the following setting in VS Code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"editor.codeActionsOnSave": {\n  "source.organizeImports": true\n}\n')),(0,r.kt)("p",null,"This happens because ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix/"},"Scalafix"),"(which\nis used for this feature) needs your code saved before it can organize your\nimports. There are some conversations going on about how to achieve this in the\nfuture, but for now you'll need to save your file before using this feature."),(0,r.kt)("p",null,"For context: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/issues/2120"},"#2120")),(0,r.kt)("h2",{id:"cant-connect-to-sbt-bsp-on-apple-m1"},"Can't connect to sbt BSP on Apple M1"),(0,r.kt)("p",null,"It might help to add an additional sbt setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.sbt/1.0/global.sbt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"serverConnectionType := ConnectionType.Tcp,\n")),(0,r.kt)("p",null,"then reload Metals. More on global settings\n",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/1.x/docs/Global-Settings.html"},"here"),"."),(0,r.kt)("p",null,"For context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/2798"},"#2798")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sbt/sbt/issues/6162"},"#6162"))))}m.isMDXComponent=!0}}]);
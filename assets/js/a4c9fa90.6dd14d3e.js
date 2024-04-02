"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7784],{8802:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(4848),n=o(8453);const i={author:"Chris Kipp",title:"sbt BSP support",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},r=void 0,a={permalink:"/metals/blog/2020/11/06/sbt-BSP-support",source:"@site/blog/2020-11-06-sbt-BSP-support.md",title:"sbt BSP support",description:"If you've been following the [sbt",date:"2020-11-06T00:00:00.000Z",tags:[],readingTime:5.9,hasTruncateMarker:!1,authors:[{name:"Chris Kipp",url:"https://twitter.com/ckipp01",imageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"}],frontMatter:{author:"Chris Kipp",title:"sbt BSP support",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},unlisted:!1,prevItem:{title:"Metals v0.9.5 - Lithium",permalink:"/metals/blog/2020/11/10/lithium"},nextItem:{title:"Metals v0.9.4 - Lithium",permalink:"/metals/blog/2020/09/21/lithium"}},l={authorsImageUrls:[void 0]},c=[{value:"What is BSP?",id:"what-is-bsp",level:2},{value:"What does sbt BSP support mean for Metals?",id:"what-does-sbt-bsp-support-mean-for-metals",level:2},{value:"What&#39;s the difference between Bloop and sbt BSP?",id:"whats-the-difference-between-bloop-and-sbt-bsp",level:2},{value:"How do I try it out?",id:"how-do-i-try-it-out",level:2},{value:"No <code>.bsp/sbt.json</code> exists",id:"no-bspsbtjson-exists",level:3},{value:"<code>metals.generate-bsp-config</code>",id:"metalsgenerate-bsp-config",level:3},{value:"<code>.bsp/sbt.json</code> already exists",id:"bspsbtjson-already-exists",level:3},{value:"<code>metals.bsp-switch</code>",id:"metalsbsp-switch",level:3},{value:"Switching back to Bloop",id:"switching-back-to-bloop",level:3},{value:"Doctor reset",id:"doctor-reset",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you've been following the ",(0,s.jsx)(t.a,{href:"https://github.com/sbt/sbt/releases",children:"sbt\nreleases"}),", 1.4.x introduced some great new\nfeatures, one of those being BSP support. This effort was initiated by community\nmembers and proposed to the ",(0,s.jsx)(t.a,{href:"https://github.com/scalacenter/advisoryboard/blob/master/proposals/023-bsp.md",children:"Scala Center Advisory\nBoard"}),".\nThen thanks to the work of ",(0,s.jsx)(t.a,{href:"https://twitter.com/adrienpi2",children:"Adrien Piquerez"})," and\n",(0,s.jsx)(t.a,{href:"https://twitter.com/eed3si9n",children:"Eugene Yokota"})," BSP support became a reality in\n1.4.0. You can read more about the reason behind the work and some of the\ndetails of the implementation in this blog post: ",(0,s.jsx)(t.a,{href:"https://www.scala-lang.org/blog/2020/10/27/bsp-in-sbt.html",children:"BSP Support in sbt\n1.4"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The Metals team is also happy to announce that as of the 0.9.5 release, the\nprocess to use other BSP servers like sbt is now much smoother. In some ways,\nBSP is an implementation detail abstracted away from a user, and you may not\ndirectly interact at all with your build server, even though it's pivotal for\nthe Metals experience. Therefore, we'd like to answer some common questions\nabout what this means to you as a user, explain some of the default choices\nMetals makes for you, and show you how to explore the sbt BSP server."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-bsp",children:"What is BSP?"}),"\n",(0,s.jsxs)(t.p,{children:["First off, you may be wondering what BSP is. The ",(0,s.jsx)(t.a,{href:"https://build-server-protocol.github.io/",children:"Build Server\nProtocol"})," (BSP) is a ",(0,s.jsx)(t.em,{children:"Protocol for IDEs and\nbuild tools to communicate about compilation, running, testing, debugging, and\nmuch more."})," If you're familiar with the ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/",children:"Language Server\nProtocol"})," (LSP), BSP is\ncomplementary to LSP and inspired by it. Where LSP allows your editor to\nabstract over various programming languages by a shared way to communicate to a\nlanguage server, BSP allows IDE's to abstract over various build servers. A\ntypical example of this can be illustrated like so:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/0RRUDlU.png",alt:"LSP BSP example"})}),"\n",(0,s.jsxs)(t.p,{children:["You have your editor (Emacs) communicating with Metals via LSP, and then Metals\ncommunicating with a BSP server (Bloop) via BSP. This communication over BSP can\nbe about compiling your code, running your code, defining sources in your\nworkspace, etc. You can read all about the various communication types ",(0,s.jsx)(t.a,{href:"https://build-server-protocol.github.io/docs/specification#actual-protocol",children:"here in\nthe\nprotocol"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://scalacenter.github.io/bloop/",children:"Bloop"})," was the first server to implement\nBSP, and it's the default build server for all build tools that Metals supports\nat the moment. When you open a fresh project, you're prompted to import your\nbuild, and this import process is running a form of \"Bloop Install\" to write\nyour build definition to ",(0,s.jsx)(t.code,{children:".bloop/"})," for Bloop to read and use. Then as you\ncontinue to edit, diagnostics and other information are flowing back and forth\nfrom Metals to Bloop. Hopefully this gives you a brief picture of what BSP is,\nand how it's used in Metals."]}),"\n",(0,s.jsx)(t.h2,{id:"what-does-sbt-bsp-support-mean-for-metals",children:"What does sbt BSP support mean for Metals?"}),"\n",(0,s.jsxs)(t.p,{children:['Another question you may have is "what does sbt BSP support mean for Metals"?\nThis means a couple different things. Up until this point, if you wanted to use\nsbt BSP, you needed to clear your ',(0,s.jsx)(t.code,{children:".metals/"})," and ",(0,s.jsx)(t.code,{children:".bloop"})," directories, and then\nstart sbt with a specific flag before connecting to it. None of this is\nnecessary anymore. In order for ",(0,s.jsx)(t.a,{href:"https://build-server-protocol.github.io/docs/server-discovery.html",children:"BSP\ndiscovery"}),"\nto happen, you need a ",(0,s.jsx)(t.code,{children:".bsp/*json"})," file with instructions on how to\nstart/connect to the build server. A new command has been added to Metals (which\nwe'll go over down below) that can generate this file for you if it doesn't\nexist, and then you will be automatically connected to sbt. If this file already\nexist, then we provide a simple way for you to \"switch\" build servers and for\nyour choice to be remembered. We also automatically include an sbt plugin to\nensure the correct semantic information is produced by the compiler. So to\nsummarize, Metals now has the ability to generate the necessary ",(0,s.jsx)(t.code,{children:".bsp/sbt.json"}),"\nfile if it doesn't exist, and to also switch back and forth from using Bloop or\nsbt as your build server."]}),"\n",(0,s.jsx)(t.h2,{id:"whats-the-difference-between-bloop-and-sbt-bsp",children:"What's the difference between Bloop and sbt BSP?"}),"\n",(0,s.jsx)(t.p,{children:"At this point you may be asking, \"what's the difference?\". For an average user,\nthere may not be a ton of difference, however I'd like to outline a couple\nthings that may be relevant to you."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Bloop supports the ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/debug-adapter-protocol/",children:"Debug Adapter\nProtocol"})," (DAP) and sbt\ndoesn't. So you'll notice when using sbt as a build server, you won't have\nthe ",(0,s.jsx)(t.code,{children:"run"})," or ",(0,s.jsx)(t.code,{children:"debug"})," code lenses directly in your editor like you do with\nBloop."]}),"\n",(0,s.jsx)(t.li,{children:"Bloop writes all the necessary information about your build it needs to disk\nwhereas sbt loads it into memory. If you're a user that works for long\nperiods of time on a single project, then this may not matter to you at all.\nHowever, if you jump in and out of projects, without having sbt shell\nrunning, then you will pay the cost of loading up your build every time."}),"\n",(0,s.jsx)(t.li,{children:"Bloop offers sbt file support that enables completions and hover, whereas\nthis is not yet available in the sbt BSP implementation."}),"\n",(0,s.jsxs)(t.li,{children:["sbt gives you access to the full task graph, so for example if you're using\n",(0,s.jsx)(t.code,{children:"BuildInfo"}),", and you compile with Bloop, your ",(0,s.jsx)(t.code,{children:"BuildInfo"})," won't get\ngenerated. However, sources will get generated when using sbt server. This\ncan help avoid any potential inconsistencies."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"While there are some more differences, these are probably the main ones you'll\nnotice as a user. These are both great tools, and you'll have to explore more to\nsee what is the best fit for you. For now, Metals defaults to using Bloop mainly\nbecause we believe it provides a richer feature set and because pretty much all\nof our testing includes Bloop as a build server."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-i-try-it-out",children:"How do I try it out?"}),"\n",(0,s.jsx)(t.p,{children:"Now to the good stuff. There are two main ways that you can start using sbt\nserver in Metals."}),"\n",(0,s.jsxs)(t.h3,{id:"no-bspsbtjson-exists",children:["No ",(0,s.jsx)(t.code,{children:".bsp/sbt.json"})," exists"]}),"\n",(0,s.jsxs)(t.p,{children:["If no ",(0,s.jsx)(t.code,{children:".bsp/sbt.json"})," exists yet, you can generate it with the new\n",(0,s.jsx)(t.code,{children:"metals.generate-bsp-config"})," command. At any time you can execute this command\nand Metals will ensure that you're on the minimum required sbt version (1.4.1),\ngenerate the ",(0,s.jsx)(t.code,{children:".bsp/sbt.json"})," file for you, include the necessary plugin, and\nthen auto-connect to the sbt build server. For example in VS Code this looks\nlike this:"]}),"\n",(0,s.jsx)(t.h3,{id:"metalsgenerate-bsp-config",children:(0,s.jsx)(t.code,{children:"metals.generate-bsp-config"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/kBNbtzI.gif",alt:"generate-bsp-config"})}),"\n",(0,s.jsxs)(t.h3,{id:"bspsbtjson-already-exists",children:[(0,s.jsx)(t.code,{children:".bsp/sbt.json"})," already exists"]}),"\n",(0,s.jsxs)(t.p,{children:["If you've ran sbt on your project already, your ",(0,s.jsx)(t.code,{children:".bsp/sbt.json"})," file will\nalready exist. In this case, you can simply use the ",(0,s.jsx)(t.code,{children:"metals.bsp-switch"})," command\nand choose sbt. For example, using ",(0,s.jsx)(t.code,{children:"coc-metals"}),", it looks like this:"]}),"\n",(0,s.jsx)(t.h3,{id:"metalsbsp-switch",children:(0,s.jsx)(t.code,{children:"metals.bsp-switch"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/6tY2ofL.gif",alt:"bsp-switch"})}),"\n",(0,s.jsx)(t.h3,{id:"switching-back-to-bloop",children:"Switching back to Bloop"}),"\n",(0,s.jsxs)(t.p,{children:["After you do a ",(0,s.jsx)(t.code,{children:"metals.bsp-switch"})," or ",(0,s.jsx)(t.code,{children:"metals-generate-bsp-config"}),", your choice\nwill be remembered. So the next time that you open your workspace, you will\nautomatically connect to the last build server you had chosen. If you'd like to\ngo back to your previous build server, you can simply use the\n",(0,s.jsx)(t.code,{children:"metals.bsp-switch"})," command again to choose your previous server. For editors\nthat have an html doctor, you can also reset your build server choice in the\nDoctor."]}),"\n",(0,s.jsx)(t.h3,{id:"doctor-reset",children:"Doctor reset"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/YEGfEGB.png",alt:"Doctor"})}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["We hope you enjoy this easier way to use sbt server with Metals. If you're\ncurious about the implementation details, much of the work was done in ",(0,s.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2154",children:"this\npr"}),". As always please don't\nhesitate to ask questions on our various channels, submit issues, or create new\nfeature requests."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var s=o(6540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
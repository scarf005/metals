"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5638],{3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const o={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},r=void 0,l={permalink:"/metals/blog/2018/12/06/iron",source:"@site/blog/2018-12-06-iron.md",title:"Metals v0.3 - Iron",description:'We are excited to announce the release of Metals v0.3, codename "Iron" \ud83c\udf89 Metals',date:"2018-12-06T00:00:00.000Z",tags:[],readingTime:2.265,hasTruncateMarker:!0,authors:[{name:"\xd3lafur P\xe1ll Geirsson",url:"https://twitter.com/olafurpg",imageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"}],frontMatter:{author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},unlisted:!1,prevItem:{title:"Fast goto definition with low memory footprint",permalink:"/metals/blog/2018/12/12/fast-goto-definition"}},a={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Simple installation",id:"simple-installation",level:2},{value:"Accurate diagnostics",id:"accurate-diagnostics",level:2},{value:"Goto definition",id:"goto-definition",level:2},{value:"Text editors",id:"text-editors",level:2},{value:"Contributors",id:"contributors",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:'We are excited to announce the release of Metals v0.3, codename "Iron" \ud83c\udf89 Metals\nis a language server for Scala.'}),"\n",(0,s.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"simple installation"}),"\n",(0,s.jsx)(t.li,{children:"accurate diagnostics"}),"\n",(0,s.jsx)(t.li,{children:"goto definition"}),"\n",(0,s.jsx)(t.li,{children:"text editors: Visual Studio Code, Atom, Vim and Sublime Text"}),"\n",(0,s.jsx)(t.li,{children:"no completions"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Check out the website and give Metals a try: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"})]}),"\n",(0,s.jsx)(t.h2,{id:"simple-installation",children:"Simple installation"}),"\n",(0,s.jsx)(t.p,{children:"A useful IDE needs to understand your project's directory structure and library\ndependencies. Metals can now import sbt and Bloop builds with the following\nworkflow"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open a directory in your editor"}),"\n",(0,s.jsx)(t.li,{children:"Click on a button to import the build"}),"\n",(0,s.jsx)(t.li,{children:"Wait for the build import step to complete, this may take a while"}),"\n",(0,s.jsx)(t.li,{children:"Enjoy IDE features \ud83d\udc4c"}),"\n",(0,s.jsx)(t.li,{children:"When your build changes, Metals asks you to import again."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/49659280-26c58880-fa44-11e8-92e6-b3df984fbdd2.png",alt:"vscode-import-build"})}),"\n",(0,s.jsx)(t.h2,{id:"accurate-diagnostics",children:"Accurate diagnostics"}),"\n",(0,s.jsx)(t.p,{children:"Once your build has been imported, Metals triggers compilation on file save and\npublishes compiler errors as red squiggles in your editor. By construction, this\napproach avoids the situation where users see different errors in their editor\nand the build tool."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/49591682-666e7080-f96f-11e8-9fc0-e48bbe13187d.png",alt:"accurate-diagnostics"})}),"\n",(0,s.jsx)(t.h2,{id:"goto-definition",children:"Goto definition"}),"\n",(0,s.jsx)(t.p,{children:"Metals supports goto definition for project sources and Scala+Java library\ndependencies. Navigation works even when the open buffer contains syntax errors."}),"\n",(0,s.jsx)(t.p,{children:"Navigation in Metals is fast and consumes little memory. For a case study\nproject, Metals indexes 800k lines of Scala code per second and the resulting\nsearch index requires 25Mb RAM per million lines of code."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/49591684-67070700-f96f-11e8-873d-90c40480528b.gif",alt:"goto-definition"})}),"\n",(0,s.jsx)(t.h2,{id:"text-editors",children:"Text editors"}),"\n",(0,s.jsxs)(t.p,{children:["Thanks to the\n",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/",children:"Language Server Protocol"}),",\nMetals works multiple text editors. The following editors have been validated to\nwork with Metals and the installation steps have been documented on the Metals\nwebsite."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Overview: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/overview.html",children:"https://scalameta.org/metals/docs/editors/overview.html"})]}),"\n",(0,s.jsxs)(t.li,{children:["Visual Studio Code: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/vscode.html",children:"https://scalameta.org/metals/docs/editors/vscode.html"})]}),"\n",(0,s.jsxs)(t.li,{children:["Atom: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/atom.html",children:"https://scalameta.org/metals/docs/editors/atom.html"})]}),"\n",(0,s.jsxs)(t.li,{children:["Vim: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/vim.html",children:"https://scalameta.org/metals/docs/editors/vim.html"})]}),"\n",(0,s.jsxs)(t.li,{children:["Sublime Text: ",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/sublime.html",children:"https://scalameta.org/metals/docs/editors/sublime.html"})]}),"\n",(0,s.jsxs)(t.li,{children:["guide to integrate new editors:\n",(0,s.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/new-editor.html",children:"https://scalameta.org/metals/docs/editors/new-editor.html"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,s.jsx)(t.p,{children:"Big thanks to all the contributors who contributed to this release. In\nparticular, I want to thank the following people:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Jorge Vicente Cantero (@jvican) for his great work in Bloop and helping out\nwith unblocking a lot of Metals issues on the build side. Most the heavy\nlifting in "simple installation" is provided by Bloop.'}),"\n",(0,s.jsx)(t.li,{children:"Gabriele Petronella (@gabro) for his great work on the VS Code plugin and\nheroic code reviews of multiple large PRs (of which one that was +12,645\n\u22121,126!!)."}),"\n",(0,s.jsxs)(t.li,{children:["Alexey Alekhin (@laughedelic) for his great work on the Atom ",(0,s.jsx)(t.code,{children:"ide-scala"}),"\npackage."]}),"\n",(0,s.jsx)(t.li,{children:"Eugene Burmako (@xeno-by) for close collaboration on Scalameta and SemanticDB\nthat made the features in this release possible."}),"\n",(0,s.jsx)(t.li,{children:"Justin Kaeser (@jastice) from Jetbrains for collaboration on the Build Server\nProtocol specification and bsp4j library."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"$ git shortlog -sn --no-merges v0.1.0..v0.3.1\n\xd3lafur P\xe1ll Geirsson\nGabriele Petronella\nCorey O'Connor\nPavel Logvinov\nCody Allen\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
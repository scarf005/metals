"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[450],{1929:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var s=t(5893),r=t(1151);const i={author:"Katarzyna Marek",title:"Workspace folders",authorURL:"https://github.com/kasiaMarek",authorImageURL:"https://github.com/kasiaMarek.png"},a=void 0,n={permalink:"/metals/blog/2023/07/17/workspace-folders",source:"@site/blog/2023-07-17-workspace-folders.md",title:"Workspace folders",description:"In the upcoming version of metals we will add support for LSP workspace folders. This feature allows you to load multiple Scala projects/modules into the same workspace without the need to switch between multiple windows.",date:"2023-07-17T00:00:00.000Z",formattedDate:"July 17, 2023",tags:[],readingTime:3.805,hasTruncateMarker:!1,authors:[{name:"Katarzyna Marek",url:"https://github.com/kasiaMarek",imageURL:"https://github.com/kasiaMarek.png"}],frontMatter:{author:"Katarzyna Marek",title:"Workspace folders",authorURL:"https://github.com/kasiaMarek",authorImageURL:"https://github.com/kasiaMarek.png"},unlisted:!1,prevItem:{title:"Metals v1.0.0 - Silver",permalink:"/metals/blog/2023/07/19/silver"},nextItem:{title:"Metals v0.11.12 - Aluminium",permalink:"/metals/blog/2023/04/21/aluminium"}},l={authorsImageUrls:[void 0]},c=[{value:"The new multi-root approach",id:"the-new-multi-root-approach",level:2},{value:"How do I use the multi-root feature?",id:"how-do-i-use-the-multi-root-feature",level:2},{value:"VSCode",id:"vscode",level:3},{value:"nvim-metals (<em>section written by ckipp01</em>)",id:"nvim-metals-section-written-by-ckipp01",level:3},{value:"Changes for the clients",id:"changes-for-the-clients",level:2},{value:"Quick summary",id:"quick-summary",level:2}];function d(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["In the upcoming version of metals we will add support for ",(0,s.jsx)(o.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_workspaceFolders",children:"LSP workspace folders"}),". This feature allows you to load multiple Scala projects/modules into the same workspace without the need to switch between multiple windows."]}),"\n",(0,s.jsx)(o.h2,{id:"the-new-multi-root-approach",children:"The new multi-root approach"}),"\n",(0,s.jsxs)(o.p,{children:["Before this feature metals would only support a single project treating a workspace root folder as the root of the project. The workspace root was established based on the ",(0,s.jsx)(o.code,{children:"rootUri"})," field of ",(0,s.jsx)(o.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initializeParams",children:(0,s.jsx)(o.code,{children:"InitializeParams"})})," sent by the client upon initialization."]}),"\n",(0,s.jsxs)(o.p,{children:["Now a single metals instance can accommodate several projects (or multiple roots of a project) at the time. In ",(0,s.jsx)(o.code,{children:"InitializeParams"})," metals first looks for projects' roots under ",(0,s.jsx)(o.code,{children:"workspaceFolders"})," in ",(0,s.jsx)(o.code,{children:"InitializeParams"})," and if empty we still fallback to the ",(0,s.jsx)(o.code,{children:"rootUri"}),". Loaded projects can be changed dynamically though ",(0,s.jsx)(o.code,{children:"didChangeWorkspaceFolders"})," notifications, which allow the client (editor) to inform metals about any added or removed projects."]}),"\n",(0,s.jsx)(o.p,{children:"All workspace folders are handled in metals separately and are oblivious of each other.\nE.g. for the following multi project structure"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"project1\n|- build.sbt\n|- src\n  |- Main.scala\n\nproject2\n|- build.sbt\n|- src\n  |- Main.scala\n"})}),"\n",(0,s.jsxs)(o.p,{children:["we will keep two separate entities: one responsible for ",(0,s.jsx)(o.code,{children:"project1"}),", and another one for ",(0,s.jsx)(o.code,{children:"project2"}),".\nUpon receiving most requests metals will redirect them to the entity responsible for the project of interest. If there are no other clues the project is chosen based on the currently opened file. E.g. if the user wants to insert an inferred type in the file ",(0,s.jsx)(o.code,{children:"../project1/src/Main"}),", the request received by Metals will be redirected to the entity responsible for ",(0,s.jsx)(o.code,{children:"project1"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"For some requests we collect information from all the projects and send a joint result, e.g. when searching for workspace symbols."}),"\n",(0,s.jsx)(o.h2,{id:"how-do-i-use-the-multi-root-feature",children:"How do I use the multi-root feature?"}),"\n",(0,s.jsx)(o.h3,{id:"vscode",children:"VSCode"}),"\n",(0,s.jsxs)(o.p,{children:["In VSCode workspace folder support is achieved by ",(0,s.jsx)(o.a,{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",children:"multi-root workspaces"}),". To load multiple projects into a single workspace you can simply open one of the projects and add the other one using ",(0,s.jsx)(o.code,{children:"File > Add Folder to Workspace"})," and then choosing the correct folder."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/LTYrx9V.gif",alt:"add-workspace-folder"})}),"\n",(0,s.jsx)(o.p,{children:"Now you have two projects loaded side by side, so you can easily see both and switch between them. All of the current metals functionality accommodates multiple projects, so you can use metals the same way as you did before. The biggest changes will be visible in the places where information from the whole workspace is collected, like workspace symbol search, test explorer, or metals doctor."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/zWmmsC2.gif",alt:"multi-root-tests"})}),"\n",(0,s.jsxs)(o.p,{children:["The target project for a command is usually chosen based on the currently opened file. E.g. if you run ",(0,s.jsx)(o.code,{children:"Switch build server"})," the command it will be executed for the project in focus. If no project is in focus the editor will explicitly ask for which project the command should be executed."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/tV7K822.gif",alt:"target-folder"})}),"\n",(0,s.jsxs)(o.p,{children:["Finally, logs can still be found in the ",(0,s.jsx)(o.code,{children:".metals/metals.log"})," in the root of each project. Note, that for the time being all information is logged to all opened workspace folders, so anything logged for ",(0,s.jsx)(o.code,{children:"project1"})," will also be visible in logs for ",(0,s.jsx)(o.code,{children:"project2"}),"."]}),"\n",(0,s.jsxs)(o.h3,{id:"nvim-metals-section-written-by-ckipp01",children:["nvim-metals (",(0,s.jsxs)(o.em,{children:["section written by ",(0,s.jsx)(o.a,{href:"https://github.com/ckipp01",children:"ckipp01"})]}),")"]}),"\n",(0,s.jsxs)(o.p,{children:["When using nvim-metals, you'll start just like you do with any other project.\nSince the idea of a workspace is a bit \"artificial\" with Neovim, you can really\njust add any new root to have a multi-root workspace. All you'll need to do is\nnavigate to a file at the root level of the workspace you'd like to add, and use\nthe\n",(0,s.jsx)(o.a,{href:"https://neovim.io/doc/user/lsp.html#vim.lsp.buf.add_workspace_folder()",children:(0,s.jsx)(o.code,{children:"vim.lsp.buf.add_workspace_folder()"})})," function to add the folder containing the file you're in as another root."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/E8iriR9.gif",alt:"add_workspace_folder"})}),"\n",(0,s.jsx)(o.p,{children:"To make this easier, you can also just create a mapping to use."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-lua",children:'vim.keymap.set("n", "<leader>awf", vim.lsp.buf.add_workspace_folder)\n'})}),"\n",(0,s.jsx)(o.p,{children:"To verify that this has worked correctly you should be able to now see both\nworkspaces reflected in your Metals Doctor."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/2u48wDK.gif",alt:"nvim-metals doctor"})}),"\n",(0,s.jsxs)(o.p,{children:["You should also see that some commands, like the\n",(0,s.jsx)(o.a,{href:"https://neovim.io/doc/user/lsp.html#vim.lsp.buf.workspace_symbol()",children:(0,s.jsx)(o.code,{children:"vim.lsp.buf.workspace_symbol()"})}),"\nnow show results from all the added workspaces."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:"https://i.imgur.com/RczJIcp.gif",alt:"workspace_symbols"})}),"\n",(0,s.jsx)(o.h2,{id:"changes-for-the-clients",children:"Changes for the clients"}),"\n",(0,s.jsx)(o.p,{children:"Since workspace folders are a part of the LSP for any client implementing this capability the multi-root support should work out of the box, however, there will be a few minor changes to needed accommodate the new approach."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["The metals doctor result json format will change to contain a list of diagnostics for each workspace folder. Current format can be found in the description of ",(0,s.jsx)(o.code,{children:"RunDoctor"})," command (visible in ",(0,s.jsx)(o.code,{children:"ClientCommands.scala"})," in ",(0,s.jsx)(o.code,{children:"metals"})," repo)."]}),"\n",(0,s.jsxs)(o.li,{children:["For test explorer users ",(0,s.jsx)(o.code,{children:"BuildTargetUpdate"})," will also now contain information about the target folder."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"quick-summary",children:"Quick summary"}),"\n",(0,s.jsxs)(o.p,{children:["Metals now supports the ",(0,s.jsx)(o.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_workspaceFolders",children:"LSP workspace folders"}),", which in VSCode are implemented by ",(0,s.jsx)(o.a,{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",children:"multi-root workspaces"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"If you haven't yet make sure to try out our new multi-root support!"})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>n,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);
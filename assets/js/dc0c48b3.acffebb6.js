"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8534],{7796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(5893),o=n(1151);const s={author:"Chris Kipp",title:"A Dive into Configuring Metals",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars1.githubusercontent.com/u/13974112?s=400&u=7b6a2ddab8eec6f99e4e40ae9b81f71cb5ba92e5&v=4"},a=void 0,r={permalink:"/metals/blog/2020/07/23/configuring-a-client",source:"@site/blog/2020-07-23-configuring-a-client.md",title:"A Dive into Configuring Metals",description:"As of this last Metals release, it's now 100% possible to fully configure Metals",date:"2020-07-23T00:00:00.000Z",formattedDate:"July 23, 2020",tags:[],readingTime:6.97,hasTruncateMarker:!1,authors:[{name:"Chris Kipp",url:"https://twitter.com/ckipp01",imageURL:"https://avatars1.githubusercontent.com/u/13974112?s=400&u=7b6a2ddab8eec6f99e4e40ae9b81f71cb5ba92e5&v=4"}],frontMatter:{author:"Chris Kipp",title:"A Dive into Configuring Metals",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars1.githubusercontent.com/u/13974112?s=400&u=7b6a2ddab8eec6f99e4e40ae9b81f71cb5ba92e5&v=4"},unlisted:!1,prevItem:{title:"Metals v0.9.3 - Lithium",permalink:"/metals/blog/2020/08/19/lithium"},nextItem:{title:"Metals v0.9.2 - Lithium",permalink:"/metals/blog/2020/07/15/lithium"}},l={authorsImageUrls:[void 0]},c=[{value:"The first configuration",id:"the-first-configuration",level:2},{value:"User configuration",id:"user-configuration",level:2},{value:"Experimental",id:"experimental",level:2},{value:"InitializationOptions",id:"initializationoptions",level:2},{value:"Are there still server properties?",id:"are-there-still-server-properties",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["As of this last Metals release, it's now 100% possible to fully configure Metals\nwithout any need to pass in server properties. Depending on your editor of\nchoice, the process to configure Metals may be completely abstracted away. You\nsimply click install, wait a bit, and start coding. In this post I'd like to\ntalk a bit about the progression of how Metals was originally configured fully\nwith server properties and how it can now be fully configured via the client,\nwhich in ",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/",children:"LSP"})," terms is\nyour editor. This can serve both as a guide for those client extension\nmaintainers out there and also those curious at how Metals correctly works for\nall the various editors."]}),"\n",(0,i.jsx)(t.h2,{id:"the-first-configuration",children:"The first configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Looking back to the Fall of 2018, you see a giant glimpse of Metals becoming\nwhat it is today when looking at a giant commit by\n",(0,i.jsx)(t.a,{href:"https://twitter.com/olafurpg",children:"@olafurpg"})," with the title ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/commit/df6b41acaad1978ffd1fa25c41909c38425932ab",children:"Implement pretty\nbasic language server and build\nclient."}),".\nIt's a pretty fascinating commit to look at if you're interested in the\nbeginnings of Metals, but I want to focus in on a specific file that still exists\ntoday, which is the\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/commit/df6b41acaad1978ffd1fa25c41909c38425932ab#diff-dc72b5c684177c884881164ab17182eb",children:"MetalsServerConfig.scala"}),".\nIn this file you see the first configuration options that existed for Metals.\nYou see things like ",(0,i.jsx)(t.code,{children:"isLogShowMessage"})," to ensure users were correctly getting\nstatus messages instead of everything just going into the logs. (This was also\nbefore\n",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/integrations/new-editor#metalsstatus",children:(0,i.jsx)(t.code,{children:"metals/status"})}),"\nexisted which is used today for a better status experience in Metals). You also\nsee other options like ",(0,i.jsx)(t.code,{children:"isHttpEnabled"})," for Metals to start the Doctor for those\nthat needed an HTTP client interface, or even an ",(0,i.jsx)(t.code,{children:"icons"})," setting to ensure\nthings looked nice and matched your client. At this point, instead of just\nhaving the user specify every one of these when they bootstrapped the server, a\n",(0,i.jsx)(t.code,{children:"metals.client"})," property was introduced that we could give editors a set of\ndefaults. Here is an example for the first settings for Vim and Metals using the\n",(0,i.jsx)(t.a,{href:"https://github.com/natebosch/vim-lsc",children:"vim-lsc"})," plugin:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'System.getProperty("metals.client", "unknown") match {\n  case "vim-lsc" =>\n    MetalsServerConfig().copy(\n      isExtensionsEnabled = false,\n      fileWatcher = FileWatcherConfig.auto,\n      isLogStatusBar = true,\n      isNoInitialized = true,\n      isHttpEnabled = true,\n      icons = Icons.unicode\n    )\n  ...\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The property would then be set when the user would bootstrap Metals. This\nstarted out as a manual process for almost all the editors utilizing\n",(0,i.jsx)(t.a,{href:"https://github.com/coursier/coursier",children:"Coursier"}),". This still actually remains a\nvalid way to configure Metals, although not recommended if your client supports\nsetting ",(0,i.jsx)(t.code,{children:"InitializationOptions"})," in the\n",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/specification-current/#initialize",children:(0,i.jsx)(t.code,{children:"initalize"})}),"\nrequest. It's also almost the identical process that happens behind the scenes\nwhen client extensions like\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode",children:"metals-vscode"}),",\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/coc-metals",children:"coc-metals"}),", and\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-sublime",children:"metals-sublime"})," bootstrap the\nserver for you. For example, here is how you would manually do this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"coursier bootstrap \\\n  --java-opt -Xss4m \\\n  --java-opt -Xms100m \\\n  --java-opt -Dmetals.client=emacs \\\n  org.scalameta:metals_2.12:0.9.2 \\\n  -r bintray:scalacenter/releases \\\n  -r sonatype:snapshots \\\n  -o /usr/local/bin/metals-emacs -f\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the above example, you would then get the defaults specified in\n",(0,i.jsx)(t.code,{children:"MetalsServerConfig.scala"})," for ",(0,i.jsx)(t.code,{children:"emacs"}),". Again, when the process is automated\nit's very similar, and you can see this if you poke around the\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode/blob/master/src/extension.ts#L166",children:(0,i.jsx)(t.code,{children:"fetchAndLaunchMetals"})}),"\nfunction in the VS-Code extension. You can see how the path to Coursier is\ngrabbed, your ",(0,i.jsx)(t.code,{children:"JAVA_HOME"})," is captured, and how we get some extra\nvariables/properties to call Metals with."]}),"\n",(0,i.jsx)(t.h2,{id:"user-configuration",children:"User configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Apart from server properties, it was also necessary for users to be able to\neasily change a setting, even while in the editor. For example, we have a\ncurrent setting ",(0,i.jsx)(t.code,{children:"metals.superMethodLensesEnabled"})," which when enabled will\ndisplay a code lens that when invoked will either go to the parent class\ncontaining the definition of the method or symbol or display the full method\nhierarchy allowing you to choose where to go."]}),"\n",(0,i.jsxs)(t.p,{children:["Here is an example of what this looks like in Vim:\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/rEvhzG1.png",alt:"Super Method Hierarchy"})]}),"\n",(0,i.jsxs)(t.p,{children:["This feature is actually turned off by default since in very large code bases\nyou may experience a lag. So if a user wanted to turn this on, it wouldn't be a\ngreat user experience to have to re-bootstrap the server to enable this feature.\nThis is where the User Configuration comes into play by being able to change a\nconfiguration value and notify the server via\n",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/specification#workspace_didChangeConfiguration",children:(0,i.jsx)(t.code,{children:"workspace/didChangeConfiguration"})}),".\nThis can fully happen for most of the user configuration values without any need\nto restart the server. You can see the first configuration options added this\nway in ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/commit/f4706ec75afb9bf797e3144f4a0e91bb0b186e07",children:"this\ncommit"}),"\nwhere the ability to define your ",(0,i.jsx)(t.code,{children:"JAVA_HOME"})," was added. With now allowing for\nuser configurations in Metals, this allowed for an even more customized\nexperience."]}),"\n",(0,i.jsx)(t.h2,{id:"experimental",children:"Experimental"}),"\n",(0,i.jsxs)(t.p,{children:["Being able to customize the server with properties and allowing users to pass in\nsome configuration values worked great. However, once Metals started creating\nLSP extensions for functionality that wasn't supported fully just by LSP, then a\nway was needed for the client to express that it supported these extensions.\nThis is when Metals started to use the\n",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/specification-current/#initialize",children:(0,i.jsx)(t.code,{children:"ClientCapabilities.experimental"})}),"\nfield which the client needed to declare support the extension. You can see the\nfirst inklings of this when the ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/tree-view-protocol.html",children:"Tree View\nProtocol"})," was\nintroduced ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/commit/a55a2413ef10237c8510eb707c0de0cd03b83d85#diff-f8c05eebbf12c9c21a7d568f09b500ea",children:"here in this\ncommit"}),".\nThis then continued to be further expanded as we introduced more extensions."]}),"\n",(0,i.jsxs)(t.p,{children:["As it became easier for various clients to set this, we slowly ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1414",children:"started to\nmigrate"})," other options that could\nonly be previously set via server properties to\n",(0,i.jsx)(t.code,{children:"ClientCapabilities.experimental"}),". So settings like which format you'd like the\nDoctor to return could now be set directly by the client without need to\nbootstrap the server with a specific property. This allowed for much easier\nconfiguration than was previously had."]}),"\n",(0,i.jsx)(t.h2,{id:"initializationoptions",children:"InitializationOptions"}),"\n",(0,i.jsxs)(t.p,{children:["Once it was clear that configuring Metals via the client was desirable, a closer\nlook was taken at ",(0,i.jsx)(t.code,{children:"InitializationOptions"})," that can be passed in during the\n",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/specification-current/#initialize",children:(0,i.jsx)(t.code,{children:"initialize"})}),"\nrequest. Since any value is able to be passed in this way, a decision was made\nto fully migrate all the possible settings that were previously set as server\nproperties (except a select few that we'll touch on later), and also move all\nthe of settings that could be set under ",(0,i.jsx)(t.code,{children:"experimental"})," to\n",(0,i.jsx)(t.code,{children:"InitializationOptions"})," as well. This ultimately allows for clients to fully\nconfigured Metals via ",(0,i.jsx)(t.code,{children:"InitializationOptions"})," without the need to set any server\nproperties. In theory this also meant that you could not use the same Metals\nexecutable for VS Code, Vim, or Emacs since the server is fully being configured\nby the client itself. The current settings that can be passed in and their\ndefaults are explained in detail ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/integrations/new-editor#initializationoptions",children:"here on the\nwebsite"}),",\nbut the interface is as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'interface MetalsInitializationOptions {\n  compilerOptions?: CompilerInitializationOptions;\n  debuggingProvider?: boolean;\n  decorationProvider?: boolean;\n  didFocusProvider?: boolean;\n  doctorProvider?: "json" | "html";\n  executeClientCommandProvider?: boolean;\n  globSyntax?: "vscode" | "uri";\n  icons?: "vscode" | "octicons" | "atom" | "unicode";\n  inputBoxProvider?: boolean;\n  isExitOnShutdown?: boolean;\n  isHttpEnabled?: boolean;\n  openFilesOnRenameProvider?: boolean;\n  quickPickProvider?: boolean;\n  renameFileThreshold?: number;\n  slowTaskProvider?: boolean;\n  statusBarProvider?: "on" | "off" | "log-message" | "show-message";\n  treeViewProvider?: boolean;\n  openNewWindowProvider?: boolean;\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'interface CompilerInitializationOptions {\n  completionCommand?: string;\n  isCompletionItemDetailEnabled?: boolean;\n  isCompletionItemDocumentationEnabled?: boolean;\n  isCompletionItemResolve?: boolean;\n  isHoverDocumentationEnabled?: boolean;\n  isSignatureHelpDocumentationEnabled?: boolean;\n  overrideDefFormat?: "ascii" | "unicode";\n  parameterHintsCommand?: string;\n  snippetAutoIndent?: boolean;\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You'll notice that this allows for a much finer grained configuration if the\nclient chooses to set certain values. Everything from whether or not the Scala\nPresentation Compiler should populate the ",(0,i.jsx)(t.code,{children:"SignatureHelp.documentation"})," to\nwhether or not the editor supports opening a new window after using the\n",(0,i.jsx)(t.code,{children:"metals.new-scala-project"})," command can now be easily configured. Fully\nconfiguring Metals through ",(0,i.jsx)(t.code,{children:"InitializationOptions"})," is now the recommended way to\nconfigure Metals."]}),"\n",(0,i.jsx)(t.h2,{id:"are-there-still-server-properties",children:"Are there still server properties?"}),"\n",(0,i.jsxs)(t.p,{children:["While all of the old server properties still exist for Metals, it's no longer\nrecommended to use them to configure Metals. However, there are still a few\nserver properties that remain only server properties since they are not meant to\nbe widely used, and aren't exactly recommended to use for the average user. You\ncan see an up to date list of these ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/integrations/new-editor#metals-server-properties",children:"here on the\nwebsite"}),"\nand what functionality they provide."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["As of Metals 0.9.2 it's fully possibly for all clients to use a default\nbootstrapped Metals that can fully be configured via ",(0,i.jsx)(t.code,{children:"InitializationOptions"}),".\nThere is a freshly updated ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/new-editor.html",children:"Integrating a new\neditor"})," section on\nthe website to help explain how to exactly configure a client for usage with\nMetals. As always, don't hesitate to reach out on any of the various channels\nlocated in the footer or submit an issue to either improve documentation or to\nlog a bug. Also as a reminder, there is a separate repo for\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-feature-requests",children:"metals-feature-requests"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Happy coding with Metals!"})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
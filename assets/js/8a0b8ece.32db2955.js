"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4782],{908:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=s(5893),t=s(1151);const l={id:"sublime",title:"Sublime Text"},o=void 0,r={id:"editors/sublime",title:"Sublime Text",description:"Metals works with Sublime Text (build 4000 or later) thanks to the",source:"@site/target/docs/editors/sublime.md",sourceDirName:"editors",slug:"/editors/sublime",permalink:"/metals/docs/editors/sublime",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/sublime.md",tags:[],version:"current",frontMatter:{id:"sublime",title:"Sublime Text"},sidebar:"docs",previous:{title:"Vim",permalink:"/metals/docs/editors/vim"},next:{title:"Emacs",permalink:"/metals/docs/editors/emacs"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installing the plugins",id:"installing-the-plugins",level:2},{value:"Importing a build",id:"importing-a-build",level:2},{value:"Server logs",id:"server-logs",level:2},{value:"Find symbol references",id:"find-symbol-references",level:2},{value:"Goto symbol in workspace",id:"goto-symbol-in-workspace",level:2},{value:"Manually trigger build import",id:"manually-trigger-build-import",level:2},{value:"Tweaking Sublime Text for a better productivity",id:"tweaking-sublime-text-for-a-better-productivity",level:2},{value:"Optional LSP client tweaks",id:"optional-lsp-client-tweaks",level:3},{value:"Additional key mappings",id:"additional-key-mappings",level:3},{value:"Keymapping for formatting document via scalafmt",id:"keymapping-for-formatting-document-via-scalafmt",level:4},{value:"Add key mapping for Goto symbol in workspace",id:"add-key-mapping-for-goto-symbol-in-workspace",level:3},{value:"Enabling auto-import on completion",id:"enabling-auto-import-on-completion",level:3},{value:"Using latest Metals SNAPSHOT",id:"using-latest-metals-snapshot",level:2},{value:"Files and Directories to include in your Gitignore",id:"files-and-directories-to-include-in-your-gitignore",level:2},{value:"Worksheets",id:"worksheets",level:2},{value:"Getting started with Worksheets",id:"getting-started-with-worksheets",level:3},{value:"Evaluations",id:"evaluations",level:3},{value:"Using dependencies in worksheets",id:"using-dependencies-in-worksheets",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Running scalafix rules",id:"running-scalafix-rules",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Metals works with Sublime Text (build 4000 or later) thanks to the\n",(0,i.jsx)(n.a,{href:"https://github.com/sublimelsp/LSP",children:"sublimelsp/LSP"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/scalameta/metals-sublime",children:"scalameta/metals-sublime"})," plugins."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/vJKP0T3.gif",alt:"Sublime Text demo"})}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Java 8, 11, 17 provided by OpenJDK or Oracle"}),". Eclipse OpenJ9 is not\nsupported, please make sure the ",(0,i.jsx)(n.code,{children:"JAVA_HOME"})," environment variable\npoints to a valid Java 8, 11 or 17 installation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"macOS, Linux or Windows"}),". Metals is developed on many operating systems and\nevery PR is tested on Ubuntu, Windows and MacOS."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.13, 2.12, 2.11 and Scala 3"}),". Metals supports these Scala versions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.13"}),":\n2.13.12, 2.13.11, 2.13.10, 2.13.9, 2.13.8, 2.13.7, 2.13.6, 2.13.5"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.12"}),":\n2.12.18, 2.12.17, 2.12.16, 2.12.15, 2.12.14, 2.12.13, 2.12.12, 2.12.11"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.11"}),":\n2.11.12"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 3"}),":\n3.3.1, 3.3.0, 3.2.2, 3.2.1, 3.2.0, 3.1.3, 3.1.2, 3.1.1, 3.1.0"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that 2.11.x support is deprecated and it will be removed in future releases.\nIt's recommended to upgrade to Scala 2.12 or Scala 2.13"}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-plugins",children:"Installing the plugins"}),"\n",(0,i.jsx)(n.p,{children:"Install the following packages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/sublimelsp/LSP",children:"sublimelsp/LSP"}),": Language Server Protocol support for Sublime Text.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"Command Palette (Cmd + Shift + P) > Install package > LSP"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/scalameta/metals-sublime",children:"scalameta/metals-sublime"}),": For automatic installation of metals and custom commands.\n",(0,i.jsx)(n.code,{children:"Command Palette (Cmd + Shift + P) > Install package > LSP-metals"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Finally restart sublime text."}),"\n",(0,i.jsxs)(n.p,{children:['Next, open "Preferences > Key Binding" and register ',(0,i.jsx)(n.code,{children:"F12"})," to trigger goto\ndefinition."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  // ...\n  {\n    "keys": ["f12"],\n    "command": "lsp_symbol_definition"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"importing-a-build",children:"Importing a build"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/eUk30Zy.png",alt:"Build Import"})}),"\n",(0,i.jsxs)(n.p,{children:["Open Sublime in the base directory of your Scala project and it will then prompt you to import the build as long as you're using one of the ",(0,i.jsx)(n.a,{href:"https://scalameta.org/metals/docs/build-tools/overview.html",children:"supported build tools"}),'. Click "Import build" to start the installation step.']}),"\n",(0,i.jsx)(n.p,{children:"This starts the Metal language server but no functionality will work yet because the\nbuild has not been imported."}),"\n",(0,i.jsx)(n.p,{children:"This step can take a long time, especially the first time you run it in a new\nworkspace. The exact time depends on the complexity of the build and if the library dependencies are cached or need to be downloaded. For example, this step can take anywhere from 10 seconds in small cached builds up to 10-15 minutes in large un-cached builds."}),"\n",(0,i.jsx)(n.h2,{id:"server-logs",children:"Server logs"}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed information about what is happening behind the scenes during\n",(0,i.jsx)(n.code,{children:"sbt bloopInstall"})," run ",(0,i.jsx)(n.code,{children:"lsp toggle server panel"})," in the command palette. You can optionally add key binding for this command."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/PilER2E.png",alt:"Server logs"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the import step completes, compilation starts for your open ",(0,i.jsx)(n.code,{children:"*.scala"}),'\nfiles. Once the sources have compiled successfully, you can navigate the\nsources with "Goto definition" by pressing ',(0,i.jsx)(n.code,{children:"F12"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"find-symbol-references",children:"Find symbol references"}),"\n",(0,i.jsxs)(n.p,{children:["The default key binding is ",(0,i.jsx)(n.code,{children:"shift+F12"}),". If you use vim-bindings, you need to be\nin insert-mode."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/BJDkczD.gif",alt:"Find references"})}),"\n",(0,i.jsx)(n.h2,{id:"goto-symbol-in-workspace",children:"Goto symbol in workspace"}),"\n",(0,i.jsx)(n.p,{children:"You can search for symbols in your dependency source using the command palette."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/8X0XNi2.gif",alt:"workspace symbols"})}),"\n",(0,i.jsx)(n.h2,{id:"manually-trigger-build-import",children:"Manually trigger build import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/LViPc95.png",alt:"Import build command"})}),"\n",(0,i.jsx)(n.p,{children:"You can optionally register a key binding for the command."}),"\n",(0,i.jsx)(n.h2,{id:"tweaking-sublime-text-for-a-better-productivity",children:"Tweaking Sublime Text for a better productivity"}),"\n",(0,i.jsx)(n.p,{children:"This paragraph contains a few tips & trick that can improve your daily productivity with Metals."}),"\n",(0,i.jsx)(n.h3,{id:"optional-lsp-client-tweaks",children:"Optional LSP client tweaks"}),"\n",(0,i.jsx)(n.p,{children:'If you prefer to only enable Metals completions\n(without mixing them with the default ones from Sublime) set the following setting\nin the "Preferences > Preferences: LSP Settings":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "only_show_lsp_completions": true,\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'Also, if you prefer to show symbol references in Sublime\'s quick panel instead of the bottom panel\nset following setting in the "Preferences > Preferences: LSP Settings":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "show_references_in_quick_panel": true,\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/7tSiEfX.gif",alt:"Symbol references in the popup"})}),"\n",(0,i.jsx)(n.h3,{id:"additional-key-mappings",children:"Additional key mappings"}),"\n",(0,i.jsx)(n.p,{children:"You can set a few optional key mappings for enable useful action shortcuts and perform some tweaks for the completion popup."}),"\n",(0,i.jsx)(n.h4,{id:"keymapping-for-formatting-document-via-scalafmt",children:"Keymapping for formatting document via scalafmt"}),"\n",(0,i.jsxs)(n.p,{children:['Open "Preferences > Key Binding" and register ',(0,i.jsx)(n.code,{children:"ctrl+alt+l"})," to trigger formatting document.\ndefinition."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  // ...\n  {\n    "keys": ["ctrl+alt+l"],\n    "command": "lsp_format_document"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/wVjC1Ij.gif",alt:"Add key mapping for formatting document via scalafmt"})}),"\n",(0,i.jsx)(n.h3,{id:"add-key-mapping-for-goto-symbol-in-workspace",children:"Add key mapping for Goto symbol in workspace"}),"\n",(0,i.jsx)(n.p,{children:'This an optional step if you want to have a shortcut for looking up symbols in the workspace.\nOpen "Preferences > Key Binding" and add:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  // ...\n  { \n    "keys": ["ctrl+t"], \n    "command": "show_overlay",\n    "args": {"overlay": "command_palette", "command": "lsp_workspace_symbols" }\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"enabling-auto-import-on-completion",children:"Enabling auto-import on completion"}),"\n",(0,i.jsx)(n.p,{children:'Metals can complete symbols from your workspace scope and automatically import them.\nBy default, however, if you hit "Enter" to select a completion, the LSP client will\ncomplete the class without importing it, but you can easy remap to use also "Enter" key.\nOpen "Preferences > Key Binding" and add:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[ \n  // ...\n  { "keys": ["enter"], "command": "commit_completion", "context": [{ "key": "auto_complete_visible" } ] },\n  { "keys": ["tab"], "command": "commit_completion", "context": [{ "key": "auto_complete_visible" } ] }\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/RDYx9mB.gif",alt:"Import after Enter key was hit"})}),"\n",(0,i.jsx)(n.h2,{id:"using-latest-metals-snapshot",children:"Using latest Metals SNAPSHOT"}),"\n",(0,i.jsxs)(n.p,{children:['Update the "server_version" setting to try out the latest pending Metals\nfeatures by accessing ',(0,i.jsx)(n.code,{children:"Preferences > Package Settings > LSP > Servers > LSP-metals"})]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Version"}),(0,i.jsx)("th",{children:"Published"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1.1.0"}),(0,i.jsx)("td",{children:"17 Oct 2023 11:43"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1.1.0+53-af181de4-SNAPSHOT"}),(0,i.jsx)("td",{children:"03 Nov 2023 21:13"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"files-and-directories-to-include-in-your-gitignore",children:"Files and Directories to include in your Gitignore"}),"\n",(0,i.jsxs)(n.p,{children:["The Metals server places logs and other files in the ",(0,i.jsx)(n.code,{children:".metals"})," directory. The\nBloop compile server places logs and compilation artifacts in the ",(0,i.jsx)(n.code,{children:".bloop"}),"\ndirectory. The Bloop plugin that generates Bloop configuration is added in the\n",(0,i.jsx)(n.code,{children:"metals.sbt"})," file, which is added at ",(0,i.jsx)(n.code,{children:"project/metals.sbt"})," as well as further\n",(0,i.jsx)(n.code,{children:"project"})," directories depending on how deep ",(0,i.jsx)(n.code,{children:"*.sbt"})," files need to be supported.\nTo support each ",(0,i.jsx)(n.code,{children:"*.sbt"})," file Metals needs to create an additional file at\n",(0,i.jsx)(n.code,{children:"./project/project/metals.sbt"})," relative to the sbt file.\nWorking with Ammonite scripts will place compiled scripts into the ",(0,i.jsx)(n.code,{children:".ammonite"})," directory.\nIt's recommended to exclude these directories and files\nfrom version control systems like git."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# ~/.gitignore\n.metals/\n.bloop/\n.ammonite/\nmetals.sbt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"worksheets",children:"Worksheets"}),"\n",(0,i.jsxs)(n.p,{children:["Worksheets are a great way to explore an api, try out an idea, or code\nup an example and quickly see the evaluated expression or result. Behind\nthe scenes worksheets are powered by the great work done in\n",(0,i.jsx)(n.a,{href:"https://scalameta.org/mdoc/",children:"mdoc"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"getting-started-with-worksheets",children:"Getting started with Worksheets"}),"\n",(0,i.jsxs)(n.p,{children:["To get started with a worksheet you can either use the ",(0,i.jsx)(n.code,{children:"metals.new-scala-file"}),"\ncommand and select ",(0,i.jsx)(n.em,{children:"Worksheet"})," or create a file called ",(0,i.jsx)(n.code,{children:"*.worksheet.sc"}),".\nThis format is important since this is what tells Metals that it's meant to be\ntreated as a worksheet and not just a Scala script. Where you create the\nscript also matters. If you'd like to use classes and values from your\nproject, you need to make sure the worksheet is created inside of your ",(0,i.jsx)(n.code,{children:"src"}),"\ndirectory. You can still create a worksheet in other places, but you will\nonly have access to the standard library and your dependencies."]}),"\n",(0,i.jsx)(n.h3,{id:"evaluations",children:"Evaluations"}),"\n",(0,i.jsx)(n.p,{children:"After saving you'll see the result of the expression as a comment as the end of the line.\nYou may not see the full result for example if it's too long, so you are also\nable to hover on the comment to expand."}),"\n",(0,i.jsxs)(n.p,{children:["Keep in mind that you don't need to wrap your code in an ",(0,i.jsx)(n.code,{children:"object"}),". In worksheets\neverything can be evaluated at the top level."]}),"\n",(0,i.jsx)(n.h3,{id:"using-dependencies-in-worksheets",children:"Using dependencies in worksheets"}),"\n",(0,i.jsx)(n.p,{children:"You are able to include an external dependency in your worksheet by including\nit in one of the following two ways."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// $dep.`organisation`::artifact:version` style\nimport $dep.`com.lihaoyi::scalatags:0.7.0`\n\n// $ivy.`organisation::artifact:version` style\nimport $ivy.`com.lihaoyi::scalatags:0.7.0`\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"::"})," is the same as ",(0,i.jsx)(n.code,{children:"%%"})," in sbt, which will append the current Scala binary version\nto the artifact name."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also import ",(0,i.jsx)(n.code,{children:"scalac"})," options in a special ",(0,i.jsx)(n.code,{children:"$scalac"})," import like below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"import $scalac.`-Ywarn-unused`\n"})}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"Since worksheets are not standard Scala files, you may run into issues with some constructs.\nFor example, you may see an error like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"value classes may not be a member of another class - mdoc\n"})}),"\n",(0,i.jsx)(n.p,{children:"This means that one of the classes defined in the worksheet extends AnyVal, which is\nnot currently supported. You can work around this by moving the class to a separate file or removing\nthe AnyVal parent."}),"\n",(0,i.jsx)(n.h2,{id:"running-scalafix-rules",children:"Running scalafix rules"}),"\n",(0,i.jsxs)(n.p,{children:["Scalafix allows users to specify some refactoring and linting rules that can be applied to your\ncodebase. Please checkout the ",(0,i.jsx)(n.a,{href:"https://scalacenter.github.io/scalafix",children:"scalafix website"})," for more information."]}),"\n",(0,i.jsxs)(n.p,{children:["Since Metals v0.11.7 it's now possible to run scalafix rules using a special\ncommand ",(0,i.jsx)(n.code,{children:"metals.scalafix-run"}),".\nThis should run all the rules defined in your ",(0,i.jsx)(n.code,{children:".scalafix.conf"})," file. All built-in rules\nand the ",(0,i.jsx)(n.a,{href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules",children:"community hygiene ones"})," can\nbe run without any additional settings. However, for all the other rules users need to\nadd an additional dependency in the ",(0,i.jsx)(n.code,{children:"metals.scalafixRulesDependencies"})," user setting.\nThose rules need to be in form of strings such as ",(0,i.jsx)(n.code,{children:"com.github.liancheng::organize-imports:0.6.0"}),", which\nfollows the same convention as ",(0,i.jsx)(n.a,{href:"https://get-coursier.io/",children:"coursier dependencies"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A sample scalafix configuration can be seen below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hocon",children:'rules = [\n  OrganizeImports,\n  ExplicitResultTypes,\n  RemoveUnused\n]\n\nRemoveUnused.imports = false\n\nOrganizeImports.groupedImports = Explode\nOrganizeImports.expandRelative = true\nOrganizeImports.removeUnused = true\nOrganizeImports.groups = [\n  "re:javax?\\."\n  "scala."\n  "scala.meta."\n  "*"\n]\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
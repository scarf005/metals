"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2214],{7088:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(4848),i=s(8453);const a={author:"Tomasz Godzik",title:"Metals v0.9.5 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},l=void 0,r={permalink:"/metals/blog/2020/11/10/lithium",source:"@site/blog/2020-11-10-lithium.md",title:"Metals v0.9.5 - Lithium",description:"We're happy to announce the release of Metals v0.9.5, which brings about some of",date:"2020-11-10T00:00:00.000Z",tags:[],readingTime:10.305,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.9.5 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},unlisted:!1,prevItem:{title:"Metals v0.9.6 - Lithium",permalink:"/metals/blog/2020/11/20/lithium"},nextItem:{title:"sbt BSP support",permalink:"/metals/blog/2020/11/06/sbt-BSP-support"}},c={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Organize imports code action",id:"organize-imports-code-action",level:2},{value:"Show implicits and type decorations",id:"show-implicits-and-type-decorations",level:2},{value:"Improved sbt BSP support",id:"improved-sbt-bsp-support",level:2},{value:"Remote debugging",id:"remote-debugging",level:2},{value:"Environment variables in run/debug",id:"environment-variables-in-rundebug",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.9.5 (2020-11-10)",id:"v095-2020-11-10",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We're happy to announce the release of Metals v0.9.5, which brings about some of\nthe long awaited features such as implicit decorations and the organize imports\ncode action. We also greatly simplified connecting to the sbt BSP server and\nadded support for Scala 3's first milestone ",(0,n.jsx)(t.code,{children:"3.0.0-M1"}),"."]}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Commits since last release"}),(0,n.jsx)("td",{align:"center",children:"185"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Merged PRs"}),(0,n.jsx)("td",{align:"center",children:"70"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Contributors"}),(0,n.jsx)("td",{align:"center",children:"9"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Closed issues"}),(0,n.jsx)("td",{align:"center",children:"33"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"New features"}),(0,n.jsx)("td",{align:"center",children:"5"})]})]})}),"\n",(0,n.jsxs)(t.p,{children:["For full details: ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/28?closed=1",children:"https://github.com/scalameta/metals/milestone/28?closed=1"})]}),"\n",(0,n.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,n.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,n.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,n.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,n.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,n.jsxs)(t.p,{children:["Check out ",(0,n.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Organize imports code action."}),"\n",(0,n.jsx)(t.li,{children:"Show implicit parameters and inferred type decorations."}),"\n",(0,n.jsx)(t.li,{children:"Improved sbt BSP support."}),"\n",(0,n.jsx)(t.li,{children:"Support for Scala 3.0.0-M1."}),"\n",(0,n.jsx)(t.li,{children:"Remote debugging."}),"\n",(0,n.jsx)(t.li,{children:"Environment variables in run/debug."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"organize-imports-code-action",children:"Organize imports code action"}),"\n",(0,n.jsxs)(t.p,{children:["One of the most requested features in the Metals repository, current list can be\nfound ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/issues/707",children:"here"}),", was the ability to\nautomatically organize imports. We are happy to announce, that thanks to\n",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar's"})," amazing contributions to both\n",(0,n.jsx)(t.a,{href:"https://github.com/scalacenter/scalafix",children:"Scalafix"})," and Metals, this new feature\nis now available via an ",(0,n.jsx)(t.code,{children:"Organize imports"})," code action."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/8YBdjjC.gif",alt:"imports"})}),"\n",(0,n.jsx)(t.p,{children:"Depending on the editor this code action can be invoked differently, please\nconsult your specific editor's documentation. For example in Visual Studio Code\n'organize imports' can be invoked from command console, shortcut, or from the\ndropdown menu when right clicking inside a file."}),"\n",(0,n.jsxs)(t.p,{children:["The organize imports code action is enabled using\n",(0,n.jsx)(t.a,{href:"https://github.com/scalacenter/scalafix",children:"Scalafix"})," and specifically the awesome\norganize imports rule created by ",(0,n.jsx)(t.a,{href:"https://github.com/liancheng",children:"liancheng"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The rule can be used to automatically sort imports in a file by the Ascii order,\nwhich is the default setting, or use the user specific configuration defined\nusing scalafix configuration file. This file can be either ",(0,n.jsx)(t.code,{children:".scalafix.conf"})," in\nthe current workspace or an absolute file specified in the\n",(0,n.jsx)(t.code,{children:"metals.scalafixConfigPath"})," user setting. It's important to note that the new\ncode action is consistent with how sbt's scalafix plugin will behave."]}),"\n",(0,n.jsx)(t.p,{children:"An example scalafix configuration for the organize imports rule can look like\nthis:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'OrganizeImports {\n  groups = ["re:javax?\\\\.", "scala.", "*"]\n  removeUnused = true\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This will sort imports into 3 groups defined with regexes and remove any unused\nones. Specifically, it will turn:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'import scala.collection.mutable.{Buffer, ArrayBuffer}\nimport java.time.Clock\nimport java.lang.{Long => JLong, Double => JDouble}\n\nobject RemoveUnused {\n  val buffer: ArrayBuffer[Int] = ArrayBuffer.empty[Int]\n  val long: JLong = JLong.parseLong("0")\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"into"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'import java.lang.{Long => JLong}\n\nimport scala.collection.mutable.ArrayBuffer\n\nobject RemoveUnused {\n  val buffer: ArrayBuffer[Int] = ArrayBuffer.empty[Int]\n  val long: JLong = JLong.parseLong("0")\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Please do NOT use the Scalafix built-in RemoveUnused.imports together with\nOrganizeImports to remove unused imports, since it might result in a broken\ncode."}),"\n",(0,n.jsxs)(t.p,{children:["More information can be found in the\n",(0,n.jsx)(t.a,{href:"https://github.com/liancheng/scalafix-organize-imports",children:"liancheng/scalafix-organize-imports"}),"\nrepository."]}),"\n",(0,n.jsx)(t.h2,{id:"show-implicits-and-type-decorations",children:"Show implicits and type decorations"}),"\n",(0,n.jsx)(t.p,{children:"Another highly anticipated feature was the ability to show additional\ninformation about the code, which is not provided explicitly. In this new\nrelease, users can use two new options when looking through their code:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"metals.showImplicitArguments"})," will enable users to see implicit parameters\nwithin their code:"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/vAvM7YV.png",alt:"params"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"metals.showInferredType"})," will enable users to see inferred type for any\ngeneric methods they are using:"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/K3QrUd2.png",alt:"types"})}),"\n",(0,n.jsx)(t.p,{children:"Both new options are disabled by default, since they add a great number of\ninformation, which might not be necessary for all users. Full name with package\nfor each of the additional types or values will be available on hover."}),"\n",(0,n.jsxs)(t.p,{children:["These options can be set in Metals options in VS Code or in Emacs\n",(0,n.jsx)(t.a,{href:"https://github.com/emacs-lsp/lsp-metals",children:"(lsp-metals)"})," using\n",(0,n.jsx)(t.code,{children:"lsp-metals-show-implicit-arguments"})," and ",(0,n.jsx)(t.code,{children:"lsp-metals-show-inferred-type"}),"\nvariables set to ",(0,n.jsx)(t.code,{children:"t"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately, due to current limitations, additional decorations are only\npossible in Visual Studio Code and Emacs. In other editors the additional\ninformation is available via hover and new ",(0,n.jsx)(t.code,{children:"With synthetics added"})," section,\nwhich shows how the whole current line would look with the additional\ndecorations."]}),"\n",(0,n.jsx)(t.p,{children:"Example of how this alternative approach looks in Vim:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13974112/94804295-e094a280-03ea-11eb-8282-2a783446e7c8.png",alt:"vim-sample"})}),"\n",(0,n.jsx)(t.h2,{id:"improved-sbt-bsp-support",children:"Improved sbt BSP support"}),"\n",(0,n.jsxs)(t.p,{children:["In recent months, ",(0,n.jsx)(t.a,{href:"https://github.com/eed3si9n",children:"eed3si9n"})," and\n",(0,n.jsx)(t.a,{href:"https://github.com/adpi2",children:"adpi2"})," worked, under the auspices of Scala Center, on\nmaking sbt capable of acting as a\n",(0,n.jsx)(t.a,{href:"https://build-server-protocol.github.io/",children:"Build Server Protocol"})," server. This\nenables Metals and other editors such as Intellij IDEA to directly communicate\nwith sbt in order to compile the user's code."]}),"\n",(0,n.jsxs)(t.p,{children:["Some more work was required in order to make the new features work smoothly with\nMetals and currently, thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),", users can\neasily try out the new sbt BSP support. It's important to note that using Bloop\ninstead of sbt is still the recommended approach as we believe it provides the\nbest user experience and features like running or debugging are still not yet\nimplemented for sbt. More details and explanations can be found in the\n",(0,n.jsx)(t.a,{href:"/metals/blog/2020/11/06/sbt-BSP-support",children:"blogpost"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"remote-debugging",children:"Remote debugging"}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to the great work of ",(0,n.jsx)(t.a,{href:"https://github.com/pvid",children:"pvid"}),", Metals now supports\nremote debugging, which means that it can attach to a running process with the\nproper JVM options specified. There is no longer a need to run the application\nor test from within the editor."]}),"\n",(0,n.jsx)(t.p,{children:"In case of a simple java process those options will take a form of for example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"})}),"\n",(0,n.jsx)(t.p,{children:"Some of the more important options here are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"suspend=y"})," will make the process wait for Metals to connect to it if\nspecified to ",(0,n.jsx)(t.code,{children:"y"}),". ",(0,n.jsx)(t.code,{children:"n"})," will cause the process to run normally."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"address=5005"})," specifies which port to use and it can be any free port."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For a detailed explanation of the different options please refer to the proper\ndocumentation\n",(0,n.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jpda/conninv.html",children:"here"})]}),"\n",(0,n.jsx)(t.p,{children:"When using sbt, remote debugging can be achieved by specifying additional\nsettings:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'  javaOptions in run := List("-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"),\n  fork in run := true\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This will cause running ",(0,n.jsx)(t.code,{children:"sbt run"})," to wait for Metals to connect to it, which\nmight be especially useful when reading user input, which is currently\nimpossible to do for example from within VS Code. Similarly, these options can\nbe specified in any of the supported build tools."]}),"\n",(0,n.jsxs)(t.p,{children:["To later connect to the running process, you need to use the additional Attach\nrequest type with the ",(0,n.jsx)(t.code,{children:"buildTarget"}),", ",(0,n.jsx)(t.code,{children:"hostname"})," and ",(0,n.jsx)(t.code,{children:"port"})," fields specified. In\ncase of Visual Studio Code this will take a form of:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "scala",\n  "request": "attach",\n  "name": "Attach",\n  "buildTarget": "root",\n  "hostName": "localhost",\n  "port": 5005\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"environment-variables-in-rundebug",children:"Environment variables in run/debug"}),"\n",(0,n.jsx)(t.p,{children:"Metals now supports specifying additional environment options when running or\ndebugging applications. This can be done twofold:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["By specifying the new ",(0,n.jsx)(t.code,{children:"env"})," field:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "scala",\n  "name": "Debug Main",\n  "request": "launch",\n  "mainClass": "Main",\n  "args": ["hello", "world"],\n  "env": { "VARIABLE1": " 123" }\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["By using the ",(0,n.jsx)(t.code,{children:"envFile"})," field:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "scala",\n  "name": "Debug Main",\n  "request": "launch",\n  "mainClass": "Main",\n  "args": ["hello", "world"],\n  "envFile": "local.env"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Where the ",(0,n.jsx)(t.code,{children:"local.env"})," file can take a form of:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"# single line values\nkey1=value 1\nkey2='value 2'   # ignored inline comment\nkey3=\"value 3\"\n\n# multi-line values\nkey4='line 1\nline 2'\nkey5=\"line 1\nline 2\"\n\n# export statements\nexport key6=value 6\n\n# comma delimiter\nkey7:value 6\n\n# keys cannot contain dots or dashes\na.b.key8=value 8   # will be ignored\na-b-key9=value 9   # will be ignored\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The format is adapted from\n",(0,n.jsx)(t.a,{href:"https://github.com/mefellows/sbt-dotenv",children:"mefellows/sbt-dotenv"})," and\n",(0,n.jsx)(t.a,{href:"https://github.com/bkeepers/dotenv",children:"bkeepers/dotenv"}),". Example json\nconfigurations above are defined for Visual Studio Code, the ",(0,n.jsx)(t.code,{children:"type"})," and ",(0,n.jsx)(t.code,{children:"name"}),"\nfields can be omitted when using in other clients."]}),"\n",(0,n.jsxs)(t.p,{children:["This new feature has been contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/mwz",children:"mwz"}),". Thanks\nfor the great work!"]}),"\n",(0,n.jsx)(t.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Removed ",(0,n.jsx)(t.code,{children:"javax"})," from default excluded packages - it can be added back in the\nconfiguration."]}),"\n",(0,n.jsx)(t.li,{children:"Fixed top level completions in empty files."}),"\n",(0,n.jsx)(t.li,{children:"Fixed issues with run/debug when using VPN."}),"\n",(0,n.jsx)(t.li,{children:"Fixed go to java sources in standalone worksheets."}),"\n",(0,n.jsx)(t.li,{children:"Fixed issues with worksheets if the workspace was not first compiled."}),"\n",(0,n.jsxs)(t.li,{children:["Fixed sbt completions coming from ",(0,n.jsx)(t.code,{children:"project/*.scala"})," files."]}),"\n",(0,n.jsxs)(t.li,{children:["Only use ",(0,n.jsx)(t.code,{children:"import {java.util => ju}"})," when there are conflicting symbols in the\nfile."]}),"\n",(0,n.jsx)(t.li,{children:"Muted InvalidProtocolException in the logs - this exception might happen.\nnormally and does not break anything."}),"\n",(0,n.jsx)(t.li,{children:"Changed scalafix and scalafmt location in user configuration to absolute path."}),"\n",(0,n.jsx)(t.li,{children:"Only report parsing errors after Scala version is confirmed for a file."}),"\n",(0,n.jsx)(t.li,{children:"Added automatic retry in case of build server connection failure."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,n.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.9.4..v0.9.5\nChris Kipp\nScala Steward\nTomasz Godzik\nMichael Wizner\nMeriam Lachkar\nGabriele Petronella\nKrzysiek Bochenek\nPavol Vidlicka\nVadim Chelyshov\n"})}),"\n",(0,n.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,n.jsxs)(t.h2,{id:"v095-2020-11-10",children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.9.5",children:"v0.9.5"})," (2020-11-10)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.9.4...v0.9.5",children:"Full Changelog"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Rename user configuration options for decoration provider\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2196",children:"#2196"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Show warning about unsupported Scala version in worksheets\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2194",children:"#2194"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add support for Scala3 3.0.0-M1\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2190",children:"#2190"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scalafix ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2192",children:"#2192"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add retry in case of timeout in build/initialize\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2184",children:"#2184"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Ensure scalacOptions for Test are correct for sbt BSP.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2191",children:"#2191"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Support remote debugging\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2125",children:"#2125"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/pvid",children:"pvid"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add in timer methods to a new timerProvider.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2186",children:"#2186"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Remove condition for jfr, since it's now reliably available on CI\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2185",children:"#2185"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure build server is connected or not available before parsing\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2169",children:"#2169"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Preload scalafix to optimize first organize imports run\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2168",children:"#2168"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Allow for reset in html doctor\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2172",children:"#2172"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Track and show progress to user about connecting to sbt\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2182",children:"#2182"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Remove old bloop script now that we just use coursier\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2181",children:"#2181"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update interface to 1.0.1\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2178",children:"#2178"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update mdoc-interfaces, sbt-mdoc to 2.2.10\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2180",children:"#2180"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update flyway-core to 7.0.4\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2179",children:"#2179"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update coursier to 2.0.5\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2177",children:"#2177"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scribe, scribe-slf4j to 2.8.6\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2176",children:"#2176"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update guava to 30.0-jre\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2175",children:"#2175"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update bloop-config, bloop-launcher to 1.4.4-23-dbacf644\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2174",children:"#2174"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt-dotty to 0.4.5\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2173",children:"#2173"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fix resolver for sbt-metals snapshot\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2170",children:"#2170"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Enable smoother sbt bsp integration.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2154",children:"#2154"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Change scalafix and scalafmt conf to absolute path\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2165",children:"#2165"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fix race condition while using textDocument/foldingRange\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2166",children:"#2166"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Account for possible null value in ScalaTarget's baseDirectory\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2164",children:"#2164"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update mill scripts ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2162",children:"#2162"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Mute InvalidProtocolException which might happen normally\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2159",children:"#2159"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt to 1.4.1 ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2161",children:"#2161"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure that default version is picked up for Scalafmt provider\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2158",children:"#2158"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Don't import ",(0,n.jsx)(t.code,{children:"{java.util => ju}"})," when no conflicting symbols are available\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2155",children:"#2155"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fixed sbt completions coming from project/*.scala\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2129",children:"#2129"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add java sources to standalone worksheets and run compilation before\nevaluation if necessary.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2133",children:"#2133"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Bump setup-scala and cache-action actions\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2149",children:"#2149"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add JFR for non oracle JDK releases\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2137",children:"#2137"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Bump scalafmt up to 2.7.4\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2148",children:"#2148"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scalameta, semanticdb-scalac, ... to 4.3.24\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2147",children:"#2147"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update munit, sbt-munit to 0.7.14\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2146",children:"#2146"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update jol-core to 0.14\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2144",children:"#2144"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update flyway-core to 7.0.3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2143",children:"#2143"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update undertow-core to 2.2.2.Final\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2142",children:"#2142"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update coursier to 2.0.3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2141",children:"#2141"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scribe, scribe-slf4j to 2.8.3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2140",children:"#2140"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update ujson to 1.2.2 ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2139",children:"#2139"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update jackson-databind to 2.11.3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2138",children:"#2138"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Use 127.0.0.1 address always for DebugProvider\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2135",children:"#2135"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add support for loading env variables from a .env file.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2123",children:"#2123"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mwz",children:"mwz"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Do not show hover if the type is error\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2126",children:"#2126"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure files are compiled when running scalafix\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2119",children:"#2119"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Show implicit arguments and type annotations for Scala files\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2103",children:"#2103"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Account for possible null value on PopupChoiceReset message request\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2121",children:"#2121"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Support environment variables when running or debugging\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2118",children:"#2118"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add in top level-completions for empty file.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2088",children:"#2088"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scalafix-interfaces to 0.9.21\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2114",children:"#2114"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt-mdoc to 2.2.9\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2113",children:"#2113"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update flyway-core to 6.5.7\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2112",children:"#2112"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update undertow-core to 2.2.0.Final\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2111",children:"#2111"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update directory-watcher to 0.10.1\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2110",children:"#2110"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scribe, scribe-slf4j to 2.7.13\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2109",children:"#2109"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt-scalafix, scalafix-interfaces to 0.9.21\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2108",children:"#2108"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update bloop-config, bloop-launcher to 1.4.4-15-56a96a99\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2107",children:"#2107"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update organize-import rule to add Scala 2.11 support\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2101",children:"#2101"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Simplify TestHovers and remove warning\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2098",children:"#2098"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Display used BuildServer in Doctor\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2097",children:"#2097"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kpbochenek",children:"kpbochenek"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Implement organize import using scalafix\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1971",children:"#1971"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Remove javax from default excluded packages\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2091",children:"#2091"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add documentation for new parameter in GotoLocation\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2095",children:"#2095"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kpbochenek",children:"kpbochenek"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fix Metals version in the blog post\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2089",children:"#2089"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add release notes for v0.9.4\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2081",children:"#2081"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(6540);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
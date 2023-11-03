"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9820],{125:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(5893),i=s(1151);const a={id:"getting-started",title:"Contributing to Metals"},r=void 0,l={id:"contributors/getting-started",title:"Contributing to Metals",description:"Whenever you are stuck or unsure, please open an issue or [ask us on",source:"@site/target/docs/contributors/getting-started.md",sourceDirName:"contributors",slug:"/contributors/getting-started",permalink:"/metals/docs/contributors/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/contributors/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Contributing to Metals"},sidebar:"docs",previous:{title:"Project Goals",permalink:"/metals/docs/contributors/project-goals"},next:{title:"Contributing to the website",permalink:"/metals/docs/contributors/updating-website"}},o={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Related projects",id:"related-projects",level:2},{value:"Common development workflow",id:"common-development-workflow",level:2},{value:"Commit messages",id:"commit-messages",level:2},{value:"Debugging through logging",id:"debugging-through-logging",level:3},{value:"Classic debugging",id:"classic-debugging",level:3},{value:"Unit tests",id:"unit-tests",level:2},{value:"Manually testing an <code>LspSuite</code>",id:"manually-testing-an-lspsuite",level:3},{value:"Cross tests",id:"cross-tests",level:2},{value:"Manual tests",id:"manual-tests",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Vim/Neovim",id:"vimneovim",level:3},{value:"Workspace logs",id:"workspace-logs",level:2},{value:"JSON-RPC trace",id:"json-rpc-trace",level:2},{value:"JVM Debugging",id:"jvm-debugging",level:2},{value:"Updating build tool launcher/wrappers",id:"updating-build-tool-launcherwrappers",level:2},{value:"Updating sbt-launcher",id:"updating-sbt-launcher",level:3},{value:"Updating maven wrappers",id:"updating-maven-wrappers",level:3},{value:"Git hooks",id:"git-hooks",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Whenever you are stuck or unsure, please open an issue or ",(0,n.jsx)(t.a,{href:"https://discord.gg/DwTc8xbNDd",children:"ask us on\nDiscord"})," or ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#scalameta:metals-contributors",children:"on our Matrix\nbridge"}),". This project\nfollows ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/scalameta/blob/master/CONTRIBUTING.md",children:"Scalameta's contribution\nguidelines"}),"\nand the ",(0,n.jsx)(t.a,{href:"https://scala-lang.org/conduct/",children:"Scala CoC"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"You will need the following applications installed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Java 17, 11 or 8 - Make sure ",(0,n.jsx)(t.code,{children:"JAVA_HOME"})," points to a Java 17, 11 or 8 installation.\nMetals will need to build and run on ",(0,n.jsx)(t.em,{children:"all of them"}),", with support for 8\nprobably being dropped in the near future."]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"git"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sbt"})," (for building a local version of the server)"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"metals"})," the main project with sources of the Metals language server."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mtags"})," Scala version specific module used to interact with the Scala\npresentation compiler. It's a dependency of the ",(0,n.jsx)(t.code,{children:"metals"})," project and can\nadditionally be used by via ",(0,n.jsx)(t.code,{children:"mtags-interfaces"})," to support multiple Scala\nversions inside the Metals server. It's also used by other projects like\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metabrowse",children:"Metabrowse"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mtags-interfaces"})," - java interfaces for the presentation compiler."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tests/unit"})," moderately fast-running unit tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tests/cross"})," - tests targeting cross builds for common features such as\nhover, completions, signatures etc."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tests/input"})," example Scala code that is used as testing data for unit tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tests/slow"})," slow integration tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sbt-metals"})," the sbt plugin used when users are using the BSP support from\nsbt to ensure semanticDB is being produced by sbt."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"docs"})," documentation markdown for the Metals website."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"metals-docs"})," methods used for generating documentation across multiple pages\nin ",(0,n.jsx)(t.code,{children:"docs"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"website"})," holds the static site configuration, style and blogs posts for the\nMetals website."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Below diagram shows project structure and dependencies among modules. Note that\n",(0,n.jsx)(t.code,{children:"default-<suffix>"})," is a ",(0,n.jsx)(t.a,{href:"https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Default+root+project",children:"default root project"}),"\ncreated implicitly by sbt.\n",(0,n.jsx)(t.img,{src:"https://imgur.com/oIhXd5l.png",alt:"Projects diagram"})]}),"\n",(0,n.jsx)(t.h2,{id:"related-projects",children:"Related projects"}),"\n",(0,n.jsx)(t.p,{children:"The improvement you are looking to contribute may belong in a separate\nrepository:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode/",children:"scalameta/metals-vscode"}),": the\nVisual Studio Code extension for Metals."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/nvim-metals/",children:"scalameta/nvim-metals"}),": the Neovim\nextension for Metals using the built-in LSP support of Neovim."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/scalameta/",children:"scalameta/scalameta"}),": SemanticDB,\nparsing, tokenization."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/munit/",children:"scalameta/munit"}),": Test framework used in\nthe main Metals repository"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/",children:"scalacenter/bloop"}),": build server for\ncompilation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scala/scala/",children:"scala/scala"}),": Scala 2 presentation compiler."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/lampepfl/dotty",children:"lampepfl/dotty"}),": Scala 3 presentation\ncompiler."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/scalafmt/",children:"scalameta/scalafmt"}),": code formatting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scalacenter/scalafix/",children:"scalacenter/scalafix"}),": code\nrefactoring and linting."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"common-development-workflow",children:"Common development workflow"}),"\n",(0,n.jsx)(t.p,{children:"Most of the time development in Metals looks like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"do some changes"}),"\n",(0,n.jsx)(t.li,{children:"write tests which check if your changes work"}),"\n",(0,n.jsx)(t.li,{children:"publish Metals server locally and test changes manually"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When diving into part of the code without any prior knowledge it might be hard\nto comprehend what's going on and what part of the code is responsible for\nspecific behavior. There are several ways to debug Metals, but most popular are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"debugging through logging (recommended option)"}),"\n",(0,n.jsx)(t.li,{children:"classic debugging with breakpoints"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"commit-messages",children:"Commit messages"}),"\n",(0,n.jsxs)(t.p,{children:["Try to follow the\n",(0,n.jsx)(t.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"conventional commits specification"}),",\nwhich means your commits should be of form:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"It's important to over-communicate in your commit messages. Be thorough. It's\nimportant to ensure you outline the problem you're trying to solve, or the\nfeature you're introducing, and then explain the fix or implementation. This will\nhelp the reviewers with their review and also future contributors to get the\nfull context of your changes."}),"\n",(0,n.jsx)(t.p,{children:"For example, this message can be take a form of:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Previously, this bug was happening due to invalid handling of URIs. Now, we handle them correctly using a dedicated class.\n"})}),"\n",(0,n.jsx)(t.p,{children:"Ideally, each PR would only have one commit and the title with body would be the\nsame for the pull requests. However, sometimes a PR might require more changes\nand commits, in that case please try to keep them self contained, which means\neach change pertains to a specific bug or feature and can be reverted\nseparately."}),"\n",(0,n.jsx)(t.h3,{id:"debugging-through-logging",children:"Debugging through logging"}),"\n",(0,n.jsxs)(t.p,{children:["This approach provides very quick iterations and short feedback loop.\nIt depends on placing multiple ",(0,n.jsx)(t.code,{children:"pprint.log()"})," calls which will log\nmessages in ",(0,n.jsx)(t.code,{children:".metals.log"})," file. Logged output can be watched by ",(0,n.jsx)(t.code,{children:"tail -f .metals/metals.log"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'MetalsLanguageServer.scala:1841 params: DebugSessionParams [\n  targets = SingletonList (\n    BuildTargetIdentifier [\n      uri = "file:/HappyMetalsUser/metals/#metals/Compile"\n    ]\n  )\n  dataKind = "scala-attach-remote"\n  data = {}\n]\n'})}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"#workspace-logs",children:"workspace logs"})," for more information."]}),"\n",(0,n.jsx)(t.p,{children:"This approach can be used in 2 variants:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["together with ",(0,n.jsx)(t.a,{href:"#manual-tests",children:"manual testing"})," when it's hard to write test\nfor some changes."]}),"\n",(0,n.jsxs)(t.li,{children:["with ",(0,n.jsx)(t.a,{href:"#unit-tests",children:"unit tests"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"classic-debugging",children:"Classic debugging"}),"\n",(0,n.jsxs)(t.p,{children:["Classic debugging is possible by the ",(0,n.jsx)(t.a,{href:"#jvm-debugging",children:"JVM debugging mechanism"}),".\nPublish Metals locally, open a new project and configure debug settings.\nThen you can attach IDE with opened Metals repository to the debugged instance:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["VSCode - add attach configuration to yours ",(0,n.jsx)(t.a,{href:"../editors/vscode#via-a-launchjson-configuration",children:"launch.json"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n  "version": "0.2.0",\n  "configurations": [\n    // Attach debugger when running via:\n    // `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=localhost:5005`\n    {\n      "type": "scala",\n      "request": "attach",\n      "name": "Attach debugger to Metals server",\n      "buildTarget": "metals",\n      "hostName": "localhost",\n      "port": 5005\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Then pick such a defined configuration and run debug."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://imgur.com/ySAo6Um.png",alt:"Attach debugger"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"IntelliJ - Select Attach to the process and pick proper process from the list"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://imgur.com/lHSl57l.png",alt:"Attach to the process"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,n.jsxs)(t.p,{children:["To run the unit tests open an sbt shell and run ",(0,n.jsx)(t.code,{children:"unit/test"}),". However, this command will\nrun all of the unit tests declared in ",(0,n.jsx)(t.code,{children:"unit"})," module."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"sbt\n\n# (recommended) run a specific test suite, great for edit/test/debug workflows.\n> unit/testOnly tests.DefinitionSuite\n\n# run a specific test case inside the suite.\n> unit/testOnly tests.DefinitionSuite -- <exact-test-name>\n\n# run unit tests, moderately fast but still a bit too slow for edit/test/debug workflows.\n> unit/test\n\n# run slow integration tests, takes several minutes.\n> slow/test\n\n# (not recommended) run all tests, slow. It's better to target individual projects.\n> test\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"manually-testing-an-lspsuite",children:["Manually testing an ",(0,n.jsx)(t.code,{children:"LspSuite"})]}),"\n",(0,n.jsxs)(t.p,{children:["Every test suite that extends ",(0,n.jsx)(t.code,{children:"LspSuite"})," generates a workspace directory under\n",(0,n.jsx)(t.code,{children:"tests/unit/target/e2e/<suitename>/<testname>"}),". To debug why a ",(0,n.jsx)(t.code,{children:"LspSuite"})," might be\nfailing, run the test once and then open it directly in the editor. For\nexample, for the test case ",(0,n.jsx)(t.code,{children:'"deprecated-scala"'})," in ",(0,n.jsx)(t.code,{children:"WarningsLspSuite"})," run the\nfollowing command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"code tests/unit/target/e2e/warnings/deprecated-scala\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will open Visual Studio Code in directory with test project and it'll be\npossible to investigate why test is failing manually."}),"\n",(0,n.jsx)(t.h2,{id:"cross-tests",children:"Cross tests"}),"\n",(0,n.jsx)(t.p,{children:"These tests check common features such as hover, completions or signatures for\ndifferent Scala version."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"sbt\n\n# run presentation compiler tests, these are the quickest tests to run.\n> cross/test\n\n run presentation compiler tests for all Scala versions.\n> +cross/test\n"})}),"\n",(0,n.jsx)(t.h2,{id:"manual-tests",children:"Manual tests"}),"\n",(0,n.jsxs)(t.p,{children:["Some functionality is best to manually test through an editor. A common workflow\nwhile iterating on a new feature is to run ",(0,n.jsx)(t.code,{children:"publishLocal"})," and then open an\neditor in a small demo build."]}),"\n",(0,n.jsxs)(t.p,{children:["It's important to note that ",(0,n.jsx)(t.code,{children:"sbt publishLocal"})," will create artifacts only for\nthe Scala version currently used in Metals and trying to use the snapshot\nversion with any other Scala version will not work. This may be fine if you're\nworking on a generic feature that isn't using the presentation compiler\n(anything in mtags),  if not then you need to publish the specific version of\nmtags that you're trying to test"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"`publishLocal; ++3.1.1 mtags/publishLocal`\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also do a full cross publish with ",(0,n.jsx)(t.code,{children:"sbt +publishLocal"}),", however this will\ntake quite some time, so it's often better to only target the version you need."]}),"\n",(0,n.jsx)(t.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,n.jsx)(t.p,{children:'Install the Metals extension from the Marketplace by searching for "Metals".'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"vscode:extension/scalameta.metals",children:"Click here to install the Metals VS Code plugin"})}),"\n",(0,n.jsxs)(t.p,{children:['Next, update the "Server version" setting under preferences to point to the\nversion you published locally via ',(0,n.jsx)(t.code,{children:"sbt publishLocal"}),". You'll notice that version has the format\n",(0,n.jsx)(t.code,{children:"<version>-SNAPSHOT"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/ogVWI1t.png",alt:"Metals server version setting"})}),"\n",(0,n.jsx)(t.p,{children:"When you make changes in the Metals Scala codebase"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"publish metals binary as described above."}),"\n",(0,n.jsx)(t.li,{children:'execute the "Metals: Restart server" command in Visual Studio Code (via\ncommand palette)'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"vimneovim",children:"Vim/Neovim"}),"\n",(0,n.jsxs)(t.p,{children:["If using ",(0,n.jsx)(t.code,{children:"nvim-metals"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["You'll want to make sure to read the docs\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/nvim-metals/blob/main/doc/metals.txt",children:"here"})," and\ntake a look at the example configuration\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/nvim-metals/discussions/39",children:"here"})," if you haven't\nalready set everything up."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"publish the metals binary as described above."}),"\n",(0,n.jsxs)(t.li,{children:["set the ",(0,n.jsx)(t.code,{children:"serverVersion"})," in your ",(0,n.jsx)(t.code,{children:"settings"})," table that you pass in to your\nmetals config."]}),"\n",(0,n.jsxs)(t.li,{children:["Open your workspace and trigger a ",(0,n.jsx)(t.code,{children:":MetalsUpdate"})," followed by a\n",(0,n.jsx)(t.code,{children:":MetalsRestart"}),". NOTE: that every time you publish locally you'll want to\ntrigger this again."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using another Vim client, write a ",(0,n.jsx)(t.code,{children:"new-metals-vim"})," script that builds\na new ",(0,n.jsx)(t.code,{children:"metals-vim"})," bootstrap script using the locally published version."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"coursier bootstrap \\\n  --java-opt -Dmetals.client=<<NAME_OF_CLIENT>> \\\n  org.scalameta:metals_2.13:1.1.1-SNAPSHOT \\ # double-check version here\n  -o /usr/local/bin/metals-vim -f\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE"})," if you're able to configure your client using initialization options,\nthen the ",(0,n.jsx)(t.code,{children:"client"})," property is not necessary. You can see all the options\n",(0,n.jsx)(t.a,{href:"https://scalameta.org/metals/docs/integrations/new-editor#initializationoptions",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, start Vim with the local Metals version"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"cd test-workspace # any directory you want to manually test Metals\nnew-metals-vim && vim build.sbt # remember to have the script in your $PATH\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When you make changes in the Metals Scala codebase, run ",(0,n.jsx)(t.code,{children:"sbt publishLocal"}),", quit\nvim and re-run ",(0,n.jsx)(t.code,{children:"new-metals-vim && vim build.sbt"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"workspace-logs",children:"Workspace logs"}),"\n",(0,n.jsxs)(t.p,{children:["Metals logs workspace-specific information to the\n",(0,n.jsx)(t.code,{children:"$WORKSPACE/.metals/metals.log"})," file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"tail -f .metals/metals.log\n"})}),"\n",(0,n.jsx)(t.p,{children:"These logs contain information that may be relevant for regular users."}),"\n",(0,n.jsx)(t.h2,{id:"json-rpc-trace",children:"JSON-RPC trace"}),"\n",(0,n.jsxs)(t.p,{children:["To see the trace of incoming/outgoing JSON communication with the text editor\nor build server, create empty files in ",(0,n.jsx)(t.code,{children:"$WORKSPACE/.metals/"})," or your machine cache\ndirectory."]}),"\n",(0,n.jsxs)(t.p,{children:["However, we do not recommend using your machine cache directory because\ntrace files located there are shared between all Metals instances, hence multiple\nservers can override the same file. Using ",(0,n.jsx)(t.code,{children:"$WORKSPACE/.metals/"})," solves this issue and\nalso allows user to have more precise control over which metals instances log\ntheir JSON-RPC communication."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Linux and macOS\ntouch $WORKSPACE/.metals/lsp.trace.json # text editor\ntouch $WORKSPACE/.metals/bsp.trace.json # build server\ntouch $WORKSPACE/.metals/dap-server.trace.json # debug adapter\ntouch $WORKSPACE/.metals/dap-client.trace.json # debug adapter\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Windows\ntype nul > $WORKSPACE/.metals/lsp.trace.json # text editor\ntype nul > $WORKSPACE/.metals/bsp.trace.json # build server\ntype nul > $WORKSPACE/.metals/dap-server.trace.json # debug adapter\ntype nul > $WORKSPACE/.metals/dap-client.trace.json # debug adapter\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Next when you start Metals, watch the logs with ",(0,n.jsx)(t.code,{children:"tail -f"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Linux and macOS\ntail -f $WORKSPACE/.metals/lsp.trace.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"The traces are very verbose so it's recommended to delete the files if you are\nnot interested in debugging the JSON communication."}),"\n",(0,n.jsx)(t.h2,{id:"jvm-debugging",children:"JVM Debugging"}),"\n",(0,n.jsxs)(t.p,{children:["To debug the JVM with the Metals server, add a property to your\n",(0,n.jsx)(t.code,{children:"Server Properties"})," with the usual Java debugging flags, making sure you have\nthe ",(0,n.jsx)(t.code,{children:"quiet"})," option on. It's important to remember about the flag, as the server\nuses standard input/output to communicate with the client, and the default\noutput of the debugger interferes with that."]}),"\n",(0,n.jsx)(t.p,{children:"This property will make your server run in debug mode on port 5005 without\nwaiting for the debugger to connect:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005,quiet=y\n"})}),"\n",(0,n.jsx)(t.h2,{id:"updating-build-tool-launcherwrappers",children:"Updating build tool launcher/wrappers"}),"\n",(0,n.jsxs)(t.p,{children:["Metals uses various wrappers or launchers for each build tool that it supports.\nThis makes sure that when your in a workspace for you build tool that metals is\nable to correctly launch that build tool, even if it doesn't exist on the users\n",(0,n.jsx)(t.code,{children:"$PATH"}),". You can see their usages in ",(0,n.jsx)(t.code,{children:"<BuildToolName>BuildTool.scala"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"updating-sbt-launcher",children:"Updating sbt-launcher"}),"\n",(0,n.jsx)(t.p,{children:"The easiest way to update the sbt-launcher is with the following coursier\ncommand:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'cp "$(cs fetch org.scala-sbt:sbt-launch:<version>)" sbt-launch.jar\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This will allow you to not have to do some of the manual steps with the launcher\nproperties file listed ",(0,n.jsx)(t.a,{href:"https://github.com/sbt/launcher",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"updating-maven-wrappers",children:"Updating maven wrappers"}),"\n",(0,n.jsxs)(t.p,{children:["For Maven we use the ",(0,n.jsx)(t.a,{href:"https://maven.apache.org/wrapper/maven-wrapper/index.html",children:"Maven\nWrapper"}),". In order to\nupdate this you'll want to do the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Run the ",(0,n.jsx)(t.code,{children:"./bin/update-maven-wrapper.sh"})," script"]}),"\n",(0,n.jsxs)(t.li,{children:["Update the ",(0,n.jsx)(t.code,{children:"def version"})," in ",(0,n.jsx)(t.code,{children:"MavenBuildTool.scala"})," to the latest version\nthat you just updated to."]}),"\n",(0,n.jsxs)(t.li,{children:["Run the specific maven tests and ensure they pass: ",(0,n.jsx)(t.code,{children:"./bin/test.sh   'slow/testOnly -- tests.maven.*"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"git-hooks",children:"Git hooks"}),"\n",(0,n.jsx)(t.p,{children:"This git repository has a pre-push hook to run Scalafmt."}),"\n",(0,n.jsxs)(t.p,{children:["The CI also uses Scalafix to assert that there a no unused imports. To\nautomatically remove unused imports run ",(0,n.jsx)(t.code,{children:"sbt scalafixAll"}),". We don't run Scalafix\nas a pre-push git hook since starting sbt takes a long time."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(7294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
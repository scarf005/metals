"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1520],{6284:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(7624),i=s(2172);const o={id:"vscode",sidebar_label:"VS Code",title:"Visual Studio Code"},r=void 0,a={id:"editors/vscode",title:"Visual Studio Code",description:"Goto Definition",source:"@site/target/docs/editors/vscode.md",sourceDirName:"editors",slug:"/editors/vscode",permalink:"/metals/docs/editors/vscode",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/vscode.md",tags:[],version:"current",frontMatter:{id:"vscode",sidebar_label:"VS Code",title:"Visual Studio Code"},sidebar:"docs",previous:{title:"Overview",permalink:"/metals/docs/"},next:{title:"Vim",permalink:"/metals/docs/editors/vim"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Importing a build",id:"importing-a-build",level:2},{value:"Custom sbt launcher",id:"custom-sbt-launcher",level:3},{value:"Speeding up import",id:"speeding-up-import",level:3},{value:"Importing changes",id:"importing-changes",level:3},{value:"Manually trigger build import",id:"manually-trigger-build-import",level:3},{value:"Run doctor",id:"run-doctor",level:2},{value:"Configure Java version",id:"configure-java-version",level:2},{value:"macOS",id:"macos",level:3},{value:"Custom artifact repositories (Maven or Ivy resolvers)",id:"custom-artifact-repositories-maven-or-ivy-resolvers",level:2},{value:"HTTP proxy",id:"http-proxy",level:2},{value:"Using latest Metals <a>SNAPSHOT</a>",id:"using-latest-metals-snapshot",level:2},{value:"Files and Directories to include in your Gitignore",id:"files-and-directories-to-include-in-your-gitignore",level:2},{value:"Show document symbols",id:"show-document-symbols",level:2},{value:"Go to parent code lenses",id:"go-to-parent-code-lenses",level:2},{value:"Create new project from template",id:"create-new-project-from-template",level:2},{value:"Running and debugging your code",id:"running-and-debugging-your-code",level:2},{value:"via code lenses",id:"via-code-lenses",level:3},{value:"via a <code>launch.json</code> configuration",id:"via-a-launchjson-configuration",level:3},{value:"via Metals&#39; commands",id:"via-metals-commands",level:3},{value:"On type formatting for multiline string formatting",id:"on-type-formatting-for-multiline-string-formatting",level:2},{value:"Formatting on paste for multiline strings",id:"formatting-on-paste-for-multiline-strings",level:2},{value:"Worksheets",id:"worksheets",level:2},{value:"Getting started with Worksheets",id:"getting-started-with-worksheets",level:3},{value:"Evaluations",id:"evaluations",level:3},{value:"Using dependencies in worksheets",id:"using-dependencies-in-worksheets",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Running scalafix rules",id:"running-scalafix-rules",level:2},{value:"Searching a symbol in the workspace",id:"searching-a-symbol-in-the-workspace",level:2},{value:"Test Explorer",id:"test-explorer",level:2},{value:"Coming from IntelliJ",id:"coming-from-intellij",level:2},{value:"GitHub Codespaces and GitHub.dev support",id:"github-codespaces-and-githubdev-support",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/48776422-1f764f00-ecd0-11e8-96d1-170f2354d50e.gif",alt:"Goto Definition"})}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Java 8, 11, 17 provided by OpenJDK or Oracle"}),". Eclipse OpenJ9 is not\nsupported, please make sure the ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," environment variable\npoints to a valid Java 8, 11 or 17 installation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"macOS, Linux or Windows"}),". Metals is developed on many operating systems and\nevery PR is tested on Ubuntu, Windows and MacOS."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scala 2.13, 2.12, 2.11 and Scala 3"}),". Metals supports these Scala versions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scala 2.13"}),":\n2.13.12, 2.13.11, 2.13.10, 2.13.9, 2.13.8, 2.13.7, 2.13.6, 2.13.5"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scala 2.12"}),":\n2.12.18, 2.12.17, 2.12.16, 2.12.15, 2.12.14, 2.12.13, 2.12.12, 2.12.11"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scala 2.11"}),":\n2.11.12"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scala 3"}),":\n3.3.2-RC3, 3.3.2-RC1, 3.3.1, 3.3.0, 3.2.2, 3.2.1, 3.2.0, 3.1.3, 3.1.2, 3.1.1, 3.1.0"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note that 2.11.x support is deprecated and it will be removed in future releases.\nIt's recommended to upgrade to Scala 2.12 or Scala 2.13"}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Install the Metals extension from the\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=scalameta.metals",children:"Marketplace"})," by clicking on this badge ",(0,t.jsx)(n.a,{href:"vscode:extension/scalameta.metals",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/metals-vscode-blue.png",alt:"Install Metals extension"})})," or via the VS Code editor:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://imgur.com/Qew0fNH.png",alt:"install stable version"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure to disable the extensions\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dragos.scala-lsp",children:"Scala Language Server"}),"\nand\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=lightbend.vscode-sbt-scala",children:"Scala (sbt)"}),"\nif they are installed. The\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=lampepfl.dotty",children:"Dotty Language Server"}),"\ndoes ",(0,t.jsx)(n.strong,{children:"not"})," need to be disabled because the Metals and Dotty extensions don't\nconflict with each other. However, if you want to work on Scala 3 code in a\nworkspace that was previously opened with ",(0,t.jsx)(n.code,{children:"Dotty Language Server"})," you need to\nfirst remove ",(0,t.jsx)(n.code,{children:".dotty-ide-artifact"})," before opening the workspace with Metals."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Next, open a directory containing your Scala code. The extension activates when\nthe main directory contains ",(0,t.jsx)(n.code,{children:"build.sbt"})," or ",(0,t.jsx)(n.code,{children:"build.sc"})," file, a Scala file is\nopened, which includes ",(0,t.jsx)(n.code,{children:"*.sbt"}),", ",(0,t.jsx)(n.code,{children:"*.scala"})," and ",(0,t.jsx)(n.code,{children:"*.sc"})," file, or a standard Scala\ndirectory structure ",(0,t.jsx)(n.code,{children:"src/main/scala"})," is detected."]}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to opt in to install the pre-release version and try out the latest cutting edge features from Metals server.\nApart from new features, pre-release versions also include many bugfixes. It's encouraged to use them with ",(0,t.jsx)(n.a,{href:"#SNAPSHOT",children:"SNAPSHOT"})," releases of Metals server. Using pre-release versions may result in less stable experience and it is not indented for beginners.\nPre-release versions follow ",(0,t.jsx)(n.code,{children:"major.minor.PATCH"})," versioning."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://imgur.com/CzOTleE.png",alt:"Install the pre-release extension"})}),"\n",(0,t.jsx)(n.h2,{id:"importing-a-build",children:"Importing a build"}),"\n",(0,t.jsx)(n.p,{children:'The first time you open Metals in a new workspace it prompts you to import the build.\nClick "Import build" to start the installation step.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/0VqZWay.png",alt:"Import build"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"Not now" disables this prompt for 2 minutes.'}),"\n",(0,t.jsxs)(n.li,{children:['"Don\'t show again" disables this prompt forever, use ',(0,t.jsx)(n.code,{children:"rm -rf .metals/"})," to re-enable\nthe prompt."]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"tail -f .metals/metals.log"})," to watch the build import progress."]}),"\n",(0,t.jsxs)(n.li,{children:["Behind the scenes, Metals uses ",(0,t.jsx)(n.a,{href:"https://scalacenter.github.io/bloop/",children:"Bloop"})," to\nimport sbt builds, but you don't need Bloop installed on your machine to run this step."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the import step completes, compilation starts for your open ",(0,t.jsx)(n.code,{children:"*.scala"}),"\nfiles."]}),"\n",(0,t.jsx)(n.p,{children:"Once the sources have compiled successfully, you can navigate the codebase with\ngoto definition."}),"\n",(0,t.jsx)(n.h3,{id:"custom-sbt-launcher",children:"Custom sbt launcher"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Metals runs an embedded ",(0,t.jsx)(n.code,{children:"sbt-launch.jar"})," launcher that respects ",(0,t.jsx)(n.code,{children:".sbtopts"})," and ",(0,t.jsx)(n.code,{children:".jvmopts"}),".\nHowever, the environment variables ",(0,t.jsx)(n.code,{children:"SBT_OPTS"})," and ",(0,t.jsx)(n.code,{children:"JAVA_OPTS"})," are not respected."]}),"\n",(0,t.jsxs)(n.p,{children:['Update the "Sbt Script" setting to use a custom ',(0,t.jsx)(n.code,{children:"sbt"})," script instead of the\ndefault Metals launcher if you need further customizations like reading environment\nvariables."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/NuwEBe4.png",alt:"Sbt Launcher"})}),"\n",(0,t.jsx)(n.h3,{id:"speeding-up-import",children:"Speeding up import"}),"\n",(0,t.jsx)(n.p,{children:'The "Import build" step can take a long time, especially the first time you\nrun it in a new build. The exact time depends on the complexity of the build and\nif library dependencies need to be downloaded. For example, this step can take\neverything from 10 seconds in small cached builds up to 10-15 minutes in large\nuncached builds.'}),"\n",(0,t.jsxs)(n.p,{children:["Consult the ",(0,t.jsx)(n.a,{href:"https://scalacenter.github.io/bloop/docs/build-tools/sbt#speeding-up-build-export",children:"Bloop documentation"}),"\nto learn how to speed up build import."]}),"\n",(0,t.jsx)(n.h3,{id:"importing-changes",children:"Importing changes"}),"\n",(0,t.jsxs)(n.p,{children:["When you change ",(0,t.jsx)(n.code,{children:"build.sbt"})," or sources under ",(0,t.jsx)(n.code,{children:"project/"}),", you will be prompted to\nre-import the build."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/72kdZkL.png",alt:"Import sbt changes"})}),"\n",(0,t.jsx)(n.h3,{id:"manually-trigger-build-import",children:"Manually trigger build import"}),"\n",(0,t.jsxs)(n.p,{children:['To manually trigger a build import, execute the "Import build" command through\nthe command palette (',(0,t.jsx)(n.code,{children:"Cmd + Shift + P"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/QHLKt8u.png",alt:"Import build command"})}),"\n",(0,t.jsx)(n.h2,{id:"run-doctor",children:"Run doctor"}),"\n",(0,t.jsx)(n.p,{children:'Execute the "Run Doctor" through the command palette to troubleshoot potential\nconfiguration problems in your workspace.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/K02g0UM.png",alt:"Run doctor command"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-java-version",children:"Configure Java version"}),"\n",(0,t.jsxs)(n.p,{children:["The VS Code plugin uses by default the ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," environment variable (via\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/locate-java-home",children:(0,t.jsx)(n.code,{children:"locate-java-home"})}),") to locate\nthe ",(0,t.jsx)(n.code,{children:"java"}),' executable. To override the default Java home location, update the\n"Java Home" variable in the settings menu.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/sKrPKk2.png",alt:"Java Home setting"})}),"\n",(0,t.jsxs)(n.p,{children:["If this setting is defined, the VS Code plugin uses the custom path instead of\nthe ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," environment variable."]}),"\n",(0,t.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,t.jsxs)(n.p,{children:["To globally configure ",(0,t.jsx)(n.code,{children:"$JAVA_HOME"})," for all GUI applications, see\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/135688/setting-environment-variables-on-os-x",children:"this Stackoverflow answer"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you prefer to manually configure Java home through VS Code, run the following\ncommand to copy the Java 8 home path."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"/usr/libexec/java_home -v 1.8 | pbcopy\n"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-artifact-repositories-maven-or-ivy-resolvers",children:"Custom artifact repositories (Maven or Ivy resolvers)"}),"\n",(0,t.jsxs)(n.p,{children:["Use the 'Custom Repositories' setting for the Metals VS Code extension to tell\n",(0,t.jsx)(n.a,{href:"https://get-coursier.io/docs/other-proxy",children:"Coursier"})," to try to download Metals\nartifacts from your private artifact repository."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:".jvmopts"})," to set sbt options\n(",(0,t.jsx)(n.a,{href:"https://www.scala-sbt.org/1.0/docs/Proxy-Repositories.html",children:"https://www.scala-sbt.org/1.0/docs/Proxy-Repositories.html"}),") for\n",(0,t.jsx)(n.code,{children:"sbt bloopInstall"})," which resolves library dependencies. You can also provide a\ncustom sbt script (see 'Custom sbt launcher')."]}),"\n",(0,t.jsx)(n.h2,{id:"http-proxy",children:"HTTP proxy"}),"\n",(0,t.jsxs)(n.p,{children:["Metals uses ",(0,t.jsx)(n.a,{href:"https://get-coursier.io/docs/other-proxy",children:"Coursier"})," to download\nartifacts from Maven Central. To use Metals behind an HTTP proxy, configure the\nsystem properties ",(0,t.jsx)(n.code,{children:"-Dhttps.proxyHost=\u2026 -Dhttps.proxyPort=\u2026"})," in one of the\nfollowing locations:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".jvmopts"})," file in the workspace directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JAVA_OPTS"})," environment variable, make sure to start ",(0,t.jsx)(n.code,{children:"code"})," from your terminal\nwhen using this option since environment variables don't always propagate\ncorrectly when opening VS Code as a GUI application outside a terminal."]}),"\n",(0,t.jsx)(n.li,{children:'"Server Properties" setting for the Metals VS Code extension, which can be\nconfigured per-workspace or per-user.'}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"using-latest-metals-snapshot",children:["Using latest Metals ",(0,t.jsx)("a",{name:"SNAPSHOT",children:"SNAPSHOT"})]}),"\n",(0,t.jsx)(n.p,{children:'Update the "Server Version" setting to try out the latest pending Metals\nfeatures.'}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Version"}),(0,t.jsx)("th",{children:"Published"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1.2.1"}),(0,t.jsx)("td",{children:"07 Feb 2024 12:03"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1.2.1+10-f4aeab42-SNAPSHOT"}),(0,t.jsx)("td",{children:"15 Feb 2024 12:31"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:'Run the "Reload Window" command after updating the setting for the new version\nto take effect.'}),"\n",(0,t.jsx)(n.h2,{id:"files-and-directories-to-include-in-your-gitignore",children:"Files and Directories to include in your Gitignore"}),"\n",(0,t.jsxs)(n.p,{children:["The Metals server places logs and other files in the ",(0,t.jsx)(n.code,{children:".metals"})," directory. The\nBloop compile server places logs and compilation artifacts in the ",(0,t.jsx)(n.code,{children:".bloop"}),"\ndirectory. The Bloop plugin that generates Bloop configuration is added in the\n",(0,t.jsx)(n.code,{children:"metals.sbt"})," file, which is added at ",(0,t.jsx)(n.code,{children:"project/metals.sbt"})," as well as further\n",(0,t.jsx)(n.code,{children:"project"})," directories depending on how deep ",(0,t.jsx)(n.code,{children:"*.sbt"})," files need to be supported.\nTo support each ",(0,t.jsx)(n.code,{children:"*.sbt"})," file Metals needs to create an additional file at\n",(0,t.jsx)(n.code,{children:"./project/project/metals.sbt"})," relative to the sbt file.\nWorking with Ammonite scripts will place compiled scripts into the ",(0,t.jsx)(n.code,{children:".ammonite"})," directory.\nIt's recommended to exclude these directories and files\nfrom version control systems like git."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# ~/.gitignore\n.metals/\n.bloop/\n.ammonite/\nmetals.sbt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"show-document-symbols",children:"Show document symbols"}),"\n",(0,t.jsx)(n.p,{children:'Run the "Explorer: Focus on Outline View" command to open the symbol outline for\nthe current file in the sidebar.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/T0kVJsr.gif",alt:"Document Symbols Outline"})}),"\n",(0,t.jsx)(n.p,{children:'Run the "Open Symbol in File" command to search for a symbol in the current file\nwithout opening the sidebar.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/0PJ4brd.png",alt:"Document Symbols Command"})}),"\n",(0,t.jsxs)(n.p,{children:["As you type, the symbol outline is also visible at the top of the file.\n",(0,t.jsx)(n.img,{src:"https://i.imgur.com/L217n4q.png",alt:"Document Symbols Outline"})]}),"\n",(0,t.jsx)(n.h2,{id:"go-to-parent-code-lenses",children:"Go to parent code lenses"}),"\n",(0,t.jsx)(n.p,{children:"Metals has the ability to display code lenses that, when invoked,\nwill go to the parent class that contains the definition of the method or symbol.\nUnfortunately, it might cause some lag in larger code bases,\nwhich is why it is not enabled currently by default."}),"\n",(0,t.jsxs)(n.p,{children:["To enable the feature you need to modify the setting ",(0,t.jsx)(n.code,{children:"metals.superMethodLensesEnabled"})," to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Even without using the code lenses it's still possible to navigate the method hierarchy\nusing two commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Metals: Go to super method"})," - immediately goes to the parent of the method the cursor is pointing to"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Metals: Reveal super method hierachy"})," - displays the full method hierachy and enables to move to any parent,\nit is best used with the Metals Quick Pick extension."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can also bind those commands to a shortcut."}),"\n",(0,t.jsx)(n.h2,{id:"create-new-project-from-template",children:"Create new project from template"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible using Metals to easily setup a new project using the exiting ",(0,t.jsx)(n.a,{href:"https://github.com/foundweekends/giter8/wiki/giter8-templates",children:"giter8"})," templates.\nThis is an equivalent to the ",(0,t.jsx)(n.code,{children:"sbt new"})," command, which uses the same mechanism.\nThere is a great number of templates already available and it should be easy to find something for yourself.\nTo start the setup you can use the Metals: New Scala project command, which works as following:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Choose the template and then:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use the proposed templates."}),"\n",(0,t.jsx)(n.li,{children:'Choose "Discover more" and then choose from the list downloaded from the Giter8 wiki page.'}),"\n",(0,t.jsxs)(n.li,{children:["Input a custom Github repository following the ",(0,t.jsx)(n.code,{children:"organization/repo"})," schema."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the parent directory that you want to create your new project in."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Choose the name or accept the default one."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Choose whether to open a new window for the created project or use the existing one."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The same command will be invoked when clicking the "New Scala Project" button in the Metals view.'}),"\n",(0,t.jsxs)(n.p,{children:["If you feel like a template should be included in the default displayed ones do not hesitate to create a\n",(0,t.jsx)(n.a,{href:"https://github.com/scalameta/metals/blob/cda5b8c2029e5f201fb8d0636e0365d796407bd9/metals/src/main/scala/scala/meta/internal/builds/NewProjectProvider.scala#L308",children:"PR"}),"\nor file an issue."]}),"\n",(0,t.jsx)(n.h2,{id:"running-and-debugging-your-code",children:"Running and debugging your code"}),"\n",(0,t.jsxs)(n.p,{children:["Metals supports running and debugging tests and main methods via the\n",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/debug-adapter-protocol/",children:"Debug Adapter Protocol"}),".\nThe protocol is used to communicate between the editor and debugger, which means\nthat applications can be run the same as for any other language in the natively\nsupported ",(0,t.jsx)(n.code,{children:"Run"})," view. When using Metals the debugger itself is\n",(0,t.jsx)(n.a,{href:"https://scalacenter.github.io/bloop/",children:"Bloop"}),", which is also responsible for\nstarting the actual process."]}),"\n",(0,t.jsx)(n.p,{children:"Users can begin the debugging session in two ways:"}),"\n",(0,t.jsx)(n.h3,{id:"via-code-lenses",children:"via code lenses"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/5nTnrcS.png",alt:"lenses"})}),"\n",(0,t.jsxs)(n.p,{children:["For each main or test class Metals shows two code lenses ",(0,t.jsx)(n.code,{children:"run | debug"})," or\n",(0,t.jsx)(n.code,{children:"test | test debug"}),", which show up above the definition as a kind of virtual\ntext. Clicking ",(0,t.jsx)(n.code,{children:"run"})," or ",(0,t.jsx)(n.code,{children:"test"})," will start running the main class or test without\nstopping at any breakpoints, while clicking ",(0,t.jsx)(n.code,{children:"debug"})," or ",(0,t.jsx)(n.code,{children:"test debug"})," will pause\nonce any of them are hit. It's not possible to add any arguments or java\nproperties when running using this method."]}),"\n",(0,t.jsxs)(n.h3,{id:"via-a-launchjson-configuration",children:["via a ",(0,t.jsx)(n.code,{children:"launch.json"})," configuration"]}),"\n",(0,t.jsxs)(n.p,{children:["Visual Studio Code uses ",(0,t.jsx)(n.code,{children:".vscode/launch.json"})," to store user defined\nconfigurations, which can be run using:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Run -> Start Debugging"})," menu item or ",(0,t.jsx)(n.code,{children:"workbench.action.debug.start"}),"\nshortcut."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Run -> Run Without Debugging"})," menu item or ",(0,t.jsx)(n.code,{children:"workbench.action.debug.run"}),"\nshortcut."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If a user doesn't have anything yet saved, a configuration wizard will pop up to\nguide them. In the end users should end up with something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    // Main class configuration\n    {\n      "type": "scala",\n      "request": "launch",\n      // configuration name visible for the user\n      "name": "Launch Main",\n      // full name of the class to run\n      "mainClass": "com.example.Main",\n      // optional arguments for the main class\n      "args": [],\n      // optional jvm properties to use\n      "jvmOptions": []\n    },\n    // Test class configuration\n    {\n      "type": "scala",\n      "request": "launch",\n      // configuration name visible for the user\n      "name": "Launch Test",\n      // full name of the class to run\n      "testClass": "com.example.Test"\n    },\n    // Attach debugger when running via:\n    // `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=localhost:5005`\n    {\n      "type": "scala",\n      "request": "attach",\n      "name": "Attach debugger",\n      // name of the module that is being debugging\n      "buildTarget": "root",\n      // Host of the jvm to connect to\n      "hostName": "localhost",\n      // Port to connect to\n      "port": 5005\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can also add an optional build target name, which is needed in case there\nare more than one class with the same name or when launching a class from\noutside the project. Inside ",(0,t.jsx)(n.code,{children:'"configurations":'})," add the key ",(0,t.jsx)(n.code,{children:"buildTarget"})," with\nyour target name, e.g. ",(0,t.jsx)(n.code,{children:"root"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'      "buildTarget": "root"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The build target name corresponds to your project name. For example in sbt for\n",(0,t.jsx)(n.code,{children:"lazy val interfaces = project"})," the name of the build target will be\n",(0,t.jsx)(n.code,{children:"interfaces"})," for sources and ",(0,t.jsx)(n.code,{children:"interfaces-test"})," for tests. To make sure you have\nthe correct target names please run the command ",(0,t.jsx)(n.code,{children:"Metals: Run Doctor"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Multiple configurations can be stored in that file and can be chosen either\nmanually in the ",(0,t.jsx)(n.code,{children:"Run"})," view or can be picked by invoking a shortcut defined under\n",(0,t.jsx)(n.code,{children:"workbench.action.debug.selectandstart"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"via-metals-commands",children:"via Metals' commands"}),"\n",(0,t.jsx)(n.p,{children:"You can also use commands that can be easily bound to shortcuts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metals.run-current-file"})," - Run main class in the current file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metals.test-current-file"})," - Run test class in the current file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metals.test-current-target"})," - Run all tests in the current project."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To assign shortcuts just go to the Keyboard Shortcuts page (",(0,t.jsx)(n.code,{children:"File"})," ->\n",(0,t.jsx)(n.code,{children:"Preferences"})," -> ",(0,t.jsx)(n.code,{children:"Keyboard Shortcuts"}),") and search for a command, click on it and\nuse your preferred shortcut."]}),"\n",(0,t.jsx)(n.h2,{id:"on-type-formatting-for-multiline-string-formatting",children:"On type formatting for multiline string formatting"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://imgur.com/a0O2vCs.gif",alt:"on-type"})}),"\n",(0,t.jsxs)(n.p,{children:["To properly support adding ",(0,t.jsx)(n.code,{children:"|"})," in multiline strings we are using the\n",(0,t.jsx)(n.code,{children:"onTypeFormatting"})," method. The functionality is enabled by default, but you can\ndisable/enable ",(0,t.jsx)(n.code,{children:"onTypeFormatting"})," inside Visual Studio Code settings by checking\n",(0,t.jsx)(n.code,{children:"Editor: Format On Type"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/s6nT9rC.png",alt:"on-type-setting"})}),"\n",(0,t.jsx)(n.h2,{id:"formatting-on-paste-for-multiline-strings",children:"Formatting on paste for multiline strings"}),"\n",(0,t.jsxs)(n.p,{children:["Whenever text is paste into a multiline string with ",(0,t.jsx)(n.code,{children:"|"})," it will be properly\nformatted by Metals:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/fF0XWYC.gif",alt:"format-on-paste"})}),"\n",(0,t.jsxs)(n.p,{children:["This feature is enabled by default. If you need to disable/enable formatting on\npaste in Visual Studio Code you can check the ",(0,t.jsx)(n.code,{children:"Editor: Format On Paste"})," setting:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/rMrk27F.png",alt:"format-on-paste-setting"})}),"\n",(0,t.jsx)(n.h2,{id:"worksheets",children:"Worksheets"}),"\n",(0,t.jsxs)(n.p,{children:["Worksheets are a great way to explore an api, try out an idea, or code\nup an example and quickly see the evaluated expression or result. Behind\nthe scenes worksheets are powered by the great work done in\n",(0,t.jsx)(n.a,{href:"https://scalameta.org/mdoc/",children:"mdoc"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"getting-started-with-worksheets",children:"Getting started with Worksheets"}),"\n",(0,t.jsxs)(n.p,{children:["To get started with a worksheet you can either use the ",(0,t.jsx)(n.code,{children:"metals.new-scala-file"}),"\ncommand and select ",(0,t.jsx)(n.em,{children:"Worksheet"})," or create a file called ",(0,t.jsx)(n.code,{children:"*.worksheet.sc"}),".\nThis format is important since this is what tells Metals that it's meant to be\ntreated as a worksheet and not just a Scala script. Where you create the\nscript also matters. If you'd like to use classes and values from your\nproject, you need to make sure the worksheet is created inside of your sources next to any existing Scala files.\ndirectory. You can still create a worksheet in other places, but you will\nonly have access to the standard library and your dependencies."]}),"\n",(0,t.jsx)(n.h3,{id:"evaluations",children:"Evaluations"}),"\n",(0,t.jsx)(n.p,{children:"After saving you'll see the result of the expression as a decoration at the end of the line.\nYou may not see the full result for example if it's too long, so you are also\nable to hover on the decoration to expand the decoration."}),"\n",(0,t.jsxs)(n.p,{children:["Keep in mind that you don't need to wrap your code in an ",(0,t.jsx)(n.code,{children:"object"}),". In worksheets\neverything can be evaluated at the top level."]}),"\n",(0,t.jsx)(n.h3,{id:"using-dependencies-in-worksheets",children:"Using dependencies in worksheets"}),"\n",(0,t.jsx)(n.p,{children:"You are able to include an external dependency in your worksheet by including\nit in one of the following two ways."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"// $dep.`organisation`::artifact:version` style\nimport $dep.`com.lihaoyi::scalatags:0.7.0`\n\n// $ivy.`organisation::artifact:version` style\nimport $ivy.`com.lihaoyi::scalatags:0.7.0`\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"::"})," is the same as ",(0,t.jsx)(n.code,{children:"%%"})," in sbt, which will append the current Scala binary version\nto the artifact name."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also import ",(0,t.jsx)(n.code,{children:"scalac"})," options in a special ",(0,t.jsx)(n.code,{children:"$scalac"})," import like below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import $scalac.`-Ywarn-unused`\n"})}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"Since worksheets are not standard Scala files, you may run into issues with some constructs.\nFor example, you may see an error like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"value classes may not be a member of another class - mdoc\n"})}),"\n",(0,t.jsx)(n.p,{children:"This means that one of the classes defined in the worksheet extends AnyVal, which is\nnot currently supported. You can work around this by moving the class to a separate file or removing\nthe AnyVal parent."}),"\n",(0,t.jsx)(n.h2,{id:"running-scalafix-rules",children:"Running scalafix rules"}),"\n",(0,t.jsxs)(n.p,{children:["Scalafix allows users to specify some refactoring and linting rules that can be applied to your\ncodebase. Please checkout the ",(0,t.jsx)(n.a,{href:"https://scalacenter.github.io/scalafix",children:"scalafix website"})," for more information."]}),"\n",(0,t.jsxs)(n.p,{children:["Since Metals v0.11.7 it's now possible to run scalafix rules using a special\ncommand ",(0,t.jsx)(n.code,{children:"metals.scalafix-run"}),". In VS Code can be also run using the default shortcut of ",(0,t.jsx)(n.code,{children:"shift + alt + ctrl + o"}),".\nThis should run all the rules defined in your ",(0,t.jsx)(n.code,{children:".scalafix.conf"})," file. All built-in rules\nand the ",(0,t.jsx)(n.a,{href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules",children:"community hygiene ones"})," can\nbe run without any additional settings. However, for all the other rules users need to\nadd an additional dependency in the ",(0,t.jsx)(n.code,{children:"metals.scalafixRulesDependencies"})," user setting.\nThose rules need to be in form of strings such as ",(0,t.jsx)(n.code,{children:"com.github.liancheng::organize-imports:0.6.0"}),", which\nfollows the same convention as ",(0,t.jsx)(n.a,{href:"https://get-coursier.io/",children:"coursier dependencies"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A sample scalafix configuration can be seen below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hocon",children:'rules = [\n  OrganizeImports,\n  ExplicitResultTypes,\n  RemoveUnused\n]\n\nRemoveUnused.imports = false\n\nOrganizeImports.groupedImports = Explode\nOrganizeImports.expandRelative = true\nOrganizeImports.removeUnused = true\nOrganizeImports.groups = [\n  "re:javax?\\."\n  "scala."\n  "scala.meta."\n  "*"\n]\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"searching-a-symbol-in-the-workspace",children:"Searching a symbol in the workspace"}),"\n",(0,t.jsxs)(n.p,{children:['Metals provides an alternative command to the native "Go to symbol in workspace..." command, in order to work around some VS Code limitations (see ',(0,t.jsx)(n.a,{href:"https://github.com/microsoft/vscode/issues/98125",children:"this issue"})," for more context) and provide richer search capabilities."]}),"\n",(0,t.jsx)(n.p,{children:'You can invoke this command from the command palette (look for "Metals: Search symbol in workspace").\nOptionally you can also bind this command to a shortcut. For example, if you want to replace the native command with the Metals one you can configure this shortcut:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'  {\n    "key": "ctrl+t", // or "cmd+t" if you\'re on macOS\n    "command": "metals.symbol-search",\n    "when": "editorLangId == scala"\n  }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"test-explorer",children:"Test Explorer"}),"\n",(0,t.jsxs)(n.p,{children:["Metals 0.11.0 implements Visual Studio Code's ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/api/extension-guides/testing",children:"Testing API"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Test Explorer UI is a new default way to run/debug test suites and replaces Code\nLenses. The new UI adds a testing view, which shows all test suites declared in\nproject's modules. From this panel it's possible to"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"view all discovered test suites grouped by build targets (modules) and filter them"}),"\n",(0,t.jsx)(n.li,{children:"run/debug test"}),"\n",(0,t.jsx)(n.li,{children:"navigate to test's definition."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/Z3VtS0O.gif",alt:"test-explorer"})}),"\n",(0,t.jsx)(n.p,{children:"NOTE: While Metals detects test suites for most of existing testing\nframeworks, support for recognizing individual tests is more limited.\nMetals supports the current set of test frameworks when it comes to\nindividual test discovery:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Junit"}),"\n",(0,t.jsx)(n.li,{children:"MUnit"}),"\n",(0,t.jsxs)(n.li,{children:["ScalatestIf you encounter an error, create an ",(0,t.jsx)(n.a,{href:"https://github.com/scalameta/metals/issues",children:"issue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"coming-from-intellij",children:"Coming from IntelliJ"}),"\n",(0,t.jsxs)(n.p,{children:["Install the\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings",children:"IntelliJ IDEA Keybindings"}),"\nextension to use default IntelliJ shortcuts with VS Code."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"IntelliJ"}),(0,t.jsx)(n.th,{children:"VS Code"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Go to class"}),(0,t.jsx)(n.td,{children:"Go to symbol in workspace"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Parameter info"}),(0,t.jsx)(n.td,{children:"Trigger parameter hints"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Basic completion"}),(0,t.jsx)(n.td,{children:"Trigger suggest"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type info"}),(0,t.jsx)(n.td,{children:"Show hover"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Expand"}),(0,t.jsx)(n.td,{children:"Fold"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Extend Selection"}),(0,t.jsx)(n.td,{children:"Expand selection"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"github-codespaces-and-githubdev-support",children:"GitHub Codespaces and GitHub.dev support"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://scalameta.org/metals/docs/editors/online-ides#github-codespaces-and-githubdev",children:"https://scalameta.org/metals/docs/editors/online-ides#github-codespaces-and-githubdev"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var t=s(1504);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
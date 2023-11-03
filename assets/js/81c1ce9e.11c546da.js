"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5061],{4613:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>r});var i=s(5893),a=s(1151);const n={author:"Tomasz Godzik",title:"Metals v0.11.7 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},l=void 0,o={permalink:"/metals/blog/2022/07/04/aluminium",source:"@site/blog/2022-07-04-aluminium.md",title:"Metals v0.11.7 - Aluminium",description:"We're happy to announce the release of Metals v0.11.7, which brings a large",date:"2022-07-04T00:00:00.000Z",formattedDate:"July 4, 2022",tags:[],readingTime:10.8,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.11.7 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},unlisted:!1,prevItem:{title:"Metals v0.11.8 - Aluminium",permalink:"/metals/blog/2022/08/10/aluminium"},nextItem:{title:"Metals v0.11.6 - Aluminium",permalink:"/metals/blog/2022/06/03/aluminium"}},h={authorsImageUrls:[void 0]},r=[{value:"TL;DR",id:"tldr",level:2},{value:"Release notes now shown in VS Code",id:"release-notes-now-shown-in-vs-code",level:2},{value:"Improvements to Bloop Java home automation",id:"improvements-to-bloop-java-home-automation",level:2},{value:"Allow to run all scalafix rules on a file",id:"allow-to-run-all-scalafix-rules-on-a-file",level:2},{value:"[Scala 3] Implement-all abstract members code action.",id:"scala-3-implement-all-abstract-members-code-action",level:2},{value:"[Scala 3] Add snippet completions.",id:"scala-3-add-snippet-completions",level:2},{value:"[Scala 3] Add file name completions",id:"scala-3-add-file-name-completions",level:2},{value:"[Scala 3] Expression evaluation for debugger.",id:"scala-3-expression-evaluation-for-debugger",level:2},{value:"[Scala 2] Add ConvertToNamedArguments code action",id:"scala-2-add-converttonamedarguments-code-action",level:2},{value:"New flatMap to for comprehension code action.",id:"new-flatmap-to-for-comprehension-code-action",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.11.7 (2022-07-04)",id:"v0117-2022-07-04",level:2}];function c(e){const t={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"We're happy to announce the release of Metals v0.11.7, which brings a large\nnumber of Scala 3 improvements as well as a few interesting code actions."}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Commits since last release"}),(0,i.jsx)("td",{align:"center",children:"164"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Merged PRs"}),(0,i.jsx)("td",{align:"center",children:"77"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Contributors"}),(0,i.jsx)("td",{align:"center",children:"14"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Closed issues"}),(0,i.jsx)("td",{align:"center",children:"14"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"New features"}),(0,i.jsx)("td",{align:"center",children:"9"})]})]})}),"\n",(0,i.jsxs)(t.p,{children:["For full details: ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/51?closed=1",children:"https://github.com/scalameta/metals/milestone/51?closed=1"})]}),"\n",(0,i.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the ",(0,i.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"}),"\nand ",(0,i.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"})," with the help from\n",(0,i.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from the community."]}),"\n",(0,i.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsxs)(t.p,{children:["Check out ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Release notes now shown in VS Code"}),"\n",(0,i.jsx)(t.li,{children:"Improvements to Bloop Java home automation."}),"\n",(0,i.jsx)(t.li,{children:"Allow to run all scalafix rules on a file"}),"\n",(0,i.jsx)(t.li,{children:"[Scala 3] Implement-all abstract members code action."}),"\n",(0,i.jsx)(t.li,{children:"[Scala 3] Add snippet completions."}),"\n",(0,i.jsx)(t.li,{children:"[Scala 3] Add file name completions."}),"\n",(0,i.jsx)(t.li,{children:"[Scala 3] Expression evaluation for debugger."}),"\n",(0,i.jsx)(t.li,{children:"[Scala 2] Add ConvertToNamedArguments code action."}),"\n",(0,i.jsx)(t.li,{children:"New flatMap to for comprehension code action."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"release-notes-now-shown-in-vs-code",children:"Release notes now shown in VS Code"}),"\n",(0,i.jsx)(t.p,{children:"If you are using Visual Studio Code you should see this message right after the\nupdate of the Metals extension has finished. \ud83d\ude80"}),"\n",(0,i.jsx)(t.p,{children:"Starting with the current release we will be showing release notes inside VS\nCode when the version update completes. This way users will know whenever the\nextension was updated and it will not just silently update in the background."}),"\n",(0,i.jsxs)(t.p,{children:["Release notes will be shown only once after the update, but can be viewed again\nby executing ",(0,i.jsx)(t.code,{children:"Metals: Show release notes"})]}),"\n",(0,i.jsxs)(t.p,{children:["This was contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),", thanks for the\ncontinuous contributions!"]}),"\n",(0,i.jsx)(t.h2,{id:"improvements-to-bloop-java-home-automation",children:"Improvements to Bloop Java home automation"}),"\n",(0,i.jsxs)(t.p,{children:["From the\n",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/blog/2022/06/03/aluminium#automatically-setup-java-home-for-the-bloop-build-server",children:"last version of Metals"}),"\nwe introduced an automated setup of Java home for your Bloop build server, which\nis used to compile your code under the hood and is the default build server to\nbe used."]}),"\n",(0,i.jsx)(t.p,{children:"Your Java Home would be added when starting Metals, before starting the build\nserver, and would also suggest an update when changing the versions in the\nMetals settings. This could result in two possible notifications:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Metals changing Java version:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/BH8AS5c.png",alt:"metals-java-home"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Metals detecting an existing Bloop Java configuration:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/PCyyNVT.png",alt:"metals-java-home-existing"})}),"\n",(0,i.jsx)(t.p,{children:"However, this caused a couple of issues:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"In some cases Metals would suggest to change your Java home even if it hasn't\nchanged and it wasn't possible to dismiss the notification forever."}),"\n",(0,i.jsx)(t.li,{children:"In case your Java home changed and you missed the notification (or the\nnotification was not shown), Bloop would not start if the old java home was\nremoved. That especially caused issues with usage of Java with Nix."}),"\n",(0,i.jsx)(t.li,{children:"Metals would suggest to update your ~/.bloop/bloop.json file even if it was\nreadonly."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To help with that we implemented a number of fixes:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["You can dismiss the notification forever if Metals mistakenly suggests\nupdating your Bloop configuration and the overall false positives have been\nreduced. To do that you just need to click on the\n",(0,i.jsx)(t.code,{children:"Use the Global File's JVM..."})," button."]}),"\n",(0,i.jsx)(t.li,{children:"Metals will check before starting if your Java home is correct, and if it's\nnot it will replace it with the current one used by Metals."}),"\n",(0,i.jsx)(t.li,{children:"Metals will not show any notifications if it cannot change the file itself."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you encounter any further issues, you can take a look at Metals output and it\nshould show logs like these:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"2022.07.01 16:14:41 INFO  Bloop uses /usr/lib/jvm/openjdk17 defined at /home/tgodzik/.bloop/bloop.json\n2022.07.01 16:14:41 INFO  Bloop currently uses settings: -Xmx3G\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can use them to debug what is happening and report an issue."}),"\n",(0,i.jsx)(t.h2,{id:"allow-to-run-all-scalafix-rules-on-a-file",children:"Allow to run all scalafix rules on a file"}),"\n",(0,i.jsxs)(t.p,{children:["Up until the current release Metals would only run scalafix for\n",(0,i.jsx)(t.code,{children:"organize imports"})," and wouldn't allow to use any other rules. Starting with this\nrelease you should be able to apply all currently defined\n",(0,i.jsx)(t.code,{children:"rules in .scalafix.conf"})," you require by running ",(0,i.jsx)(t.code,{children:"metals.scalafix-run"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["By default it's bound to ",(0,i.jsx)(t.code,{children:"alt"})," + ",(0,i.jsx)(t.code,{children:"ctrl"})," + ",(0,i.jsx)(t.code,{children:"shift"})," + ",(0,i.jsx)(t.code,{children:"o"})," shortcut in Visual\nStudio Code."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/DLe5sYT.gif",alt:"scalafix-run"})}),"\n",(0,i.jsxs)(t.p,{children:["One major drawback of the current approach is that we are unable to run some of\nthe custom rules. Only the default rules and the contributed Hygiene rules are\ncurrently available by default. You can see the full list of them\n",(0,i.jsx)(t.a,{href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules",children:"here"}),".\nFor all the rest users will have to use a previously added setting\n",(0,i.jsx)(t.code,{children:"metals.scalafixRulesDependencies"}),", where you can add dependencies following the\n",(0,i.jsx)(t.a,{href:"https://get-coursier.io/",children:"coursier"})," convention such as\n",(0,i.jsx)(t.code,{children:"com.github.liancheng::organize-imports:0.6.0"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Let us know if there is another rule we should add to the default ones!"}),"\n",(0,i.jsxs)(t.p,{children:["The current situation could be improved by making sure that the dependencies for\nscalafix are listed in the configuration itself. This would allow both Metals\nand scalafix CLI to easily run rules on your workspace. You can find the\ndiscussion on\n",(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/scalafix/issues/1625",children:"scalafix github page"})]}),"\n",(0,i.jsx)(t.h2,{id:"scala-3-implement-all-abstract-members-code-action",children:"[Scala 3] Implement-all abstract members code action."}),"\n",(0,i.jsx)(t.p,{children:"Implement-all abstract members code action is finally available in Scala 3 \ud83c\udf89"}),"\n",(0,i.jsx)(t.p,{children:"Previously, in Scala3, when you were implementing an abstract member in a\nconcrete class, you could only see the completion to override particular\nmembers. However, you needed to add those members one by one. Now you'll see a\ncode action to implement all the members at once."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/foU3oHL.gif",alt:"implement-all"})}),"\n",(0,i.jsxs)(t.p,{children:["Great work by ",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"scala-3-add-snippet-completions",children:"[Scala 3] Add snippet completions."}),"\n",(0,i.jsxs)(t.p,{children:["Previously, whenever users accepted method completions the only inserted text\nwould be the name of the method. With snippets we can now add additional ",(0,i.jsx)(t.code,{children:"()"}),"\nwith cursor ending in or after the parenthesis depending on whether the method\naccepts parameters."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/QEbPSTd.gif",alt:"snippets"})}),"\n",(0,i.jsx)(t.p,{children:"For editors that do not support snippets the previous behaviour is preserved."}),"\n",(0,i.jsx)(t.h2,{id:"scala-3-add-file-name-completions",children:"[Scala 3] Add file name completions"}),"\n",(0,i.jsxs)(t.p,{children:["A file name completion feature has been available only in the Scala 2 project,\nbut thanks to the effort by ",(0,i.jsx)(t.a,{href:"https://github.com/riiswa",children:"riiswa"}),", Metals 0.11.7\nwill complete class name based on the enclosing file, in Scala3!"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/f10pnJ6.gif",alt:"filename-completion"})}),"\n",(0,i.jsx)(t.h2,{id:"scala-3-expression-evaluation-for-debugger",children:"[Scala 3] Expression evaluation for debugger."}),"\n",(0,i.jsxs)(t.p,{children:["Expression evaluation was already available for use in your Scala 2 code,\nhowever it was still missing for Scala 3. Thanks to the main work by\n",(0,i.jsx)(t.a,{href:"https://github.com/tdudzik",children:"tdudzik"})," and later finishing touches and multiple\nbug fixes by ",(0,i.jsx)(t.a,{href:"https://github.com/adpi2",children:"adpi2"})," it is now possible to to evaluate\nyour code on breakpoints in the Scala 3 code."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/jYs7QdM.gif",alt:"debug"})}),"\n",(0,i.jsxs)(t.p,{children:["It was added in the previous 0.11.6 version of Metals, however it was still not\nworking correctly enough to promote it. Currently, it should be working\ncorrectly in most cases, so please do test it out and report any issues you find\nto ",(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/scala-debug-adapter",children:"scala-debug-adapter"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"scala-2-add-converttonamedarguments-code-action",children:"[Scala 2] Add ConvertToNamedArguments code action"}),"\n",(0,i.jsx)(t.p,{children:"Metals 0.11.7 allows users to use a new code action that can convert all\narguments to named arguments, which is only available on Scala 2 for the time\nbeing."}),"\n",(0,i.jsxs)(t.p,{children:["The new code action will work on method calls with multiple arguments, where",(0,i.jsx)(t.br,{}),"\n","it's sometimes hard to tell which arguments match which parameters at a glance.\nIn this situation you may want to make them named arguments. Now you will be\nable to automatically convert all those arguments into named arguments."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/SiUYUSY.gif",alt:"convert-to-named-vscode"})}),"\n",(0,i.jsxs)(t.p,{children:["We'd like to thank ",(0,i.jsx)(t.a,{href:"https://github.com/camgraff",children:"@camgraff"})," for\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3971",children:"implementing this feature"})," \ud83e\udd73"]}),"\n",(0,i.jsx)(t.h2,{id:"new-flatmap-to-for-comprehension-code-action",children:"New flatMap to for comprehension code action."}),"\n",(0,i.jsx)(t.p,{children:"When working with long chains of map/flatMap/filter it might sometimes be useful\nto replace them with for comprehensions, which can give you a flatter view of\nyour code."}),"\n",(0,i.jsx)(t.p,{children:"This is purely a syntactic sugar which gives us an ability to offer a code\naction to automatically convert any chain of the mentioned methods with a for\ncomprehensions."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/MOZLYi0.gif",alt:"for-comp"})}),"\n",(0,i.jsx)(t.p,{children:"There is currently one known issue with two separate chains being inside one\nanother, which might cause unexpected issues. Please report any other issues you\nfind!"}),"\n",(0,i.jsxs)(t.p,{children:["Amazing effort from ",(0,i.jsx)(t.a,{href:"https://github.com/zmerr",children:"zmerr"})]}),"\n",(0,i.jsx)(t.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Updated Bloop version to 1.5.2, which should allow for a better\n",(0,i.jsx)(t.code,{children:"clean compile workspace"})," behaviour."]}),"\n",(0,i.jsx)(t.li,{children:"Always print out CFR output if there is any available even if the command\nprinted to the error output."}),"\n",(0,i.jsxs)(t.li,{children:["Add correct parenthesis when using extension methods completions.\n",(0,i.jsx)(t.a,{href:"https://github.com/riiswa",children:"riiswa"})]}),"\n",(0,i.jsx)(t.li,{children:"Properly show links to implicit parameters in decoration hovers inside for\ncomprehensions."}),"\n",(0,i.jsxs)(t.li,{children:["Run doctor when ",(0,i.jsx)(t.code,{children:"more information"})," button was clicked"]}),"\n",(0,i.jsx)(t.li,{children:"Fix issues with Metals support for Scala 3.1.x hanging due to infinite loop in\nthe compiler."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,i.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.11.6..v0.11.7\n27\tTomasz Godzik\n    22\tCam Graff\n    18\tRikito Taniguchi\n    15\tScalameta Bot\n    10\tckipp01\n     5\tWaris Radji\n     5\tscalameta-bot\n     4\tVadim Chelyshov\n     3\tAdrien Piquerez\n     2\tKamil Podsiadlo\n     2\ttgodzik\n     1\tChris Kipp\n     1\tKamil Podsiad\u0142o\n     1\tzmerr\n"})}),"\n",(0,i.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,i.jsxs)(t.h2,{id:"v0117-2022-07-04",children:[(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.11.7",children:"v0.11.7"})," (2022-07-04)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.11.6...v0.11.7",children:"Full Changelog"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Fix sbt-dependengy-graph workflow again\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4095",children:"#4095"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/adpi2",children:"adpi2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fix sbt-dependency-graph workflow\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4092",children:"#4092"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/adpi2",children:"adpi2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: ConvertToNamedArgument code action: register the server command / hide in\nScala3 projects ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4090",children:"#4090"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: (scala3) insert correct position for implement-all code action on class\nwith type parameters ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4081",children:"#4081"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Bump Bloop to newest version\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4078",children:"#4077"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Change Java home on startup if broken\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4079",children:"#4077"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feature: Add known scalafix rules' dependencies\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4077",children:"#4077"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: [Scala 3] Adjust changes for the most recent compiler version\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4071",children:"#4071"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Don't cache Java for nix and additionally use JAVA_HOME\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4075",children:"#4075"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Make sure that the Scala 3 compiler always retries properly\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4074",children:"#4074"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Uncomment HKSignatureHelpSuite\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4072",children:"#4072"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: handle memory footprint errors on JDK17\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4064",children:"#4064"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: lsif-java -> scip-java\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3972",children:"#3972"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feature: Don't update readonly bloop.json and allow to dismiss notifications\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4049",children:"#4049"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feat: OverrideCompletion can handle symbolPrefix\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4037",children:"#4037"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["docs: Add Rikito Taniguchi to maintainers\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4058",children:"#4058"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Fix wrong type shown when type alias is used\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4046",children:"#4046"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["docs: Update release documentation\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4051",children:"#4051"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: support tab indent in implement-all code action\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4042",children:"#4042"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["flatMap to For Comprehension\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3885",children:"#3885"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/zmerr",children:"zmerr"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Fix wrong flag for default methods\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4045",children:"#4045"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: remove improper javaOptions initialization\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4047",children:"#4047"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: do not fail when stripping ansi codes\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4048",children:"#4048"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add ConvertToNamedArguments code action\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3971",children:"#3971"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/camgraff",children:"camgraff"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["add scala 3.1.3 and 3.2.0-RC1\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4041",children:"#4041"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Adjust to signature help changes in scala3 compiler\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4026",children:"#4026"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feat(mill): also check default version in mill file\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4039",children:"#4039"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix(worksheets): filter out NonUnitStatements wartremover in worksheets\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4038",children:"#4038"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update munit from 1.0.0-M3 to 1.0.0-M5\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4033",children:"#4033"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update scribe, scribe-file, scribe-slf4j from 3.8.3 to 3.9.0\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4031",children:"#4031"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Scala 3] Add file name completions\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4018",children:"#4018"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/riiswa",children:"riiswa"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update undertow-core from 2.2.17.Final to 2.2.18.Final\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4032",children:"#4032"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update requests from 0.7.0 to 0.7.1\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4030",children:"#4030"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update h2 from 2.1.212 to 2.1.214\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4029",children:"#4029"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update sbt-scalafix, scalafix-interfaces from 0.10.0 to 0.10.1\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4028",children:"#4028"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feat: Implement-all abstract members code action for Scala3\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3960",children:"#3960"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Properly send back experimental capabilities\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4007",children:"#4007"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore(maven): update the maven wrapper\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4024",children:"#4024"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: run doctor when ",(0,i.jsx)(t.code,{children:"more information"})," button was clicked\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4019",children:"#4019"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Fix errors for kind projector\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4015",children:"#4015"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Reset diagnostics before connecting to new server\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4017",children:"#4017"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Properly show links to implicit parameters in decoration hovers\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4014",children:"#4014"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feature: Allow to run all scalafix rules on a file\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3996",children:"#3996"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fix extension methods completion\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4013",children:"#4013"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/riiswa",children:"riiswa"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Add support for Scala 2.12.16\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4010",children:"#4010"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Always print out CFR output if there is any available\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4012",children:"#4012"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Add support for Scala 3.1.3-RC5\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4011",children:"#4011"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fix auto implement abstract members for self-types\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4009",children:"#4009"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/riiswa",children:"riiswa"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: only compare Bloop JavaHome with Metals JavaHome if set\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/4002",children:"#4002"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: add checkout to steward job\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3999",children:"#3999"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore(deps): add in other scalameta repos to steward job\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3995",children:"#3995"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: switch mtags release on a branch with backports\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3998",children:"#3998"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Fix failing tests after refactor\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3993",children:"#3993"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update ammonite-util from 2.5.3 to 2.5.4\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3983",children:"#3983"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update scalameta, semanticdb-scalac, ... from 4.5.6 to 4.5.9\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3991",children:"#3991"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Update lsp4j to 0.14.0\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3958",children:"#3958"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update munit from 1.0.0-M3 to 1.0.0-M4\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3990",children:"#3990"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update jsoup from 1.14.3 to 1.15.1\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3989",children:"#3989"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update flyway-core from 8.5.10 to 8.5.12\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3988",children:"#3988"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update interface from 1.0.6 to 1.0.7\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3986",children:"#3986"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update coursier from 2.1.0-M5 to 2.1.0-M6\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3985",children:"#3985"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update scribe, scribe-file, scribe-slf4j from 3.8.2 to 3.8.3\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3984",children:"#3984"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update bloop-config, bloop-launcher from 1.5.0-18-003e6c7b to\n1.5.0-22-91111c15 ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3982",children:"#3982"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Update tests to work with newest nightlies\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3981",children:"#3981"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["refactor: Fix testing library breakpoints and simplify metals adapter logic\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3966",children:"#3966"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["fix: correct steward cron\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3980",children:"#3980"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore(ci): add Scala Steward into CI\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3977",children:"#3977"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["feature: [Scala 3] Add snippet completions\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3959",children:"#3959"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["doc: fix release note v0.11.6 (duplicated merged commits section)\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3979",children:"#3979"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: update version for v0.11.6\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3978",children:"#3978"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["docs: release note for Metals 0.11.6\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3957",children:"#3957"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var i=s(7294);const a={},n=i.createContext(a);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
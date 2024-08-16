"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7426],{6577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(4848),s=n(8453);const i={id:"sbt",title:"sbt"},l=void 0,a={id:"build-tools/sbt",title:"sbt",description:"sbt is the most commonly used build tool in the Scala community and works with",source:"@site/target/docs/build-tools/sbt.md",sourceDirName:"build-tools",slug:"/build-tools/sbt",permalink:"/metals/docs/build-tools/sbt",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/build-tools/sbt.md",tags:[],version:"current",frontMatter:{id:"sbt",title:"sbt"},sidebar:"docs",previous:{title:"Mill",permalink:"/metals/docs/build-tools/mill"},next:{title:"Project Goals",permalink:"/metals/docs/contributors/project-goals"}},r={},c=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"sbt Build Server",id:"sbt-build-server",level:2},{value:"Generating a <code>.bsp/sbt.json</code> file if one doesn&#39;t exist",id:"generating-a-bspsbtjson-file-if-one-doesnt-exist",level:3},{value:"Connect to sbt build server",id:"connect-to-sbt-build-server",level:3},{value:"Switching back to Bloop",id:"switching-back-to-bloop",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Waiting for lock on .ivy2/.sbt.ivy.lock",id:"waiting-for-lock-on-ivy2sbtivylock",level:3},{value:"Not valid key: metalsEnable",id:"not-valid-key-metalsenable",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"sbt is the most commonly used build tool in the Scala community and works with\nMetals out-of-the-box."}),"\n",(0,o.jsx)(t.h2,{id:"automatic-installation",children:"Automatic installation"}),"\n",(0,o.jsx)(t.p,{children:'The first time you open Metals in a new sbt workspace you will be\nprompted to import the build. Select "Import Build" to start the\nautomatic installation. This will create all the needed Bloop config\nfiles. You should then be able to edit and compile your code utilizing\nall of the features.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://i.imgur.com/t5RJ3q6.png",alt:"Import build"})}),"\n",(0,o.jsxs)(t.p,{children:["The Automatic build import process for sbt happens through\n",(0,o.jsx)(t.a,{href:"https://scalacenter.github.io/bloop/",children:"Bloop"}),", a build server for Scala. Bloop\nimplements the ",(0,o.jsx)(t.a,{href:"https://build-server-protocol.github.io/docs/specification",children:"Build Server Protocol\n(BSP)"})," that Metals\nuses to learn the directory structure of your project, its library dependencies,\nand to build or run your code."]}),"\n",(0,o.jsx)(t.h2,{id:"manual-installation",children:"Manual installation"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"It's recommended to use automatic installation over manual installation since\nmanual installation requires several independent steps that make it harder to\nstay up-to-date with the latest Metals version."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Instead of using automatic build import, you can manually install sbt-bloop and\ngenerate the Bloop JSON files directly from your sbt shell. This approach may\nspeed up build import by avoiding Metals from starting sbt in a separate\nprocess."}),"\n",(0,o.jsxs)(t.p,{children:["First, install the Bloop plugin globally or inside your ",(0,o.jsx)(t.code,{children:"project"})," directory:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-scala",children:'// One of:\n//   ~/.sbt/0.13/plugins/plugins.sbt\n//   ~/.sbt/1.0/plugins/plugins.sbt\nresolvers += Resolver.sonatypeRepo("snapshots")\naddSbtPlugin("ch.epfl.scala" % "sbt-bloop" % "2.0.0")\n'})}),"\n",(0,o.jsx)(t.p,{children:"Next, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sbt -Dbloop.export-jar-classifiers=sources bloopInstall\n"})}),"\n",(0,o.jsxs)(t.p,{children:["to generate the Bloop JSON configuration files. You can also set the\n",(0,o.jsx)(t.code,{children:"bloopExportJarClassifiers"})," setting inside your main build.sbt file, but using\nthe above command will do it automatically for you in the current sbt session."]}),"\n",(0,o.jsxs)(t.p,{children:["Finally, once ",(0,o.jsx)(t.code,{children:"bloopInstall"}),' is finished, execute the "Connect to build server"\ncommand (id: ',(0,o.jsx)(t.code,{children:"build.connect"}),") command to tell Metals to establish a connection\nwith the Bloop build server."]}),"\n",(0,o.jsx)(t.h2,{id:"sbt-build-server",children:"sbt Build Server"}),"\n",(0,o.jsx)(t.p,{children:"As of sbt 1.4.1, Metals has integrated support for the sbt BSP server. If you'd\nlike to use the sbt server as an alternative to Bloop (which is the default),\nthen at any time while in an sbt workspace you can choose to switch in multiple\nways."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Note"}),": that if you are unfamiliar with the features that the different build\nservers may offer, then simply stick with the default (Bloop), which has great\nintegrated stable support in Metals."]}),"\n",(0,o.jsxs)(t.h3,{id:"generating-a-bspsbtjson-file-if-one-doesnt-exist",children:["Generating a ",(0,o.jsx)(t.code,{children:".bsp/sbt.json"})," file if one doesn't exist"]}),"\n",(0,o.jsxs)(t.p,{children:["More than likely if you're using sbt >= 1.4.1, you'll have already seen this file\nexist. However, if you're in a fresh workspace or it doesn't exist for some\nreason, you can execute a ",(0,o.jsx)(t.code,{children:"metals.generate-bsp-config"})," command via the command\npalette, which will automatically detect that you're in a sbt workspace and\ngenerate the necessary file. After the file generation, Metals will then\nautomatically connect to sbt. From this point on, you'll be using sbt instead of\nBloop as your build server."]}),"\n",(0,o.jsx)(t.h3,{id:"connect-to-sbt-build-server",children:"Connect to sbt build server"}),"\n",(0,o.jsxs)(t.p,{children:["If your workspace already has a ",(0,o.jsx)(t.code,{children:".bsp/sbt.json"})," file, then you can switch from\nusing Bloop to sbt as a build server by executing a ",(0,o.jsx)(t.code,{children:"metals.bsp-switch"})," command\nfrom the command palette.  This command will recognize the ",(0,o.jsx)(t.code,{children:".bsp/sbt.json"})," file,\nand then connect to the sbt build server. After the connection is made, you'll\nbe using sbt instead of Bloop as your build server."]}),"\n",(0,o.jsx)(t.h3,{id:"switching-back-to-bloop",children:"Switching back to Bloop"}),"\n",(0,o.jsx)(t.p,{children:"If you'd like to switch back to using Bloop as your build server, there are\nmultiple ways for you to do this."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Using the same ",(0,o.jsx)(t.code,{children:"metals.bsp-switch"}),' command as up above, and select "bloop".']}),"\n",(0,o.jsxs)(t.li,{children:["Use the ",(0,o.jsx)(t.code,{children:"metals.reset-choice"}),' functionality and choose to reset the "Build\nServer Selection". Then follow this with the ',(0,o.jsx)(t.code,{children:"metals.build-restart"})," command\nwhich will disconnect you from the sbt build server, and then connect you\nback to the default Bloop server."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(t.p,{children:"Before reporting an issue, check if your problem is solved with one of the\nfollowing tips."}),"\n",(0,o.jsx)(t.h3,{id:"waiting-for-lock-on-ivy2sbtivylock",children:"Waiting for lock on .ivy2/.sbt.ivy.lock"}),"\n",(0,o.jsx)(t.p,{children:"Metals run sbt in a separate process and this error happens where there are two\nsbt processes resolving dependencies at the same time."}),"\n",(0,o.jsx)(t.h3,{id:"not-valid-key-metalsenable",children:"Not valid key: metalsEnable"}),"\n",(0,o.jsxs)(t.p,{children:["This error might indicate that you have an old version of ",(0,o.jsx)(t.code,{children:"sbt-metals"})," installed\nin your project."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[error] Not a valid key: metalsEnable (similar: scalafixEnabled)\n[error] metalsEnable\n[error]             ^\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Try to remove any usage of ",(0,o.jsx)(t.code,{children:"sbt-metals"})," in your build."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
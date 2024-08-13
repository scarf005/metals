"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2138],{5846:(e,r,t)=>{t.d(r,{W:()=>o});var n=t(6540),a=t(4586),s=["zero","one","two","few","many","other"];function c(e){return s.filter((function(r){return e.includes(r)}))}var l={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,a.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:c(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var r,t}),[e])}function o(){var e=u();return{selectMessage:function(r,t){return function(e,r,t){var n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=t.select(r),s=t.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(t,r,e)}}}},1283:(e,r,t)=>{t.r(r),t.d(r,{default:()=>_});var n=t(9593),a=t(6751),s=t(7591),c=t(6540),l=t(4586),u=t(9909),o=t(5260),i=t(8774),h=t(1312),m=t(5846),d=t(5391),p=t(6347),f=t(2303),g=t(1088);const x=function(){var e=(0,f.A)(),r=(0,p.W6)(),t=(0,p.zy)(),n=(0,l.A)().siteConfig.baseUrl,a=e?new URLSearchParams(t.search):null,s=(null==a?void 0:a.get("q"))||"",c=(null==a?void 0:a.get("ctx"))||"",u=(null==a?void 0:a.get("version"))||"",o=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:s,searchContext:c&&Array.isArray(g.Hg)&&g.Hg.some((function(e){return"string"==typeof e?e===c:e.path===c}))?c:"",searchVersion:u,updateSearchPath:function(e){var t=o(e);r.replace({search:t.toString()})},updateSearchContext:function(e){var n=new URLSearchParams(t.search);n.set("ctx",e),r.replace({search:n.toString()})},generateSearchPageLink:function(e){var r=o(e);return n+"search?"+r.toString()}}};var y=t(5891),v=t(2384),C=t(9913),S=t(6841),j=t(3810),A=t(7674),w=t(2849),I=t(4471);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var P=t(3385),b=t(4848);function F(){var e,r=(0,l.A)(),t=r.siteConfig.baseUrl,n=r.i18n.currentLocale,u=(0,m.W)().selectMessage,i=x(),p=i.searchValue,f=i.searchContext,C=i.searchVersion,S=i.updateSearchPath,j=i.updateSearchContext,A=(0,c.useState)(p),I=A[0],F=A[1],_=(0,c.useState)(),k=_[0],H=_[1],N=(0,c.useState)(),q=N[0],L=N[1],U=""+t+C,z=(0,c.useMemo)((function(){return I?(0,h.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:I}):(0,h.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[I]);(0,c.useEffect)((function(){S(I),k&&(I?k(I,(function(e){L(e)})):L(void 0))}),[I,k]);var M=(0,c.useCallback)((function(e){F(e.target.value)}),[]);return(0,c.useEffect)((function(){p&&p!==I&&F(p)}),[p]),(0,c.useEffect)((function(){function e(){return(e=(0,s.A)((0,a.A)().mark((function e(){var r,t,n;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(g.Hg)&&!f&&!g.dz){e.next=6;break}return e.next=3,(0,y.Z)(U,f);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={wrappedIndexes:[],zhDictionary:[]};case 7:r=e.t0,t=r.wrappedIndexes,n=r.zhDictionary,H((function(){return(0,v.m)(t,n,100)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,U]),(0,b.jsxs)(c.Fragment,{children:[(0,b.jsxs)(o.A,{children:[(0,b.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,b.jsx)("title",{children:z})]}),(0,b.jsxs)("div",{className:"container margin-vert--lg",children:[(0,b.jsx)("h1",{children:z}),(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:(0,d.A)("col",(e={},e[R.searchQueryColumn]=Array.isArray(g.Hg),e["col--9"]=Array.isArray(g.Hg),e["col--12"]=!Array.isArray(g.Hg),e)),children:(0,b.jsx)("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:M,value:I,autoComplete:"off",autoFocus:!0})}),Array.isArray(g.Hg)?(0,b.jsx)("div",{className:(0,d.A)("col","col--3","padding-left--none",R.searchContextColumn),children:(0,b.jsxs)("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:f,onChange:function(e){return j(e.target.value)},children:[g.dz&&(0,b.jsx)("option",{value:"",children:(0,h.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),g.Hg.map((function(e){var r=(0,P.p)(e,n),t=r.label,a=r.path;return(0,b.jsx)("option",{value:a,children:t},a)}))]})}):null]}),!k&&I&&(0,b.jsx)("div",{children:(0,b.jsx)(w.A,{})}),q&&(q.length>0?(0,b.jsx)("p",{children:u(q.length,(0,h.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:q.length}))}):(0,b.jsx)("p",{children:(0,h.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,b.jsx)("section",{children:q&&q.map((function(e){return(0,b.jsx)(T,{searchResult:e},e.document.i)}))})]})]})}function T(e){var r=e.searchResult,t=r.document,a=r.type,s=r.page,c=r.tokens,l=r.metadata,u=a===C.i.Title,o=a===C.i.Keywords,h=a===C.i.Description,m=h||o,d=u||m,p=a===C.i.Content,f=(u?t.b:s.b).slice(),x=p||m?t.s:t.t;d||f.push(s.t);var y="";if(g.CU&&c.length>0){for(var v,w=new URLSearchParams,P=(0,n.A)(c);!(v=P()).done;){var F=v.value;w.append("_highlight",F)}y="?"+w.toString()}return(0,b.jsxs)("article",{className:R.searchResultItem,children:[(0,b.jsx)("h2",{children:(0,b.jsx)(i.A,{to:t.u+y+(t.h||""),dangerouslySetInnerHTML:{__html:p||m?(0,S.Z)(x,c):(0,j.C)(x,(0,A.g)(l,"t"),c,100)}})}),f.length>0&&(0,b.jsx)("p",{className:R.searchResultItemPath,children:(0,I.$)(f)}),(p||h)&&(0,b.jsx)("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.C)(t.t,(0,A.g)(l,"t"),c,100)}})]})}const _=function(){return(0,b.jsx)(u.A,{children:(0,b.jsx)(F,{})})}}}]);
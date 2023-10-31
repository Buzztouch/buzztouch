"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[429],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:e},s),{},{components:n})):a.createElement(h,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6451:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Configuration Data",sidebar_position:2,slug:"/configuration-data"},i=void 0,l={unversionedId:"Developers/configuration-data",id:"Developers/configuration-data",title:"Configuration Data",description:"Information about how the application looks, the layout it uses, and it's overall functionality is saved in one main configuration file, BT_config.txt. This is a plain text file organized in\xa0JSON format. This file can be edited using the\xa0Control Panel\xa0or it can be edited manually with any text editor.",source:"@site/docs/Developers/configuration-data.md",sourceDirName:"Developers",slug:"/configuration-data",permalink:"/configuration-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration Data",sidebar_position:2,slug:"/configuration-data"},sidebar:"defaultSidebar",previous:{title:"Developers",permalink:"/Developers"},next:{title:"Report to Cloud URL",permalink:"/report-to-cloud"}},d={},p=[{value:"<strong>Configuration Data Location</strong>",id:"4d7caf6e063044af863563becf093905",level:3},{value:"<strong>How Configuration Data is Processed</strong>",id:"344391aabdda46c3a0c2e793899d050a",level:3},{value:"<strong>Configuration Data Properties</strong>",id:"892592252e414cfa99818d353deba982",level:3}],s={toc:p};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Information about how the application looks, the layout it uses, and it's overall functionality is saved in one main configuration file, BT_config.txt. This is a plain text file organized in\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON format"),". This file can be edited using the\xa0Control Panel\xa0or it can be edited manually with any text editor."),(0,r.kt)("h3",{id:"4d7caf6e063044af863563becf093905"},(0,r.kt)("strong",{parentName:"h3"},"Configuration Data Location")),(0,r.kt)("p",null,"The main configuration data file is part of the Xcode or Android Studio project. Most applications also use a configuration file that resides on a remote server. This approach allows the application to dynamically update itself when content changes occur on the remote server. The remote server is usually the\xa0Control Panel\xa0but could also be your own website or other online document storage solution such as\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.dropbox.com/"},"DropBox\u2122")),(0,r.kt)("h3",{id:"344391aabdda46c3a0c2e793899d050a"},(0,r.kt)("strong",{parentName:"h3"},"How Configuration Data is Processed")),(0,r.kt)("p",null,"Here are the basics steps the mobile app works through when reading it's configuration data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"App launches."),(0,r.kt)("li",{parentName:"ol"},"App looks for a cached copy of it's configuration data in it's local data storage. This is different than the copy in the Xcode or Android Studio project (see #5)."),(0,r.kt)("li",{parentName:"ol"},"If a copy of the BT_config.txt file is found in the apps local data storage it reads that file and ignores the file included in the Xcode or Android project. This means the app downloaded and saved data from a remote configuration file."),(0,r.kt)("li",{parentName:"ol"},"If a copy of the BT_config.txt file is not found in the apps local data storage it reads the file included in the Xcode or Android Studio project. If this file includes a URL that points to a remote server, it downloads the file then saves it for future use (see #1). In this case, the file included in the Xcode or Android Studio project is not used again unless the app's cached-data is removed from the device."),(0,r.kt)("li",{parentName:"ol"},"If no URL is provided for a remote server, the app uses the BT_config.txt file in the Xcode or Android Studio project every-time and does not attempt to download anything from the internet.")),(0,r.kt)("h3",{id:"892592252e414cfa99818d353deba982"},(0,r.kt)("strong",{parentName:"h3"},"Configuration Data Properties")),(0,r.kt)("p",null,"Configuration data is plain text in\xa0",(0,r.kt)("a",{parentName:"p",href:"/global-theme"},"global theme"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"BT_config.txt Sections")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BT_config")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"BT_config":{}'),(0,r.kt)("br",null),"This object wraps the entire JSON structure and all other objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BT_items")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"BT_items":[]'),(0,r.kt)("br",null),"An array with one and only one BT_item, this item is of type BT_app. The BT_app item holds all the configuration data for the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BT_app Properties")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Item Id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"itemId":"a unique id"'),(0,r.kt)("br",null),"A unique id identifiying this item from all other items in the entire JSON structure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Item Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"itemType":"BT_app"'),(0,r.kt)("br",null),"Identifies this type of item as a BT_app item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"buzztouch App Id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"buzztouchAppId":"88473748399284"'),(0,r.kt)("br",null),"The unique id identifying this buzztouch app. Ignored if the app is not connected to the Buzztouch\xa0control panel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"buzztouch API Key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"buzztouchAPIKey":"995839483828"'),(0,r.kt)("br",null),"The API key identifying this Buzztouch app. Ignored if the app is not connected to the Buzztouch\xa0control panel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Configuration Data URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"dataURL":"an internet address"'),(0,r.kt)("br",null),"An internet address leading to the app's remote configuration file. This is normally a URL leading to the configuration data controlled by the Buzztouch\xa0control panel. It could also lead to a configuration file saved on your website or online document storage folder. BT_config.txt in the Xcode or Android Studio project is used if this is not provided. This URL works closely with the reportToCloudURL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Report To Cloud URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"reportToCloudURL":"an internet address"'),(0,r.kt)("br",null),"An internet address leading to a remote-script that determines if the app's content or layout needs updated. This is optional if a dataURL is not provided. This is required if a dataURL is provided. See\xa0",(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/reportToCloud.php"},"more about the Report to Cloud URL"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"name":"My Cool App"'),(0,r.kt)("br",null),"The name of the app in the Buzztouch control panel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"version":"1.5"'),(0,r.kt)("br",null),"The Buzztouch version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Start Location Updates")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"startLocationUpdates":"1"'),(0,r.kt)("br",null),'Options: 0 or 1. 0 means "do not turn on the GPS when the app launches.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Allow Rotation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"allowRotation":"allDevices"'),(0,r.kt)("br",null),"Options: allDevices, largeDevicesOnly. Setting this to largeDevicesOnly will prevent small devices from switching to landscape view when the device is rotated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/global-theme"},(0,r.kt)("strong",{parentName:"a"},"Themes")),"\xa0object."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/tabs-and-layout"},(0,r.kt)("strong",{parentName:"a"},"Tabs")),"\xa0object for it's home screen."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screens.php"},(0,r.kt)("strong",{parentName:"a"},"Screens"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"BT_screens":[]'),(0,r.kt)("br",null),"An array containing from 1 to X\xa0",(0,r.kt)("a",{parentName:"td",href:"http://buzztouch.com/docs/v1.5/screens.php"},"Screen or Menu"),"\xa0objects. Each object in this list represents a screen or feature found in the app.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*")," Required"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7384).Z,width:"697",height:"678"})))}u.isMDXComponent=!0},7384:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1487964-dc36d3ea0b917cdb055036d892775565.png"}}]);
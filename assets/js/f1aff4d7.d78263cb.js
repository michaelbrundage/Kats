(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1510],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=i,f=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2663:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},u={unversionedId:"tutorials/basic/running_your_app/debugging",id:"tutorials/basic/running_your_app/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/docs/tutorials/basic/running_your_app/5_debugging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/next/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/docs/tutorials/basic/running_your_app/5_debugging.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1620854337,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Debugging",sidebarPosition:5,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"}},p=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Info",id:"info",children:[]}],c={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hydra provides a few options to improve debuggability."),(0,a.kt)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,a.kt)("p",null,"Print the config for your app without running your function by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--cfg")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," to the command line."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"job"),": Your config"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hydra"),": Hydra's config"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all"),": The full config, which is a union of ",(0,a.kt)("inlineCode",{parentName:"li"},"job")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"hydra"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),(0,a.kt)("p",null,"The printed config includes any modifications done via the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),(0,a.kt)("p",null,"You can use --package or -p to display a subset of the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),(0,a.kt)("p",null,"By default, config interpolations are not resolved. To print resolved config use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--resolve")," flag in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cfg")," flag"),(0,a.kt)("h3",{id:"info"},"Info"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--info")," flag can provide information about various aspects of Hydra and your application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--info all"),": Default behavior, prints everything"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--info config"),": Prints information useful to understanding the config composition:",(0,a.kt)("br",{parentName:"li"}),"Config Search Path, Defaults Tree, Defaults List and the final config."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--info defaults"),": Prints the Final Defaults List"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--info defaults-tree"),": Prints the Defaults Tree"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--info plugins"),": Prints information about installed plugins")))}s.isMDXComponent=!0}}]);
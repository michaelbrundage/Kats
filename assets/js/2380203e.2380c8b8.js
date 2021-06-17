(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7040],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4246:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={id:"write_protect_config_node",title:"Read-only config"},l={unversionedId:"patterns/write_protect_config_node",id:"version-1.0/patterns/write_protect_config_node",isDocsHomePage:!1,title:"Read-only config",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/write_protect_config_node.md",sourceDirName:"patterns",slug:"/patterns/write_protect_config_node",permalink:"/docs/1.0/patterns/write_protect_config_node",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-1.0/patterns/write_protect_config_node.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1610921378,formattedLastUpdatedAt:"1/17/2021",frontMatter:{id:"write_protect_config_node",title:"Read-only config"},sidebar:"version-1.0/docs",previous:{title:"Specializing configuration",permalink:"/docs/1.0/patterns/specializing_config"},next:{title:"Overview",permalink:"/docs/1.0/configure_hydra/intro"}},s=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/write_protect_config_node"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Sometimes you want to prevent a config node from being changed accidentally."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Structured Configs can enable it by passing ",(0,a.kt)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"},"frozen=True")," in the dataclass definition.\nUsing Structured Configs, you can annotate a dataclass as frozen. This is recursive and applies to all child nodes."),(0,a.kt)("p",null,"This will prevent modifications via code, command line overrides and config composition."),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="frozen.py" {1}',title:'"frozen.py"',"{1}":!0},'@dataclass(frozen=True)\nclass SerialPort:\n    baud_rate: int = 19200\n    data_bits: int = 8\n    stop_bits: int = 1\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=SerialPort)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: SerialPort) -> None:\n    print(cfg)\n\n\nif __name__ == "__main__":\n    my_app()\n'))),(0,a.kt)("div",{className:"col  col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Output"',script:!0,title:'"Output"'},"$ python frozen.py data_bits=10\nError merging override data_bits=10\nCannot change read-only config container\n    full_key: data_bits\n    reference_type=Optional[SerialPort]\n    object_type=SerialPort\n")))),(0,a.kt)("div",{class:"alert alert--warning",role:"alert"},(0,a.kt)("strong",null,"NOTE"),": A crafty user can find many ways around this. this is just making it harder to change things accidentally."))}d.isMDXComponent=!0}}]);
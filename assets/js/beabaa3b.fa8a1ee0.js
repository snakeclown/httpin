"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[322],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return h}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),h=o,f=s["".concat(c,".").concat(h)]||s[h]||p[h]||a;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8605:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},c="Error Handler",d={unversionedId:"advanced/error-handler",id:"advanced/error-handler",title:"Error Handler",description:"Introduced in v0.6.0.",source:"@site/docs/advanced/error-handler.md",sourceDirName:"advanced",slug:"/advanced/error-handler",permalink:"/httpin/advanced/error-handler",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/advanced/error-handler.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/httpin/advanced/concepts"},next:{title:"Upload Files",permalink:"/httpin/advanced/upload-files"}},u={},p=[{value:"Use WithErrorHandler option to specify a custom handler",id:"use-witherrorhandler-option-to-specify-a-custom-handler",level:2},{value:"Globally replace the default error handler",id:"globally-replace-the-default-error-handler",level:2}],s={toc:p};function h(e){var r=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handler"},"Error Handler"),(0,a.kt)("p",null,"Introduced in v0.6.0."),(0,a.kt)("p",null,"While using ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.NewInput")," to create an HTTP middleware handler, an error handler will be used to handle cases of decoding failures. You can sepcify a custom error handler for ",(0,a.kt)("strong",{parentName:"p"},"httpin")," to use. Which should adhere to the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func CustomErrorHandler(rw http.ResponseWriter, r *http.Request, err error) {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"use-witherrorhandler-option-to-specify-a-custom-handler"},"Use WithErrorHandler option to specify a custom handler"),(0,a.kt)("p",null,"Create an HTTP middleware handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"{5}","{5}":!0},'router := chi.NewRouter()\n\nfunc init() {\n    router.With(\n        httpin.NewInput(ListThingsInput{}, WithErrorHandler(CustomErrorHandler)),\n    ).Get("/things/:id", ListThings)\n}\n')),(0,a.kt)("p",null,"Create an engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"{1}","{1}":!0},"engine, err := httpin.New(Thing{}, WithErrorHandler(CustomErrorHandler))\ninput, err := engine.Decode(req)\n")),(0,a.kt)("h2",{id:"globally-replace-the-default-error-handler"},"Globally replace the default error handler"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.NewInput"),", you will find that it's annoying to add an option to each call in order to use a custom error handler."),(0,a.kt)("p",null,"So, ",(0,a.kt)("inlineCode",{parentName:"p"},"httpin.ReplaceDefaultErrorHandler")," was introduced to replace the default error handler globally."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[831],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,v=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5333:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),c=["components"],a={sidebar_position:100},u="custom \ud83d\udd0c",s={unversionedId:"directives/custom",id:"directives/custom",title:"custom \ud83d\udd0c",description:"You can extend httpin by adding your custom directives.",source:"@site/docs/directives/custom.mdx",sourceDirName:"directives",slug:"/directives/custom",permalink:"/httpin/directives/custom",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/directives/custom.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"docsSidebar",previous:{title:"decoder",permalink:"/httpin/directives/decoder"},next:{title:"net/http",permalink:"/httpin/integrations/http"}},p={},l=[{value:"1. Create a Directive Executor",id:"1-create-a-directive-executor",level:2},{value:"2. Register your Directive to httpin",id:"2-register-your-directive-to-httpin",level:2},{value:"3. Use your Directive",id:"3-use-your-directive",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-"},"custom \ud83d\udd0c"),(0,o.kt)("p",null,"You can extend ",(0,o.kt)("strong",{parentName:"p"},"httpin")," by adding your custom directives."),(0,o.kt)("p",null,"Firstly you should understand the concepts of ",(0,o.kt)("a",{parentName:"p",href:"/advanced/concepts#directive"},(0,o.kt)("strong",{parentName:"a"},"Directive"))," and ",(0,o.kt)("a",{parentName:"p",href:"/advanced/concepts#directive-executor"},(0,o.kt)("strong",{parentName:"a"},"Directive Executor")),"."),(0,o.kt)("p",null,"To add your custom directive, you need to:"),(0,o.kt)("h2",{id:"1-create-a-directive-executor"},"1. Create a Directive Executor"),(0,o.kt)("p",null,"by implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ggicci/httpin#DirectiveExecutor"},(0,o.kt)("inlineCode",{parentName:"a"},"httpin.DirectiveExecutor"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{13}","{13}":!0},'func toLower(ctx *DirectiveContext) error {\n    if ctx.ValueType.Kind() != reflect.String {\n        return errors.New("not a string")\n    }\n\n    currentValue := ctx.Value.Elem().String()\n    newValue := strings.ToLower(currentValue)\n    ctx.Value.Elem().SetString(newValue)\n    return nil\n}\n\n// Adapt to the httpin.DirectiveExecutor interface.\nvar MyLowercaseDirectiveExecutor = httpin.DirectiveExecutorFunc(toLower)\n')),(0,o.kt)("h2",{id:"2-register-your-directive-to-httpin"},"2. Register your Directive to httpin"),(0,o.kt)("p",null,"by calling ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ggicci/httpin#RegisterDirectiveExecutor"},(0,o.kt)("inlineCode",{parentName:"a"},"httpin.RegisterDirectiveExecutor")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{2}","{2}":!0},'func init() {\n    httpin.RegisterDirectiveExecutor("to_lowercase", MyLowercaseDirectiveExecutor, nil)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB"),": make sure to register your directive executor before you start the server."),(0,o.kt)("h2",{id:"3-use-your-directive"},"3. Use your Directive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{2}","{2}":!0},'type LoginFormInput struct {\n    Login string `in:"form=login;required;to_lowercase"`\n    Pass  string `in:"form=login;required"`\n}\n')))}m.isMDXComponent=!0}}]);
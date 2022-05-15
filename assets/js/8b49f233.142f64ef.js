"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[705],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||l[g]||o;return t?r.createElement(f,a(a({ref:e},s),{},{components:t})):r.createElement(f,a({ref:e},s))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=n,u.mdxType="string"==typeof n?n:i,a[1]=u;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5170:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],u={sidebar_position:3},c="gin-gonic/gin \ud83e\udd64",p={unversionedId:"integrations/gin",id:"integrations/gin",title:"gin-gonic/gin \ud83e\udd64",description:"Create a gin middleware - BindInput",source:"@site/docs/integrations/gin.md",sourceDirName:"integrations",slug:"/integrations/gin",permalink:"/httpin/integrations/gin",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/integrations/gin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"gorilla/mux \ud83e\udd8d",permalink:"/httpin/integrations/gorilla"},next:{title:"Concepts",permalink:"/httpin/advanced/concepts"}},s={},l=[{value:"Create a gin middleware - <code>BindInput</code>",id:"create-a-gin-middleware---bindinput",level:2}],d={toc:l};function g(n){var e=n.components,t=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gin-gonicgin-"},"gin-gonic/gin \ud83e\udd64"),(0,o.kt)("h2",{id:"create-a-gin-middleware---bindinput"},"Create a gin middleware - ",(0,o.kt)("inlineCode",{parentName:"h2"},"BindInput")),(0,o.kt)("p",null,"About ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/gin-gonic/gin#section-readme"},"gin middleware"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{2,39,46}","{2,39,46}":!0},'// BindInput instances an httpin engine for a input struct as a gin middleware.\nfunc BindInput(inputStruct interface{}) gin.HandlerFunc {\n    engine, err := httpin.New(inputStruct)\n    if err != nil {\n        panic(err)\n    }\n\n    return func(c *gin.Context) {\n        input, err := engine.Decode(c.Request)\n        if err != nil {\n            var invalidFieldError *httpin.InvalidFieldError\n            if errors.As(err, &invalidFieldError) {\n                c.AbortWithStatusJSON(http.StatusBadRequest, invalidFieldError)\n                return\n            }\n            c.AbortWithStatus(http.StatusInternalServerError)\n            return\n        }\n\n        ctx := context.WithValue(c.Request.Context(), httpin.Input, input)\n        c.Request = c.Request.WithContext(ctx)\n        c.Next()\n    }\n}\n\ntype Pagination struct {\n    Page    int `in:"query=page"`\n    PerPage int `in:"query=per_page,page_size"`\n}\n\ntype ListUsersInput struct {\n    Gender   string `in:"query=gender"`\n    AgeRange []int  `in:"query=age_range"`\n    IsMember bool   `in:"query=is_member"`\n    Pagination\n}\n\nfunc ListUsers(c *gin.Context) {\n    input := c.Request.Context().Value(httpin.Input).(*ListUsersInput)\n    c.JSON(http.StatusOK, input)\n}\n\nfunc main() {\n    r := gin.New()\n    // Bind the input struct with your API handler.\n    r.GET("/users", BindInput(ListUsersInput{}), ListUsers)\n    r.Run()\n}\n')))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=i,m=l["".concat(p,".").concat(d)]||l[d]||h[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},p="go-chi/chi",u={unversionedId:"integrations/gochi",id:"integrations/gochi",title:"go-chi/chi",description:"go-chi/chi is",source:"@site/docs/integrations/gochi.md",sourceDirName:"integrations",slug:"/integrations/gochi",permalink:"/httpin/integrations/gochi",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/integrations/gochi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"net/http",permalink:"/httpin/integrations/http"},next:{title:"gorilla/mux \ud83e\udd8d",permalink:"/httpin/integrations/gorilla"}},s={},h=[{value:"Chain <code>httpin.NewInput</code> middleware with <code>chi.With</code> method",id:"chain-httpinnewinput-middleware-with-chiwith-method",level:2},{value:"path Directive by <code>URLParam</code> Method",id:"path-directive-by-urlparam-method",level:2}],l={toc:h};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-chichi"},"go-chi/chi"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-chi/chi"},(0,o.kt)("strong",{parentName:"a"},"go-chi/chi"))," is"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a lightweight, idiomatic and composable router for building Go HTTP services.")),(0,o.kt)("h2",{id:"chain-httpinnewinput-middleware-with-chiwith-method"},"Chain ",(0,o.kt)("inlineCode",{parentName:"h2"},"httpin.NewInput")," middleware with ",(0,o.kt)("inlineCode",{parentName:"h2"},"chi.With")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{21}","{21}":!0},'type Pagination struct {\n    Page    int `in:"query=page"`\n    PerPage int `in:"query=per_page,page_size"`\n}\n\ntype ListUsersInput struct {\n    Gender   string `in:"query=gender"`\n    AgeRange []int  `in:"query=age_range"`\n    IsMember bool   `in:"query=is_member"`\n    Pagination\n}\n\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n    input := r.Context().Value(httpin.Input).(*ListUsersInput)\n    json.NewEncoder(rw).Encode(input)\n}\n\nfunc main() {\n    router := chi.NewRouter()\n    // use `With` method to chain the middleware created by `httpin.NewInput`\n    router.With(httpin.NewInput(ListUsersInput{})).Get("/users", ListUsers)\n}\n')),(0,o.kt)("h2",{id:"path-directive-by-urlparam-method"},"path Directive by ",(0,o.kt)("inlineCode",{parentName:"h2"},"URLParam")," Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{4}","{4}":!0},'func init() {\n    // Register a directive named "path" to retrieve values from `chi.URLParam`,\n    // i.e. decode path variables.\n    httpin.UseGochiURLParam("path", chi.URLParam)\n}\n\ntype GetArticleOfUserInput struct {\n    Author    string `in:"path=author"` // equivalent to chi.URLParam("author")\n    ArticleID int64  `in:"path=article_id"`\n}\n\nfunc GetArticleOfUser(rw http.ResponseWriter, r *http.Request) {\n    var input = r.Context().Value(Input).(*GetArticleOfUserInput)\n    // ...\n}\n\nfunc main() {\n    r := chi.NewRouter()\n    r.With(\n        httpin.NewInput(GetArticleOfUserInput{}),\n    ).Get("/{author}/p/{article_id}", GetArticleOfUser)\n    // ...\n}\n')))}d.isMDXComponent=!0}}]);
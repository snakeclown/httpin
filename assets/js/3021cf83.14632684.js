"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[538],{3152:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(4035),a=n(1720),i=n.n(a),l=n(9812),o=n(5670),s=n(7294),u="toolbar_uIxz",p="button_yMrS",d="hidden_X41c",c="https://goplay.ggicci.me",m=function(e){var t=e.children,n=e.onClick;return s.createElement("button",{className:p,onClick:n},t)},g=function(e){var t=e.children,n=s.useRef(null),a=s.useRef(null),p=t&&t.props&&"pre"===t.props.mdxType&&t,g=p&&p.props&&p.props.children;if(!g||"code"!==g.props.mdxType)return s.createElement("div",null,"GoPlay: the wrapped data is not a codeblock.");if(!/\blanguage-go\b/.test(g&&g.props.className))return s.createElement("div",null,"GoPlay: only go code supported.");function h(){return(h=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new l.h(c),e.next=3,t.share(g.props.children.trim());case 3:n=e.sent,window.open(n,"_blank");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.createElement(s.Fragment,null,t,s.createElement("div",{ref:n,className:d},s.createElement(o.Z,{language:"text"},s.createElement("div",{ref:a}))),s.createElement("div",{className:u},s.createElement(m,{onClick:function(){if(a.current){var e=new l.h(c);n.current.classList.remove(d),e.renderCompile(a.current,g.props.children.trim())}}},"Run"),s.createElement(m,{onClick:function(){return h.apply(this,arguments)}},"Try it yourself \u21e2")))}},2418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=n(3152),o=["components"],s={sidebar_position:0,slug:"/"},u="Getting Started",p={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"httpin is a Go package for decoding HTTP requests into structs. We can decode",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/httpin/",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/"},sidebar:"docsSidebar",next:{title:"query",permalink:"/httpin/directives/query"}},d={},c=[{value:"Install",id:"install",level:2},{value:"Thanks \ud83e\udd70",id:"thanks-",level:2},{value:"Quick View",id:"quick-view",level:2},{value:"Run Demo",id:"run-demo",level:2},{value:"Comparison",id:"comparison",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"httpin is a ",(0,i.kt)("strong",{parentName:"p"},"Go")," package for ",(0,i.kt)("strong",{parentName:"p"},"decoding HTTP requests into structs"),". We can decode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/directives/query"},"Query parameters"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"?name=john&is_member=true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/directives/header"},"Headers"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: xxx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/directives/form"},"Form data"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"username=john&password=******")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/directives/body"},"JSON/XML Body"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'POST {"name":"john"}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/directives/path"},"Path variables"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/users/{username}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/advanced/upload-files"},"File uploads"))),(0,i.kt)("p",null,"and ",(0,i.kt)("a",{parentName:"p",href:"/directives/custom"},"more")," of an HTTP request into a struct in Go."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/ggicci/httpin\n")),(0,i.kt)("h2",{id:"thanks-"},"Thanks \ud83e\udd70"),(0,i.kt)("p",null,"If you thought this package helpful, please consider ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ggicci/httpin/stargazers"},"giving it a big star \u2b50\ufe0f"),". Thanks in advance!"),(0,i.kt)("h2",{id:"quick-view"},"Quick View"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Well define your data.\ntype ListUsersInput struct {\n    Page     int  `in:"query=page"`\n    PerPage  int  `in:"query=per_page"`\n    IsMember bool `in:"query=is_member"`\n}\n\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n    // Retrieve your data in one line of code!\n    input := r.Context().Value(httpin.Input).(*ListUsersInput)\n\n    // Do sth.\n}\n')),(0,i.kt)("h2",{id:"run-demo"},"Run Demo"),(0,i.kt)("p",null,"Take a look at the ",(0,i.kt)("strong",{parentName:"p"},"integrations")," section in the left sidebar. You may also find useful runnable demos there."),(0,i.kt)(l.Z,{mdxType:"GoPlay"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "net/http/httptest"\n\n    "github.com/ggicci/httpin"\n    "github.com/go-chi/chi/v5"\n)\n\ntype ListUsersInput struct {\n    Token    string `in:"header=Authorization"`\n    IsMember bool   `in:"query=is_member"`\n    AgeRange []int  `in:"query=age_range[],age_range"`\n}\n\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n    input := r.Context().Value(httpin.Input).(*ListUsersInput)\n    fmt.Printf("input: %#v\\n", input)\n}\n\nfunc main() {\n    router := chi.NewRouter()\n    router.With(\n        httpin.NewInput(ListUsersInput{}),\n    ).Get("/users", ListUsers)\n\n    r, _ := http.NewRequest("GET", "/users?is_member=1&age_range=18&age_range=60", nil)\n    r.Header.Set("Authorization", "my-secret-here")\n\n    rw := httptest.NewRecorder()\n    router.ServeHTTP(rw, r)\n}\n'))),(0,i.kt)("h2",{id:"comparison"},"Comparison"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Items"),(0,i.kt)("th",{parentName:"tr",align:null},"Before (use net/http package)"),(0,i.kt)("th",{parentName:"tr",align:null},"After (use ggicci/httpin package)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Developer Time"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude2b Expensive (too much parsing stuff code)"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,i.kt)("strong",{parentName:"td"},"Faster")," (define the struct for receiving input data and leave the parsing job to httpin)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Code Repetition Rate"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude1e High"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Lower"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Code Readability"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude1f Poor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Highly readable"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maintainability"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude21 Poor"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\ude0d ",(0,i.kt)("strong",{parentName:"td"},"Highly maintainable"))))))}g.isMDXComponent=!0}}]);
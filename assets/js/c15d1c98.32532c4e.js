"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[396],{4148:function(e,t,n){var o=n(5670),r=n(7294);t.Z=function(e){return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,e.inputTitle||"Input"),r.createElement("th",null,e.outputTitle||"Output"))),r.createElement("tbody",null,e.rows.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement(o.Z,null,e.input.trim())),r.createElement("td",null,r.createElement(o.Z,{className:"language-go"},e.output.trim())))}))))}},1090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=n(4148),s={inputOutput:{inputTitle:"Request (Body)",outputTitle:"CreateUserInput",rows:[{input:'\nPOST /users HTTP/1.1\nHost: foo.example\nContent-Type: application/json\n\n{ "login": "alex", "gender": "female" }\n  ',output:'\nPayload: &User{\n    Login: "alex",\n    Gender: "female",\n}\n'}]}},l=["components"],u={sidebar_position:4},d="body",p={unversionedId:"directives/body",id:"directives/body",title:"body",description:"body is a directive executor who decodes a field from the body of the request, i.e. http.Request.Body, JSON and XML formats are supported.",source:"@site/docs/directives/body.mdx",sourceDirName:"directives",slug:"/directives/body",permalink:"/httpin/directives/body",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/directives/body.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"form",permalink:"/httpin/directives/form"},next:{title:"path",permalink:"/httpin/directives/path"}},c={},m=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Body Annotations",id:"body-annotations",level:2}],g={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"body"},"body"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," is a ",(0,a.kt)("a",{parentName:"p",href:"/advanced/concepts#directive-executor"},"directive executor")," who decodes a field from the body of the request, i.e. ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#Request"},(0,a.kt)("inlineCode",{parentName:"a"},"http.Request.Body")),", ",(0,a.kt)("strong",{parentName:"p"},"JSON")," and ",(0,a.kt)("strong",{parentName:"p"},"XML")," formats are supported."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'Name: "body"\nArgs: BODY_TYPE\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," will read the content of the request body and parses it as ",(0,a.kt)("inlineCode",{parentName:"p"},"BODY_TYPE")," into the corresponding field of the struct. Supported BODY_TYPE are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"json"),": parses the body as an JSON object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"xml"),": parses the body as an XML object")),(0,a.kt)("p",null,"If BODY_TYPE were not specified, ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," will be used."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Login  string `json:"login"`\n    Gender string `json:"gender"`\n}\n\ntype CreateUserInput struct {\n    Payload *User `in:"body=json"` // use "body=xml" for XML formatted body\n}\n')),(0,a.kt)(i.Z,{inputTitle:s.inputOutput.inputTitle,outputTitle:s.inputOutput.outputTitle,rows:s.inputOutput.rows,mdxType:"InputOutputTable"}),(0,a.kt)("h2",{id:"body-annotations"},"Body Annotations"),(0,a.kt)("p",null,"There're two ",(0,a.kt)("em",{parentName:"p"},"body decoder annotations")," that can be used to read the body of the request:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"httpin.JSONBody"),": parses the body as an JSON object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"httpin.XMLBody"),": parses the body as an XML object")),(0,a.kt)("p",null,"You can embed one of them into your struct like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type CreateUserInput struct {\n    httpin.JSONBody\n    Login  string `json:"login"`\n    Gender string `json:"gender"`\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Login  string `json:"login"`\n    Gender string `json:"gender"`\n}\n\ntype CreateUserInput struct {\n    httpin.JSONBody\n    *User\n}\n')))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[464],{4148:function(e,t,n){var i=n(5670),a=n(7294);t.Z=function(e){return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,e.inputTitle||"Input"),a.createElement("th",null,e.outputTitle||"Output"))),a.createElement("tbody",null,e.rows.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement(i.Z,null,e.input.trim())),a.createElement("td",null,a.createElement(i.Z,{className:"language-go"},e.output.trim())))}))))}},2699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),u=n(4148),l={inputOutput:{inputTitle:"Request",outputTitle:"ListTasksQuery",rows:[{input:"\n  GET /tasks?page=4&perPage=10&state=failed&state=succeeded\n  ",output:'\n  {\n      Page:      4,\n      PerPage:   10,\n      StateList: []string{"failed", "succeeded"},\n  }'},{input:"\n  GET /tasks\n  ",output:'\n  {\n            Page:      1,\n            PerPage:   20,\n            StateList: []string{"pending", "running"},\n  }'}]}},s=["components"],d={sidebar_position:7},o="default",c={unversionedId:"directives/default",id:"directives/default",title:"default",description:"Introduced in v0.8.0.",source:"@site/docs/directives/default.mdx",sourceDirName:"directives",slug:"/directives/default",permalink:"/httpin/directives/default",draft:!1,editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/directives/default.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"required",permalink:"/httpin/directives/required"},next:{title:"custom \ud83d\udd0c",permalink:"/httpin/directives/custom"}},p={},m=[{value:"Definition",id:"definition",level:2},{value:"Usage",id:"usage",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"default"},"default"),(0,r.kt)("p",null,"Introduced in v0.8.0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default")," is a ",(0,r.kt)("a",{parentName:"p",href:"/advanced/concepts#directive-executor"},"directive executor")," who sets unsetted fields to their default value."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'Name: "default"\nArgs: VAL1 [,VAL2 [,VAL3, ...]]\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For an array type of value, you can use comma to separate the items in the array.\nSo the presence of comma in an array item can lead to unexpected behavior."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default")," will examine if the field was already set by former directives. If not, it will set the field to the given value."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type ListTasksQuery struct {\n    Page      int      `in:"query=page;default=1"`\n    PerPage   int      `in:"query=per_page;default=20"`\n    StateList []string `in:"query=state;default=pending,running"`\n}\n')),(0,r.kt)(u.Z,{inputTitle:l.inputOutput.inputTitle,outputTitle:l.inputOutput.outputTitle,rows:l.inputOutput.rows,mdxType:"InputOutputTable"}))}g.isMDXComponent=!0}}]);
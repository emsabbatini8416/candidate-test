function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return N}));var i,o=n("ofXK"),l=n("tyNb"),a=n("30QQ"),c=n("fXoL"),r=["*"],s=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-simple-list"]],ngContentSelectors:r,decls:2,vars:0,consts:[[1,"simple-list"]],template:function(t,e){1&t&&(c.Yb(),c.Nb(0,"ul",0),c.Xb(1),c.Mb())},styles:[".simple-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}"]}),i);function p(t,e){if(1&t&&(c.Nb(0,"h3"),c.ic(1),c.Mb(),c.Nb(2,"p"),c.Xb(3),c.Mb()),2&t){var n=c.Wb();c.zb(1),c.jc(n.title)}}function u(t,e){1&t&&c.Lb(0)}var b=function(){return{$implicit:!1}};function m(t,e){if(1&t&&(c.Nb(0,"a",5),c.gc(1,u,1,0,"ng-container",6),c.Mb()),2&t){var n=c.Wb(),i=c.cc(1);c.Zb("href",n.link,c.ec),c.zb(1),c.Zb("ngTemplateOutlet",i)("ngTemplateOutletContext",c.ac(3,b))}}function f(t,e){1&t&&c.Lb(0)}function g(t,e){if(1&t&&(c.Nb(0,"a",7),c.gc(1,f,1,0,"ng-container",6),c.Mb()),2&t){var n=c.Wb(),i=c.cc(1);c.Zb("routerLink",n.link),c.zb(1),c.Zb("ngTemplateOutlet",i)("ngTemplateOutletContext",c.ac(3,b))}}function h(t,e){1&t&&c.Lb(0)}function d(t,e){if(1&t&&(c.Nb(0,"div"),c.gc(1,h,1,0,"ng-container",6),c.Mb()),2&t){c.Wb();var n=c.cc(1);c.zb(1),c.Zb("ngTemplateOutlet",n)("ngTemplateOutletContext",c.ac(2,b))}}var k,C=["*"],v=((k=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=c.Db({type:k,selectors:[["app-simple-list-item"]],inputs:{title:"title",linkTo:"linkTo",link:"link"},ngContentSelectors:C,decls:6,vars:3,consts:[["contentTemplate",""],[1,"simple-list-item"],["target","_blank",3,"href",4,"ngIf"],["href","javascript:",3,"routerLink",4,"ngIf"],[4,"ngIf"],["target","_blank",3,"href"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["href","javascript:",3,"routerLink"]],template:function(t,e){1&t&&(c.Yb(),c.gc(0,p,4,1,"ng-template",null,0,c.hc),c.Nb(2,"li",1),c.gc(3,m,2,4,"a",2),c.gc(4,g,2,4,"a",3),c.gc(5,d,2,3,"div",4),c.Mb()),2&t&&(c.zb(3),c.Zb("ngIf","url"===e.linkTo),c.zb(1),c.Zb("ngIf","routerLink"===e.linkTo),c.zb(1),c.Zb("ngIf",!e.linkTo))},directives:[o.j,o.l,l.b],styles:[".simple-list-item[_ngcontent-%COMP%]{background:#e7e7e7;border-left:3px solid #333;margin-bottom:2rem;padding:.5rem 0 .5rem 1.5rem}.simple-list-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem}.simple-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1543c6}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{color:#001247}"]}),k);function T(t,e){if(1&t&&(c.Nb(0,"app-simple-list-item",3),c.ic(1),c.Mb()),2&t){var n=e.$implicit;c.Zb("title",n.index+": "+n.title)("link",n.link)("linkTo",n.linkTo),c.zb(1),c.kc(" ",n.content," ")}}var _,M,O,y=[{path:"",component:a.a,children:[{path:"",component:(_=function(){function t(){_classCallCheck(this,t),this.list=[{index:1,title:"Fork this Repository",linkTo:"url",link:"https://github.com/SafeguardPrvcy/candidate-test",content:"Visit github and fork this repository to get started."},{index:2,title:"Fix the Issues on the Homepage",linkTo:null,content:"There are a few problems on the Homepage, find and fix the issues."},{index:3,title:"Improve the Design",linkTo:null,content:"The design of this website is very plain, update the styles and/or design to make this site your own."},{index:4,title:"Add Local Temperature to the Header",linkTo:"routerLink",link:"/weather",content:"Use the openweathermap.org api to show the user's latest temperature information in the header."},{index:5,title:"Complete the Taskboard Logic",linkTo:"routerLink",link:"/taskboard",content:"Navigate to the taskboard page and complete the logic as described."},{index:6,title:"Create a Notes Component",linkTo:"routerLink",link:"/notes",content:"We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes."},{index:7,title:"Commit Your Code After Each Task",linkTo:null,content:"After each task is complete, commit the code to your repo using the task's title as the commit message."}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=c.Db({type:_,selectors:[["app-home"]],decls:8,vars:1,consts:[[1,"small-page"],[1,"block"],[3,"title","link","linkTo",4,"ngFor","ngForOf"],[3,"title","link","linkTo"]],template:function(t,e){1&t&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"h1"),c.ic(3,"Safeguard Privacy Developer Test"),c.Mb(),c.Nb(4,"p"),c.ic(5,"Below are the tasks that need to be done to complete this developor test."),c.Mb(),c.Mb(),c.Nb(6,"app-simple-list"),c.gc(7,T,2,4,"app-simple-list-item",2),c.Mb(),c.Mb()),2&t&&(c.zb(7),c.Zb("ngForOf",e.list))},directives:[s,o.i,v],styles:[""]}),_)}]}],w=((M=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:M}),M.\u0275inj=c.Gb({factory:function(t){return new(t||M)},imports:[[l.c.forChild(y)],l.c]}),M),P=n("84Lg"),N=((O=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:O}),O.\u0275inj=c.Gb({factory:function(t){return new(t||O)},imports:[[o.b,w,P.a]]}),O)}}]);
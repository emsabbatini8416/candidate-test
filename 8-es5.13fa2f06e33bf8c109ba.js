function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YNqp:function(t,e,i){"use strict";i.r(e),i.d(e,"TaskboardModule",(function(){return C}));var n,r=i("ofXK"),a=i("9Ejp"),l=i("tyNb"),o=i("30QQ"),s=i("fXoL"),c=["*"],b=((n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-board-item"]],inputs:{theme:"theme"},ngContentSelectors:c,decls:2,vars:1,consts:[[1,"board-item",3,"ngClass"]],template:function(t,e){1&t&&(s.Yb(),s.Nb(0,"div",0),s.Xb(1),s.Mb()),2&t&&s.Zb("ngClass",e.theme)},directives:[r.h],styles:[".board-item[_ngcontent-%COMP%]{border:1px solid #1543c6;padding:1rem;margin:0 0 1rem;background:#e7e7e7}.board-item.theme-1[_ngcontent-%COMP%]{background-color:#7a2527}.board-item.theme-2[_ngcontent-%COMP%]{background-color:#ba8435}.board-item.theme-3[_ngcontent-%COMP%]{background-color:#69a94b}"]}),n);function d(t,e){if(1&t&&(s.Nb(0,"app-board-item",10),s.ic(1),s.Mb()),2&t){var i=e.$implicit;s.Zb("theme",i.theme),s.zb(1),s.kc(" ",i.title," ")}}function u(t,e){if(1&t&&(s.Nb(0,"app-board-item",10),s.ic(1),s.Mb()),2&t){var i=e.$implicit;s.Zb("theme",i.theme),s.zb(1),s.kc(" ",i.title," ")}}function g(t,e){if(1&t&&(s.Nb(0,"app-board-item",10),s.ic(1),s.Mb()),2&t){var i=e.$implicit;s.Zb("theme",i.theme),s.zb(1),s.kc(" ",i.title," ")}}var m,p,h,f=[{path:"",component:o.a,children:[{path:"",component:(m=function(){function t(e){_classCallCheck(this,t),this.dragulaService=e,this.list="board",this.list1=[],this.list2=[],this.list3=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.dragulaService.createGroup(this.list,{revertOnSpill:!0,accepts:function(t,e,i,n){return!0}}),this.setData()}},{key:"ngOnDestroy",value:function(){this.dragulaService.destroy(this.list)}},{key:"setData",value:function(){var t=this;["ListItem 1","ListItem 2","ListItem 3"].map((function(e){return t.list1.push({title:e,theme:"theme-1"})})),["ListItem 4","ListItem 5","ListItem 6"].map((function(e){return t.list2.push({title:e,theme:"theme-2"})})),["ListItem 7","ListItem 8","ListItem 9"].map((function(e){return t.list3.push({title:e,theme:"theme-3"})}))}}]),t}(),m.\u0275fac=function(t){return new(t||m)(s.Jb(a.c))},m.\u0275cmp=s.Db({type:m,selectors:[["app-board"]],decls:30,vars:9,consts:[[1,"taskboard"],[1,"description"],["href","https://github.com/bevacqua/dragula","target","_blank"],[1,"list-title","title-1"],[1,"list-title","title-2"],[1,"list-title","title-3"],[1,"list","list-1",3,"dragula","dragulaModel","dragulaModelChange"],[3,"theme",4,"ngFor","ngForOf"],[1,"list","list-2",3,"dragula","dragulaModel","dragulaModelChange"],[1,"list","list-3",3,"dragula","dragulaModel","dragulaModelChange"],[3,"theme"]],template:function(t,e){1&t&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Nb(2,"h1"),s.ic(3,"Taskboard Challenge"),s.Mb(),s.Nb(4,"p"),s.ic(5,"Write the following logic for the Taskboard."),s.Mb(),s.Nb(6,"ol"),s.Nb(7,"li"),s.ic(8,"Items in list 1 can only move to list 2, not list 3."),s.Mb(),s.Nb(9,"li"),s.ic(10,"Items in list 2 can move to either list 1 or 3."),s.Mb(),s.Nb(11,"li"),s.ic(12,"Items in list 3 can only move to list 1, not 2."),s.Mb(),s.Mb(),s.Nb(13,"p"),s.ic(14,"We are using "),s.Nb(15,"a",2),s.ic(16,"Dragula"),s.Mb(),s.ic(17," as the drag-and-drop component."),s.Mb(),s.Mb(),s.Nb(18,"h3",3),s.ic(19,"List 1"),s.Mb(),s.Nb(20,"h3",4),s.ic(21,"List 2"),s.Mb(),s.Nb(22,"h3",5),s.ic(23,"List 3"),s.Mb(),s.Nb(24,"div",6),s.Ub("dragulaModelChange",(function(t){return e.list1=t})),s.gc(25,d,2,2,"app-board-item",7),s.Mb(),s.Nb(26,"div",8),s.Ub("dragulaModelChange",(function(t){return e.list2=t})),s.gc(27,u,2,2,"app-board-item",7),s.Mb(),s.Nb(28,"div",9),s.Ub("dragulaModelChange",(function(t){return e.list3=t})),s.gc(29,g,2,2,"app-board-item",7),s.Mb(),s.Mb()),2&t&&(s.zb(24),s.Zb("dragula",e.list)("dragulaModel",e.list1),s.zb(1),s.Zb("ngForOf",e.list1),s.zb(1),s.Zb("dragula",e.list)("dragulaModel",e.list2),s.zb(1),s.Zb("ngForOf",e.list2),s.zb(1),s.Zb("dragula",e.list)("dragulaModel",e.list3),s.zb(1),s.Zb("ngForOf",e.list3))},directives:[a.a,r.i,b],styles:[".taskboard[_ngcontent-%COMP%]{display:grid;grid-gap:1.4rem;grid-template-columns:repeat(3,1fr);grid-template-rows:auto auto 1fr;height:100%}.description[_ngcontent-%COMP%]{grid-column:span 3}.list-title[_ngcontent-%COMP%]{margin:0}.list-title.title-1[_ngcontent-%COMP%]{grid-column:1;grid-row:2}.list-title.title-2[_ngcontent-%COMP%]{grid-column:2;grid-row:2}.list-title.title-3[_ngcontent-%COMP%]{grid-column:3;grid-row:2}.list[_ngcontent-%COMP%]{padding:1.4rem;background:#e7e7e7}.list.list-1[_ngcontent-%COMP%]{grid-column:1;grid-row:3}.list.list-2[_ngcontent-%COMP%]{grid-column:2;grid-row:3}.list.list-3[_ngcontent-%COMP%]{grid-column:3;grid-row:3}"]}),m)}]}],M=((h=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(t){return new(t||h)},imports:[[l.c.forChild(f)],l.c]}),h),C=((p=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:p}),p.\u0275inj=s.Gb({factory:function(t){return new(t||p)},imports:[[r.b,a.b,M]]}),p)}}]);
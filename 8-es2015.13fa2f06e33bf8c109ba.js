(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YNqp:function(t,e,i){"use strict";i.r(e),i.d(e,"TaskboardModule",(function(){return p}));var n=i("ofXK"),l=i("9Ejp"),r=i("tyNb"),o=i("30QQ"),a=i("fXoL");const s=["*"];let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-board-item"]],inputs:{theme:"theme"},ngContentSelectors:s,decls:2,vars:1,consts:[[1,"board-item",3,"ngClass"]],template:function(t,e){1&t&&(a.Yb(),a.Nb(0,"div",0),a.Xb(1),a.Mb()),2&t&&a.Zb("ngClass",e.theme)},directives:[n.h],styles:[".board-item[_ngcontent-%COMP%]{border:1px solid #1543c6;padding:1rem;margin:0 0 1rem;background:#e7e7e7}.board-item.theme-1[_ngcontent-%COMP%]{background-color:#7a2527}.board-item.theme-2[_ngcontent-%COMP%]{background-color:#ba8435}.board-item.theme-3[_ngcontent-%COMP%]{background-color:#69a94b}"]}),t})();function b(t,e){if(1&t&&(a.Nb(0,"app-board-item",10),a.ic(1),a.Mb()),2&t){const t=e.$implicit;a.Zb("theme",t.theme),a.zb(1),a.kc(" ",t.title," ")}}function d(t,e){if(1&t&&(a.Nb(0,"app-board-item",10),a.ic(1),a.Mb()),2&t){const t=e.$implicit;a.Zb("theme",t.theme),a.zb(1),a.kc(" ",t.title," ")}}function g(t,e){if(1&t&&(a.Nb(0,"app-board-item",10),a.ic(1),a.Mb()),2&t){const t=e.$implicit;a.Zb("theme",t.theme),a.zb(1),a.kc(" ",t.title," ")}}const m=[{path:"",component:o.a,children:[{path:"",component:(()=>{class t{constructor(t){this.dragulaService=t,this.list="board",this.list1=[],this.list2=[],this.list3=[]}ngOnInit(){this.dragulaService.createGroup(this.list,{revertOnSpill:!0,accepts:(t,e,i,n)=>!0}),this.setData()}ngOnDestroy(){this.dragulaService.destroy(this.list)}setData(){["ListItem 1","ListItem 2","ListItem 3"].map(t=>this.list1.push({title:t,theme:"theme-1"})),["ListItem 4","ListItem 5","ListItem 6"].map(t=>this.list2.push({title:t,theme:"theme-2"})),["ListItem 7","ListItem 8","ListItem 9"].map(t=>this.list3.push({title:t,theme:"theme-3"}))}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(l.c))},t.\u0275cmp=a.Db({type:t,selectors:[["app-board"]],decls:30,vars:9,consts:[[1,"taskboard"],[1,"description"],["href","https://github.com/bevacqua/dragula","target","_blank"],[1,"list-title","title-1"],[1,"list-title","title-2"],[1,"list-title","title-3"],[1,"list","list-1",3,"dragula","dragulaModel","dragulaModelChange"],[3,"theme",4,"ngFor","ngForOf"],[1,"list","list-2",3,"dragula","dragulaModel","dragulaModelChange"],[1,"list","list-3",3,"dragula","dragulaModel","dragulaModelChange"],[3,"theme"]],template:function(t,e){1&t&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"h1"),a.ic(3,"Taskboard Challenge"),a.Mb(),a.Nb(4,"p"),a.ic(5,"Write the following logic for the Taskboard."),a.Mb(),a.Nb(6,"ol"),a.Nb(7,"li"),a.ic(8,"Items in list 1 can only move to list 2, not list 3."),a.Mb(),a.Nb(9,"li"),a.ic(10,"Items in list 2 can move to either list 1 or 3."),a.Mb(),a.Nb(11,"li"),a.ic(12,"Items in list 3 can only move to list 1, not 2."),a.Mb(),a.Mb(),a.Nb(13,"p"),a.ic(14,"We are using "),a.Nb(15,"a",2),a.ic(16,"Dragula"),a.Mb(),a.ic(17," as the drag-and-drop component."),a.Mb(),a.Mb(),a.Nb(18,"h3",3),a.ic(19,"List 1"),a.Mb(),a.Nb(20,"h3",4),a.ic(21,"List 2"),a.Mb(),a.Nb(22,"h3",5),a.ic(23,"List 3"),a.Mb(),a.Nb(24,"div",6),a.Ub("dragulaModelChange",(function(t){return e.list1=t})),a.gc(25,b,2,2,"app-board-item",7),a.Mb(),a.Nb(26,"div",8),a.Ub("dragulaModelChange",(function(t){return e.list2=t})),a.gc(27,d,2,2,"app-board-item",7),a.Mb(),a.Nb(28,"div",9),a.Ub("dragulaModelChange",(function(t){return e.list3=t})),a.gc(29,g,2,2,"app-board-item",7),a.Mb(),a.Mb()),2&t&&(a.zb(24),a.Zb("dragula",e.list)("dragulaModel",e.list1),a.zb(1),a.Zb("ngForOf",e.list1),a.zb(1),a.Zb("dragula",e.list)("dragulaModel",e.list2),a.zb(1),a.Zb("ngForOf",e.list2),a.zb(1),a.Zb("dragula",e.list)("dragulaModel",e.list3),a.zb(1),a.Zb("ngForOf",e.list3))},directives:[l.a,n.i,c],styles:[".taskboard[_ngcontent-%COMP%]{display:grid;grid-gap:1.4rem;grid-template-columns:repeat(3,1fr);grid-template-rows:auto auto 1fr;height:100%}.description[_ngcontent-%COMP%]{grid-column:span 3}.list-title[_ngcontent-%COMP%]{margin:0}.list-title.title-1[_ngcontent-%COMP%]{grid-column:1;grid-row:2}.list-title.title-2[_ngcontent-%COMP%]{grid-column:2;grid-row:2}.list-title.title-3[_ngcontent-%COMP%]{grid-column:3;grid-row:2}.list[_ngcontent-%COMP%]{padding:1.4rem;background:#e7e7e7}.list.list-1[_ngcontent-%COMP%]{grid-column:1;grid-row:3}.list.list-2[_ngcontent-%COMP%]{grid-column:2;grid-row:3}.list.list-3[_ngcontent-%COMP%]{grid-column:3;grid-row:3}"]}),t})()}]}];let u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(m)],r.c]}),t})(),p=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[n.b,l.b,u]]}),t})()}}]);
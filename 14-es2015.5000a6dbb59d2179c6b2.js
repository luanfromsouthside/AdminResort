(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0O61":function(t,e,n){"use strict";n.r(e),n.d(e,"SupplyModule",function(){return at});var s=n("ofXK"),o=n("RS3s"),r=n("tk/3"),i=n("CS83"),c=n("fXoL"),a=n("McNs");let l=(()=>{class t extends i.a{constructor(t,e){super("DistributionSP"),this.http=t,this.authService=e}setHeader(){this.authService.onTokenChange().subscribe(t=>{this.header=(new r.d).set("Authorization","Bearer "+t.getValue())})}GiveSp(t){return this.setHeader(),this.http.post(this.Root_URL+"givesp4room",t,{headers:this.header,responseType:"text"})}RemoveSP(t){return this.setHeader(),this.http.post(this.Root_URL+"removespFromRoom",t,{headers:this.header,responseType:"text"})}}return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a),c.ac(a.d))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("u3tn"),u=n("3Pt+"),d=n("aceb");function p(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc();c.Db(1),c.Jc(" Ph\xe2n ph\u1ed1i v\u1eadt t\u01b0: ",t.supply.id," ")}}function f(t,e){if(1&t&&c.Hc(0),2&t){const t=c.hc();c.Jc(" X\xf3a v\u1eadt t\u01b0 : ",t.supply.id," ")}}function m(t,e){if(1&t&&(c.Wb(0,"nb-option",16),c.Hc(1),c.Vb()),2&t){const t=e.$implicit;c.nc("value",t.id),c.Db(1),c.Kc(" ",t.name," : ",t.id," ")}}function h(t,e){if(1&t&&(c.Wb(0,"nb-select",14),c.Fc(1,m,2,3,"nb-option",15),c.Vb()),2&t){const t=c.hc();c.nc("status",t.getConfig("roomID")?"danger":"basic"),c.Db(1),c.nc("ngForOf",t.listRoom)}}function g(t,e){if(1&t&&(c.Wb(0,"p"),c.Hc(1),c.Vb()),2&t){const t=c.hc();c.Db(1),c.Jc(" ",t.roomID,"")}}function v(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"Count is required"),c.Vb())}function y(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc("Count is min at ",t.formDistribute.get("count").errors.min.min,"")}}function W(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc("Count is max at ",t.formDistribute.get("count").errors.max.max,"")}}function V(t,e){if(1&t&&(c.Wb(0,"span",17),c.Fc(1,v,2,0,"span",7),c.Fc(2,y,2,1,"span",7),c.Fc(3,W,2,1,"span",7),c.Vb()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",null==t.formDistribute.get("count").errors?null:t.formDistribute.get("count").errors.required),c.Db(1),c.nc("ngIf",null==t.formDistribute.get("count").errors?null:t.formDistribute.get("count").errors.min),c.Db(1),c.nc("ngIf",null==t.formDistribute.get("count").errors?null:t.formDistribute.get("count").errors.max)}}let D=(()=>{class t{constructor(t,e,n,s,o){this.roomService=t,this.distribution=e,this.fb=n,this.ref=s,this.toast=o,this.isAdd=!0}ngOnInit(){this.roomService.ListRooms.subscribe(t=>this.listRoom=t),this.formDistribute=this.fb.group({roomID:[{value:this.roomID,disabled:!this.isAdd},[u.x.required]],count:[0,[u.x.required,u.x.min(1),u.x.max(this.supply.total)]]}),null!=this.roomID&&(this.formDistribute.get("roomID").setValue(this.roomID),this.formDistribute.get("roomID"))}getConfig(t){return this.formDistribute.get(t).invalid&&this.formDistribute.get(t).touched}submit(){this.isAdd?this.GiveSP():this.removeSP()}GiveSP(){this.distribution.GiveSp({roomID:this.formDistribute.get("roomID").value,supplyID:this.supply.id,count:this.formDistribute.get("count").value}).subscribe(t=>{this.toast.show("Distribution success","SUCCESS",{status:"success"}),this.ref.close(!0)},t=>{this.toast.show(t.error,"ERROR",{status:"danger"})})}removeSP(){this.distribution.RemoveSP({roomID:this.roomID,supplyID:this.supply.id,count:this.formDistribute.get("count").value}).subscribe(t=>{this.toast.show("Remove success","REMOVE",{status:"success"}),this.ref.close(!0)},t=>{this.toast.show(t.error,"REMOVE ERROR",{status:"danger"})})}cancel(){this.ref.close()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(b.a),c.Qb(l),c.Qb(u.c),c.Qb(d.B),c.Qb(d.lb))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-distribution"]],inputs:{supply:"supply",roomID:"roomID",isAdd:"isAdd"},decls:24,vars:8,consts:[[4,"ngIf","ngIfElse"],["Remove",""],["novalidate","",3,"formGroup"],[1,"form-group","row"],["for","RoomID",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","roomID","shape","semi-round","fullWidth","","id","RoomID","placeholder","Ph\xf2ng",3,"status",4,"ngIf"],[4,"ngIf"],["for","Count",1,"label","col-sm-3","col-form-label"],["type","number","formControlName","count","nbInput","","fullWidth","","id","Count","placeholder","Count",3,"status"],["class","text-danger",4,"ngIf"],[1,"button-row"],["nbButton","","status","danger",3,"click"],["nbButton","","status","success",3,"disabled","click"],["formControlName","roomID","shape","semi-round","fullWidth","","id","RoomID","placeholder","Ph\xf2ng",3,"status"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"text-danger"]],template:function(t,e){if(1&t&&(c.Wb(0,"nb-card"),c.Wb(1,"nb-card-header"),c.Fc(2,p,2,1,"span",0),c.Fc(3,f,1,1,"ng-template",null,1,c.Gc),c.Vb(),c.Wb(5,"nb-card-body"),c.Wb(6,"form",2),c.Wb(7,"div",3),c.Wb(8,"label",4),c.Hc(9,"Ph\xf2ng: "),c.Vb(),c.Wb(10,"div",5),c.Fc(11,h,2,2,"nb-select",6),c.Fc(12,g,2,1,"p",7),c.Vb(),c.Vb(),c.Wb(13,"div",3),c.Wb(14,"label",8),c.Hc(15,"S\u1ed1 l\u01b0\u1ee3ng: "),c.Vb(),c.Wb(16,"div",5),c.Rb(17,"input",9),c.Fc(18,V,4,3,"span",10),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"nb-card-footer",11),c.Wb(20,"button",12),c.dc("click",function(){return e.cancel()}),c.Hc(21,"Cancel"),c.Vb(),c.Wb(22,"button",13),c.dc("click",function(){return e.submit()}),c.Hc(23,"Submit"),c.Vb(),c.Vb(),c.Vb()),2&t){const t=c.vc(4);c.Db(2),c.nc("ngIf",e.isAdd)("ngIfElse",t),c.Db(4),c.nc("formGroup",e.formDistribute),c.Db(5),c.nc("ngIf",e.isAdd),c.Db(1),c.nc("ngIf",!e.isAdd),c.Db(5),c.nc("status",e.getConfig("count")?"danger":"basic"),c.Db(1),c.nc("ngIf",e.getConfig("count")),c.Db(4),c.nc("disabled",!e.formDistribute.valid)}},directives:[d.o,d.q,s.n,d.n,u.z,u.o,u.g,u.s,u.b,d.G,u.n,u.f,d.p,d.l,d.cb,s.m,d.U],encapsulation:2}),t})(),I=(()=>{class t extends i.a{constructor(t,e){super("Supply"),this.http=t,this.authService=e}setHeader(){this.authService.onTokenChange().subscribe(t=>{this.header=(new r.d).set("Authorization","Bearer "+t.getValue())})}get List(){return this.http.get(this.Root_URL)}getByID(t){return this.http.get(this.Root_URL+t)}addSupply(t){return this.setHeader(),this.http.post(this.Root_URL+"create",t,{headers:this.header,responseType:"text"})}removeSupply(t){return this.setHeader(),this.http.delete(this.Root_URL+t,{headers:this.header,responseType:"text"})}updateSupply(t){return this.setHeader(),this.http.post(this.Root_URL+"edit",t,{headers:this.header,responseType:"text"})}}return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a),c.ac(a.d))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=n("tyNb");function H(t,e){if(1&t){const t=c.Xb();c.Wb(0,"nb-card-footer"),c.Wb(1,"h4"),c.Hc(2,"S\u1ed1 ph\xf2ng s\u1eed d\u1ee5ng"),c.Vb(),c.Wb(3,"ng2-smart-table",9),c.dc("deleteConfirm",function(e){return c.xc(t),c.hc(2).onDeleteConfirm(e)}),c.Vb(),c.Vb()}if(2&t){const t=c.hc(2);c.Db(3),c.nc("settings",t.settings)("source",t.source)}}function x(t,e){if(1&t){const t=c.Xb();c.Wb(0,"nb-card",2),c.Wb(1,"nb-card-header"),c.Hc(2),c.Wb(3,"button",3),c.dc("click",function(){return c.xc(t),c.hc().openDialog()}),c.Hc(4,"Ph\xe2n ph\u1ed1i"),c.Vb(),c.Vb(),c.Wb(5,"nb-card-body"),c.Wb(6,"nb-list"),c.Wb(7,"nb-list-item"),c.Wb(8,"div",4),c.Rb(9,"i",5),c.Hc(10," T\xean v\u1eadt t\u01b0: "),c.Vb(),c.Wb(11,"div",6),c.Hc(12),c.Vb(),c.Vb(),c.Wb(13,"nb-list-item"),c.Wb(14,"div",4),c.Rb(15,"i",7),c.Hc(16," S\u1ed1 l\u01b0\u1ee3ng kh\u1ea3 d\u1ee5ng: "),c.Vb(),c.Wb(17,"div",6),c.Hc(18),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Fc(19,H,4,2,"nb-card-footer",8),c.Vb()}if(2&t){const t=c.hc();c.Db(2),c.Jc(" Ph\xe2n ph\u1ed1i v\u1eadt t\u01b0: ",t.supply.id," "),c.Db(10),c.Ic(t.supply.name),c.Db(6),c.Ic(t.supply.total),c.Db(1),c.nc("ngIf",t.supply.rooms.length>0)}}function C(t,e){1&t&&(c.Wb(0,"nb-card",10),c.Wb(1,"nb-card-header"),c.Hc(2,"Supply does not exist"),c.Vb(),c.Vb())}let R=(()=>{class t{constructor(t,e,n){this.route=t,this.dialog=e,this.supplyService=n,this.settings={actions:{add:!1,edit:!1},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{roomID:{title:"Room ID",type:"string",filter:!0},room:{title:"Room name",type:"string",valuePrepareFunction:t=>t.name},count:{title:"S\u1ed1 l\u01b0\u1ee3ng",type:"number",filter:!0}}},this.source=new o.a}ngOnInit(){this.loadSP()}loadSP(){this.route.paramMap.subscribe(t=>{const e=t.get("id");this.supplyService.getByID(e).subscribe(t=>{this.supply=t,this.source.reset(),this.source.load(this.supply.rooms)})})}openDialog(){this.dialog.open(D,{context:{supply:this.supply,isAdd:!0}}).onClose.subscribe(t=>{t&&this.loadSP()})}onDeleteConfirm(t){console.log(t.data),this.dialog.open(D,{context:{supply:this.supply,roomID:t.data.roomID,isAdd:!1}}).onClose.subscribe(t=>{t&&this.loadSP()})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(S.a),c.Qb(d.C),c.Qb(I))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-distribution-supply"]],decls:3,vars:2,consts:[["status","success",4,"ngIf","ngIfElse"],["noSup",""],["status","success"],["nbButton","","status","primary",1,"float-right",3,"click"],[1,"col-4"],[1,"fas","fa-tv"],[1,"col-6"],[1,"fas","fa-exclamation"],[4,"ngIf"],[3,"settings","source","deleteConfirm"],["status","danger"]],template:function(t,e){if(1&t&&(c.Fc(0,x,20,4,"nb-card",0),c.Fc(1,C,3,0,"ng-template",null,1,c.Gc)),2&t){const t=c.vc(2);c.nc("ngIf",null!=e.supply)("ngIfElse",t)}},directives:[s.n,d.o,d.q,d.l,d.n,d.N,d.O,d.p,o.b],encapsulation:2}),t})();var F=n("+NJU");function w(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"Name is required"),c.Vb())}function T(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(3);c.Db(1),c.Jc(" Name at least ",null==t.form.get("name").errors?null:t.form.get("name").errors.minlength.requiredLength," characters ")}}function q(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(3);c.Db(1),c.Jc(" Name at most ",null==t.form.get("name").errors?null:t.form.get("name").errors.maxlength.requiredLength," characters ")}}function N(t,e){if(1&t&&(c.Wb(0,"span",20),c.Fc(1,w,2,0,"span",21),c.Fc(2,T,2,1,"span",21),c.Fc(3,q,2,1,"span",21),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.nc("ngIf",t.form.get("name").errors.required),c.Db(1),c.nc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.minlength),c.Db(1),c.nc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.maxlength)}}function k(t,e){if(1&t&&(c.Wb(0,"nb-option",22),c.Hc(1),c.Vb()),2&t){const t=e.$implicit;c.nc("value",t.value),c.Db(1),c.Jc(" ",t.name," ")}}function Q(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"Total is required"),c.Vb())}function P(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(3);c.Db(1),c.Jc(" Total at min ",null==t.form.get("total").errors?null:t.form.get("total").errors.min.min," ")}}function L(t,e){if(1&t&&(c.Wb(0,"span",20),c.Fc(1,Q,2,0,"span",21),c.Fc(2,P,2,1,"span",21),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.nc("ngIf",t.form.get("total").errors.required),c.Db(1),c.nc("ngIf",null==t.form.get("total").errors?null:t.form.get("total").errors.min)}}function B(t,e){if(1&t){const t=c.Xb();c.Wb(0,"nb-card",2),c.Wb(1,"nb-card-header"),c.Hc(2),c.Vb(),c.Wb(3,"nb-card-body"),c.Wb(4,"form",3),c.Wb(5,"div",4),c.Wb(6,"label",5),c.Hc(7,"T\xean d\u1ecbch v\u1ee5: "),c.Vb(),c.Wb(8,"div",6),c.Rb(9,"input",7),c.Fc(10,N,4,3,"span",8),c.Vb(),c.Vb(),c.Wb(11,"div",9),c.Wb(12,"div",10),c.Wb(13,"div",4),c.Wb(14,"label",11),c.Hc(15,"C\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng: "),c.Vb(),c.Wb(16,"div",6),c.Wb(17,"nb-select",12),c.Fc(18,k,2,2,"nb-option",13),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"div",10),c.Wb(20,"div",4),c.Wb(21,"label",14),c.Hc(22,"S\u1ed1 l\u01b0\u1ee3ng: "),c.Vb(),c.Wb(23,"div",6),c.Rb(24,"input",15),c.Fc(25,L,3,2,"span",8),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(26,"nb-card-footer"),c.Wb(27,"div",9),c.Wb(28,"div",16),c.Wb(29,"button",17),c.dc("click",function(){return c.xc(t),c.hc().updateSupply()}),c.Hc(30,"C\u1eacP NH\u1eacT"),c.Vb(),c.Vb(),c.Wb(31,"div",18),c.Wb(32,"button",19),c.dc("click",function(){return c.xc(t),c.hc().resetForm()}),c.Hc(33,"NH\u1eacP L\u1ea0I"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){const t=e.ngIf,n=c.hc();c.Db(2),c.Jc("C\u1eadp nh\u1eadt d\u1ecbch v\u1ee5: ",t.id,""),c.Db(2),c.nc("formGroup",n.form),c.Db(5),c.nc("status",n.getConfig("name")?"danger":"basic"),c.Db(1),c.nc("ngIf",n.getConfig("name")),c.Db(8),c.nc("ngForOf",n.listType),c.Db(6),c.nc("status",n.getConfig("total")?"danger":"basic"),c.Db(1),c.nc("ngIf",n.getConfig("total")),c.Db(4),c.nc("disabled",n.form.invalid)}}function J(t,e){1&t&&(c.Wb(0,"nb-card",20),c.Wb(1,"nb-card-header"),c.Hc(2,"Service does not exist"),c.Vb(),c.Vb())}let E=(()=>{class t{constructor(t,e,n,s,o,r){this.fb=t,this.supplyService=e,this.route=n,this.dialog=s,this.router=o,this.toast=r,this.listType=[{value:"none",name:"Gi\u1eef nguy\xean s\u1ed1 l\u01b0\u1ee3ng"},{value:"newcount",name:"C\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng"},{value:"addcount",name:"Nh\u1eadp th\xeam s\u1ed1 l\u01b0\u1ee3ng"}]}ngOnInit(){this.route.paramMap.subscribe(t=>{const e=t.get("id");this.supply$=this.supplyService.getByID(e)}),this.supply$.subscribe(t=>{this.form=this.fb.group({name:[t.name,[u.x.required,u.x.maxLength(30)]],type:[this.listType[0].value,[u.x.required]],total:[t.total,[u.x.min(0)]]})})}updateSupply(){this.supply$.subscribe(t=>{this.dialog.open(F.a,{context:{title:`C\u1eadp nh\u1eadt v\u1eadt t\u01b0 ${t.id}?`}}).onClose.subscribe(e=>{e&&this.update(t.id)})})}update(t){let e={id:t,name:this.form.get("name").value,editType:this.form.get("type").value,count:this.form.get("total").value};this.supplyService.updateSupply(e).subscribe(t=>{this.toast.show("Edit success","EDIT",{status:"success"}),this.router.navigateByUrl("/home/supply/details/"+e.id)},t=>{this.toast.show("Edit failed","EDIT",{status:"danger"})})}resetForm(){this.supply$.subscribe(t=>{this.form.get("name").setValue(t.name),this.form.get("type").setValue("none"),this.form.get("total").setValue(t.total)})}getConfig(t){return this.form.get(t).invalid&&this.form.get(t).touched}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(u.c),c.Qb(I),c.Qb(S.a),c.Qb(d.C),c.Qb(S.c),c.Qb(d.lb))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-update-supply"]],decls:4,vars:4,consts:[["status","success",4,"ngIf","ngIfElse"],["noSer",""],["status","success"],["novalidate","",3,"formGroup"],[1,"form-group","row"],["for","Name",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","nbInput","","fullWidth","","id","Name","placeholder","Supply name",3,"status"],["class","text-danger",4,"ngIf"],[1,"row"],[1,"col-md-6","col-12"],["for","Type",1,"label","col-sm-3","col-form-label"],["formControlName","type","shape","semi-round","fullWidth","","id","Type","placeholder","Lo\u1ea1i c\u1eadp nh\u1eadt"],[3,"value",4,"ngFor","ngForOf"],["for","Total",1,"label","col-sm-3","col-form-label"],["type","number","formControlName","total","nbInput","","fullWidth","","id","Total","placeholder","Supply total",3,"status"],[1,"col-md-4","col-12"],["nbButton","","fullWidth","","hero","","status","primary",3,"disabled","click"],[1,"offset-md-4","col-md-4","col-12"],["nbButton","","fullWidth","","hero","","status","danger",3,"click"],[1,"text-danger"],[4,"ngIf"],[3,"value"]],template:function(t,e){if(1&t&&(c.Fc(0,B,34,8,"nb-card",0),c.ic(1,"async"),c.Fc(2,J,3,0,"ng-template",null,1,c.Gc)),2&t){const t=c.vc(3);c.nc("ngIf",c.jc(1,2,e.supply$))("ngIfElse",t)}},directives:[s.n,d.o,d.q,d.n,u.z,u.o,u.g,u.b,d.G,u.n,u.f,d.cb,s.m,u.s,d.p,d.l,d.U],pipes:[s.b],encapsulation:2}),t})();function O(t,e){if(1&t&&(c.Wb(0,"nb-list-item"),c.Wb(1,"div",3),c.Rb(2,"i",14),c.Hc(3," S\u1ed1 ph\xf2ng s\u1eed d\u1ee5ng: "),c.Vb(),c.Wb(4,"div",15),c.Hc(5),c.Vb(),c.Vb()),2&t){const t=c.hc(2);c.Db(5),c.Ic(t.supply.rooms.length)}}function U(t,e){if(1&t){const t=c.Xb();c.Wb(0,"nb-card",2),c.Wb(1,"nb-card-header"),c.Hc(2),c.Vb(),c.Wb(3,"nb-card-body"),c.Wb(4,"nb-list"),c.Wb(5,"nb-list-item"),c.Wb(6,"div",3),c.Rb(7,"i",4),c.Hc(8," T\xean v\u1eadt t\u01b0: "),c.Vb(),c.Wb(9,"div",5),c.Hc(10),c.Vb(),c.Vb(),c.Wb(11,"nb-list-item"),c.Wb(12,"div",3),c.Rb(13,"i",6),c.Hc(14," S\u1ed1 l\u01b0\u1ee3ng kh\u1ea3 d\u1ee5ng: "),c.Vb(),c.Wb(15,"div",5),c.Hc(16),c.Vb(),c.Vb(),c.Fc(17,O,6,1,"nb-list-item",7),c.Vb(),c.Vb(),c.Wb(18,"nb-card-footer"),c.Wb(19,"div",8),c.Wb(20,"div",9),c.Wb(21,"button",10),c.dc("click",function(){c.xc(t);const e=c.hc();return e.onUpdate(e.supply.id)}),c.Rb(22,"i",11),c.Hc(23,"\u2003C\u1eadp nh\u1eadt v\u1eadt t\u01b0 "),c.Vb(),c.Vb(),c.Wb(24,"div",9),c.Wb(25,"button",10),c.dc("click",function(){return c.xc(t),c.hc().distribution()}),c.Rb(26,"i",11),c.Hc(27,"\u2003Ph\xe2n ph\u1ed1i "),c.Vb(),c.Vb(),c.Wb(28,"div",9),c.Wb(29,"button",12),c.dc("click",function(){c.xc(t);const e=c.hc();return e.onRemove(e.supply.id)}),c.Rb(30,"i",13),c.Hc(31,"\u2003X\xf3a v\u1eadt t\u01b0 "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){const t=c.hc();c.Db(2),c.Jc("Th\xf4ng tin v\u1eadt t\u01b0: ",t.supply.id,""),c.Db(8),c.Ic(t.supply.name),c.Db(6),c.Ic(t.supply.total),c.Db(1),c.nc("ngIf",t.supply.rooms.length>0)}}function G(t,e){1&t&&(c.Wb(0,"nb-card",16),c.Wb(1,"nb-card-header"),c.Hc(2,"Supply does not exist"),c.Vb(),c.Vb())}let A=(()=>{class t{constructor(t,e,n,s){this.route=t,this.supplyService=e,this.dialog=n,this.router=s}ngOnInit(){this.route.paramMap.subscribe(t=>{const e=t.get("id");this.supplyService.getByID(e).subscribe(t=>{this.supply=t})})}onUpdate(t){this.router.navigateByUrl("/home/supply/update/"+t)}distribution(){this.router.navigateByUrl("/home/supply/distribution/"+this.supply.id)}onRemove(t){this.dialog.open(F.a,{context:{title:"Are you want to remove supply?",content:"Supply id: "+t}}).onClose.subscribe(e=>{e&&(this.supplyService.removeSupply(t),this.router.navigateByUrl("/home/supply"))})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(S.a),c.Qb(I),c.Qb(d.C),c.Qb(S.c))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-details-supply"]],decls:3,vars:2,consts:[["status","success",4,"ngIf","ngIfElse"],["noSup",""],["status","success"],[1,"col-4"],[1,"fas","fa-tv"],[1,"col-6"],[1,"fas","fa-exclamation"],[4,"ngIf"],[1,"row"],[1,"col-md-4","col-12"],["hero","","fullWidth","","nbButton","","shape","semi-round","status","info",3,"click"],[1,"fas","fa-edit"],["hero","","fullWidth","","nbButton","","shape","semi-round","status","danger",3,"click"],[1,"fas","fa-minus-circle"],[1,"fas","fa-door-closed"],[1,"col-8"],["status","danger"]],template:function(t,e){if(1&t&&(c.Fc(0,U,32,4,"nb-card",0),c.Fc(1,G,3,0,"ng-template",null,1,c.Gc)),2&t){const t=c.vc(2);c.nc("ngIf",null!=e.supply)("ngIfElse",t)}},directives:[s.n,d.o,d.q,d.n,d.N,d.O,d.p,d.l],encapsulation:2}),t})();function M(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"ID is required"),c.Vb())}function K(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc(" Supply ID at least ",null==t.form.get("id").errors?null:t.form.get("id").errors.minlength.requiredLength," characters ")}}function $(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc(" Supply ID at most ",null==t.form.get("id").errors?null:t.form.get("id").errors.maxlength.requiredLength," characters ")}}function X(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1," Supply ID is invalid "),c.Vb())}function _(t,e){if(1&t&&(c.Wb(0,"span",16),c.Fc(1,M,2,0,"span",17),c.Fc(2,K,2,1,"span",17),c.Fc(3,$,2,1,"span",17),c.Fc(4,X,2,0,"span",17),c.Vb()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",t.form.get("id").errors.required),c.Db(1),c.nc("ngIf",null==t.form.get("id").errors?null:t.form.get("id").errors.minlength),c.Db(1),c.nc("ngIf",null==t.form.get("id").errors?null:t.form.get("id").errors.maxlength),c.Db(1),c.nc("ngIf",null==t.form.get("id").errors?null:t.form.get("id").errors.pattern)}}function z(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"Name is required"),c.Vb())}function j(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc(" Name at least ",null==t.form.get("name").errors?null:t.form.get("name").errors.minlength.requiredLength," characters ")}}function Z(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc(" Name at most ",null==t.form.get("name").errors?null:t.form.get("name").errors.maxlength.requiredLength," characters ")}}function Y(t,e){if(1&t&&(c.Wb(0,"span",16),c.Fc(1,z,2,0,"span",17),c.Fc(2,j,2,1,"span",17),c.Fc(3,Z,2,1,"span",17),c.Vb()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",t.form.get("name").errors.required),c.Db(1),c.nc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.minlength),c.Db(1),c.nc("ngIf",null==t.form.get("id").errors?null:t.form.get("id").errors.maxlength)}}function tt(t,e){1&t&&(c.Wb(0,"span"),c.Hc(1,"Total is required"),c.Vb())}function et(t,e){if(1&t&&(c.Wb(0,"span"),c.Hc(1),c.Vb()),2&t){const t=c.hc(2);c.Db(1),c.Jc(" Total at min ",null==t.form.get("total").errors?null:t.form.get("total").errors.min.min," characters ")}}function nt(t,e){if(1&t&&(c.Wb(0,"span",16),c.Fc(1,tt,2,0,"span",17),c.Fc(2,et,2,1,"span",17),c.Vb()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",t.form.get("total").errors.required),c.Db(1),c.nc("ngIf",null==t.form.get("total").errors?null:t.form.get("total").errors.min)}}let st=(()=>{class t{constructor(t,e,n,s,o){this.supplyService=t,this.fb=e,this.router=n,this.dialog=s,this.toast=o}ngOnInit(){this.form=this.fb.group({id:["",[u.x.required,u.x.minLength(2),u.x.maxLength(10),u.x.pattern("^[0-9A-Z]{2,10}$")]],name:["",[u.x.required,u.x.maxLength(30)]],total:["",[u.x.required,u.x.min(1)]]})}addSupply(){this.supplyService.addSupply({id:this.form.get("id").value,name:this.form.get("name").value,total:this.form.get("total").value}).subscribe(t=>{this.toast.show("Create success","ADD",{status:"success"}),this.router.navigateByUrl("/home/supply/details/"+this.form.get("id").value)},t=>{this.dialog.open(F.a,{context:{title:"Error when create",content:t.error}})})}getConfig(t){return this.form.get(t).invalid&&this.form.get(t).touched}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(I),c.Qb(u.c),c.Qb(S.c),c.Qb(d.C),c.Qb(d.lb))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-add-supply"]],decls:33,vars:8,consts:[[1,"row"],[1,"col-md-12"],["novalidate","",3,"formGroup"],[1,"form-group","row"],["for","Id",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","id","nbInput","","fullWidth","","id","Id","placeholder","Supply ID",3,"status"],["class","text-danger",4,"ngIf"],["for","Name",1,"label","col-sm-3","col-form-label"],["type","text","formControlName","name","nbInput","","fullWidth","","id","Name","placeholder","Supply name",3,"status"],["for","Total",1,"label","col-sm-3","col-form-label"],["type","number","formControlName","total","nbInput","","fullWidth","","id","Total","placeholder","Supply total",3,"status"],[1,"col-md-4","col-12"],["nbButton","","fullWidth","","hero","","status","primary",3,"disabled","click"],[1,"offset-md-4","col-md-4","col-12"],["nbButton","","fullWidth","","hero","","status","danger",3,"click"],[1,"text-danger"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"nb-card"),c.Wb(3,"nb-card-header"),c.Hc(4,"TH\xcaM V\u1eacT T\u01af"),c.Vb(),c.Wb(5,"nb-card-body"),c.Wb(6,"form",2),c.Wb(7,"div",3),c.Wb(8,"label",4),c.Hc(9,"M\xe3 s\u1ed1 v\u1eadt t\u01b0: "),c.Vb(),c.Wb(10,"div",5),c.Rb(11,"input",6),c.Fc(12,_,5,4,"span",7),c.Vb(),c.Vb(),c.Wb(13,"div",3),c.Wb(14,"label",8),c.Hc(15,"T\xean v\u1eadt t\u01b0: "),c.Vb(),c.Wb(16,"div",5),c.Rb(17,"input",9),c.Fc(18,Y,4,3,"span",7),c.Vb(),c.Vb(),c.Wb(19,"div",3),c.Wb(20,"label",10),c.Hc(21,"S\u1ed1 l\u01b0\u1ee3ng: "),c.Vb(),c.Wb(22,"div",5),c.Rb(23,"input",11),c.Fc(24,nt,3,2,"span",7),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(25,"nb-card-footer"),c.Wb(26,"div",0),c.Wb(27,"div",12),c.Wb(28,"button",13),c.dc("click",function(){return e.addSupply()}),c.Hc(29,"TH\xcaM M\u1edaI"),c.Vb(),c.Vb(),c.Wb(30,"div",14),c.Wb(31,"button",15),c.dc("click",function(){return e.form.reset()}),c.Hc(32,"NH\u1eacP L\u1ea0I"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(6),c.nc("formGroup",e.form),c.Db(5),c.nc("status",e.getConfig("id")?"danger":"basic"),c.Db(1),c.nc("ngIf",e.getConfig("id")),c.Db(5),c.nc("status",e.getConfig("name")?"danger":"basic"),c.Db(1),c.nc("ngIf",e.getConfig("name")),c.Db(5),c.nc("status",e.getConfig("total")?"danger":"basic"),c.Db(1),c.nc("ngIf",e.getConfig("total")),c.Db(4),c.nc("disabled",e.form.invalid))},directives:[d.o,d.q,d.n,u.z,u.o,u.g,u.b,d.G,u.n,u.f,s.n,u.s,d.p,d.l],encapsulation:2}),t})();const ot=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-supply"]],decls:3,vars:0,template:function(t,e){1&t&&(c.Wb(0,"nb-layout"),c.Wb(1,"nb-layout-column"),c.Rb(2,"router-outlet"),c.Vb(),c.Vb())},directives:[d.J,d.I,S.h],encapsulation:2}),t})(),children:[{path:"",component:(()=>{class t{constructor(t,e,n){this.supplyService=t,this.router=e,this.route=n,this.settings={actions:{add:!1,edit:!1,delete:!1},columns:{id:{title:"ID",type:"string",filter:!0},name:{title:"T\xean v\u1eadt t\u01b0",type:"string",filter:!0},total:{title:"S\u1ed1 l\u01b0\u1ee3ng",type:"number",filter:!0}}},this.source=new o.a}ngOnInit(){this.loadSrc(),this.route.queryParams.subscribe(t=>{null!=t.search&&this.onSearch(t.search)})}loadSrc(){this.supplyService.List.subscribe(t=>{this.source.load(t)})}rowSelect(t){this.router.navigateByUrl("/home/supply/details/"+t.data.id)}onSearch(t){t.trim(),this.source.setFilter([{field:"id",search:t}],!1)}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(I),c.Qb(S.c),c.Qb(S.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["ngx-list-supplies"]],decls:5,vars:2,consts:[["accent","primary"],[3,"settings","source","userRowSelect"]],template:function(t,e){1&t&&(c.Wb(0,"nb-card",0),c.Wb(1,"nb-card-header"),c.Hc(2," DANH S\xc1CH V\u1eacT T\u01af "),c.Vb(),c.Wb(3,"nb-card-body"),c.Wb(4,"ng2-smart-table",1),c.dc("userRowSelect",function(t){return e.rowSelect(t)}),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(4),c.nc("settings",e.settings)("source",e.source))},directives:[d.o,d.q,d.n,o.b],encapsulation:2}),t})()},{path:"add",component:st},{path:"details/:id",component:A},{path:"update/:id",component:E},{path:"distribution/:id",component:R}]}];let rt=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[S.g.forChild(ot)],S.g]}),t})();var it=n("vTDv"),ct=n("CvZm");let at=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[s.c,rt,d.r,d.F,o.c,d.H,d.m,d.i,d.pb,d.db,d.Y,d.z,ct.a,d.k,u.h,u.u,d.P,it.a.forRoot(),d.M,d.fb.forRoot()]]}),t})()}}]);
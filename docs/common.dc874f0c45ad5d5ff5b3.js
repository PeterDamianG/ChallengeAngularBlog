(self.webpackChunkblog_angular=self.webpackChunkblog_angular||[]).push([[592],{8454:(t,e,a)=>{"use strict";a.d(e,{g:()=>_});var o=a(2789),i=a(1254),n=a(7716),r=a(8583),l=a(8295),s=a(9983),c=a(4655),u=a(9452);function m(t,e){}function p(t,e){1&t&&n.YNc(0,m,0,0,"ng-template")}function d(t,e){if(1&t&&(n.TgZ(0,"mat-header-cell"),n._uU(1),n.qZA()),2&t){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t)}}function f(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit,a=n.oxw().$implicit;n.xp6(1),n.hij(" ",t[a]," ")}}function g(t,e){1&t&&(n.ynx(0,12),n.YNc(1,d,2,1,"mat-header-cell",13),n.YNc(2,f,2,1,"mat-cell",14),n.BQk()),2&t&&n.s9C("matColumnDef",e.$implicit)}function h(t,e){1&t&&n._UZ(0,"mat-header-row")}function w(t,e){if(1&t&&n._UZ(0,"mat-row",15),2&t){const t=e.$implicit,a=n.oxw();n.Q6J("title",t.id?"Click me to get more information.":"")("routerLink",a.setURL(t.id))}}function C(t,e){if(1&t&&(n.TgZ(0,"tr",16),n.TgZ(1,"td",17),n._uU(2),n.qZA(),n.qZA()),2&t){n.oxw();const t=n.MAs(6);n.xp6(2),n.hij(' No data matching the filter "',t.value,'" ')}}function Z(t,e){1&t&&n._UZ(0,"app-not-found",18)}const y=function(){return[5,10,15,25]};let _=(()=>{class t{constructor(){this.displayedColumns=[],this.dataSource=[],this.useThisURL="",this.isLoading=!0}ngOnChanges(){this.dataSource=new o.by(this.dataSource),this.dataSource.paginator=this.paginator,this.dataSource.filteredData.length&&(this.isLoading=!1)}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}setURL(t){return this.useThisURL?`${this.useThisURL}/${t}`:t||null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-table-base"]],viewQuery:function(t,e){if(1&t&&n.Gf(i.NW,5),2&t){let t;n.iGM(t=n.CRH())&&(e.paginator=t.first)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",useThisURL:"useThisURL"},features:[n.TTD],decls:18,vars:8,consts:[[4,"ngIf","ngIfElse"],[1,"mat-elevation-z8","anim-opacity"],["appearance","standard"],["matInput","","placeholder","Write to filter.",3,"keyup"],["input",""],[1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],[4,"matHeaderRowDef"],[3,"title","routerLink",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["loading",""],[3,"matColumnDef"],[4,"matHeaderCellDef"],[4,"matCellDef"],[3,"title","routerLink"],[1,"mat-row"],["colspan","4",1,"mat-cell"],["titlePage","Loading . . .","content","We are looking for data."]],template:function(t,e){if(1&t&&(n.YNc(0,p,1,0,void 0,0),n.TgZ(1,"section",1),n.TgZ(2,"mat-form-field",2),n.TgZ(3,"mat-label"),n._uU(4,"Filter"),n.qZA(),n.TgZ(5,"input",3,4),n.NdJ("keyup",function(t){return e.applyFilter(t)}),n.qZA(),n.qZA(),n.TgZ(7,"mat-table",5),n.YNc(8,g,3,1,"ng-container",6),n.YNc(9,h,1,0,"mat-header-row",7),n.YNc(10,w,1,2,"mat-row",8),n.YNc(11,C,3,1,"tr",9),n.qZA(),n._UZ(12,"mat-paginator",10),n.qZA(),n._UZ(13,"br"),n._UZ(14,"br"),n._UZ(15,"hr"),n.YNc(16,Z,1,0,"ng-template",null,11,n.W1O)),2&t){const t=n.MAs(17);n.Q6J("ngIf",!e.isLoading)("ngIfElse",t),n.xp6(7),n.Q6J("dataSource",e.dataSource),n.xp6(1),n.Q6J("ngForOf",e.displayedColumns),n.xp6(1),n.Q6J("matHeaderRowDef",e.displayedColumns),n.xp6(1),n.Q6J("matRowDefColumns",e.displayedColumns),n.xp6(2),n.Q6J("pageSizeOptions",n.DdM(7,y))}},directives:[r.O5,l.KE,l.hX,s.Nt,o.BZ,r.sg,o.as,o.nj,o.Ee,i.NW,o.w1,o.fO,o.Dz,o.ge,o.ev,o.XQ,o.Gk,c.rH,u.w],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:2px solid #0000;border-top:2px solid #0000;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:currentColor}.mat-form-field[_ngcontent-%COMP%]{font-size:1.25em;width:100%}.anim-opacity[_ngcontent-%COMP%]{animation:opacityTitle 1.5s linear}@keyframes opacityTitle{0%{opacity:0}to{opacity:1}}"]}),t})()}}]);
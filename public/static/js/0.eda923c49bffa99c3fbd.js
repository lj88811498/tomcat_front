webpackJsonp([0],{hpIw:function(t,e){},j8T9:function(t,e){},nPE9:function(t,e){},v7ex:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("hxP8"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-logo"},[a("img",{attrs:{src:"/static/images/logo.74bab573.png",alt:""}}),t._v("\n    "+t._s(t.options.title)+"\n  ")]),t._v(" "),a("Menu",{ref:"mainMenu",class:t.menuitemClasses,attrs:{"active-name":t.setActiveUrl.childName,"open-names":t.setActiveUrl.parentName,theme:"dark",width:"auto",accordion:""},on:{"on-select":t.changeUrl}},[t._l(t.options.data,function(e){return e.isParent?a("Submenu",{key:e.navId,staticClass:"menu-item-li",attrs:{name:e.navId}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:e.icon}}),t._v("\n        "+t._s(e.label)+"\n      ")],1),t._v(" "),t._l(e.children,function(e){return a("MenuItem",{key:e.navId,staticClass:"menu-item-submenu",attrs:{name:e.frontUrl}},[t._v("\n        "+t._s(e.label)+"\n      ")])})],2):t._e()}),t._v(" "),t._l(t.options.data,function(e){return e.isParent?t._e():a("MenuItem",{key:e.navId,staticClass:"menu-item-noSubmenu",attrs:{name:e.frontUrl}},[a("Icon",{attrs:{type:e.icon}}),t._v(" "),a("span",[t._v(t._s(e.label))])],1)})],2)],1)},staticRenderFns:[]};var s=a("VU/8")({name:"NavsBar",props:["options"],data:function(){return{}},created:function(){},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]},setActiveUrl:function(){var t=this.$props.options.data;return this.$store.getters.setActiveUrl(t)}},methods:{changeUrl:function(t){this.$router.push({path:t}),this.$store.commit("activeUrl",t)}}},n,!1,function(t){a("nPE9")},"data-v-7a109140",null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Footer",{staticClass:"layout-footer-bar cl"},[e("div",{staticClass:"copyRights"},[this._v("\n    "+this._s(this.copyRights.rights)+"\n    "),e("a",{attrs:{href:this.copyRights.href,target:"_blank"}},[this._v(this._s(this.copyRights.company))])])])},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{copyRights:{rights:"© 2018 ",company:"优易数据",href:"http://www.youedata.cn/"}}}},o,!1,function(t){a("j8T9")},"data-v-22ce1bfa",null).exports,l={name:"Layouts",components:{Header:r.a,Navs:s,Footer:i},data:function(){return{isCollapsed:!1,navsOptions:{title:"政务数据交换平台",authority:sessionStorage.getItem("authority"),data:[{navId:9,label:"系统概览",icon:"md-speedometer",isParent:!0,childrenUrl:["/nodeOverview","/logging"],authority:["admin","security","auditor","user","assessor"],children:[{navId:91,label:"节点概览",frontUrl:"/nodeOverview",authority:["admin","security","auditor","user","assessor"]},{navId:92,label:"登录日志",frontUrl:"/logging",authority:["admin","security","auditor","user","assessor"]},{navId:93,label:"系统通知",frontUrl:"/systemNotification",authority:["user","security","assessor"]}]},{navId:1,label:"数据资源管理",icon:"logo-buffer",isParent:!0,childrenUrl:["/source","/catalog","/sourceAudit","/catalogAudit","/subscriptionAudit"],authority:["user","assessor"],children:[{navId:11,label:"资源管理",frontUrl:"/source",authority:["user"]},{navId:12,label:"目录管理",frontUrl:"/catalog",authority:["user"]},{navId:13,label:"资源审核",frontUrl:"/sourceAudit",authority:["assessor"]},{navId:14,label:"目录审核",frontUrl:"/catalogAudit",authority:["assessor"]},{navId:15,label:"订阅授权",frontUrl:"/subscriptionModeration",authority:["assessor"]}]},{navId:2,label:"资源交换管理",icon:"md-sync",isParent:!0,childrenUrl:["/sourceSubscription","/allSub","/sourceManagement","/sourceManagementAudit"],authority:["user","assessor"],children:[{navId:21,label:"资源集市",frontUrl:"/sourceSubscription",authority:["user"]},{navId:22,label:"所有订阅",frontUrl:"/allSub",authority:["user"]},{navId:23,label:"资源管理",frontUrl:"/resourceManagement",authority:["user"]},{navId:24,label:"订阅授权",frontUrl:"/subscriptionModeration1",authority:["assessor"]}]},{navId:3,label:"审计管理",icon:"md-create",isParent:!0,childrenUrl:["/logging","/operation"],authority:["auditor"],children:[{navId:31,label:"登录审计",frontUrl:"/logging",authority:["auditor"]},{navId:32,label:"操作审计",frontUrl:"/operation",authority:["auditor"]}]},{navId:4,label:"机构用户管理",icon:"md-people",isParent:!0,childrenUrl:["/userManage","/assignRole"],authority:["admin","security"],children:[{navId:41,label:"用户管理",frontUrl:"/userManage",authority:["admin"]},{navId:42,label:"分配角色",frontUrl:"/assignRole",authority:["security"]}]}]}}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Layout",[e("Content",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,u,!1,function(t){a("hpIw")},"data-v-c7fc9cd4",null);e.default=c.exports}});
//# sourceMappingURL=0.eda923c49bffa99c3fbd.js.map
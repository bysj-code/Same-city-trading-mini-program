(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinfenlei/add-or-update"],{3969:function(e,n,t){"use strict";t.r(n);var r=t("8582"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"44c4":function(e,n,t){"use strict";t.r(n);var r=t("ea6f"),a=t("3969");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("925b");var u,s=t("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"ffaad828",null,!1,r["a"],u);n["default"]=o.exports},"6abf":function(e,n,t){},8582:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var s=e[i](u),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function s(e){i(u,r,a,s,o,"next",e)}function o(e){i(u,r,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("a3d7"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{shangpinfenlei:""},user:{},ro:{shangpinfenlei:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,s,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("shangpinfenlei",t.ruleForm.id);case 11:u=a.sent,t.ruleForm=u.data;case 13:if(t.cross=n.cross,!n.cross){a.next=25;break}s=e.getStorageSync("crossObj"),a.t0=r.default.keys(s);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(o=a.t1.value,"shangpinfenlei"!=o){a.next=23;break}return t.ruleForm.shangpinfenlei=s[o],t.ro.shangpinfenlei=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:t.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,s,o,c,f,l,d,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.shangpinfenlei){t.next=3;break}return n.$utils.msg("商品分类不能为空"),t.abrupt("return");case 3:if(!n.cross){t.next=19;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=19;break}if(c=e.getStorageSync("crossObj"),s.startsWith("[")){t.next=15;break}for(f in c)f==s&&(c[f]=o);return l=e.getStorageSync("crossTable"),t.next=13,n.$api.update("".concat(l),c);case 13:t.next=19;break;case 15:a=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!a){t.next=41;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=25,n.$api.list("shangpinfenlei",d);case 25:if(g=t.sent,!(g.data.total>=u)){t.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!n.ruleForm.id){t.next=36;break}return t.next=34,n.$api.update("shangpinfenlei",n.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,n.$api.add("shangpinfenlei",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!n.ruleForm.id){t.next=46;break}return t.next=44,n.$api.update("shangpinfenlei",n.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,n.$api.add("shangpinfenlei",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("5486")["default"])},"925b":function(e,n,t){"use strict";var r=t("6abf"),a=t.n(r);a.a},ea6f:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ffa5:function(e,n,t){"use strict";(function(e){t("177c");r(t("66fd"));var n=r(t("44c4"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("5486")["createPage"])}},[["ffa5","common/runtime","common/vendor"]]]);
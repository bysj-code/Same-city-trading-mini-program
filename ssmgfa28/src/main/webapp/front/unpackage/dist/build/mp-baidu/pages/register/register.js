(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0bef":function(e,n,r){"use strict";r.r(n);var t=r("6fd4"),a=r.n(t);for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);n["default"]=a.a},"46c0":function(e,n,r){"use strict";(function(e){r("177c");t(r("66fd"));var n=t(r("8319"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("5486")["createPage"])},"6fd4":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,t,a,u,i){try{var o=e[u](i),s=o.value}catch(l){return void r(l)}o.done?n(s):Promise.resolve(s).then(t,a)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){u(i,t,a,o,s,"next",e)}function s(e){u(i,t,a,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return i(t.default.mark((function r(){var a;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],a=e.getStorageSync("loginTable"),n.tableName=a,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),n.styleChange();case 5:case"end":return r.stop()}}),r)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.shangjiamingcheng||"shangjia"!=e.tableName){n.next=3;break}return e.$utils.msg("商家名称不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"shangjia"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("shangjia"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if(e.ruleForm.lianxidianhua||"shangjia"!=e.tableName){n.next=12;break}return e.$utils.msg("联系电话不能为空"),n.abrupt("return");case 12:if("shangjia"!=e.tableName||!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){n.next=15;break}return e.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 15:if("shangjia"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=18;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 18:if("shangjia"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=21;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 21:if(e.ruleForm.yonghuzhanghao||"yonghu"!=e.tableName){n.next=24;break}return e.$utils.msg("用户账号不能为空"),n.abrupt("return");case 24:if(e.ruleForm.yonghuxingming||"yonghu"!=e.tableName){n.next=27;break}return e.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 27:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=30;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 30:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=33;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 33:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=36;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 36:if("yonghu"!=e.tableName||!e.ruleForm.shoujihao||e.$validate.isMobile(e.ruleForm.shoujihao)){n.next=39;break}return e.$utils.msg("手机号应输入手机格式"),n.abrupt("return");case 39:if("yonghu"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=42;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 42:return n.next=44,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 44:e.$utils.msgBack("注册成功");case 46:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,r("5486")["default"])},"7cf5":function(e,n,r){"use strict";var t=r("f38f"),a=r.n(t);a.a},8319:function(e,n,r){"use strict";r.r(n);var t=r("d478"),a=r("0bef");for(var u in a)"default"!==u&&function(e){r.d(n,e,(function(){return a[e]}))}(u);r("7cf5"),r("d93c");var i,o=r("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"09aa9a3a",null,!1,t["a"],i);n["default"]=s.exports},"85cf":function(e,n,r){},d478:function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},d93c:function(e,n,r){"use strict";var t=r("85cf"),a=r.n(t);a.a},f38f:function(e,n,r){}},[["46c0","common/runtime","common/vendor"]]]);
webpackJsonp([34],{250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(363),o=r(i),s=n(364),d=r(s);n(448);var a=n(68),p=r(a),u=function(){function e($scope,RS,Layer,Core,$state){(0,o.default)(this,e),this.S=$scope,this.RS=RS,this.L=Layer,this.$S=$state,this.C=Core,$scope.rules={pwd:{required:!0,reg:null,message:""},new_pwd:{required:!0,reg:null,message:""},r_new_pwd:{required:!0,reg:null,message:"与新密码输入不一致!"}},$scope.form={pwd:"",new_pwd:"",r_new_pwd:""},this.S.modifyLoginPwd=this.modifyLoginPwd.bind(this),this.getStrengthPwd()}return(0,d.default)(e,[{key:"getStrengthPwd",value:function(){var e=this;this.RS.needCode().then(function(t){if(200==t.code){var n=t.data;e.S.rules.pwd.reg=1==n.strength_pwd?/^(?![^a-zA-Z]+$)(?!\D+$).{6,12}/:/^\w{6,12}$/,e.S.rules.pwd.message=1==n.strength_pwd?"请输入6~12位密码,至少包含一个字母和一个数字，不能包含汉字和空格":"请输入6~12位密码，不能包含汉字和空格",e.S.rules.new_pwd.reg=1==n.strength_pwd?/^(?![^a-zA-Z]+$)(?!\D+$).{6,12}/:/^\w{6,12}$/,e.S.rules.new_pwd.message=1==n.strength_pwd?"新密码,至少包含一个字母和一个数字的6~12位，不能包含汉字和空格":"新密码不能包含汉字和空格"}})}},{key:"modifyLoginPwd",value:function(){var e=this;if(this.S.rules.r_new_pwd.reg=new RegExp(this.S.form.new_pwd,"i"),!this.C.valiForm(this.S.form,this.S.rules))return!1;this.S.form.pwd=(0,p.default)(this.S.form.pwd),this.S.form.new_pwd=(0,p.default)(this.S.form.new_pwd),this.RS.changeLoginPwd({pwd:this.S.form.pwd,new_pwd:this.S.form.new_pwd}).then(function(t){200==t.code?(e.S.form={},e.C.setToken(t.data.token),e.L.toast("修改成功",1,function(){e.$S.go("tabs.my")})):(e.L.toast(t.msg),e.S.form.pwd="",e.S.form.new_pwd="",e.S.form.r_new_pwd="")})}}]),e}();t.default=u},324:function(e,t){e.exports='<iheader> <back></back> <h1 class=title>修改登录密码</h1> </iheader> <content class=modify-money-pwd> <div class="fs14 m-t10"> <input type=password style=position:absolute;top:-999px /> <div class="item-input-wrapper bg-white"> <span>旧密码</span> <input type=password name=pwd ng-model=form.pwd placeholder=请输入旧密码> </div> <div class="item-input-wrapper mt-8 bg-white"> <span>新密码</span> <input type=password name=new_pwd ng-model=form.new_pwd placeholder=请输入新密码> </div> <div class="item-input-wrapper mt-8 bg-white"> <span>确认新密码</span> <input type=password name=r_new_pwd ng-model=form.r_new_pwd placeholder=请再次确认密码> </div> <p class="m-t20 m-b20 text-center fs12"> 请输入 <span class=main-color>6~12</span> 位密码，至少包含一个字母和一个数字 </p> <div class=register-form-submit-btn> <button class="block text-center white-text radius5 main-bg fs14" ng-click=modifyLoginPwd()> 确 认 </button> </div> </div> </content> '},363:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},364:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(365),o=r(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},365:function(e,t,n){e.exports={default:n(366),__esModule:!0}},366:function(e,t,n){n(367);var r=n(11).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},367:function(e,t,n){var r=n(15);r(r.S+r.F*!n(21),"Object",{defineProperty:n(20).f})},413:function(e,t,n){t=e.exports=n(224)(),t.push([e.i,".login-pass-div{background-color:#fff;border-radius:.3rem}.content-white{padding:2.5rem 1rem .5rem;background-color:#f5f5fa}.content-white .list{padding:.8rem}.content-white .item-input-inset{border-bottom:1px solid #eaeaea;padding:.5rem .4rem}.content-white .item-input-inset:last-child{border:none}.content-white .register-tips{font-size:.56rem;color:#a0a0a0}.content-white .register-form-submit-btn .button{border:none;color:#444;width:100%;height:2.4rem;margin-top:1.2rem;font-size:.8rem}.content-white .item-input-inset .input-label{font-size:.8rem}.content-white .item-input-inset input{margin-left:.5rem;font-size:.7rem;margin-top:.1rem}.content-white .register-form-submit-btn{background-color:#eee}.register-form-submit-btn .button-able{background:#d91d36;color:#fff!important}",""])},448:function(e,t,n){var r=n(413);"string"==typeof r&&(r=[[e.i,r,""]]);n(225)(r,{});r.locals&&(e.exports=r.locals)}});
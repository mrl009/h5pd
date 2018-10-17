webpackJsonp([29],{276:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var n=e(363),i=s(n),l=e(364),c=s(l);e(456);var o=e(4),r=s(o),d=e(128),p=function(){function t($scope,Core,Layer,DB,$state,RS,DT){(0,i.default)(this,t),this.$scope=$scope,this.Core=Core,this.Layer=Layer,this.DB=DB,this.DT=DT,this.$state=$state,this.RS=RS,$scope.copyUrl=this.copyUrl.bind(this),$scope.setBankStyle=this.setBankStyle.bind(this),$scope.topUp=this.topUp.bind(this),$scope.items={},this.init()}return(0,c.default)(t,[{key:"init",value:function(){var t=this;this.DB.getItem("bankData").then(function(a){switch(t.$scope.items=a,t.$scope.data={money:a.money,id:a.id,time:t.DT.dtToString(new Date,"-",!0),code:a.code,from_way:a.from_way,name:""},a.type){case"bank":t.$scope.data.bank_style=1;break;case"zfb":t.$scope.data.bank_style=6;break;case"wx":t.$scope.data.bank_style=7;break;default:t.$scope.data.bank_style=2==a.jump_mode?5:0}})}},{key:"topUp",value:function(){var t=this;return this.$scope.data.money<=0?(this.Layer.toast("请输入充值金额"),!1):""==this.$scope.data.name?(this.Layer.toast("请输入存款人姓名"),!1):2!=this.$scope.items.jump_mode&&0==this.$scope.data.bank_style?(this.Layer.toast("请选择充值方式!"),!1):void this.RS.payDo(this.$scope.data).then(function(a){var e=r.default.fromJson(a);200==e.code?t.Layer.toast("提交成功!",1,function(){t.$state.go("topUpFinish")}):t.Layer.toast(e.msg)})}},{key:"setBankStyle",value:function(t){this.$scope.data.bank_style=t}},{key:"copyUrl",value:function(t,a){var e=this;(0,d.copy)("."+t,"#"+a,function(){e.Layer.toast("复制成功",1)})}}]),t}();a.default=p},350:function(t,a){t.exports='<iheader> <back></back> <h1 class=title>充值</h1> </iheader> <content class="topupTwo fs14"> <div class=box> <p class="title fs12 pd-l10">收款银行账户资料</p> <div class="bank-info bg-white pd-l10"> <div class="row flex-middle"> <div class=col-25>银行:</div> <div class="light-gray col-60"> <input class="bank-input bg-gray" value={{items.bank_name}} id=bank_name ng-readonly=true /> </div> <div class="col-15 text-center cpbank" ng-click="copyUrl(\'cpbank\', \'bank_name\')"> <span class="radius5 bg-blue white-text copy-btn no-wrap">复制</span> </div> </div> <div class="row flex-middle"> <div class=col-25>收款人：</div> <div class="light-gray col-60"> <input class="bank-input bg-gray" value={{items.user}} id=user ng-readonly=true> </div> <div class="col-15 text-center cpman" ng-click="copyUrl(\'cpman\', \'user\')"> <span class="radius5 bg-blue white-text copy-btn no-wrap">复制</span> </div> </div> <div class="row flex-middle"> <div class="col col-25">账号：</div> <div class="light-gray col-60"> <input class="bank-input bg-gray" value={{items.num}} id=num ng-readonly=true> </div> <div class="col-15 text-center cpacct" ng-click="copyUrl(\'cpacct\', \'num\')"> <span class="radius5 bg-blue white-text copy-btn no-wrap">复制</span> </div> </div> <div class="row flex-middle"> <div class="col col-25">开户网点：</div> <div class="light-gray col-60"> <input class="bank-input bg-gray" value={{items.card_address}} id=card_address ng-readonly=true> </div> <div class="col-15 text-center cpbran" ng-click="copyUrl(\'cpbran\', \'card_address\')"> <span class="radius5 bg-blue white-text copy-btn no-wrap">复制</span> </div> </div> </div> <p class="title fs12 pd-l10">填写您的转账资料</p> <div class="transfer-form bg-white"> <p class="row flex-middle"> <span class="col-25 col-center">存入时间</span> <input class="col col-70 light-gray warn-color" ng-disabled=true value={{data.time}}> </p> <p class="row flex-middle"> <span class="col-25 col-center">存入金额</span> <input class="col col-70 light-gray warn-color" value={{data.money}} ng-disabled=true> </p> <p class="row flex-middle"> <span class="col-25 col-center">存款人姓名</span> <input class="col col-70 light-gray" placeholder=输入存款人 ng-model=data.name> </p> <div id=bank_style ng-if="items.type == \'bank\' || items.jump_mode == 2"> <div class="row button-list"> <div class="col col-50 flex-middle" ng-click=setBankStyle(1)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 1}">&#xe60a;</i> <span>网银转帐</span> </div> <div class="col col-50 flex-middle" ng-click=setBankStyle(3)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 3}">&#xe60a;</i> <span>ATM现金入款</span> </div> </div> <div class="row button-list"> <div class="col col-50 text-center flex-middle" ng-click=setBankStyle(4)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 4}">&#xe60a;</i> <span>银行柜台</span> </div> <div class="col col-50 text-center flex-middle" ng-click=setBankStyle(5)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 5}">&#xe60a;</i> <span>手机转帐</span> </div> </div> <div class="row button-list"> <div class="col col-50 text-center flex-middle" ng-click=setBankStyle(6)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 6}">&#xe60a;</i> <span>支付宝转帐</span> </div> <div class="col col-50 text-center flex-middle" ng-click=setBankStyle(7)> <i class="iconfont m-r5" ng-class="{\'main-color\':data.bank_style == 7}">&#xe60a;</i> <span>微信转帐</span> </div> </div> </div> </div> <a class="btn main-bg block white text-center" ng-click=topUp()>我已支付</a> </div> </content> '},363:function(t,a,e){"use strict";a.__esModule=!0,a.default=function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}},364:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var n=e(365),i=s(n);a.default=function(){function t(t,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,i.default)(t,s.key,s)}}return function(a,e,s){return e&&t(a.prototype,e),s&&t(a,s),a}}()},365:function(t,a,e){t.exports={default:e(366),__esModule:!0}},366:function(t,a,e){e(367);var s=e(11).Object;t.exports=function(t,a,e){return s.defineProperty(t,a,e)}},367:function(t,a,e){var s=e(15);s(s.S+s.F*!e(21),"Object",{defineProperty:e(20).f})},421:function(t,a,e){a=t.exports=e(224)(),a.push([t.i,".topupTwo p{margin:.4rem 0!important}.topupTwo .bank-info{padding:.8rem 0 .4rem .4rem}.topupTwo .bank-info .row{margin-bottom:.5rem}.topupTwo .bank-info .row .col-60{height:1.3rem}.topupTwo .bank-input{width:95%;height:100%;padding-left:8px}.topupTwo .transfer-form{padding:.8rem .4rem .4rem}.topupTwo .transfer-form input{border:1px solid #ddd}.topupTwo a.btn{margin:0 .2rem;text-align:center;color:#fff;padding:.5rem 0;border-radius:.2rem}.topupTwo #bank_style{border-top:1px solid #ddd;margin-top:.5rem}",""])},456:function(t,a,e){var s=e(421);"string"==typeof s&&(s=[[t.i,s,""]]);e(225)(s,{});s.locals&&(t.exports=s.locals)}});
webpackJsonp([52],{273:function(a,t,e){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(t,"__esModule",{value:!0});var n=e(127),s=i(n),o=e(14),c=i(o),d=e(363),p=i(d),l=e(364),r=i(l),y=function(){function a($scope,Core,$sce,Layer,DB,$timeout,$state,RS){(0,p.default)(this,a),this.S=$scope,this.C=Core,this.$S=$sce,this.L=Layer,this.DB=DB,this.$T=$timeout,this.$state=$state,this.RS=RS,$scope.moneyArr=[50,100,300,500,800,1e3,2e3,3e3],$scope.paycard={card_pwd:""},$scope.pay={money:""},$scope.lock=!1,$scope.payList=[],this.S.lock=!1,$scope.payIndex=null,this.init(),$scope.changeMoney=this.changeMoney.bind(this),$scope.okAlert=this.okAlert.bind(this),$scope.paySelect=this.paySelect.bind(this),$scope.filter=this.filter.bind(this)}return(0,r.default)(a,[{key:"init",value:function(){var a=this;this.RS.payMethod().then(function(t){200==t.code&&(a.S.user=t.data.user,a.S.payList=t.data.zhifu||[],a.S.bomb_box=t.data.is_bomb_box.bomb_box,a.S.html=a.$S.trustAsHtml(t.data.is_bomb_box.bomb_box),a.S.gg=a.S.html?a.L.popupFromUrl("topUpAlert.html",{scope:a.S}):null)})}},{key:"filter",value:function(){/\D/g.test(this.S.pay.money)&&(this.S.pay.money=this.S.pay.money||"",this.S.pay.money=this.S.pay.money.replace(/[^\d{1,}\.\d{1,}|\d{1,}]|^0{1,}\d{1,}|[\,,\|,\{,\}]{1,}/g,""),this.S.pay.money.indexOf(".")>-1&&""!=this.S.pay.money.split(".")[1]&&this.S.pay.money.split(".")[1].length>2&&(this.S.pay.money=parseFloat(parseInt(100*this.S.pay.money)/100)))}},{key:"okAlert",value:function(){this.S.gg&&this.S.gg.close()}},{key:"changeMoney",value:function(a){this.S.pay.money=parseFloat(a)}},{key:"paySelect",value:function(a,t,e,i){if(!this.S.lock){this.lock(),this.S.payIndex=i,this.S.pay.type=t,this.S.pay.name=a,this.S.type=t,this.S.catm={catm_min:e.catm_min,catm_max:e.catm_max};var n=this.S.type?"set"+(this.S.type.charAt(0).toUpperCase()+this.S.type.slice(1)):"set";this[n]&&this[n](e),!this[n]&&this.setOther(e),this.topUp()}}},{key:"lock",value:function(){var a=this;a.S.lock=!0,a.$T(function(){a.S.lock=!1},500)}},{key:"setCard",value:function(a){this.S.data={id:a.id,code:a.code,jump_mode:a.jump_mode,is_confirm:a.is_confirm,card_pwd:this.S.paycard.card_pwd,from_way:4}}},{key:"setWy",value:function(a){this.S.data={money:parseFloat(this.S.pay.money),id:a.id,code:a.code,jump_mode:a.jump_mode,is_confirm:a.is_confirm,qrcode:a.qrcode,bank_type:a.bank_type,from_way:4}}},{key:"setBank",value:function(a){this.S.data={type:this.S.pay.type,money:parseFloat(this.S.pay.money),name:this.S.pay.name,id:a.id,code:a.code,jump_mode:a.jump_mode,is_confirm:a.is_confirm,qrcode:a.qrcode,bank_name:a.bank_name,user:a.name,card_address:a.card_address,num:a.num,bank_style:"",from_way:4}}},{key:"setOther",value:function(a){this.S.data={type:this.S.pay.type,name:this.S.pay.name,money:parseFloat(this.S.pay.money),id:a.id,code:a.code,jump_mode:a.jump_mode,is_confirm:a.is_confirm,qrcode:a.qrcode,from_way:4,bank_name:a.bank_name,card_address:a.card_address,user:a.name,num:a.num}}},{key:"topUp",value:function(){var a=this;return this.S.data&&this.S.data.id?(this.S.data.money=""===this.S.data.money?0:this.S.data.money,!this.S.data.money||this.S.data.money<0?(this.L.toast("请输入充值金额",1),!1):this.S.data.money<this.S.catm.catm_min?(this.L.toast("最少充值金额为"+this.S.catm.catm_min+"元",1),!1):this.S.data.money>this.S.catm.catm_max?(this.L.toast("该方式充值上限为"+this.S.catm.catm_max+"元",1),!1):"bank"==this.S.type||2==this.S.data.jump_mode?(this.DB.saveData({key:"bankData",data:(0,c.default)(this.S.data)},function(){a.$state.go("topupTwo")}),!1):void(4==this.S.data.jump_mode?(this.S.data.confirm="",this.S.data.title=this.S.data.name+"好友转账支付",this.DB.saveData({key:"payData",data:(0,c.default)(this.S.data)},function(){a.$state.go("wxAccount")})):this.RS.payDo(this.S.data).then(function(t){if(200==t.code){var e=t.data;if(a.S.data.money=e.money,"card"==a.S.pay.type)return a.L.toast("充值成功",1,function(){a.$state.go("tab.my")}),!1;if(3==e.jump)return a.S.data.title=a.S.data.name+"-扫码支付",a.S.data.jump=e.jump,a.DB.saveData({key:"payData",data:(0,c.default)((0,s.default)(a.S.data,e))},function(){a.$state.go("wxAccount")}),!1;if(5==e.jump)return window.location.href=e.url,!1;a.DB.saveData({key:"payData",data:(0,c.default)(e)},function(){a.$state.go("topUpConfirm")})}else a.L.toast(t.msg,1)}))):(this.L.toast("请选择充值方式",1),!1)}}]),a}();t.default=y},347:function(a,t){a.exports='<iheader> <back></back> <h1 class=title>充值</h1> </iheader> <content class=top-up> <div class=account-area> <span>余额：<span class="balance-num warn-color">{{user.balance}}</span></span> </div> <div class=input-area> <div class="flex-middle pd-l10"> <span class=col-center>充值金额：</span> <textarea class=money-box rows=1 cols=20 placeholder=输入金额 ng-model=pay.money ng-change=filter()></textarea> </div> <hr class=hr> <div class=moneylist> <ul class="clearfix fs14 text-center"> <li ng-repeat="v in moneyArr" ng-class="{true: \'main-w\', false: \'invert-active\'}[v == pay.money]" ng-click=changeMoney(v) select="{{v == pay.money}}">{{v}}元</li> </ul> </div> </div> <div class=account-area> <span>请选择支付方式</span> </div> <slide-tabs auto-hide=true needwrap=true> <slide-tab ng-repeat="pay in payList" bar-title={{pay.name}} type={{pay.type}}> <div class="rows tab-list-content" ng-repeat="i in pay.list track by $index" ng-if="pay.type != \'bank\' && pay.type != \'wy\' && pay.type != \'card\'" ng-click="paySelect(pay.name, pay.type, i, $index)"> <label class=item-radio> <input type=radio name=group value={{i.id}}> <div class="pay item-content flex-space"> <div class="fl flex-middle"> <img ng-src={{i.img}}> <div> <span ng-class="{\'main-color\': $index == payIndex}">{{i.title}}</span> <p>{{i.Prompt}}</p> </div> </div> <i class=iconfont>&#xe61c;</i> </div> <i class="radio-icon disable-pointer-events ion-ios-checkmark"></i> </label> </div> <div class=rows ng-repeat="i in pay.list track by $index" ng-if="pay.type == \'wy\'" ng-click="paySelect(pay.name, pay.type, i, $index)"> <label class=item-radio> <span class=item ng-class="{\'main-color\': $index == payIndex}">{{i.name}}</span> </label> </div> <div class="rows tab-list-content" ng-repeat="i in pay.list track by $index" ng-if="pay.type==\'bank\'" ng-click="paySelect(pay.name, pay.type, i, $index)"> <label class=item-radio> <input type=radio name=group value={{i.id}}> <div class="pay item-content row" ng-class="{\'main-color\': $index == payIndex}"> <div class=width100> <div class=flex-box> <p class="item col-25">银行</p> <p class="item bank_name col-75">{{i.bank_name}}</p> </div> <div class=flex-box> <p class="item col-25">收款人</p> <p class="item user col-75">{{i.name}}</p> </div> <div class=flex-box> <p class="item col-25">开户行</p> <p class="item card_address col-75">{{i.card_address}}</p> </div> <div class=flex-box> <p class="item col-25">卡号</p> <p class="item num col-75">{{i.num}}</p> </div> </div> </div> </label> </div> <div class="rows tab-list-content" ng-repeat="i in pay.list track by $index" ng-if="pay.type==\'card\'"> <div class=card-input-area> <label class="item item-input"> <span style=display:none type={{pay.type}} name={{pay.name}} pid={{i.id}} code={{i.code}} jump_mode={{i.jump_mode}} is_confirm={{i.is_confirm}}> </span> <span class=input-label ng-class="{\'main-color\': $index == payIndex}">卡密</span> <input class=card-input type=text id=card_pwdtext placeholder=请输入您的卡密 ng-model=paycard.card_pwd> </label> </div> </div> <div class=pay-btn-wrap> <a ng-if="pay.type==\'card\'" class="button button-big button-fill" ng-repeat="i in pay.list" type={{x.type}} pid={{i.id}} code={{i.code}} ng-click="paySelect(pay.type, pay.name, i)">提交 </a> </div> </slide-tab> </slide-tabs> </content> <script id=topUpAlert.html type=text/ng-template> <div class="topup-alert">\n        <div class="topup-alert-title">\n            <span class="fs20">公 告</span>\n        </div>\n        <hr>\n        <div class="topup-alert-content fs14" ng-bind-html="html"></div>\n        <button class="topup-alert-button main-bg" ng-click="okAlert()">朕已阅</button>\n    </div> <\/script> '},363:function(a,t,e){"use strict";t.__esModule=!0,t.default=function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}},364:function(a,t,e){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}t.__esModule=!0;var n=e(365),s=i(n);t.default=function(){function a(a,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,s.default)(a,i.key,i)}}return function(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}}()},365:function(a,t,e){a.exports={default:e(366),__esModule:!0}},366:function(a,t,e){e(367);var i=e(11).Object;a.exports=function(a,t,e){return i.defineProperty(a,t,e)}},367:function(a,t,e){var i=e(15);i(i.S+i.F*!e(21),"Object",{defineProperty:e(20).f})}});
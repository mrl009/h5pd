webpackJsonp([47],{226:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(363),a=n(i),c=s(364),o=n(c),r=function(){function t($scope,RS,$state,Layer,Core){(0,a.default)(this,t),this.$scope=$scope,this.$state=$state,this.$RS=RS,this.Layer=Layer,this.Core=Core,$scope.data={username:""},$scope.page=1,$scope.items=[],$scope.getAccountList=this.getAccountList.bind(this),$scope.refresh=this.refresh.bind(this),$scope.more=this.more.bind(this),this.init()}return(0,o.default)(t,[{key:"init",value:function(){var t=this;this.$RS.getAuditStatus().then(function(e){200==e.code?e.data.status?t.getAccountList():t.$state.go("tabs.my"):t.Layer.toast(e.msg)})}},{key:"getAccountList",value:function(t,e){var s=this,n={username:this.$scope.data.username,page:t||this.$scope.page};return this.$RS.getAccountList(n).then(function(t){return 200==t.code&&void 0==e&&(s.$scope.items=t.data.rows),t})}},{key:"more",value:function(){var t=this;return this.getAccountList(this.$scope.page+1,!0).then(function(e){t.$scope.page+=1,t.$scope.items=t.$scope.items.concat(e.data.rows)})}},{key:"refresh",value:function(){return this.$scope.page=1,this.getAccountList()}}]),t}();e.default=r},300:function(t,e,s){t.exports='<iheader> <back></back> <h1 class=title>账户明细</h1> <a class="icon pull-right white fs14" href=/question/8> 代理说明 </a> </iheader> <content class=account> <div class=search-box> <input class=input-search type=text placeholder=请输入用户名 ng-model=data.username /> <button class="button button-background fr main-bg border-color" ng-click=getAccountList()>搜索</button><br> </div> <div class=container> <div class="member-lack-bet-record text-center" ng-if="items && !items.length"> <img src='+s(400)+'> </div> <div class=list ng-if=items.length pull-refresh refresh=refresh() load-more=more()> <div class=row ng-repeat="item in items"> <div class=col> <span class="block text-left"> {{item.username}} </span> <span class="block text-left fs16"> {{item.addtime}} </span> </div> <div class=col> <span class="block text-right"> {{item.name}} </span> <span class="block assertive text-right main-color"> {{item.amount}}元 </span> </div> </div> </div> </div> </content> '},363:function(t,e,s){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},364:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=s(365),a=n(i);e.default=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,a.default)(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}()},365:function(t,e,s){t.exports={default:s(366),__esModule:!0}},366:function(t,e,s){s(367);var n=s(11).Object;t.exports=function(t,e,s){return n.defineProperty(t,e,s)}},367:function(t,e,s){var n=s(15);n(n.S+n.F*!s(21),"Object",{defineProperty:s(20).f})},400:function(t,e,s){t.exports=s.p+"img/member-lack-box.png"}});
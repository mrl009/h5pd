webpackJsonp([35],{245:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(14),r=n(a),i=s(363),o=n(i),l=s(364),c=n(l);s(445);var u=function(){function e($scope,RS,Layer,CS,Sx){(0,o.default)(this,e),this.$scope=$scope,this.RS=RS,this.L=Layer,this.CS=CS,this.SX=Sx,$scope.param={money:"",zr:0},this.init(),$scope.allTransfer=this.allTransfer.bind(this),$scope.transfer=this.transfer.bind(this)}return(0,c.default)(e,[{key:"init",value:function(){var e=this,t=sessionStorage.getItem("games_sx_list");t?(e.$scope.sx=JSON.parse(t),e.$scope.param.zr=e.$scope.sx[0].id):e.RS.getGameList({ctg:"sx"}).then(function(t){200==t.code?(e.$scope.sx=t.data,e.$scope.param.zr=t.data[0].id,sessionStorage.setItem("games_sx_list",(0,r.default)(e.$scope.sx))):e.$scope.sx=[]}),e.transferList()}},{key:"transferList",value:function(){var e=this;this.SX.transferList().then(function(t){200==t.code?e.$scope.data=t.data:e.L.toast(t.msg)})}},{key:"allTransfer",value:function(e,t){var s=this;s.SX.allTransfer(e,{data:{type:t}}).then(function(e){200==e.code?(s.L.toast("额度转换成功"),s.transferList()):s.L.toast(e.msg)})}},{key:"transfer",value:function(e){var t=this;if(t.$scope.param.money<=0)return t.L.toast("转账金额必须大于0"),!1;var s=void 0;1001==t.$scope.param.zr?s="ag":1002==t.$scope.param.zr?s="dg":1003==t.$scope.param.zr?s="lebo":1004==t.$scope.param.zr?s="mg":1005==t.$scope.param.zr?s="pt":1006==t.$scope.param.zr&&(s="ky");var n={data:{type:e,credit:t.$scope.param.money}};t.SX.transfer(s,n).then(function(e){200==e.code?(t.L.toast("额度转换成功"),t.transferList()):t.L.toast(e.msg)})}}]),e}();t.default=u},319:function(e,t){e.exports='<iheader> <back></back> <h1 class=title>额度转换</h1> <a class="icon pull-right white fs14" href=/cashRecord/21> 转账记录 </a> </iheader> <content class=inversion> <div class="bg-white pd-10 m-b10"> <div class="flex-space lh35 fs14"> <span>主账户: <span class=main-color>{{data.user}}</span></span> <span>平台额度: <span class=main-color>{{data.platform}}</span></span> </div> <div class="lh35 m-b10"> &nbsp;<span> <select name=zc> <option value=1 selected=selected>主帐号</option> </select> </span> <i class="iconfont m-l10 m-r10">&#xe6f9;</i> <span> <select name=zr ng-model=param.zr> <option value={{v.id}} ng-repeat="v in sx">{{v.name}}</option> </select> </span> </div> <div class=flex-middle> 金额&nbsp;<input type=number placeholder=请填写金额 ng-model=param.money> <button class="setBtnBgColor small-btn radius5 m-r10" ng-click="transfer(\'OUT\')">转出</button> <button class="setBtnBgColor small-btn radius5 m-r10" ng-click="transfer(\'IN\')">转入</button> </div> </div> <div class="row pd-lr10 inversion-item flex-middle" ng-repeat="(k, x) in data.sx"> <div class="col-20 text-center"> {{k}}视讯 </div> <div class="col-30 text-center"> {{x}} </div> <div class="col-50 text-center"> <button class="setBtnBgColor small-btn radius5" ng-click="allTransfer(k, \'OUT\')">一键转出</button> <button class="setBtnBgColor small-btn radius5" ng-click="allTransfer(k, \'IN\')">一键转入</button> </div> </div> </content> '},363:function(e,t,s){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},364:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=s(365),r=n(a);t.default=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}()},365:function(e,t,s){e.exports={default:s(366),__esModule:!0}},366:function(e,t,s){s(367);var n=s(11).Object;e.exports=function(e,t,s){return n.defineProperty(e,t,s)}},367:function(e,t,s){var n=s(15);n(n.S+n.F*!s(21),"Object",{defineProperty:s(20).f})},410:function(e,t,s){t=e.exports=s(224)(),t.push([e.i,".inversion .inversion-item{line-height:2.5rem}.inversion .inversion-item:nth-child(2n){background-color:#fff}.inversion .small-btn{padding:.2rem .6rem}",""])},445:function(e,t,s){var n=s(410);"string"==typeof n&&(n=[[e.i,n,""]]);s(225)(n,{});n.locals&&(e.exports=n.locals)}});
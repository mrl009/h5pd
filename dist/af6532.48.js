webpackJsonp([48],{284:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(363),n=a(s),l=i(364),r=a(l),c=i(2),o=a(c),d=function(){function t($scope,$stateParams,DB,RS,Layer,Lottery,$timeout,Core,$state,CS){(0,n.default)(this,t),$scope.total=0,$scope.orderNum=0,$scope.gid=$stateParams.gid,$scope.type=$stateParams.type,$scope.zh=!0,function(t,e){for(var i=t.length;i--;)if(t[i]===e)return!0;return!1}(["s_ssc","s_pk10","s_k3","s_11x5","s_kl10","s_yb","pcdd"],$scope.type)&&($scope.zh=!1),$scope.flag=!1,$scope.balance=0,$scope.order=[],$scope.isSubmit=!1,this.db=DB,this.rs=RS,this.S=$scope,this.l=Layer,this.L=Lottery,this.$timeout=$timeout,this.c=Core,this.$state=$state,this.cs=CS,this.getBalance(),this.getDBData(),$scope.back=this.back.bind(this),$scope.delItem=this.delItem.bind(this),$scope.delAll=this.delAll.bind(this),$scope.betSubmit=this.betSubmit.bind(this),$scope.goToSmartTracking=this.goToSmartTracking.bind(this)}return(0,r.default)(t,[{key:"getDBData",value:function(){var t=this;this.db.getData("carts",function(e){t.S.order=JSON.parse(e),o.default.each(t.S.order,function(e,i){t.S.total+=parseFloat(i.price_sum),t.S.orderNum+=parseInt(i.counts)}),t.S.$apply()})}},{key:"getBalance",value:function(){var t=this;this.rs.getBalance(!1).then(function(e){200==e.code&&(t.S.balance=Number(e.data.balance),t.S.isSubmit=!0)})}},{key:"delAll",value:function(){var t=this;this.db.deleteOneData("carts",function(){t.S.order=[],t.S.total=0,t.S.orderNum=0,t.S.$apply()})}},{key:"betSubmit",value:function(){var t=this;if(this.S.order&&0==this.S.order.length)return this.l.toast("请先下注才能提交",1),!1;if(this.S.total>this.S.balance)return this.cs.showLessMoney(),!1;this.S.flag=!0,this.L.betSubmit(this.S.gid);var e=this.$timeout(function(){t.$timeout.cancel(e),t.S.flag=!1},2e3)}},{key:"delItem",value:function(t){var e=this;this.L.delItem(t,function(t,i,a){e.S.total=t,e.S.orderNum=i,e.S.order=a,e.S.$apply()})}},{key:"handleRate",value:function(t){return"string"==typeof t?t.replace(/,/g," "):t}},{key:"back",value:function(){history.go(-1)}},{key:"goToSmartTracking",value:function(){if(0==this.S.order.length)return this.l.toast("请先下注才能追号"),!1;var t=String(this.S.total.toFixed(3)).replace(".","-");this.$state.go("smartTrack",{gid:this.S.gid,total:t})}}]),t}();e.default=d},357:function(t,e){t.exports='<iheader> <back></back> <h1 class=title>{{topTitle}}注单</h1> </iheader> <content hastabs=true> <div class=cart> <div class="top-wrap m-b10" style=background:#f1f1f1 ng-if=zh> <div class=tools> <div class="back fs14" ng-click=back()>返回继续添加</div> <div class="random fs14"></div> <div class="plan fs14" ng-click=goToSmartTracking()>智能追号</div> </div> </div> <div class=list-area> <div class="order-item m-b10" ng-repeat="v in order"> <div class=total> <div> <span class="play-name fs14">{{v.atitle}}</span> <span class=fs14>({{v.btitle}})共</span> <span class=hight-text>{{v.counts}}</span> <span class=fs14>注，共</span> <span class=hight-text>{{v.price_sum}}</span> <span class=fs14>元</span> <span class="fr del" ng-click=delItem($index)> <a class="iconfont icon-closecircled"></a> </span> </div> </div> <div class="content fs14" ng-if="gid == 3">赔率:{{handleRate(v.rate)}}</div> <div class="content fs14">{{v.names}}</div> </div> </div> </div> </content> <ifooter class=cart> <div class=left> <button class=button-del ng-click=delAll()> <i class="iconfont icon-lajixiang"></i> </button> </div> <div class="title fs14"> <div class="price-row price-row__first"> <span>{{orderNum}}</span>注, <span>{{total.toFixed(3)}}</span>元 </div> <div class=price-row>可用余额 <span>{{balance.toFixed(3)}}元</span> </div> </div> <div class=right> <button class="button button-add main-w" ng-click=betSubmit() ng-disabled="suData.sumbet < 1 || flag || !isSubmit">添加注单</button> </div> </ifooter> '},363:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},364:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(365),n=a(s);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,n.default)(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}()},365:function(t,e,i){t.exports={default:i(366),__esModule:!0}},366:function(t,e,i){i(367);var a=i(11).Object;t.exports=function(t,e,i){return a.defineProperty(t,e,i)}},367:function(t,e,i){var a=i(15);a(a.S+a.F*!i(21),"Object",{defineProperty:i(20).f})}});
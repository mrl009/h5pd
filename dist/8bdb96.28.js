webpackJsonp([28],{286:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e(363),r=i(s),l=e(364),n=i(l);e(459);var o=e(2),c=i(o),d=function(){function t($scope,Core,DB,RS,Layer,$stateParams,Lottery,$timeout,CS){(0,r.default)(this,t),this.S=$scope,this.C=Core,this.dbobj=DB,this.rs=RS,this.L=Layer,this.ly=Lottery,this.$tm=$timeout,this.cs=CS,this.S.total=0,this.S.orderNum=0,this.S.gid=$stateParams.gid,this.S.type=$stateParams.type,this.db(),this.getDB(),this.getBalance(),this.init(),$scope.delAll=this.delAll.bind(this),$scope.betSubmit=this.betSubmit.bind(this),$scope.isSubmit=!1,$scope.$on("$destroy",function(){Lottery.clearCds()})}return(0,n.default)(t,[{key:"db",value:function(){this.S.balls=this.C.createArr(17)}},{key:"getBalance",value:function(){var t=this;this.rs.getBalance(!1).then(function(a){200==a.code&&(t.S.balance=Number(a.data.balance),t.S.isSubmit=!0)})}},{key:"getDB",value:function(){var t=this;this.dbobj.getData("lhccarts",function(a){t.S.order=JSON.parse(a),c.default.each(t.S.order,function(a,e){t.S.total+=parseFloat(e.price_sum)}),t.S.$apply()})}},{key:"clearAll",value:function(){var t=this;this.dbobj.deleteOneData("lhccarts",function(){t.S.total=0,t.S.order=null,t.S.$apply()})}},{key:"delAll",value:function(){var t=this;this.S.total>0&&this.L.confirm({title:"确定要清除所有彩注?",yesFn:function(){t.clearAll()}})}},{key:"init",value:function(){this.ly.getKithe(this.S.gid,this.S)}},{key:"betSubmit",value:function(){var t=this;if(this.S.order&&0==this.S.order.length)return this.l.toast("请先下注才能提交",1),!1;if(this.S.total>this.S.balance)return this.cs.showLessMoney(),!1;this.S.flag=!0,this.ly.betSubmit(this.S.gid,this.S.type);var a=this.$tm(function(){t.$tm.cancel(a),t.S.flag=!1},2e3)}}]),t}();a.default=d},358:function(t,a){t.exports='<iheader> <back></back> <h1 class=title>{{topTitle}}注单</h1> </iheader> <content hastabs=true class=lhc-cart> <div class=cart> <div class="cd-area fs12 text-center">第{{kithe[gid].kithe}}期投注时间：<span class=main-color>{{syTimeCc[gid]}}</span></div> <div class=data-area ng-if="order && order.length"> <div class=head-area></div> <div class="lists-area clearfix"> <div class="la-row la-head"> <div class=la-col>下注类型</div> <div class=la-col>号码</div> <div class=la-col>注数</div> <div class=la-col>金额</div> </div> <div class=la-row ng-repeat="o in order"> <div class=la-col>{{o.atitle}}</div> <div class="la-col main-color">{{o.names}}</div> <div class=la-col>{{o.counts}}</div> <div class=la-col>{{o.price_sum}}</div> </div> </div> <div class=balls-area> <div class=deco-ball ng-repeat="b in balls track by $index"></div> </div> </div> </div> </content> <ifooter class=cart> <div class=left> <button class=button-del ng-click=delAll()> <i class="iconfont icon-lajixiang"></i> </button> </div> <div class="title money fs14"> <div class="price-row price-row__first"> 合计{{total.toFixed(3)||5}}元 </div> <div class=price-row>可用余额 <span>{{balance.toFixed(3)}}元</span> </div> </div> <div class=right> <button class="button button-add main-w" ng-click=betSubmit() ng-disabled="suData.sumbet < 1 || !isSubmit">添加注单</button> </div> </ifooter> '},363:function(t,a,e){"use strict";a.__esModule=!0,a.default=function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}},364:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var s=e(365),r=i(s);a.default=function(){function t(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(a,e,i){return e&&t(a.prototype,e),i&&t(a,i),a}}()},365:function(t,a,e){t.exports={default:e(366),__esModule:!0}},366:function(t,a,e){e(367);var i=e(11).Object;t.exports=function(t,a,e){return i.defineProperty(t,a,e)}},367:function(t,a,e){var i=e(15);i(i.S+i.F*!e(21),"Object",{defineProperty:e(20).f})},424:function(t,a,e){a=t.exports=e(224)(),a.push([t.i,'.lhc-cart .cd-area{background:#fff;height:2rem;line-height:2rem;margin-bottom:.8rem}.lhc-cart .data-area{padding-bottom:1rem}.lhc-cart .head-area{background:#fff;-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.13),0 -1px 1px 0 rgba(0,0,0,.13),inset 0 -1px 3px 0 hsla(0,0%,51%,.59);box-shadow:0 2px 3px 0 rgba(0,0,0,.13),0 -1px 1px 0 rgba(0,0,0,.13),inset 0 -1px 3px 0 hsla(0,0%,51%,.59);border-radius:10px;height:1rem;margin:0 .25rem;position:relative}.lhc-cart .head-area:after{content:"";position:absolute;height:.4rem;left:.3rem;right:.3rem;background:#fff;top:0;bottom:0;margin:auto;border-radius:.5rem;-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.13),0 -1px 1px 0 rgba(0,0,0,.13),inset 0 -1px 8px 0 hsla(0,0%,51%,.59);box-shadow:0 2px 3px 0 rgba(0,0,0,.13),0 -1px 1px 0 rgba(0,0,0,.13),inset 0 -1px 8px 0 hsla(0,0%,51%,.59)}.lhc-cart .lists-area{width:90.66666667%;margin-left:4.66666667%;background:#fff;padding-top:1rem;position:relative;margin-top:-.6rem;border-radius:3px 3px 0 0}.lhc-cart .lists-area .la-col{float:left;width:25%;white-space:nowrap;font-size:.7rem;text-align:center}.lhc-cart .lists-area .la-row{height:2rem;line-height:2rem;position:relative}.lhc-cart .lists-area .la-row:after{content:"";height:1px;background:#d8d8d8;position:absolute;left:0;width:100%;bottom:0;-webkit-transform:scaleY(.33);transform:scaleY(.33)}.lhc-cart .lists-area .la-head{height:1.5rem;line-height:1.5rem;background:#fff7e4}.lhc-cart .lists-area .la-head:after{height:0}.lhc-cart .balls-area{height:.5rem;background:#fff;margin:0 4.66666667%}.lhc-cart .balls-area .deco-ball{height:1rem;width:5.88235294%;background:#fff;float:left;border-radius:100%}@media only screen and (min-width:320px){.lhc-cart .lists-area .la-col{font-size:.6rem}}',""])},459:function(t,a,e){var i=e(424);"string"==typeof i&&(i=[[t.i,i,""]]);e(225)(i,{});i.locals&&(t.exports=i.locals)}});
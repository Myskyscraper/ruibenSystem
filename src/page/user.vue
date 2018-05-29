<template>

	<div class="user">

		<ToastLoginRegister  v-bind:isFlag="isFlag"></ToastLoginRegister>
		<header>
			<span class="headImg">
				<img v-bind:src="alldata.avatar" alt="">
			</span>
			{{alldata.username}}
		</header>



		<div class="person-info-wrap">

			<p class="p-info-title">资产总额(元)</p>

			<p class="p-info-number">{{alldata.total}}</p>

			<ul class="p-info-special"> 
				<li>
					<p>可用余额(元)</p>
					<h5>{{alldata.useMoney}}</h5>
				</li>
				<li>
					<p>累计收益(元)</p>
					<h5>{{alldata.collectCapital}}</h5>
				</li>
			</ul>

		</div>


		<div class="per-btn-wrap">
			<span>提现</span>
			<span>充值</span>
		</div>

		<ul class="per-list-table">
			<li>
				<span><img src="../images/p4_invest.png" alt=""></span>

				<dl>
					<dd>我的投资</dd>
					<dt>您有3笔待回款</dt>
				</dl>
			</li>


			<li>

				<span><img src="../images/p4_asset.png" alt=""></span>

				<dl>
					<dd>资产管理</dd>
					<dt>查看回款信息</dt>
				</dl>
				

			</li>
		</ul>

		<ul class="per-list-table">
			<li>
				<span><img src="../images/p4_auto.png" alt=""></span>

				<dl>
					<dd>自动投标</dd>
					<dt>设置自动投标</dt>
				</dl>
			</li>


			<li>

				<span><img src="../images/p4_safe.png" alt=""></span>

				<dl>
					<dd>安全中心</dd>
					<dt>保障资产安全</dt>
				</dl>
				
			</li>
		</ul>

		<ul class="intro-list-wrap">
			<li v-on:click="LogOut"><span><img src="../images/p4_gift.png" alt="" ></span>退出登录</li>
			<li><span><img src="../images/p4_gift.png" alt=""></span>红包奖券</li>
			<li><span><img src="../images/p4_help.png" alt=""></span>帮助反馈</li>
			<li><span><img src="../images/p4_setting.png" alt=""></span>更多设置</li>
			
		</ul>

		 <Foot></Foot>
	</div>
</template>


<script>
	import qs from 'qs';
	import { Indicator } from 'mint-ui';
	import Foot from '../components/foot.vue';
	import ToastLoginRegister from '@/page/toastLoginRegister'

	export default{
		data(){
			return {
				alldata:{},
				isFlag :true
			}
		},
		components:{
			Foot,
			ToastLoginRegister
		},
		beforeCreate(){
			Indicator.open('Loading...');
		},
		created(){
			this.$nextTick().then( () =>{
				this.initData();
			})
		},
		methods:{
	
			initData(){
				Indicator.open('Loading...');
				var userId = localStorage.userId;
				console.log('ok1');
				console.log(this.alldata);

				if(userId =='null'){
					console.log('ok2');
					this.alldata ={
						avatar:'../images/ic_4me_catch.png',
						userMoney:'---',
						total:'---',
						username:'---',
						collectCapital:'---',
						isFlag:true
					}
					Indicator.close('Loading...');
				}else{
					this.isFlag = false;
					this.$axios({
						method:'post',
						url:'http://121.40.32.223:8081/v2/member/member-info',
						data:qs.stringify({
							skipSign:1,
							userId:userId
						})
					}).then(response =>{

						Indicator.close('Loading...');
						this.alldata = response.data.data;
						localStorage.userInfo = response.data.data;

					}).catch(function(){

					})
				}

				//----------------- 
				

				//----------------- 
			},

			LogOut(){
				console.log('logout');
				localStorage.userId =null;
				localStorage.userInfo ={};
				this.isFlag = false;
				this.alldata ={
					avatar:'../images/ic_4me_catch.png',
					userMoney:'---',
					total:'---',
					username:'---',
					collectCapital:'---',
					isFlag:true
				}
				
			}
		}
	}

</script>


<style lang ='scss' scoped>

 @import '../style/mixin';
 .user{

 	background: #397BE6;
 	padding-top: 0.1rem;
		header{
			padding-left: 5%;
			display: flex;
			align-items: center;
			@include fcs(0.16rem,#fff);
			span{
				margin-right: 3%;
				display: inline-block;
				border-radius: 50%;
				@include wh(0.3rem,0.3rem);
				background: #4D89E9;
				border: 0.02rem solid #99BEFF;
				img{
					display:block;
					@include wh(0.3rem,0.3rem);
				}
			}

			i{
				 align-self:flex-end;
			}
		}
		.person-info-wrap{
			padding-top: 0.3rem;
			.p-info-title{
				padding-left: 5%;
				@include fcs(0.12rem,#99BEFF);
			}

			.p-info-number{
				margin-top: 0.08rem;
				padding-left: 5%;
				@include fcs(0.3rem,#fff);
			}

			.p-info-special{
				display: flex;
				padding-top: 0.15rem;
				li{
					padding-left: 5%;
					flex: 1;
					p{
						@include fcs(0.12rem,#99BEFF)
						margin-bottom: 0.1rem;
					}
					h5{
						@include fcs(0.15rem,#fff)
						font-weight: 500;
					}
				}
			} 
		}

		.per-btn-wrap{

			padding-bottom: 0.15rem;

			span{
				display: inline-block;
				@include wh(1.6rem,0.4rem);
				text-align: center;
				line-height: 0.4rem;
				@include fcs(0.18rem,#fff);
				border-radius: 0.1rem;
				
				&:nth-child(1){
					margin-left: 2%;
					background: #679AEB;
				};

				&:nth-child(2){
					@include fcs(0.18rem,#fff)
					background: #57BE63;
				};


			}
		}

		.per-list-table{

			display: flex;
			background: #fff;
			li{
				flex: 1;
				display: flex;
				height: 0.75rem;
				align-items: center;
				span{
					padding-left: 0.08rem;
					img{
						display: block;
						@include wh(0.52rem,0.50rem);
					}
				}

				dl{
					flex:1;
					padding-top: 0.05rem;
					dd{
						@include fcs(0.15rem, #1F304C);	
    					margin-bottom: 0.03rem;
					}

					dt{
						@include fcs(0.12rem,$gray);
					}
				}
			}
		}

		.intro-list-wrap{
			background: #fff;
			li{
				display: flex;
				height: 0.5rem;
				align-items: center;
				span{
					padding-left: 0.1rem;
					margin-right: 0.1rem;
					img{
						@include wh(0.18rem,0.18rem);
					}
				}
				
				@include fcs(0.18rem,#1F304C)
			}
		}





 }
	



</style>
<template>
	<div class="recharge-wrap">

		<!-- 开始复制 -->

		<div>  
			
			<div class="nav">  
				<mt-button size="small" @click.native.prevent="active = 'tab-container1'">快捷充值</mt-button>  
				<mt-button size="small" @click.native.prevent="active = 'tab-container2'">跨行转账</mt-button>   
			</div>  

			<div class="page-tab-container"> 


				<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>


					<mt-tab-container-item id="tab-container1">  

						<div class="fastJiao-wrap">
							<div class="mainbox">

								<span class="bank-logo">
									<img v-bind:src="reback.img" alt="">

								</span>
								<p class="bank-name">{{reback.bankName}}</p>
								<p class="bank-number">{{reback.bankCard}}</p>
							</div>


							<dl  class="userrest-box"><dd data-v-239876a1="">当前可提现至您绑定的银行卡的金额为：</dd> <dt>￥20000</dt></dl>

							<ul  class="box-inp box-two-column">
								<li>
									<span >充值金额：</span>
										
										<input type="text">

									 <i ></i>
								</li>
								<li >
									<span >预留手机号：{{reback.cardMobile}}</span> 
								</li>

								<li >
									<span >短信验证：</span> <i >发送手机验证码</i>
								</li>
							</ul>

							<p class="userwaring">如当前手机与预留手机不一致，请前去修改以便获取验证</p>

							<div data-v-239876a1="" class="sureBtn middlebtn">
								充值
							</div>
						</div>

						
					</mt-tab-container-item>



					<mt-tab-container-item id="tab-container2">  
						<!-- 跨行转账开始 -->

						<dl class="box-header">
							<dd>
								您可以使用支付宝的 “转账” 功能，将资金充值到您的江西银行存管账户内(建议使用支付宝APP)
							</dd>
							<dt>
								转账时所需填写的银行卡信息如下：
							</dt>
						</dl>



						<ul class="content">
							<li>收款人 <span class="user-name">{{reback.realname}}</span></li>

							<li>收款账号 <span class="user-card">{{reback.bankCard}}</span></li>

							<li>开户行 <span class="user-bank">江西银行股份有限公司营业部</span></li>

							<li>转赠附言 <span class="user-bank">1</span></li>

						</ul>
					

						<!-- 跨行转账结束 -->
					</mt-tab-container-item>


				</mt-tab-container>  
			</div>  
		</div> 
		<!-- 结束复制 -->
		

	</div>
</template>


<script>

	import qs from 'qs';

	import router from '../router';

	export default{
		data(){
			return {
				active:1,
				active: 'tab-container1',
				reback :{}
			}
		},
		created(){
			this.$nextTick().then( () =>{
				this.initData()

			})
		},
		methods:{
			initData(){
				var userId = localStorage.userId;
				
				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/account/bank-account',//自动投标返回信息
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{
				
					this.reback = response.data.data;	

					console.log(this.reback.bankCard.length);


				}).catch(function(){
					
				})



				//------------------------- 网络请求结束
			}
		}

	}

	
</script>


<style lang ='scss' scoped>

	@import '../style/mixin';
	.recharge-wrap{
		font-size:0.12rem;
		.nav{
			padding:0.05rem 0;
			display:flex;
			justify-content: space-evenly;
			border-bottom:0.01rem solid #A1BDE5;
		}
		.box-header{
			padding: 0.15rem;
			box-shadow: 0px 0.01rem 0.02rem #D9E0FF;
			dd{
				font-size: 0.14rem;
    			color: #738299;
			}
			dt{
				font-size: 0.12rem;
				color: #397BE6;
				margin-top: 0.1rem;
			}
		}

		.content {
			box-shadow: 0px 0.01rem 0.02rem #D9E0FF;
			li{

				padding: 0.12rem 0.15rem;
				font-size: 0.14rem;
				color: #A1BDE5;
				border-bottom: 0.01rem solid #A1BDE5;
				box-sizing: border-box;
				background: #fff;
				span{
					float:right;
				}
				.user-name {
					color: #1F304C;
				}
			}
		}

		.fastJiao-wrap{
			.mainbox{

				@include wh(100%,0.8rem);
				box-sizing:border-box;
				padding-top:0.15rem;
				padding-left:0.65rem;
				background:#fff;
				margin:0 auto;
				.bank-name{
					@include fcs(0.15rem,#1F304C);
					margin-bottom:0.1rem;
				}

				.bank-number{
					@include fcs(0.16rem,#1F304C);
				}

				.bank-logo{
					display:block;
					@include wh(0.36rem,0.36rem);
					img{
						@include wh(100%,100%);
					}
					position:absolute;
					left: 0.15rem;
					top: 0.18rem;
				}
			}

			.userrest-box{
				padding-left: 0.15rem;
				padding-top: 0.15rem;
				dd{
					@include fcs(0.12rem,#738299);
				}
				dt{
					margin-top: 0.1rem;
					@include fcs(0.2rem,#738299);
					border-bottom: 0.01rem solid #D9E0FF;
					padding-bottom: 0.1rem;
				}
			}

			.box-inp{
				background:#fff;
				li{
					span{
						color:#A1BDE5;
					}
					input{
						border:none;
						outline:none;
					}
				}
			}

			.userwaring{
				@include fcs(0.12rem,#738299);
				padding-left:0.1rem;
				line-height:0.4rem;
			}
		}

	}
	

</style>
<template>
	<div class="autoTender-wrap">

		<div class="ruler-list-wrap" v-on:click="goAddRulerTender">
			<dl class="autoTender-title">
				<dd>投标金额不限制</dd>
				<dt>投标额度范围</dt>

				<div class="switch-control">
					<mt-switch v-model="value1"></mt-switch>
				</div>
			</dl>

			<div class="spcTender-info">
				<dl>
					<dd>
						<span>当前排名：</span>111111
					</dd>
					<dt>
						<span>有效排名：</span>11111
					</dt>
				</dl>
				<dl>
					<dd>
						<span>借款期限：</span>11111
					</dd>
					<dt>
						<span>成功次数：</span>11111
					</dt>
				</dl>

			</div>
		</div>


		<ul class="bott-list">
			<li>
				<span>新增投标规则</span> <i>还可新增2条</i>
			</li>
			<li>
				<span>自动使用奖券</span> <i class="right-btn"><mt-switch v-model="value2"></mt-switch></i>
			</li>
			<li>
				<span>奖券使用规则</span> <i>金额优先</i>
			</li>

		</ul>


	</div>
</template>

<script >
import qs from 'qs';
import router from '../router'
export default{
	data(){
		return {
			value1:false,
			value2:false,
			isOk:false
		}
	},
	created(){
		this.$nextTick().then( () =>{
					this.initData()
			})
	},

	mounted(){
		
	},
	methods:{
		initData(){
			var userId = localStorage.userId;
			// ------------------网络请求开始
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/member/certification-status',
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{

					var respObj = response.data.data;

					this.isOk = false;
					console.log( respObj);
					
					if(respObj.accountBankStatus =='1'){
						if(respObj.accountStatus =='1'){
							if(respObj.autoDebtStatus=='1'){
								if(respObj.autoTenderStatus =='1'){
									if(respObj.payPasswordStatus =='1'){
										if(respObj.realStatus =='1'){
											this.isOk = true;
										}else{
											Toast('请去实名认证');
										}

									}else{	
										Toast('请去设置交易密码');
									}

								}else{
									Toast('请去开启自动投标签约');
								}
							}else{
								Toast('请去开启自动债转签约');
							}

						}else{
							Toast('请去添加银行卡');
						}
					}else{
						Toast('请去添加银行卡');
					}
					
				}).catch(function(){
					
				})

				//------------------------- 网络请求结束
		},

		goAddRulerTender(){
			if(this.isOk ==true){
				console.log('ok');
				router.push({path:"/AddRulerTender"});
			}
			
		}



		
	}
}



</script>


<style lang ='scss' scoped>

@import '../style/mixin';

.autoTender-wrap{
	font-size:0.12rem;
	padding-top:0.15rem;
	.ruler-list-wrap{
		@include wh(90%,1.1rem);
		background:#fff;
		margin:0 auto ;
		box-sizing:border-box;
		padding:0.1rem;
		.autoTender-title{
			border-bottom:0.01rem solid #CCDFFF;
			position:relative;
			height:0.4rem;
			dd{
				@include fcs(0.14rem,#397BE6);
				margin-bottom:0.05rem;
			}
			dt{
				@include fcs(0.12rem,#738299);
			}

			.switch-control{
				position:absolute;
				right:0.05rem;
				top:0;
				@include wh(0.52rem,0.32rem);
			}


		}

		.spcTender-info{
			display:flex;
			box-sizing:border-box;
			padding:0.1rem 0;
			dl{
				flex:1;
				@include fcs(0.12rem,$gray);
				dd{
					margin-bottom: 0.11rem;
					span{
						@include fcs(0.12rem,#A1BDE5);
					}
				}
				dt{
					span{
						@include fcs(0.12rem,#A1BDE5);
					}
				}
			}
		}
	}

	.bott-list{
		position:absolute;
		left:0;
		bottom:0;
		@include wh(100%,1.38rem);
		@include fcs(0.14rem,#1F304C);
		li{
			@include wh(100%,0.45rem);
			padding:0 0.15rem;
			padding-right:0.15rem;
			line-height:0.45rem;
			border-bottom:0.01rem solid #CCDFFF;
			span{
				float:left;
			}

			i{
				font-style:normal;
				float:right;
				margin-right: 0.25rem;
				
			}

			.right-btn{
					margin-top:0.07rem;
				}
		}
	}
	


}






</style>
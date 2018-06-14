<template>
	<div class="autoTender-wrap">

		<div class="ruler-list-wrap" v-for="item in aTenderBack.list" v-if='isRouterAlive'>

			<dl class="autoTender-title">
				<dd>
					￥{{item.minTender}}~￥{{item.maxTender}}
				</dd>

				<dt>投标额度范围</dt>

				<div class="switch-control">
					<div class="switch-wrap">
						<div class="switch-content" :class="{'switchOpen':((item.status == '1')? true:false)}" v-on:click="fixedStatus(item.status,item.id,$event)" >
							<span class="switch-audo"></span>
						</div>
					</div>
				</div>
			</dl>

			<div class="spcTender-info"  v-on:click="goAddRulerTender(item.id)">

				<dl>

					<dd>
						<span>当前排名：</span>{{item.sort}}
					</dd>

					<dt>
						<span>有效排名：</span>{{item.realSort}}
					</dt>

				</dl>


				<dl>

					<dd>
						<span>借款期限：</span>{{item.minMonth}}~{{item.maxMonth}}
					</dd>

					<dt>
						<span>成功次数：</span>{{item.tenderTimes}}
					</dt>
				</dl>

			</div>
		</div>

		<ul class="bott-list">
			<li v-on:click='addRuler()'>
				<span>新增投标规则</span> <i>{{restRuler}} &nbsp;></i>
			</li>

			<li>
				<span>自动使用奖券</span> <i class="right-btn">  <mt-switch v-model="autoTicket" @change="isAutoUseTicket"></mt-switch></i>
			</li>
			<li v-on:click="goredTicked(aTenderBack.ticketPrecedence)">
				<span>奖券使用规则</span> <i>{{aTenderBack.ticketPrecedence|ticketPreStyle}} &nbsp;></i>
			</li>

		</ul>


	</div>
</template>

<script >
import qs from 'qs';
import router from '../router'
import { Toast } from 'mint-ui';
export default{
	data(){
		return {
			numberValue1:'',
			autoTicket:null,
			isOk:false,
			aTenderBack:{},
			restRuler:'',
			redAutoBack:'',
			message: 'Hello123456',
			isRouterAlive:true
		}
	},
	filters:{
		//把后台返回的数据用来显示
		ticketPreStyle(n){
			switch(n){
				case '1':
					return '加息券优先'
				break;

				case '2':
					return '时间优先'
				break;

				case '3':
					return '金额优先'
				break;
			}
		},

		rulerLimit(n){
			console.log(n);
		}
	},

	computed: {
    	// 计算属性的 getter
    	reversedMessage: function () {
      		return this.message.split('').reverse().join('')
  		}
		//返回数据处理
		

	},
	
	created(){
		this.$nextTick().then( () =>{
					this.initData()
					
			})
	},

	mounted(){
		
	},


	watch:{
		
	},
	methods:{
		initData(){
			var userId = localStorage.userId;

			//银行返回的信息的；

			// ------------------网络请求开始------
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/member/certification-status',//银行返回信息；
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



				//投标返回的信息

				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/borrow-auto/auto-list',//自动投标返回信息
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{

					this.aTenderBack= response.data.data;

					console.log(this.aTenderBack.ticketStatus)

					this.restRuler = this.aTenderBack.tenderNum-this.aTenderBack.list.length;

					this.autoTicket =(this.aTenderBack.ticketStatus =='1')?true:false;

										
				}).catch(function(){
					
				})


				//------------------------- 网络请求结束



				//获取用户是否自动使用奖券接口

				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/reward/auto-use-status',
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{

					 this.redAutoBack= response.data.data;

					//初始化判断是否开启自动投标


					console.log("嘻嘻response下"+this.redAutoBack.ticketStatus)

					this.autoTicket =(this.redAutoBack.ticketStatus =='1')?true:false;

					console.log("嘻嘻I下"+this.autoTicket)
										
				}).catch(function(){
					
	

				})


				//------------------------- 网络请求结束
		},

		//初始化switchbtn



		// 增加到投标规则

		goAddRulerTender(item){
			if(this.isOk ==true){
				console.log('ok');
				router.push({path:"/AddRulerTender",query:{info:item}});
			}	
		},


		//增加投标规则

		addRuler(n=null){


			if(this.restRuler == '0'){
					Toast('投标规则已达上限');
			}else{
					router.push({path:"/AddRulerTender",query:{info:n}});
			}

		
		},

		//开关切换那投标规则

		openCLoseRuler(n){

			console.log(this.value1);
			console.log(n);

			var userId = localStorage.userId;

			if(this.value1 ==true){
				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/borrow-auto/change-auto-status',//
					data:qs.stringify({
						skipSign:1,
						userId:userId,
						id:n,
						status:1
					})

				}).then(response =>{
						this.value1 =true;

				}).catch(function(){
					
				})


				//------------------------- 网络请求结束
			}else{
				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/borrow-auto/change-auto-status',//
					data:qs.stringify({
						skipSign:1,
						userId:userId,
						id:n,
						status:0
					})

				}).then(response =>{

						this.value1 =false;

										
				}).catch(function(){
					
				})
				//------------------------- 网络请求结束

			}

		},

		//选项控制红包选项

		goredTicked(n){
	
			router.push({path:"/redTicked",query:{info:n}});
		},

		//修改用户是否自动使用奖券

		isAutoUseTicket(){


			var userId = localStorage.userId;

			console.log(userId)

				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/reward/update-auto-use',
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{

					//this.upredAutoBack= response.data.data;
					var xxx = response.data.data;



				}).catch(function(){


				})


				//------------------------- 网络请求结束


			},

		//投标开关按钮

		fixedStatus(n,id,e){


			var x = null;
			var userId = localStorage.userId;
			if(n=='0'){
				x = '0';
			}else{
				x ='1';
			}

			let el=e.target;
			if(el.classList.contains("switchOpen")){
				el.classList.remove("switchOpen")
			}else{
				el.classList.add("switchOpen")
			}

			// ------------------网络请求开始 -----
			this.$axios({
				method:'post',
			url:'http://121.40.32.223:8081/v2/borrow-auto/change-auto-status',//
			data:qs.stringify({
				skipSign:1,
				userId:userId,
				id:id,
				status:x
			})
			}).then(response =>{
				this.value1 =true;

				console.log('ok');
			


			}).catch(function(){
				
			})
			//------------------------- 网络请求结束

			
			

			
			

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
		width:90%;
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

				.switch-wrap{
					font-size:0.16rem;
					width:100%;
					height:0.4rem;
					.switch-content{
						width:0.45rem;
						height:0.25rem;
						border-radius: 0.18rem;
						position:relative;
						border:0.01rem solid #f5f5f5;
						.switch-audo{
							display:block;
							position:absolute;
							left:0;
							top: -0.01rem;
							width:0.25rem;
							height:0.25rem;
							background:#fff;
							border-radius:50%;
							border:0.01rem solid #f5f5f5;
							transition: left 0.2s ;
						}
					}

					.switchOpen{
						background:#64bd63;
						.switch-audo{
							left:0.19rem;
						}
					}
				}
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
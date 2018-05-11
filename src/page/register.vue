<template>


	<div class="register-wrap">

		<div class="register-progress-wrap">
			


		</div>
		
		<form action="">

			<div class="register-con">

				<div class="form-group">
					<label>手机号:</label>
					<input type="text" placeholder="请输入手机号码" v-model="phone"/>
				</div>


				<div class="form-group">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" v-model="smsCode"> 

					<input type="button" name="" value="发送验证码" v-on:click="sendMsgBtn"  />
				</div>

				<div class="form-group">
					<label>密码:</label>	
					<input type="text" placeholder="6~20位密码" v-model='password' />
				</div>

				<div class="form-group">
					<label>邀请码:</label> 
					<input type="text" placeholder="请输入手机号码">
				</div>


			</div>


			<input type="button" value="下一步" v-on:click="sendResiterBtn"/>


		</form>

	</div>



</template>


<script >
	import { Toast } from 'mint-ui';
	import qs from 'qs';
	export default{
		data(){
			return {
				allData:null,
				phone:null,
				password:'',
				smsCode:'',
				txt:null
			}
		},
		computed:{

			isformSuccess(){
				return this.txt = this.phone+this.password;
			}
		},
		methods:{
			sendMsgBtn(){
					
					console.log('ok');
					this.$axios({
						method:'post',
						url:'http://121.40.32.223:8081/v2/mobile/send-sms-code',
						data:qs.stringify({
							skipSign:1,
							phone:this.phone
						})

					}).then(response =>{

						Toast(response.data.msg);

					}).catch(function(){

					})
			},
			sendResiterBtn(){
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/member/register',
					data:qs.stringify({
						skipSign:1,
						password:this.password,
						phone:this.phone,
						smsCode:this.smsCode
					})

				}).then(response =>{

					Toast(response.data.msg);

				}).catch(function(){

				})

			}
		}


	}

	



</script>

<style lang ='scss' scoped>
		@import '../style/mixin';
	
	.register-wrap{
		font-size:0.16rem;
		.register-progress-wrap{
			height:2rem;
		}

	


		.register-con{
			background:#fff;
			.form-group{
				height:0.45rem;
				display:flex;

				justify-content:flex-start;
				align-items:center;
				border-bottom:0.01rem solid #CCDFFF;
				label{
					text-align:right;
					padding-right:0.09rem;
					@include sc(0.14rem,$fc);
					width:0.6rem;
				}

				input{
					border:none;
					background:#fff;
					outline:none;
				}

			}
			
		
		}




	}

	



</style>
<template>
	<div class="loginContainer">

		<div class="login-banner">
			<img src="../images/logo.png" alt=""/>
		</div>


		<form action="">


			<section class="input_container user_name">
				<input type="text" placeholder="用户名" v-model="username"/>
			</section>

			<section class="input_container user_password">
				
				<input type="password" placeholder="登陆密码" v-model="password"/>

			</section>

			<section class="input_container input_btn">
				
				<button v-on:click="loginBtn">登陆</button>

			</section>


		</form>


	</div>
</template>

<script >
	import router from '../router'
	import qs from 'qs';
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				username:'',
				password:''
			}
		},
		created(){

		},
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			
			loginBtn(){

				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/member/login',
					data:qs.stringify({
						skipSign:1,
						username:this.username,
						password:this.password
					})
				}).then( response =>{
					 var resp = response.data.msg
					if(resp =="success"){
						router.push({path:'./user'})
						localStorage.userId = response.data.data.userId;
					}else{
						Toast(resp)
					}
					
				})
			}
		}

	}


</script>


<style lang='scss' scoped>
	 @import '../style/mixin';

	 .loginContainer{
	 	@include allcover();
	 	background: #23262F;
	 	@include wh(100%,100%);
	 	.login-banner{
	 		@include wh(100%,2.9rem);
	 		@include fj(center);
	 		align-items: center;
	 		img{
	 			display: block;
	 			@include wh(1.07rem,1.27rem)
	 		}

	 	}
	 	.input_container{
	 		margin: 0.2rem 0;
	 		border: none;
	 		@include fj(center);
	 		input{
	 			background-color:transparent ;
	 			display: inline-block;
	 			@include wh(80%,0.3rem);
	 			border: none;
	 			outline: none;
	 			@include sc(0.16rem,$fc);
	 			border-bottom: 0.01rem solid $fc;
	 		}	
	 	}
	 	.input_btn{
	 		button{
	 			margin-top: 0.25rem;
	 			@include wh(80%,0.35rem);
	 			@include bc($by);
	 			@include sc(0.14rem,#fff);
	 			border: none;
	 		}
	 	}


	 }

	

</style>
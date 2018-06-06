<template>
	<div class="signing-wrap">
		<header>
			<p>验证码将发至：182****1552</p>
		</header>

		<section>
			<div class="inp-wrap">
				<span class="label">手机验证码：</span>

				<input type="number">

				<span class="send-btn">发送验证码</span>
			</div>

		</section>


		<div class="btn">
			立即签约
		</div>


		
	</div>
	

</template>

<script >
	import router from '../router'
	import qs from 'qs';

	export default{
		data(){
			return {
				
			}
		},
		created(){

		},
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			
		
		}

	}


</script>


<style lang='scss' scoped>

	 @import '../style/mixin';
	.signing-wrap{
		font-size:0.12rem;
		header{
			padding:0.1rem 0.15rem;
			p{
				color:$gray;
			}
		}

		.inp-wrap{
			margin-bottom:0.15rem;
			padding-left:0.15rem;
			height:0.45rem;
			line-height:0.45rem;
			background:#fff;
			.label{
				color:$gray;
			}
			input{
				border:none;
				outline:none;
			}
			.send-btn{
				color:$blue;
				border-left:0.01rem solid $blue;
				padding-left:0.1rem;
			}
		}
	}

	
	

</style>
<template>


	<div class="toastBox-wrap">

		<div class="toastBox-bg" v-show="isShow">
			<span class="close-btn" v-on:click="show">X</span>
		</div>

		<div class="toastBox-content" v-show="isShow">
			<div class="img-info"></div>		
			<div class="link-box-wrap">
				<router-link to="/Register" class="btn">注册</router-link>
				<router-link to="/Login" class="btn">登录</router-link>
			</div>

		</div>

	</div>
</template>


<script>
	import qs from 'qs';
	import Foot from '../components/foot.vue'
	export default{
		data(){
			return {
				alldata:{},
				isShow:true
			}
		},
		components:{
			Foot
		},
		created(){
			this.$nextTick().then( () =>{
				this.show();
			})
		},
		methods:{
			show(){
				var  userId=localStorage.userId;
				// this.isShow =!this.isShow;
				if(userId){
					this.isShow =false;
				}
			}
		}
	}

</script>



<style lang ='scss' scoped>

@import '../style/mixin';
.toastBox-wrap{
	
	.toastBox-bg{
		@include wh(100%,100%);
		position:absolute;
		left:0;
		top:0;
		opacity: 0.7;
		background: #000000;
		z-index:2;
		.close-btn{
			position:absolute;
			right:0.2rem;
			top:0.2rem;
			color:red;
			@include fcs(0.30rem,$blue)
		}
	}


	

	.toastBox-content{
		@include wh(2.88rem,3.16rem);
		position:fixed;
		left:0;
		top:0;
		right:0;
		bottom:0;
		margin:auto;

		z-index:3;
		
		.img-info{
			@include wh(2.88rem,2.64rem);
			background:url(../images/p4_poen2.png) no-repeat center;
			background-size:2.88rem, 2.66rem;
			margin:0 auto;
		}

		.link-box-wrap{
			display:flex;
			justify-content:space-around;
			.btn{
				text-decoration: none;
				border-radius: 0.1rem;
				@include fcs(0.22rem,#fff);
				padding:0.1rem 0.3rem;
				&:nth-child(1){
					background:#ee6723;
				}
				&:nth-child(2){
					background:$blue;
				}
			}
		}

	}



}

	



</style>
<template>

	<div class="backBtn-wrap">
		<div class="backBtn" v-on:click="goBack">
			<img src="../images/leftArrow.png" alt="">
		</div>
	</div>
	
</template>


<script >
import qs from 'qs';
import router from '../router'

export default{
	data(){
		return {
			value1:false
		}
	},
	created(){
		
	},

	mounted(){
		
	},
	methods:{
		goBack(){
			router.go(-1);
		}
	}
}



</script>



<style lang ='scss' scoped>
	@import '../style/mixin';
	.backBtn-wrap{
		.backBtn{
			@include wh(0.2rem,0.2rem);
			position: absolute;
			left:0.2rem;
			top:0.1rem;
			font-size: 10px;
			img{
				@include wh(100%,100%);
			}
		}

	}






</style>



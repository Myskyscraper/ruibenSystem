<template>

	<div class="homeContainer">

		<!-- 首页开始 -->
			<div class="banner-wrap">
				首页banner

			</div>


			<div class="notice-wrap">
				滚动通知栏
			</div>




		<!-- 首页结束 -->

	</div>
	




</template>


<script >

	import Swiper from 'swiper';

	import '../style/swiper.min.css';

	export default{
		data(){
			return{

			}
		},
		created(){

		},
		mounted(){
			 
		},
		methods:{

			// 开始复制
			

			// 复制结束


		}
	}
	



</script>

<style lang ='scss' scoped>

 @import '../style/mixin';

.homeContainer{
	.banner-wrap{
		@include wh(100%,1.8rem);

	}

	.notice-wrap{
		@include wh(100%,0.33rem);
	}


}
	




</style>
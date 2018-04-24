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


		<ul class="maintitle-display-wrap">

			<li>
				<img src="../images/p1_title1.png">
				<p>新手引导</p>
			</li>
			<li></li>
			<li></li>
			<li></li>


		</ul>

		<div class="spc-header">
			
		</div>


		<div class="newPlayer-wrap">

			<div class="newPlayer-intro-wrap">

				<img src="../images/p1_new.png" alt="">
				<div class="newPlayer-box-wrap">
					<p>新手专享标</p>
					<h5>04-19 13:30</h5>
				</div>

			</div>


			<ul class="biao-two-column-display">
				<li></li>
				<li></li>
			</ul>


		</div>

	</div>
	




</template>


<script >

	import qs from 'qs';

	import Swiper from 'swiper';

	import '../style/swiper.min.css';


	export default{
		data(){
			return{

			}
		},
		created(){
			this.$axios({
				method:'post',
				url:"/api/home/index",
				data:qs.stringify({
					skipSign:1
				})
			}).then( response =>{
				console.log("数据"+response.data);
			}).catch(function (error) {
				console.log(error);
			})
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
	@include sc(0.18rem,$fc);
	.banner-wrap{
		@include wh(100%,1.8rem);
		
	}

	.notice-wrap{
		@include wh(100%,0.33rem);
	}

	.spc-header{height: 0.2rem; @include bc(#f0f1f8)}

	.maintitle-display-wrap{
		display: flex;
		li{
			flex: 1;
			height: 0.69rem;

			img{
				display: block;
				margin: 0.08rem auto 0.05rem;
				@include wh(0.39rem,0.39rem);
			}
			p{
				text-align: center;
				@include sc(0.12rem,#738299);
			}

		}
	}

	.newPlayer-wrap{
		@include wh(100%,1.8rem);
		.newPlayer-intro-wrap{
			padding-top: 0.15rem;
			display: flex;
			img{
				margin-left: 0.15rem;
				margin-right: 0.1rem;
				display: block;
				@include wh(0.3rem,0.3rem);
			}
			.newPlayer-box-wrap{
				flex: 1;
				p{
					@include sc(0.15rem,#1F304C);
				}
				h5{
					margin-top: 0.05rem;
					@include sc(0.1rem,#A1BCE5);
					font-weight: normal;
				}
			}
		}

		.biao-two-column-display{
			@include wh(100%,0.3rem)
		}
	}


}
	




</style>
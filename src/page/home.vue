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

		<div class="spc-header"></div>
			
		


		<div class="newPlayer-wrap">

			<div class="newPlayer-intro-wrap">

				<img src="../images/p1_new.png" alt="">
				<div class="newPlayer-box-wrap">
					<p>新手专享标</p>
					<h5>04-19 13:30</h5>
				</div>

			</div>


			<ul class="biao-two-column-display">

				<li class="new-biao-bate">
					<p>15.2<span>%</span></p>

					<h5>历史年化收益</h5>
				</li>

				<li class="new-biao-date">
					<p>12 <span>个月</span></p>
				    <h5>标的期限</h5>
				</li>
			</ul>

			<div class="newbiao-makesure-btn">
				确认投标
			</div>


		</div>

		<div class="spc-header"></div>


		<div class="biao-list-wrap">

			<div class="biao-item">
				<p class="com-biao-title">奔驰A200抵押贷款</p>
				<div class="biao-icon-content">
					
				</div>

				<div class="progress-content">
					

				</div>

				<ul class="biao-info-content">

					<li class="com-biao-bate">
						<p>15.2<span>%</span></p>

						<h5>历史年化收益</h5>
					</li>
					<li class="com-biao-date">
						<p>12 <span>个月</span></p>
						<h5>标的期限</h5>
					</li>
					<li class="com-biao-amount">
						<p>2324 <span>万元</span></p>
						<h5>标的金额</h5>
					</li>
				</ul>

			</div>

			<!-- 第二个开始 -->
			<div class="biao-item">
				<p class="com-biao-title">奔驰A200抵押贷款</p>
				<div class="biao-icon-content">
					
				</div>

				<div class="progress-content">
					

				</div>

				<ul class="biao-info-content">

					<li class="com-biao-bate">
						<p>15.2<span>%</span></p>

						<h5>历史年化收益</h5>
					</li>
					<li class="com-biao-date">
						<p>12 <span>个月</span></p>
						<h5>标的期限</h5>
					</li>
					<li class="com-biao-amount">
						<p>2324 <span>万元</span></p>
						<h5>标的金额</h5>
					</li>
				</ul>

			</div>
			<!-- 第二个结束 -->
		</div>

		<!-- 主要说明 -->

		<ul class="mainpoint-intro-wrap">
			<li>上市风投系</li>
			<li>银行存管系</li>
			<li>CFCA电子签章</li>
		</ul>

		<p class="warn-monery-title-wrap">您的资金由江西银行资金存管系统监管</p>



		<div class="rebtn" v-on:click="show">请求数据</div>

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
			
		},
		mounted(){
			 
		},
		methods:{

			show(){

				//console.log('ok');

				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/home/index',
					data:qs.stringify({
						skipSign:1
					})

				}).then(response =>{
				
				}).catch(function(){
					console.log(222);
				})	 

			}


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
			display: flex;
			li:nth-child(1){
				border-right: 0.01rem solid  #F0F1F8;
				p{
					color: $red;
				}
			}
			
			li:nth-child(2){

				p{
					color: #1F304A;
				}
			}

			li{
				flex: 1;
				padding-top: 0.2rem;
				text-align: center;

				p{
					font-size: 0.3rem;
					margin-bottom: 0.1rem;
					span{
						font-size: 0.12rem;
					}
				}

				h5{
					font-weight: 500;
					@include sc(0.12rem,$gray)
				}
			}
		}

		.newbiao-makesure-btn{
			margin: 0.18rem auto 0;
			@include wh(2.4rem,0.3rem)
			background: $blue;
			text-align: center;
			color: #fff;
			@include font(0.15rem,0.3rem)
			border-radius: 0.05rem;
		}
	}


	.biao-list-wrap{
		@include bc(#f0f1f8);
		.biao-item{
			padding: 0.15rem;
			@include bc(#fff);
			margin-bottom: 0.2rem;
			.com-biao-title{
				@include font(0.15rem,0.18rem)
			}

			.progress-content{
				@include wh(100%,0.4rem)
			}
			.biao-info-content{
				display: flex;

				li:nth-child(1){
					p{
						color: $red;
						span{
							color: $red;
						}
					}
				}
				li{
					flex: 1;
					text-align: center;

					p{
						@include fcs(0.24rem,$gray)
						margin-bottom: 0.1rem;
						span{
							@include fcs(0.12rem,$gray)
							
						}
					}

					h5{
						font-weight: 500;
						@include fcs(0.12rem,$gray)
					}
				}
			}
		}
	}

	.mainpoint-intro-wrap{
		display: flex;
		li{
			flex: 1;
			display: flex;
			justify-content: center;
			@include font(0.12rem,0.3rem)
		}
	}

	.warn-monery-title-wrap{
		@include fcs(0.12rem,#74CC5C)
		text-align: center;
		line-height: 0.3rem;
	}

	.rebtn{
		margin-top: 0.5rem;
	}


}
	




</style>
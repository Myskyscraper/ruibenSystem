<template>

	<div class="homeContainer">

		<!-- 首页开始 -->

			<div class="banner-wrap">

				<!-- Swiper -->

				<div class="home_banner">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="item in bannerList">
								<img src="../images/app_img_url1501034226.jpg">
							</div>
						</div>
					</div>
				</div>

				<!-- Swiper end  -->


			</div>


			<div class="notice-wrap">
				<!-- 通知栏开始 -->

				<div class="home_notice">

					<div class="swiper-container">
						<div class="swiper-wrapper">

							<div class="swiper-slide" v-for="item in newsPost" style="height:0.3rem;">
								{{item.name}}
							</div>

						</div>
					</div>
				</div>

				<!-- 通知栏结束 -->
			
				
			</div>

		<!-- 首页结束 -->

		<ul class="maintitle-display-wrap" >
			
			<li v-on:click="linkto($event)">
				<img src="../images/p1_title1.png">
				<p>新手引导</p>
			</li>
			

			<li>
				<img src="../images/p1_title2.png">
				<p>安全保障</p>
			</li>
			<li>
				<img src="../images/p1_title3.png">
				<p>邀请有礼</p>
			</li>
			<li>
				<img src="../images/p1_title4.png">
				<p>发标预告</p>
			</li>


		</ul>

		<div class="spc-header"></div>
			
		


		<div class="newPlayer-wrap">

		
			<div class="newPlayer-intro-wrap">

				<img src="../images/p1_new.png" alt="">
				<div class="newPlayer-box-wrap">
					<p>新手专享标</p>
					<h5>{{newPlayer.addTime}}</h5>
				</div>

			</div>


			<ul class="biao-two-column-display">

				<li class="new-biao-bate">
					<p>{{newPlayer.apr}}</p>

					<h5>历史年化收益</h5>
				</li>

				<li class="new-biao-date">
					<p>{{newPlayer.investPeriod}}</p>
				    <h5>标的期限</h5>
				</li>
			</ul>

			<div class="newbiao-makesure-btn">
					确认投标
			</div>


		</div>

		<div class="spc-header"></div>


		<div class="biao-list-wrap">

			

			<!-- 循环开始-->

			<div class="biao-item" v-for="item in borrow">

				<p class="com-biao-title">奔驰A200抵押贷款 </p>

				<div class="biao-icon-content">
					<span class="icon-sign" v-show="Number(item.isAuto)">自动</span>

					<span class="icon-sign" v-show="Number(item.isDay)">天</span>

					<span class="icon-sign" v-show="Number(item.isDxb)">质押</span>

					<span class="icon-sign" v-show="Number(item.isTiming)">抵</span>

				</div>

				<div class="progress-content">
					<Progress  v-bind:data="item.apr"></Progress>
				</div>



				<ul class="biao-info-content">

					<li class="com-biao-bate">
						<p>{{item.apr}}<span>%</span></p>

						<h5>历史年化收益</h5>
					</li>
					<li class="com-biao-date">
						<p>{{item.investPeriod}}<span>个月</span></p>
						<h5>标的期限</h5>
					</li>
					<li class="com-biao-amount">
						<p>{{item.account}}<span>万</span></p>
						<h5>标的金额</h5>
					</li>
				</ul>

			</div>
			<!-- 循环结束 -->



		</div>

		<!-- 主要说明 -->

		<ul class="mainpoint-intro-wrap">
			<li>上市风投系</li>
			<li>银行存管系</li>
			<li>CFCA电子签章</li>
		</ul>

		<p class="warn-monery-title-wrap">您的资金由江西银行资金存管系统监管</p>


		 <Foot></Foot>

		<!-- <div class="rebtn" v-on:click="show">请求数据{{newPlayer.id}}</div> -->

	</div>
	
</template>


<script >

	import qs from 'qs';

	import Swiper from 'swiper';

	import '../style/swiper.min.css';

	import Progress from '../components/progress.vue'

	import Foot from '../components/foot.vue'

	export default{
		data(){
			return{
				allData:{},
				newPlayer:{},
				bannerList:[],
				borrow:[],
				newsPost:[]
			}
		},
		components:{
			Progress,
			Foot
		},
		created(){

			this.$nextTick()
			.then(() =>{
				this.initData();
				this.swiperFun();
			})

			
		},
		mounted(){

		
			
		},
		methods:{

			show(){
				console.log('ok')
			},


			initData(){
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/home/index',
					data:qs.stringify({
						skipSign:1
					})

				}).then(response =>{
					this.newPlayer  = response.data.data.newPlayer;
					this.bannerList = response.data.data.bannerList;
					this.borrow =  response.data.data.borrow;
					this.newsPost = response.data.data.post;
					
				}).catch(function(){
					
				})	 
			},

			swiperFun(){
				
					new Swiper('.home_banner .swiper-container', {
						direction: 'horizontal',
						loop: true,
						autoplay:true,
						observer:true, //修改swiper自己或子元素时，自动初始化swiper
    					observeParents:true,//修改swiper的父元素时，自动初始化swiper
					});


					new Swiper('.home_notice .swiper-container', {
						direction : 'vertical',
						loop: true,
						autoplay:true,
						observer:true, //修改swiper自己或子元素时，自动初始化swiper
    					observeParents:true,//修改swiper的父元素时，自动初始化swiper
					})
			},
			linkto(event){
			  window.location.href = "https://www.hushangcaifu.com/guide/index"
			 
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
		.swiper-slide{
			width: 100%!important;
			height: 1.8rem!important;
			background: pink;

			img{
				display: block;
				height: 1.8rem;
			}
		}
		
		
	}

	.notice-wrap{
		
		@include wh(100%,0.3rem);
		border-bottom: 0.01rem solid $blue; 
		.home_notice{
			width: 100%;
			height: 0.3rem;
			.swiper-wrapper{
				height: 0.3rem;
				.swiper-slide{
					height: 100%!important;
					@include fcs(0.12rem,$gray)
					line-height: 0.3rem;
					padding-left: 5%;
				}
			}
		}



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

			.biao-icon-content{
				@include wh(100%,0.3rem);
				line-height: 0.3rem;
				span{
					padding: 0.01rem 0.03rem;
					border:0.01rem solid  #A1BCE5;
					border-radius: 0.05rem;
					@include fcs(0.01rem,#A1BCE5 )
				}
			}


			.progress-content{
				box-sizing: border-box;
				padding-top: 0.05rem;
				@include wh(100%,0.2rem)
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
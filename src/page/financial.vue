<template>


	<div class="financial">
	
			<header>
			
				<mt-navbar v-model="selected"  class="biao-list-control-wrap">
					<mt-tab-item id="1">日常标的</mt-tab-item>
					<mt-tab-item id="2">债券转让</mt-tab-item>
				
				</mt-navbar>

			</header>


			<!-- tab-container -->
			<mt-tab-container v-model="selected">

				<mt-tab-container-item id="1">
					<mt-cell v-for="item in alldata"  class="biao-item">



						<!-- 复制开始 -->


						<div class="style-fixed-box">
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
									<p>{{item.investPeriod}}<span></span></p>
									<h5>标的期限</h5>
								</li>
								<li class="com-biao-amount">
									<p>{{item.account}}<span>万</span></p>
									<h5>标的金额</h5>
								</li>
							</ul>


						</div>

						<!-- 复制结束 -->
						

					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="2">
					<mt-cell v-for="n in 4" :title="'content ' + n" />
				</mt-tab-container-item>

				
			</mt-tab-container>






		




		<Foot></Foot>
	</div>



</template>


<script>

	import qs from 'qs';

	import Foot from '../components/foot.vue'

	import Progress from '../components/progress.vue'

	import { Navbar, TabItem } from 'mint-ui';



	export default{
		data(){
			return {
				selected: '1',
				alldata:[] 
			}
		},
		created(){
			this.$nextTick().then( () =>{
				this.initData();
			})
		},


		components:{
			Progress,
			Foot
			
		},
		methods:{
			initData(){
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/borrow/borrow-list',
					data:qs.stringify({
						skipSign:1,
						nextPage:2
					})

				}).then(response =>{
					this.alldata = response.data.data.list;
					console.log(this.alldata);
					
				}).catch(function(){
					
				})	 

			}
		}
	}

</script>

<style lang ='scss'>
	.mint-cell-title{
		background:red;
		display:none;
	}

	.mint-navbar .mint-tab-item {
		padding: 9px 0;
		font-size: 15px;
	}

</style>




<style lang ='scss' scoped>


@import '../style/mixin';
	.financial{
		@include fcs(0.15rem,$gray);
		header{
			padding: 0.2rem 0;
			background: #397BE6;
			.biao-list-control-wrap{
				@include wh(80%,0.3rem);
				border-radius: 0.05rem;
				border:0.01rem solid #fff;
				margin: 0 auto;
				mt-tab-item{
					float: left;
					text-align: center;
					line-height: 0;
					@include wh(50%,0.3rem);
					@include fcs(0.15rem,#fff);
				}

			}
		}

		.biao-item{


			.mint-cell-title{display:none!important;}

			padding: 0.15rem;
			@include bc(#fff);
			margin-bottom: 0.2rem;

			.mint-cell-value{

				    flex-direction: column;
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

	

	}

	



</style>
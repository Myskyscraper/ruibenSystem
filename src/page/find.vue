<template>
	<div class="find">


		<!-- 开始复制 -->

		<div>  
			<div class="nav">  
				<mt-button size="small" @click.native.prevent="active = 'tab-container1'">活动发现</mt-button>  
				<mt-button size="small" @click.native.prevent="active = 'tab-container2'">发标预告</mt-button>   
			</div>  

			<div class="page-tab-container"> 

				<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  

					<mt-tab-container-item id="tab-container1">  
						<div class="card-wrap">
							<div class="card-content">
								<ul class="card-info-per">
									<li>会员登记:<span>V3</span> </li>
									<li>当前日均净资产：¥ 345888</li>
									<div class="rece-btn">领取本月会员福利</div>
								</ul>
							</div>
						</div>

						<ul class="active-wrap">
							

						</ul>
					</mt-tab-container-item>

					<mt-tab-container-item id="tab-container2">  
						<!-- 发标预告开始 -->
							<ul class="will-send-biao-wrap">

								<li class="will-biao-content" v-for="item in alldata">
									<div class="biao-basic-info">
										<p>{{item.name}}</p>
										<h5>借款金额：600</h5>
										<h5>借款期限：10天</h5>
									</div>
									<div class="biao-basic-bate">
										<div class="will-biao-time"><span>21:00</span></div>
										<p class="will-biao-bate">15.0%</p>
										<p class="will-biao-instr">历史年华收益</p>
									</div>
									<div class="spc"></div>
								</li>
							</ul>

						<!-- 发标预告结束 -->
					</mt-tab-container-item>


				</mt-tab-container>  
			</div>  
		</div> 
		<!-- 结束复制 -->
		<Foot></Foot>
	</div>
</template>


<script>
	import qs from 'qs';
	import Foot from '../components/foot.vue'
	import { TabContainer, TabContainerItem } from 'mint-ui';
	export default{
		data(){
			return {
				active:1,
				active: 'tab-container1',
				alldata:[]
			}
		},
		created(){
			this.$nextTick().then( ()=>{
				this.initData()
			})
		},
		components:{
			Foot
		},
		methods:{
			initData(){
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/home/preprojects',
					data:qs.stringify({
						skipSign:1,
						nextPage:2
					})

				}).then(response =>{
					this.alldata = response.data.data.list;
					
				}).catch(function(){
					
				})	
			}
		}
	}

</script>


<style lang ='scss' scoped>
	@import '../style/mixin';
	.find{
		.nav{
			display:flex;
			justify-content: space-evenly;
			padding:0.1rem 0;
		}
		.page-tab-container{
			.card-wrap{
				@include wh(100%,1.9rem);
				background: #395480;
				box-sizing:border-box;
				padding-top:0.2rem;
				.card-content{
					@include wh(80%,1.5rem);
					background:#5D93D3;
					margin:0 auto;
					background:url(../images/p3_vip.png) no-repeat 0 0;
					background-size:0.9rem 0.9rem;

					.card-info-per{
						float:right;
						@include wh(2rem,100%);
						@include fcs(0.14rem ,$gray); 
						li{
							line-height:0.3rem;
							&:nth-child(1){
								@include fcs(0.15rem ,#437FBF); 
								span{
									@include fcs(0.3rem ,#ffF); 
								}
							}

							&:nth-child(2){
								@include fcs(0.14rem ,#fff); 
							}
						}

						.rece-btn{
							@include wh(1.4rem,0.26rem);
							background:#fff;
							border-radius: 0.1rem;
							text-align:center;
							line-height:0.26rem;
						}
					}
				}
			}
			.will-send-biao-wrap{
				.will-biao-content{
					display:flex;
					padding:0.15rem;
					margin-bottom:0.2rem;
					background:#fff;
					.biao-basic-info{
						flex:2;
						border-right:0.01rem solid #CCDFFF;
						p{
							@include fcs(0.15rem,#1F304C);
							margin-bottom: 0.05rem;
						}
						h5{
							@include fcs(0.14rem, #738299);
							line-height:0.3rem;
							font-weight:normal;
						}
					}
					.biao-basic-bate{
						flex:1;
						padding-left:0.1rem;

						.will-biao-time{

							@include wh(50%,0.2rem);
							margin:0 auto;
							text-align:center;
							line-height:0.2rem;
							border-radius:0.05rem;
							@include fcs(0.12rem,#fff);
							background: #FFC73C; 
						}
						
						.will-biao-bate{
							@include fcs(0.3rem, #397CE7);
							text-align:center;
							margin: 0.1rem 0;
						}

						.will-biao-instr{
							@include fcs(0.1rem, #A1BDE5);
							text-align:center;
						}
						
					}
				}
			}
		}



	}



</style>
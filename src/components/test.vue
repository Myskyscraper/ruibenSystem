<template>

	<div class="test">

		<input type="file" value="点击" />	


		<ul>
			<li v-on:click="show">点击一个</li>
			<li>点击第二个</li>
			<li>点击第三个</li>
		</ul>


		<div>
			{{newPlayer.account}}
		</div>

		<button >登陆{{fullName}}</button>
		
		<p>{{count}}</p>

		<p>{{test}}</p>

		<p v-on:click="lookData">哈哈哈</p>
		

		<form action="">

			<div class="form-group">
				<label>手机号:</label>
				<input type="text" placeholder="请输入手机号码" v-model="phone"/>
			</div>

			<div class="form-group">
				<label>手机号:</label>
				<input type="text" placeholder="请输入手机号码" v-model="phone"/>
			</div>

		</form>

		<div class="box biao-item" v-for="item in alldata" >
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


		</div>

	</div>	
</template>




<script>
	import qs from 'qs';
	export default {
		name:'test',
		data(){
			return {
				allData:{},
				newPlayer:{},
				phone:1223,
				alldata:null
			}
		},
		created(){
			this.show();
			this.initData();
		},
		mounted(){
		
			let i=1;
			setInterval(() => {
			  this.$store.commit('updateCount',i++)
			}, 1000)
		},
		computed:{
			test(){
				return this.$store.state.test
			},
			count(){
				return this.$store.state.count
			},
			fullName(state) {
				return this.$store.getters.fullName
			},
			texta(){
				return this.$store.state.a.text
			},

			textb(){
				return this.$store.state.b.text
			}
		},
		methods:{
			show(){

				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/home/index',
					data:qs.stringify({
						skipSign:1
					})

				}).then(response =>{

					this.allData = response.data;
					this.newPlayer = response.data.data.newPlayer
					console.log(response.data)


				}).catch(function(){
					
				})	
				 
			},

			lookData(){
				console.log('ok');

				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/member/register',
					data:qs.stringify({
						skipSign:1,
						// password:'123456',
						// // phone:'18203651557',
						// smsCode:'123456'
					})

				}).then(response =>{

					this.allData = response.data;
					this.newPlayer = response.data.data.newPlayer
					console.log(response.data)


				}).catch(function(){
					
				})	


			},

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


<style scoped lang="scss">
	
	@import '../style/mixin';

	.biao-item{
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

  



</style>
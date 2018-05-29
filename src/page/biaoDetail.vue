<template>

	<div class="biaoDetailBox">

		<header>{{alldata.name}}</header>


		<div class="cir-Bate-wrap">
			
		</div>

		<ul class="biao-basic-intro">
			<li>
				<div class="img-wrap biao-date">
					
				</div>
				<p>{{alldata.investPeriod}}</p>
			</li>
			<li>
				<div class="img-wrap biao-type">
					
				</div>
				<p>{{alldata.style}}</p>
			</li>
			<li>
				<div class="img-wrap biao-bate">
					{{alldata.apr}}%
				</div>
				<p>年华收益</p>
			</li>

		</ul>

		<div class="biao-common-box">
			<!-- 选项卡开始 -->
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">基础详情</mt-tab-item>
				<mt-tab-item id="2">审核资料</mt-tab-item>
				<mt-tab-item id="3">还款记录</mt-tab-item>
				<mt-tab-item id="4">投资记录</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					根据网络借贷相关法律法规及监管要求，请您在出借之前，仔细阅读以下重要内容: 当您点击“立即出借”、“确认出借”或其他类似含义选项时，即视为您已经阅读并完全理解、认同并接受以下关于出借标的的各种风险，并为自身的投资决策自行承担全部风险。您参与出借标的，可能会面临以下风险，包括但不限于：
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<mt-cell v-for="n in 4" :title="'content ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<mt-cell v-for="n in 6" :title="'content ' + n" />
				</mt-tab-container-item>

				<mt-tab-container-item id="4">
					<mt-cell v-for="n in 8" :title="'content ' + n" />
				</mt-tab-container-item>
			</mt-tab-container>
			
			<!-- 选项卡结束 -->


		</div>



		<div class="bottom-btn-state-wrap">
			<div class="bottom-state-btn" v-on:click="touTender">投标</div>
		</div>


	</div>


</template>


<script>

	import qs from 'qs';

	import router from '../router'
	
	export default {
		data(){
			return {
				selected: '1',
				alldata:{}
			}
		},
		created(){
			this.$nextTick().then( () =>{
					this.recePro();
			})
		
		},
		methods:{
			recePro(){

				var getInfo = String(this.$route.query.info.id);

				if(getInfo == "undefined"){
					getInfo = localStorage.getInfo	
				}{
					localStorage.getInfo = getInfo;
				}

				// ------------------网络请求开始
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/borrow/borrow-detail',
					data:qs.stringify({
						skipSign:1,
						nextPage:2,
						id:getInfo
					})

				}).then(response =>{
					this.alldata = response.data.data;
					console.log(typeof this.alldata);
					
				}).catch(function(){
					
				})

				//------------------------- 网络请求结束

			},

			touTender(){
				console.log(this.alldata.status);
				let biaoinfos = this.alldata;
				//由详情页调到投标页
				console.log(typeof biaoinfos)
				if(this.alldata.status =='0'){
					router.push({path:'/MakeSureTender',query:{info:biaoinfos}})
				}
			}



		}
	}


</script>


<style lang ='scss' scoped>
	@import '../style/mixin';
	.biaoDetailBox{
		font-size:0.12rem;
		header{
			@include fcs(0.18rem,#fff);
			background:#397BE6;
			padding:0.08rem;
			text-align:center;
		}
		.cir-Bate-wrap{
			@include wh(100%,2rem);
			background:#397BE6;
		}

		.biao-basic-intro{
			display:flex;
			@include wh(100%,0.9rem);
			li{
				height:0.9rem;
				display:flex;
				flex:1;
				text-align:center;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				.img-wrap{
					@include wh(0.45rem,0.45rem);
					border:0.01rem solid #CCDFFF;
					border-radius:50%;
				}
				.biao-date{
					background:url(../images/p2_abacus_blue.png) no-repeat center;
					background-size: 50% 50%;
				}
				.biao-type{
					background:url(../images/p2_date_blue.png) no-repeat center;
					background-size: 50% 50%;
				}
				.biao-bate{
					display: flex;
    				align-items: center;
    				justify-content:center;
					@include fcs(0.12rem,#397CE7)
				}
				p{
					margin-top:0.08rem;
					color:#728099;
				}
			}
		}

		.mint-tab-container-item{
			box-sizing:border-box;
			@include fcs(0.12rem,$gray);
			padding:0.1rem 0.08rem;
			line-height:0.2rem;
		}

		.bottom-btn-state-wrap{
			position:fixed;
			bottom:0;
			left:0;
			background:#ffffff;
			display:flex;
			justify-content:center;
			align-items:center;
			@include wh(100%,0.6rem);
			.bottom-state-btn{
				@include wh(80%,0.37rem);
				background:#397BE6;
				border-radius:0.05rem;
				text-align:center;
				line-height:0.37rem;
			}
		}
	}


</style>
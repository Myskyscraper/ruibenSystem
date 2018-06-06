<template>

	<div class="makesureTender-wrap">

		<header>

			<div class="tenderNmae">
				奔驰A200抵押贷款
			</div>
			<div class="tenderAmount">
				￥{{getBiaoData.account}}
			</div>
			<p>剩余可投</p>

		</header>

		<section class="inp-body">
			<h4>确认投标</h4>
			<p class="tenderMoney">￥{{getBiaoData.surplusAccount}}</p>
			<div class="inp-wrap">
				<input type="text" placeholder="可用余额" v-model="money"> <span>剩余全投</span>
			</div>
		</section>

			<p class="inp-warning">投资区间必须大于100元，并以100的整数倍递增</p>

		<div class="userpackets">
			 使用优惠券 <span class="icon-right">></span>
		</div>

		
		<div class="sureBtn middlebtn" v-on:click="sureBtn">
				确认投标
		</div>


	</div>

</template>

<script >
import qs from 'qs';
export default{
	data(){
		return {
			getBiaoData:{},
			money:''
		}
	},
	created(){
		
	},

	mounted(){
		this.$nextTick().then( () =>{
					this.initData();
			})
	},

	methods:{

		initData(){

			this.getBiaoData =(this.$route.query.info);
		},

		sureBtn(){
			var personId = localStorage.userId;
			// ------------------网络请求开始
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/borrow/tender',
					data:qs.stringify({
						skipSign:1,
						userId:personId,
						borrowId:this.getBiaoData.id,
						money:this.money,
						ticket:0
					})

				}).then(response =>{
					this.alldata = response.data.data;
					console.log( this.alldata);
					
				}).catch(function(){
					
				})

				//------------------------- 网络请求结束
			
		}
	}




}



</script>


<style lang ='scss' scoped>

@import '../style/mixin';

.makesureTender-wrap{
	font-size:0.12rem;
	header{
		box-sizing:border-box;
		@include wh(100%,0.96rem);
		background:#397BE6;
		padding:0.1rem 0.15rem;
		.tenderNmae{
			@include fcs(0.14rem,#fff);
		}
		.tenderAmount{
			@include fcs(0.2rem,#fff);
			margin:0.15rem 0 0.1rem;
		}
		p{
			@include fcs(0.13rem,#99BEFF);
		}
	}
	.inp-body{
		margin-top:0.1rem;
		background:#fff;
		box-sizing:border-box;
		padding:0.12rem 0.15rem 0 0.15rem;
		h4{
			@include fcs(0.14rem,#A1BCE5);
			font-weight:500;
		}
		.tenderMoney{
			@include fcs(0.3rem,#1F304C);
			margin:0.1rem 0;
		}
		.inp-wrap{
			@include wh(100%,0.4rem);
			border-top:0.01rem solid #CCDFFF;
			border-bottom:0.01rem solid #CCDFFF;
			line-height:0.4rem;
			input{
				width:75%;
				border:none;
				outline:none;
			}
			span{
				border-left:0.01rem solid #397CE7;
				padding-left:0.05rem;
				color:#397CE7;
			}
		}


	}

	.inp-warning{
		background:#f5f5f5;
		padding:0.1rem 0.15rem;
		@include fcs(0.12rem,#738299);
	}

	.userpackets{
		height:0.4rem;
		@include fcs(0.14rem, #A1BCE5);
		line-height:0.4rem;
		padding-left:0.15rem;
		background:#fff;
		.icon-right{
			float:right;
			margin-right:0.15rem;
		}
	}
}





</style>
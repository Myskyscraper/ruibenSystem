<template>
	<div class="withdraw-wrap">

		<div class="withdrawLocal">

		<div class="widthdraw-head">
						
			<div class="mainbox">
				<span class="bank-logo">
					<img v-bind:src="reback.img" alt="">

				</span>
				<p class="bank-name">{{reback.bankName}}</p>
				<p class="bank-number">{{reback.bankCard|hideNumber}}</p>
			</div>

		</div>

		<dl class="userrest-box">
			<dd>当前可提现至您绑定的银行卡的金额为：</dd>
			<dt>￥{{propertyMoney.withdrawAmount}}</dt>
		</dl>



		<ul class="box-inp box-two-column">
			
			<li>
				<span>提现金额：</span> 
				<b> <input type="text" v-model="withdrawNumber"  v-on:change="feeLook" ></b> 
				<i>全部提出</i>
			</li>
		

		</ul>


		<dl class="userrest-box getMoney">
			<dd>实际到账：</dd>
			<dt>￥{{withdrawNumber}}</dt>
		</dl>

		<ul class="box-inp box-two-column">
			<li>
				<span>手续费：<b class="feeBox">{{feeBack}}</b></span> <i></i>
			</li>

		</ul>



		<div class="sureBtn middlebtn" v-on:click='widthDrawBtn'>
				提现
		</div>

		</div>


		<div class="withdrawOther" v-bind:data='formData'>
			

		</div>
	

 
	</div>


</template>


<script>

import qs from 'qs';

import router from '../router';

export default{
	data(){
		return {
			reback:{},
			propertyMoney:{},
			withdrawNumber:null,
			feeBack:null,
			formData:''
		}
	},
	filters:{
		hideNumber(str){

			// var x = n.split('');
		 	// x.splice(4,11,"******");
		 	// return x.join('');
		    // var str = "111111111111";
			// var reg = /^(\d{4})\d+(\d{4})$/;
			// return str = str.replace(reg, "$1****$2");


			return str;
		},

		widthfee(n){
				if(n =='0'){
					return '剩余免费提现次数为'+n;
				}else{
					return n;
				}
		}


	},

	created(){
		this.$nextTick().then( () =>{
					this.initData()


					
			})
	},
	methods:{

			//银行卡信息

			initData(){
				var userId = localStorage.userId;
				
				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/account/bank-account',//自动投标返回信息
					data:qs.stringify({
						skipSign:1,
						userId:userId
					})

				}).then(response =>{
				
					this.reback = response.data.data;	

					console.log(this.reback.bankCard.length);


				}).catch(function(){
					
				})


				//------------------------- 网络请求结束

				this.propertyMoney = this.$route.query.info;


			},
			//提现手续费
			feeLook(){
				var userId = localStorage.userId;

				// ------------------网络请求开始 -----
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v2/account/withdraw-fee',//自动投标返回信息
					data:qs.stringify({
						skipSign:1,
						userId:userId,
						money:this.withdrawNumber
					})

				}).then(response =>{

					console.log('ok');
				
				this.feeBack = response.data.data;

					console.log(this.feeBack);



				}).catch(function(){
					
				})


				//------------------------- 网络请求结束
			},

			//提现按钮

			widthDrawBtn(){
				var userId = localStorage.userId;


				// ------------------网络请求开始 -----

				this.$axios.get('http://121.40.32.223:8081/v3/account/withdraw', {  
				    params : { //请求参数  
				    	skipSign:1,
				 		userId:userId,
				 		txAmount:this.withdrawNumber,
				 		txFee:this.feeBack
				    }  
				}).then(function(response){  

					var txt = response.data;

					console.log(txt);
	
					this.formData = txt;

					
				   
				}).catch(function(response){  
				     
				})  


				//------------------------- 网络请求结束

				// this.banksp= '我更新啦'


				this.formData = `<form action="https://access.credit2go.cn/escrow/p2p/page/withdraw" id="form" method="post"><input type='hidden' name='version' value='10'><input type='hidden' name='txCode' value='withdraw'><input type='hidden' name='instCode' value='00520001'><input type='hidden' name='bankCode' value='30050000'><input type='hidden' name='txDate' value='20180619'><input type='hidden' name='txTime' value='111039'><input type='hidden' name='seqNo' value='113944'><input type='hidden' name='channel' value='000002'><input type='hidden' name='accountId' value='6212461480000000886'><input type='hidden' name='idType' value='01'><input type='hidden' name='idNo' value='120102198412189949'><input type='hidden' name='name' value='伊悦'><input type='hidden' name='mobile' value='17621056805'><input type='hidden' name='cardNo' value='6228481234567890010'><input type='hidden' name='txAmount' value='998.00'><input type='hidden' name='txFee' value='2.00'><input type='hidden' name='currency' value='156'><input type='hidden' name='userIP' value='180.167.84.162'><input type='hidden' name='forgotPwdUrl' value='http://121.40.32.223:8088/v3/member-center/pay-password-reset'><input type='hidden' name='retUrl' value='http://121.40.32.223:8088/m.g'><input type='hidden' name='notifyUrl' value='http://121.40.32.223:8088/notify/withdraw'><input type='hidden' name='acqRes' value='47459'><input type='hidden' name='sign' value='YrJ4Z0o+JFtw9fFUmbH+/v5iM9fqNTNNeJFb+kfeIyek2ArZpqfhmE1t5yy6mf9zXPExtGMzK9tbyxCB+45YLnqHsb8BFa1zMhAGUK3QtBSpnb//RcBJY1ZWQ5F73GH1f9UI7BKqFIOUBO3QN2RrTkAumykgzaDTRSVSecNdgzT/Hpnx5hJefRA7+9I4u3U5/xx5aaO/yaYlCT8en8z4Sp2jTsjmN1TUtjh3hKzlOaO1rpAz0Oq99fXEXwCE6MDTdmTkYxiYN8ZA3KU5b850u5uEN5Jbb3yI7XI9XjqFe894cUDgn+ADBxGYqfjqBnIybKNLGsYDURZ8rl+zQR8Vew=='><input style='display:none' type='submit' name='提交'></form><div style='background: #f5f5f5; margin-top: 50%;margin-bottom: 50%;'>
    			 <span style='font-size: 16px;display: block;text-align: center;'>正在跳转中...</span>
					</div>`;

			}


		}

	}

	

	</script>


<style lang ='scss' scoped>

@import '../style/mixin';
	.withdraw-wrap{
		font-size:0.12rem;
		background:#f1f1f9;

		.widthdraw-head{
			@include wh(100%,1.2rem);
			background:$blue;
			margin-bottom:0.2rem;
			position:relative;
			
			.mainbox{
				@include wh(80%,0.8rem);
				box-sizing:border-box;
				padding-top:0.15rem;
				padding-left:0.55rem;
				background:#fff;
				position:absolute;
				bottom:-0.2rem;
				left: 0.36rem;

				.bank-name{
					@include fcs(0.15rem,#1F304C);
					margin-bottom:0.1rem;
				}

				.bank-number{
					@include fcs(0.16rem,#1F304C);
				}

				.bank-logo{
					display:block;
					@include wh(0.36rem,0.36rem);
					img{
						@include wh(100%,100%);
					}
					position:absolute;
					left: 0.15rem;
    				top: 0.18rem;
				}
			}
		}
		
		.userrest-box{
			padding-left: 0.15rem;
			padding-top: 0.15rem;
			dd{
				@include fcs(0.12rem,#738299);
			}
			dt{
				margin-top: 0.1rem;
				@include fcs(0.2rem,#738299);
				border-bottom: 0.01rem solid #D9E0FF;
				padding-bottom: 0.1rem;
			}
		}
		.box-inp{
			background:#fff;
			li{
				span{
					@include fcs(0.14rem,#A1BDE5);
				}
				
				b{
					input{
						border:none;
						outline:none;
					}
				}

				i{
					input{
						border:none;
						background: #f5f5f5;
						text-align: right;
						outline: none;
					}
				}

				.feeBox{
					color:#555;
					font-weight:500;
				}
				.v-mdd{
					padding-top:0.08rem;
				}
			}
		}

		.info-warning{
			padding-top: 0.2rem;
			padding-left: 0.15rem;
			color:#738299;
			padding-bottom:0.2rem;
		}

		.getMoney{
			background:#fff;
			dd{
				@include fcs(0.14rem,#A1BCE5);
			}

			dt{
				@include fcs(0.3rem,#397BE6);
			}
		}
		.with-bank-waring{
			@include fcs(0.14rem,#738299);
			line-height:0.3rem;
			padding-left:0.15rem;
			background:#fff;
		}
	}


</style>


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
		
		·

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

		<mt-picker :slots="slots" @change="onValuesChange"  ref="picker"  ></mt-picker> 

		<p  v-text=""></p>

		<div class="formBack" v-html="formData" >
			

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
				alldata:null,
				formData:'',
				slots: [
				{
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot3',
					textAlign: 'left'
				}
				]
			}
		},
		created(){
			this.show();

			this.initData();

			this.formData=`<form action="https://access.credit2go.cn/escrow/p2p/page/withdraw" id="form" method="post"><input type='hidden' name='version' value='10'><input type='hidden' name='txCode' value='withdraw'><input type='hidden' name='instCode' value='00520001'><input type='hidden' name='bankCode' value='30050000'><input type='hidden' name='txDate' value='20180619'><input type='hidden' name='txTime' value='111039'><input type='hidden' name='seqNo' value='113944'><input type='hidden' name='channel' value='000002'><input type='hidden' name='accountId' value='6212461480000000886'><input type='hidden' name='idType' value='01'><input type='hidden' name='idNo' value='120102198412189949'><input type='hidden' name='name' value='伊悦'><input type='hidden' name='mobile' value='17621056805'><input type='hidden' name='cardNo' value='6228481234567890010'><input type='hidden' name='txAmount' value='998.00'><input type='hidden' name='txFee' value='2.00'><input type='hidden' name='currency' value='156'><input type='hidden' name='userIP' value='180.167.84.162'><input type='hidden' name='forgotPwdUrl' value='http://121.40.32.223:8088/v3/member-center/pay-password-reset'><input type='hidden' name='retUrl' value='http://121.40.32.223:8088/m.g'><input type='hidden' name='notifyUrl' value='http://121.40.32.223:8088/notify/withdraw'><input type='hidden' name='acqRes' value='47459'><input type='hidden' name='sign' value='YrJ4Z0o+JFtw9fFUmbH+/v5iM9fqNTNNeJFb+kfeIyek2ArZpqfhmE1t5yy6mf9zXPExtGMzK9tbyxCB+45YLnqHsb8BFa1zMhAGUK3QtBSpnb//RcBJY1ZWQ5F73GH1f9UI7BKqFIOUBO3QN2RrTkAumykgzaDTRSVSecNdgzT/Hpnx5hJefRA7+9I4u3U5/xx5aaO/yaYlCT8en8z4Sp2jTsjmN1TUtjh3hKzlOaO1rpAz0Oq99fXEXwCE6MDTdmTkYxiYN8ZA3KU5b850u5uEN5Jbb3yI7XI9XjqFe894cUDgn+ADBxGYqfjqBnIybKNLGsYDURZ8rl+zQR8Vew=='><input style='display:none' type='submit' name='提交'></form><div style='background: #f5f5f5; margin-top: 50%;margin-bottom: 50%;'>
                    <span style='font-size: 16px;display: block;text-align: center;'>正在跳转中...</span>
					</div>`;
		
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

			onValuesChange(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
					console.log(values[0]);
				}
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
					url:'http://121.40.32.223:8081/v2/borrow/borrow-detail',
					data:qs.stringify({
						skipSign:1,
						nextPage:2,
						id: "154"
					})

				}).then(response =>{
					this.alldata = response.data.data.list;
					console.log(this.alldata);
					
				}).catch(function(){
					
				})	 
			},

			changeStatus(){

			},

			show(){


			}

			


		}

	}
	



</script>


<style scoped lang="scss">
	
	@import '../style/mixin';

	.test{
		font-size:0.18rem;
	}
	
	.switch-wrap{
		width:100%;
		height:0.4rem;
		.switch-content{
			width:0.6rem;
			height:0.3rem;
			border-radius: 0.18rem;
			position:relative;
			border:0.01rem solid #999;
			.switch-audo{
				display:block;
				position:absolute;
				left:0;
				top: -0.01rem;
				width:0.3rem;
				height:0.3rem;
				background:#fff;
				border-radius:50%;
				border:0.01rem solid #999;
				transition: left 0.3s;
			}
		}

		.switch-open{
			background:#64bd63;
			.switch-audo{
				left:0.28rem;
			}
		}
	}
  



</style>
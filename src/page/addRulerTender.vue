<template>
	<div class="addRulerTender-wrap">
		<dl class="userrest-box">
			<dd>账户可用余额</dd>
			<dt>20000</dt>
		</dl>
		<ul class="box-inp box-two-column">
			<li>
				<span>最低投入额度：</span> <i><input type="number" placeholder="请输入100的整数倍" v-model='minTender'></i>
			</li>

			<li>
				<span>最高投入额度：</span> <i><input type="number" placeholder="请输入100的整数倍" v-model='maxTender'></i>
			</li>

			<li>
				<span>是否设置天标：</span> <i class="v-mdd"><mt-switch v-model="value1"></mt-switch></i>
			</li>

			<li>
				<span>月标借款期限：</span> 
				<i> 
					<select name="" id="" v-model = 'minMonth'> 
						<option value="1">1</option>
						<option value="3">3</option>
						<option value="6">6</option>
						<option value="9">9</option>
						<option value="12">12</option>
					</select>

				 	<select name="" id="" v-model = 'maxMonth'>
				 		<option value="1">1</option>
				 		<option value="3">3</option>
				 		<option value="6">6</option>
				 		<option value="9">9</option>
				 		<option value="12">12</option>
				 	</select>

				 </i>
			</li>

			

		</ul>

		<p class="info-warning">
			天标默认为一个月标的，如不投天标，请设置为“否”
		</p>

		<div class="sureBtn middlebtn" v-on:click="updateTenderRuler">
				保存
		</div>

	


	</div>
</template>


<script>

	import qs from 'qs';

	import router from '../router'
	
	import { Toast } from 'mint-ui';

	
	export default {
		data(){
			return {
				value1:true,
				minTender:'',
				maxTender:'',
				minMonth:'',
				maxMonth:'',
				dayCycleStatus:''
			}
		},
		created(){
			this.$nextTick().then( () =>{
					
			})
		
		},
		methods:{
			updateTenderRuler(){
				var userId = localStorage.userId;
				var switchval = (this.value1)?"1":'0';
				var id = (this.$route.query.info);
				
				console.log(this.minTender);

				console.log(this.maxTender);

				if(this.minTender==''||this.maxTender ==''||this.minMonth ==''||this.maxMonth==''){
					Toast('请填写正确信息')
				}else{
					// ------------------网络请求开始
					this.$axios({
						method:'post',
						url:'http://121.40.32.223:8081/v3/borrow-auto/edit',
						data:qs.stringify({
							skipSign:1,
							userId:userId,
							minTender:this.minTender,
							maxTender:this.maxTender,
							minMonth:this.minMonth,
							maxMonth:this.maxMonth,
							dayCycleStatus:switchval,
							id:id
						})

					}).then(response =>{
						var txt = response.data.msg;
						Toast(txt)	
						router.go(-1);					

					}).catch(function(){

					})

				//------------------------- 网络请求结束
				}


				
			}
		}
	}

	

</script>



<style lang ='scss' scoped>

@import '../style/mixin';

.addRulerTender-wrap{
	font-size: 0.12rem;
	.userrest-box{
		padding-left: 0.15rem;
		padding-top: 0.15rem;
		dd{
			@include fcs(0.12rem,$gray);
		}
		dt{
			margin-top: 0.1rem;
			@include fcs(0.2rem,$blue);
			border-bottom: 0.01rem solid #D9E0FF;
			padding-bottom: 0.1rem;
		}
	}
	.box-inp{
		li{
			span{
				@include fcs(0.14rem,#A1BDE5);
			}

			i{
				input{
					border:none;
					background: #f5f5f5;
					text-align: right;
					outline: none;
				}
			}
			.v-mdd{
				padding-top:0.08rem;
			}
		}
	}

	.info-warning{
		padding-top: 0.2rem;
		padding-left: 0.15rem;
	}
}


</style>
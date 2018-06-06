<template>
	<div class="redTicked-wrap">
		<p class="redTicked-title">选择奖券规则</p>
		<ul class="redContent">

			<li v-for="(item,index) in items" v-on:click="addClass(index)" v-bind:class="{ active:index==current}">{{item.select}}<span>√</span></li>
		</ul>

		<div class="footer">
			<p>设置说明</p>
			<article>
			•选择时间优先，则优先使用所有类型中最先失效的福利券；<br><br>
			•选择金额优先，则优先使用可用福利券中金额最大的福利券；<br><br>
			•选择加息券优先，则优先使用加息券中加息最大的福利券，加息券默认使用时间优先规则。
		</article>

		</div>
		
	</div>
</template>


<script>

	import qs from 'qs';

	import router from '../router'

	
	export default {
		data(){
			return {
				current:0,
				items:[
					{select:'加息券优先'},
					{select:'时间优先'},
					{select:'金额优先'}	
				]
			}
		},
		filters:{

			
			
		},
		created(){
			this.$nextTick().then( () =>{
					this.initData();
			})
		
		},
		methods:{
			initData(){
					console.log(this.$route.query.info);
					this.current = this.$route.query.info -1;
				},

			addClass(index){
				this.current=index;
				console.log(typeof index);

				var snum = String(index+1);
				var userId = localStorage.userId;
				// ------------------网络请求开始
				this.$axios({
					method:'post',
					url:'http://121.40.32.223:8081/v3/reward/change-precedence',
					data:qs.stringify({
						skipSign:1,
						userId:userId,
						precedenceId:snum,
					})

				}).then(response =>{
					this.alldata = response.data.data;
					if(this.alldata.status =='1'){
						this.isActive =true;
					}
					console.log(typeof this.alldata);
					
				}).catch(function(){
					
				})

				//------------------------- 网络请求结束



			}

		}
	}


</script>


<style lang ='scss' scoped>

	@import '../style/mixin';
	.redTicked-wrap{
		font-size:0.12rem;
		.redTicked-title{
			line-height:0.3rem;
			padding-left:0.15rem;
			@include fcs(0.12rem,$gray);
		}
		.redContent{
			background:#fff;
			li{
				color:#738299;
				padding-left:0.15rem;
				line-height:0.45rem;
				border-bottom:0.01rem solid #CCDFFF;
				span{
					display:none;
					float:right;
					margin-right:0.15rem;
					font-size:0.14rem;
				}
			}
			.active{
				color:#4A86E7;
				span{
					display:block;
					color:#4A86E7;
				}
			}
		}

		.footer{
			padding:0.2rem 0.15rem 0;
			p{
				@include fcs(0.12rem, #738299)
				margin-bottom:0.1rem;
			}

			article{
				color: #738299;
			}
		}
	}


</style>
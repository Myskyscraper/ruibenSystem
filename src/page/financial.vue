<template>


	<div class="financial">

		<!-- <header>
			<ul class="biao-list-control-wrap">
				<li>日常标的</li>
				<li>债券转让</li>
			</ul>
		</header> -->

	
			<header>
			
			<mt-navbar v-model="selected"  class="biao-list-control-wrap">
				<mt-tab-item id="1">日常标的</mt-tab-item>
				<mt-tab-item id="2">债券转让</mt-tab-item>
			
			</mt-navbar>

			</header>


			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<mt-cell v-for="item in alldata"  ></mt-cell>
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



	}

	



</style>
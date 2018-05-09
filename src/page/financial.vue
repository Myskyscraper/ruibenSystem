<template>


	<div class="financial">

		<header>
			<ul class="biao-list-control-wrap">
				<li>日常标的</li>
				<li>债券转让</li>
			</ul>
		</header>

		




		<Foot></Foot>
	</div>



</template>


<script>

	import Foot from '../components/foot.vue'

	export default{
		data(){
			return {
				
			}
		},
		components:{
			Foot
		},
		methods:{
			
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
				li{
					float: left;
					text-align: center;
					line-height: 0.3rem;
					@include wh(50%,0.3rem);
					@include fcs(0.15rem,#fff);

					
				}

			}
		}



	}

	



</style>
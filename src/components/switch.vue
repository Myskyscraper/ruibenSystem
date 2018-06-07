<template>

	<div class="switch-wrap">
			<div class="switch-content" v-on:click="changeStatus">
				<span class="switch-audo"></span>
			</div>
		</div>
	
</template>


<script >
import qs from 'qs';
export default{
	data(){
		return {
			value1:false
		}
	},
	created(){
		
	},

	mounted(){
		
	},
	methods:{
		changeStatus(){
			
		}
	}
}



</script>



<style lang ='scss' scoped>

@import '../style/mixin';

.switch-wrap{
		font-size:0.16rem;
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
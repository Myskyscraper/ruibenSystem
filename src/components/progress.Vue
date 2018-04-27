<template>
	
	<div class="progress-wrap">
		
		<div class="progress-box">

								<span class="progressNumber">{{rateProg}}</span>

			<div class="progress" v-bind:style="'width:'+rateProg+'%;'"></div>
		</div>
		<!-- v-bind:属性=“ ‘字符串’+自定义变量名” -->
		
			
	<!-- 	<div class="progress" v-bind:style="'width:'+rateProg+';'"></div> -->
	</div>


</template>


<script>
	export default{
		data(){
			return {
				w:50
			}
		},
		props:['rateProg']


	}

	




</script>


<style lang ='scss' scoped>
	@import '../style/mixin';
	
	.progress-wrap{
		@include wh(100%,0.1rem);
		.progress-box{
			position: relative;
			@include wh(100%,0.04rem);
			background: #EBEBEB;
			.progressNumber{
				position: absolute;
				right:0;
				top: -0.2rem;
				@include fcs(0.12rem,#FFC73A)
			}
			.progress{
				@include allLeft;
				height: 0.04rem;
				background: #FFC73A;
			}
		}
	}



</style>
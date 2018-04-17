<template>

	<div class="test">

		<input type="file" value="点击" />	

		<ul>
			<li v-on:click="show">点击一个</li>
			<li>点击第二个</li>
			<li>点击第三个</li>
		</ul>


	</div>
	
</template>

<script>

	export default {
		name:'test',
		data(){
			return {
				
			}
		},
		mounted(){

		},
		methods:{
			show(){
				console.log('ok');
			}


		}

	}
	



</script>


<style scoped lang="scss">

   @import '../style/test';
	



</style>
<template>

	<div class="test">

		<input type="file" value="点击" />	

		<ul>
			<li v-on:click="show">点击一个</li>
			<li>点击第二个</li>
			<li>点击第三个</li>
		</ul>

		<button >登陆{{count}}{{fullName}}</button>




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
			console.log(this.$store);
			let i=1;
			setInterval(() => {
			  this.$store.commit('updateCount',i++)
			}, 1000)
		},
		computed:{
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
				 this.$toast('Hello world!')
			}


		}

	}
	



</script>


<style scoped lang="scss">

   @import '../style/test';
	



</style>
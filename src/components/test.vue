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
				phone:1223

			}
		},
		created(){
			this.show();
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


			}


		}

	}
	



</script>


<style scoped lang="scss">

   @import '../style/test';
	



</style>
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

		<mt-picker :slots="slots" @change="onValuesChange"  ref="picker"  ></mt-picker> 

		<p  v-text=""></p>

		

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

			}

			


		}

	}
	



</script>


<style scoped lang="scss">
	
	@import '../style/mixin';

	.test{
		font-size:0.18rem;
	}
	
  



</style>
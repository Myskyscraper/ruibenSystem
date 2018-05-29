<template>

	<footer id="footer">
		<ul>
			<router-link to="/Home">
			
				<span><img src="../images/ic_1home.png"></span>  
				<p>精选</p>
			
			</router-link>	

			<router-link to="/Financial">
			
				<span><img src="../images/ic_2money.png"></span> 
				<p>理财</p>
			
			</router-link>	

			<router-link to="/Find">
		
				<span><img src="../images/ic_3discover.png"></span> 
				<p>发现</p>
			
			</router-link>	

			<router-link to="User">
			
				<span><img src="../images/ic_4me.png"></span> 
				<p>我的</p>
			
			</router-link>	
		</ul>
	</footer>

</template>

<script >
	export default{
		data(){
			return {

			}
		},

		methods:{

		}




	}

	

</script>


<style lang ='scss' scoped>

@import '../style/mixin';

#footer{
	@include wh(100%,0.5rem);
	ul{
		@include wh(100%,0.5rem);
		background: #fff;
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			a{
				text-decoration: none;
				flex: 1;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				padding-top: 0.08rem;
				text-align: center;
				span{
					display:inline-block;
					margin: 0 auto;
					@include wh(0.25rem,0.25rem);
					@include fcs(0.12rem,$gray);
					img{
						@include wh(100%,100%);
					}
				}

				p{
					margin-top: 0.02rem;
					@include fcs(0.1rem,#A1BCE5)
				}
				
			}
			

		}
	}




	</style>
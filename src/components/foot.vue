<template>

	<footer id="footer">
		<ul>
			<li>
				<img src="../images/ic_1home.png">
				<p>精选</p>
			</li>
			<li>
				<img src="../images/ic_2money.png">
				<p>理财</p>
			</li>
			<li>
				<img src="../images/ic_3discover.png">
				<p>发现</p>
			</li>
			<li>
				<img src="../images/ic_4me.png">
				<p>我的</p>
			</li>
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
			li{
				box-sizing: border-box;
				padding-top: 0.08rem;
				flex: 1;
				text-align: center;
				img{
					display: inline-block;
					@include wh(0.25rem,0.25rem);
				}

				p{
					margin-top: 0.02rem;
					@include fcs(0.1rem,#A1BCE5)
				}
			}

		}
	}




</style>
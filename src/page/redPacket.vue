<template>
	<div class="redPacket-wrap">
		<nav class="header-control">
			<li>全部 ▲</li>
			<li>全部</li>	


			<div class="header-content1">
				<p>全部</p>
				<p>加息券</p>
				<p>红包</p>
			</div>
			
			


		</nav>


		<section>
			<ul class="redpack-sec">
				<li class="redpack-content can-use">
					<dl class="redpack-left">
						<dd class="red-name">288</dd>
						<dt class="red-intro">新手注册红包</dt>
					</dl>

					<div class="redpack-right">
						<p class="red-ruler">单笔投资≥300000
						12个月以上标的可以使用</p>
						<p class="red-date">2017.03.10 ~ 2017.04.10</p>
					</div>

					
				</li>
				

				<li class="redpack-content no-use">
					<dl class="redpack-left">
						<dd class="red-name">288</dd>
						<dt class="red-intro">新手注册红包</dt>
					</dl>

					<div class="redpack-right">
						<p class="red-ruler">单笔投资≥300000
						12个月以上标的可以使用</p>
						<p class="red-date">2017.03.10 ~ 2017.04.10</p>
					</div>

					<div class="have-use"></div>
				</li>

				<li class="redpack-content no-use">
					<dl class="redpack-left">
						<dd class="red-name">288</dd>
						<dt class="red-intro">新手注册红包</dt>
					</dl>

					<div class="redpack-right">
						<p class="red-ruler">单笔投资≥300000
						12个月以上标的可以使用</p>
						<p class="red-date">2017.03.10 ~ 2017.04.10</p>
					</div>
					<div class="over-load"></div>
				</li>


				<li class="redpack-content no-use">
					<dl class="redpack-left">
						<dd class="red-name">288</dd>
						<dt class="red-intro">新手注册红包</dt>
					</dl>

					<div class="redpack-right">
						<p class="red-ruler">单笔投资≥300000
						12个月以上标的可以使用</p>
						<p class="red-date">2017.03.10 ~ 2017.04.10</p>
					</div>

					<div class="have-use"></div>
				</li>


			</ul>	



		</section>


	</div>
</template>


<script>

	export default{
		data(){
			return {
				formData:'',
				txt:'xxx'
			}
		},
		created(){
			this.$nextTick().then( () =>{
				
			})
		},

		methods:{
			 


		// $ajax.load

		}
	}

	


</script>


<style lang ='scss' scoped>
	 @import '../style/mixin';
	.redPacket-wrap{
		font-size:0.18rem;
		.header-control{
			display:flex;
			padding:0.1rem 0;
			background:#fff;
			li{
				display:flex;
				flex:1;
				justify-content:center;
				position:relative;
				&:nth-child(1){
					border-right:0.01rem solid #CCDFFF;
				}
			
			
			}

			.header-content1{
				@include wh(100%,0.9rem);
				position:absolute;
				left:0;
				top:0.4rem;
				background:#fff;
				z-index:2;
				p{	
					font-size:0.14rem;
					color:#738299;
					line-height:0.3rem;
					padding-left:0.2rem;
					border-bottom:0.01rem solid #738299;
					&:nth-child(3){
						border-bottom:0;
					}
				}
			}
		}


		section{
			.redpack-sec{
				padding-top:0.1rem;
				.redpack-content{
					margin: 0 auto 0.1rem;
					@include wh(3.45rem,0.85rem);
					display:flex;
					position:relative;
					.redpack-left{
						flex:0 0 1.4rem;

					
						box-sizing:border-box;
						padding-top:0.2rem;
						.red-name{
							@include fcs(0.20rem,#fff);
							text-align:center;
							margin-bottom:0.1rem;
						}
						.red-intro{
							@include fcs(0.12rem,#fff);

							text-align:center;
						}
					}
					.redpack-right{
						flex:2;

						.red-ruler{
							@include fcs(0.12rem,#738299);
							padding:0.2rem 0.2rem 0;
							margin-bottom:0.1rem;
						}
						.red-date{
							@include fcs(0.12rem,#A1BDE5);

							transform:scale(0.8);
							text-align:left;
						}
					}

					.have-use{
						@include wh(0.7rem,0.6rem);
						position:absolute;
						bottom:0;
						right:0.1rem;
						background:url(../images/p4_present_use.png) no-repeat center;
						background-size:100% 100%;
					}

					.over-load{
						@include wh(0.7rem,0.6rem);
						position:absolute;
						bottom:0;
						right:0.1rem;
						background:url(../images/p4_present_pass.png) no-repeat center;
						background-size:100% 100%;
					}

				}

				.can-use{
					background:url(../images/red.png) no-repeat center;
					background-size:100% 100%;
				}

				.no-use{
					background:url(../images/gray.png) no-repeat center;
					background-size:100% 100%;
				}


			}
		}
	}




</style>
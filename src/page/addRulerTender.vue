<template>
	<div class="addRulerTender-wrap">
		<ul class="box-inp box-two-column">
			<li>
				<span>最低投入额度：</span> <i>请输入100的整数倍</i>
			</li>

			<li>
				<span>最高投入额度：</span> <i></i>
			</li>

			<li>
				<span>月标借款期限：</span> <i></i>
			</li>

			<li>
				<span>是否设置天标：</span> <i></i>
			</li>

		</ul>

		<p class="info-warning">
			天标默认为一个月标的，如不投天标，请设置为“否”
		</p>

		<div class="sureBtn middlebtn">
				确认投标
		</div>

	</div>
</template>


<script>
	

</script>



<style lang ='scss' scoped>

@import '../style/mixin';

.addRulerTender-wrap{
	font-size: 0.12rem;
	.box-inp{
		li{
			span{
				@include fcs(0.14rem,#A1BDE5);
			}
		}
	}
}


</style>
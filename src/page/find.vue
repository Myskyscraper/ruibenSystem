<template>
	<div class="user">
		<!-- 开始复制 -->
		哈哈哈
		<!-- 结束复制 -->
		<Foot></Foot>
	</div>
</template>


<script>
	import Foot from '../components/foot.vue'
	import { TabContainer, TabContainerItem } from 'mint-ui';
	export default{
		data(){
			return {
				active:1
			}
		},
		components:{
			Foot
		},
		methods:{

		}
	}

</script>


<style>
	



</style>
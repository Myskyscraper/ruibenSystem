<template>

	<div class="bank-wrap" >

		<div v-html='formData'>
			


		</div>


		<ul>  
            <form @submit.prevent="submit">  
                <input type="text" name="name" >  
                <input type="password" name="password" >  
                <input type="submit" value="提交">  
            </form>  
        </ul> 
		

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
					this.txt = '<span>哈哈哈</span>'
			})

					this.formData = `
					<form action="https://access.credit2go.cn/escrow/p2p/page/withdraw" id="form" method="post">
						<input type='hidden' name='version' value='10'>
						<input type='hidden' name='txCode' value='withdraw'>
						<input type='hidden' name='instCode' value='00520001'>
						<input type='hidden' name='bankCode' value='30050000'>
						<input type='hidden' name='txDate' value='20180621'>
						<input type='hidden' name='txTime' value='094004'>
						<input type='hidden' name='seqNo' value='188808'>
						<input type='hidden' name='channel' value='000002'>
						<input type='hidden' name='accountId' value='6212461480000000886'>
						<input type='hidden' name='idType' value='01'>
						<input type='hidden' name='idNo' value='120102198412189949'>
						<input type='hidden' name='name' value='伊悦'>
						<input type='hidden' name='mobile' value='17621056805'>
						<input type='hidden' name='cardNo' value='6228481234567890010'>
						<input type='hidden' name='txAmount' value='98.00'>
						<input type='hidden' name='txFee' value='2.00'>
						<input type='hidden' name='currency' value='156'>
						<input type='hidden' name='userIP' value='180.167.84.162'>
						<input type='hidden' name='forgotPwdUrl' value='http://121.40.32.223:8088/v3/member-center/pay-password-reset'>
						<input type='hidden' name='retUrl' value='http://121.40.32.223:8088/m.g'>
						<input type='hidden' name='notifyUrl' value='http://121.40.32.223:8088/notify/withdraw'>
						<input type='hidden' name='acqRes' value='47476'>
						<input type='hidden' name='sign' value='ksDArFj0LIrJ/glT2CKY6UpXEYRdKDOh/i/ZBvIstRGKz6EOJxKHMuLMSW/JhmDUYmdx5AvJzAPsvU7lAXYsbSYhAo8EVcWbXFMlIuwLaMj+8BPaY3Vlp/KURHKZ55AohNm1zIqWdX7i4QB70PxEFaKDHh2a5IxQCNNdxG2E+F0ULHiwoFd6XWCvf30bUQsQGnJCFS7bS2n2iZvkREt6f1ardACFGaqOutu/1ZBAHfNeNrrmEXlZFzhigWhOyssYZQJsm07tXAgre9UXjbVdjWCQ+C4lj3SpNIwmuYk+VsnybfkZkQgL2rSLqnzv1gaDqhDVDMaR/rD3T7s9ope/2A=='>
						<input type='submit' name='提交' >
						
					</form>
					<div style='background: #f5f5f5; margin-top: 50%;margin-bottom: 50%;'>
						<span style='font-size: 16px;display: block;text-align: center;'>正在跳转中...</span>
					</div>`	
		},

		methods:{
			submit: function() {  
				console.log('ppp');
			}  


		// $ajax.load

		}
	}

	


</script>


<style lang ='scss' scoped>

	.bank-wrap{
		font-size:0.18rem;

		input[type="submit"]{
			display:block!important;
			background:blue;
			color:red;
		}
	}




</style>
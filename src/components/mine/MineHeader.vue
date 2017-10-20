<template>
	<div class="mine-header">
		<img class="mine-logo" src='../../../static/imgs/header_bg@3x.png' />
		<div class="cust" @click='goto'>
			<img :src="type" />
			<p v-text="uname"></p>
		</div>
		<div class="balance-coupon">
			<div class="balance">
				<p>0</p>
				账户余额
			</div>
			<div class="coupon">
				<p>0</p>
				优惠券
			</div>
			<div class="recharge-tab">
				<img class="profile" src="../../../static/imgs/profile-arrow@3x.png" />
				<div class="recharge-gift">
					<img src="../../../static/imgs/g-recharge@3x.png">充值立送现金券哦~
				</div>
				<div class="go-recharge">马上充值 <img src="../../../static/imgs/recharge@3x.png"></div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import router from '../../router'
	export default {
		name: 'MineHeader',
		props:['uname'],
		data() {
			return {
				type:localStorage.username?'../../../static/imgs/cust-icon-defualt.png':'../../../static/imgs/cust-icon-nologin.png'
			}
		},
		methods:{
			goto(){
				if(!localStorage.username){
					router.push('login')
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	.mine-header {
		width: 100%;
		height: 2.79rem;
		.mine-logo {
			width: 100%;
		}
		.cust {
			position: absolute;
			width: 100%;
			top: .39rem;
			left: 0;
			text-align: center;
			font-size: .12rem;
			color: #fff;
			img {
				width: .6rem;
				height: .57rem;
			}
			p {
				margin-top: .2rem;
			}
		}
		
		.balance-coupon {
			position: absolute;
			width: 3.5rem;
			height:1.28rem;
			top: 1.47rem;
			left: 50%;
			margin-left: -1.75rem;
			border-radius: .12rem;
			padding-top: .2rem;
			background: #fff;
			box-shadow: 1px -1px 20px rgba(34, 34, 34, .3);
			.balance {
				border-right: 1px solid #e5e5e5;
			}
			.coupon,
			.balance {
				width: 50%;
				float: left;
				text-align: center;
				color: #999;
				p {
					color: black;
					font-size: .2rem;
				}
				
			}
			.recharge-tab{
				position: relative;
			    height: .43rem;
			    line-height: .43rem;
			    margin-top: .64rem;
			    background: #428b0e;
			    color: #fff;
			    font-size: .14rem;
			    border-bottom-left-radius: .12rem;
			    border-bottom-right-radius: .12rem;
			    .profile{
			    	position: absolute;
				    height: .1rem;
				    left: 25%;
				    margin-left: -.15rem;
				    top: -.09rem;
				    width: .31rem;
			    }
			    .recharge-gift{
			    	width: 50%;
				    float: left;
				    padding-left: .2rem;
				    img{
				    	width: .16rem;
					    height: .18rem;
					    margin-right: .1rem;
					    vertical-align: middle;
				    }
			    }
			    .go-recharge{
			    	width: 50%;
				    float: right;
				    text-align: right;
				    padding-right: .2rem;
				    img{
				    	width: .07rem;
					    height: .12rem;
					    margin-left: .1rem;
					    vertical-align: middle;
					
				    }
			    }
			}
		}
		
	}
</style>
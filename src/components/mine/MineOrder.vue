<template>
	<div class="order-tap">
		<ul>
			<li><img src='../../../static/imgs/needtopay@3x.png'>
				<p>待付款</p>
			</li>
			<li><img src="../../../static/imgs/no-receive@3x.png">
				<p>待收货</p>
			</li>
			<li><img src="../../../static/imgs/no-comment@3x.png">
				<p>待评价</p>
			</li>
			<li><img src="../../../static/imgs/historyget@3x.png">
				<p>退货/售后</p>
			</li>
			<li class="orders"><img src="../../../static/imgs/myorders@3x.png">
				<p>我的订单</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'MineOrder'
	}
</script>

<style scoped lang="scss">
.order-tap {
    margin-top: .1rem;
    height: .89rem;
    padding: .2rem 0;
    background: #fff;
    ul{
    	width:100%;
    	li{
    		width: 20%;
		    color: #999;
		    font-size: .12rem;
		    float: left;
		    text-align: center;
		    img{
		    	height:.28rem;
		    }
		    p{
		    	margin-top: .09rem;
		    }
    	}
    	.orders{
    		color: #243a23;
   			 border-left: 1px solid #ccc;
    	}
    }
}
</style>
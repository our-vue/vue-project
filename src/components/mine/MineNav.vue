<template>
	
	<div class="center-nav">
		<ul class="border-line">
			<li><img src="../../../static/imgs/mytg@3x.png">
				<p>我的团购</p>
			</li>
			<li><img src="../../../static/imgs/location@3x.png">
				<p>收货地址</p>
			</li>
			<li><img src="../../../static/imgs/favorite@3x.png">
				<p>我的收藏</p>
			</li>
			<li><img src="../../../static/imgs/aboutus@3x.png">
				<p>关于我厨</p>
			</li>
		</ul>
		<ul>
			<li><img src="../../../static/imgs/help@3x.png">
				<p>帮助中心</p>
			</li>
			<li><img src="../../../static/imgs/yjfk@3x.png">
				<p>意见反馈</p>
			</li>
			<li><img src="../../../static/imgs/setup@3x.png">
				<p>设置中心</p>
			</li>
			<li>
				<a href="tel:4008527957" class="ui-link"><img src="../../../static/imgs/kefu@3x.png">
					<p>客服电话</p>
				</a>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		name: 'MineNav'
	}
</script>

<style scoped lang='scss'>
.center-nav{
	width:100%;
	margin-top: .1rem;
    background: #fff;
   
    
    ul{
	    width: 100%;
	    height:.85rem;
	    li{
	    	width: 25%;
		    padding: .15rem 0;
		    color: #999;
		    font-size: .12rem;
		    float: left;
		    text-align: center;
		    background: #fff;
		    img{
		    	height: .28rem;

		    }
		    a{
		    	color:#999;
		    }
	    }
	}
    


}
.border-line{
	border-bottom: 1px solid #e5e5e5;
} 
</style>
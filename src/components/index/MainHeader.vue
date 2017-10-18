<template>
	<div class="main-header">
		<header>
			<img  class="logo"src='../../../static/imgs/wochuLogo.png'>
			<div class="addr">
				<span class="addr-detail">请填写地址</span>
				<img  class="down-arr"src="../../../static/imgs/icon.png">
			</div>
			<img  class="search-btn" src="../../../static/imgs/search.png">
		</header>
	</div>
</template>

<script>
	export default {
		name: 'MainHeader'
	}
</script>

<style scoped lang="scss">
header {
    position: fixed;
    width: 100%;
    height: .45rem;
    background: white;
    line-height: .45rem;
    padding: 0 .12rem;
    z-index: 3;
    top: 0;
    left: 0;
    .logo{
    	display: block;
	    width: .44rem;
	    margin-top: .12rem;
	    float:left;
    }
    .addr {
    	float:left;
	    width: 1.7rem;
	    font-size: .15rem;
	    color: #1f6117;
	    text-align: center;
	    
	    .down-arr{
	    	width:.08rem;
	    	margin-left:.06rem;
	    	vertical-align: middle;
	    }
	}
	.search-btn{
		float:right;
		width:.18rem;
		margin-right:.25rem;
		margin-top:.12rem;
	}
}
</style>
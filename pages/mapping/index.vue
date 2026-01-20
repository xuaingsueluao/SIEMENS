<template>
	<view class="page-container">
		<view class="page-header">
			<text class="page-title">{{ $t('mapping.title') }}</text>
		</view>
		<view class="page-content">
			<!-- 建图和导航内容 -->
		</view>
	</view>
</template>

<script setup>
</script>

<style scoped>
.page-container {
	min-height: 100vh;
	background-color: #f5f5f5;
}

.page-header {
	padding: 40rpx;
	background-color: #ffffff;
}

.page-title {
	font-size: 36rpx;
	font-weight: bold;
	color: #333;
}

.page-content {
	padding: 20rpx;
}
</style>

<template>
	<PageHeader activeKey="voiceSettings">
		<view class="page-content">
			<!-- 语音设置内容 -->
			<view class="content-card">
				<text class="placeholder-text">{{ $t('voice.title') }}</text>
			</view>
		</view>
	</PageHeader>
</template>

<script setup>
import PageHeader from '@/components/layout/page-header.vue'
</script>

<style scoped>
.page-content {
	padding: 20rpx 30rpx;
}

.content-card {
	background: #edf1f3;
	border-radius: 40rpx;
	padding: 40rpx;
	min-height: 200rpx;
}

.placeholder-text {
	font-size: 32rpx;
	color: #666;
}
</style>

<!-- 
 时间刷新改为 30 秒 - 足以捕获分钟变化，节省性能
 保持 i18n 多语言支持 - 电池标签会随语言切换
 电量固定显示 100% - 后续 UDP 通信接入后再改
 移除所有 props - 组件完全自治，简洁干净
 移除不必要的 computed - 直接用 ref 
-->
<template>
	<view class="nav-status">
		<view class="status-display">
			<view class="time-section">
				<text class="time-text">{{ currentTime }}</text>
			</view>
			<view class="battery-section">
				<text class="battery-label">{{ t('home.batteryStatus') }}</text>
				<view class="battery-info">
					<image class="battery-icon" src="/static/icons/home/battery.png" mode="aspectFit"></image>
					<text class="battery-percent">100%</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 当前时间
const currentTime = ref('')

// 更新时间（只显示小时:分钟）
let timer = null
const updateTime = () => {
	const now = new Date()
	const hours = now.getHours()
	const minutes = now.getMinutes().toString().padStart(2, '0')
	currentTime.value = `${hours}:${minutes}`
}

onMounted(() => {
	updateTime()
	// 每 30 秒刷新一次，足以捕获分钟变化且节省性能
	timer = setInterval(updateTime, 30000)
})

onUnmounted(() => {
	if (timer) clearInterval(timer)
})
</script>

<style scoped>
.nav-status {
	flex-shrink: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.status-display {
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(10px);
	border-radius: 30rpx;
	padding: 18rpx 36rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40rpx;
}

.time-section {
	display: flex;
	align-items: center;
}

.time-text {
	font-size: 43rpx;
	font-weight: bold;
	color: #333;
}

.battery-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rpx;
}

.battery-label {
	font-size: 24rpx;
	color: #666;
}

.battery-info {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10rpx;
}

.battery-icon {
	width: 60rpx;
	height: 36rpx;
}

.battery-percent {
	font-size: 32rpx;
	font-weight: bold;
	color: #009999;
}
</style>

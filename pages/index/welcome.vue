<template>
	<view class="welcome-container">
		<!-- 背景图 -->
		<image class="background" src="/static/icons/background.jpg" mode="aspectFill"></image>
		
		<!-- 主要内容区域 -->
		<view class="content">
			<!-- 顶部 Logo -->
			<view class="header">
				<text class="logo-text">SIEMENS</text>
			</view>
			
			<!-- 中间区域：文字 + 房子 -->
			<view class="center-area">
				<!-- 欢迎文字 -->
				<view class="welcome-info">
					<view class="welcome-text">
						<text class="text-line">{{ $t('welcome.line1') }}</text>
						<text class="text-line">{{ $t('welcome.line2') }}</text>
					</view>
				</view>
				
				<!-- 房子图片容器 -->
				<view class="house-container">
					<image class="arrow" src="/static/icons/arrow.png" mode="aspectFit"></image>
					<image class="house" src="/static/icons/house.png" mode="aspectFit"></image>
				</view>
			</view>
			
			<!-- 底部按钮区域 -->
			<view class="bottom-area">
				<!-- 左下角：机器人状态 -->
				<view class="status-btn">
					<text class="status-label">{{ $t('welcome.robotStatus') }}</text>
					<text class="status-value">{{ $t('welcome.connected') }}</text>
				</view>
				
				<!-- 右下角：启动机器人 -->
			<view class="start-btn" @click="showReminder">
				<text class="start-text">{{ $t('welcome.startRobot') }}</text>
			</view>
		</view>
	</view>
	
	<!-- 操作提醒弹窗 -->
	<view class="reminder-modal" v-if="isReminderVisible" @click="hideReminder">
			<view class="reminder-card" @click.stop>
				<view class="reminder-header">
					<text class="reminder-title">操作提醒</text>
				</view>
				<view class="reminder-content">
					<image class="reminder-image" src="/static/icons/operation_Reminder.jpg" mode="aspectFit"></image>
					<view class="reminder-text">
						<text class="reminder-desc">在操作提醒过程中，请您确保</text>
						<text class="reminder-desc">有成员人员在机器人附近进行人</text>
						<text class="reminder-desc">机协同任务</text>
					</view>
				</view>
				<view class="reminder-footer">
					<view class="confirm-btn" @click="confirmReminder">
						<text class="confirm-text">确定</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

// 控制操作提醒弹窗显示
const isReminderVisible = ref(false)

// 显示操作提醒
const showReminder = () => {
	isReminderVisible.value = true
}

// 隐藏操作提醒
const hideReminder = () => {
	isReminderVisible.value = false
}

// 确认操作提醒并跳转到主界面
const confirmReminder = () => {
	isReminderVisible.value = false
	uni.navigateTo({
		url: '/pages/index/home'
	})
}
</script>

<style scoped>
.welcome-container {
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
}

.background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}

.content {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 40rpx 80rpx;
	box-sizing: border-box;
}

/* 顶部 Logo */
.header {
	padding: 20rpx 0;
}

.logo-text {
	font-size: 48rpx;
	font-weight: bold;
	color: #009999;
}

/* 中间区域 */
.center-area {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.welcome-info {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 40rpx;
}

.welcome-text {
	display: flex;
	flex-direction: column;
}

.text-line {
	font-size: 72rpx;
	color: #009999;
	font-weight: bold;
}

.house-container {
	position: relative;
	width: 90%;
	height: 780rpx;
}

.arrow {
	position: absolute;
	top: 0;
	left: 0;
	width: 180rpx;
	height: 240rpx;
	z-index: 2;
}

.house {
	width: 100%;
	height: 100%;
}

/* 底部按钮区域 */
.bottom-area {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	padding-bottom: 40rpx;
}

/* 左下角状态按钮 */
.status-btn {
	background: linear-gradient(135deg, #00b3b3 0%, #009999 100%);
	border-radius: 22rpx;
	padding: 30rpx 50rpx; 
	display: flex;
	flex-direction: column;
}

.status-label {
	font-size: 34rpx;
	color: rgba(255, 255, 255, 0.8);
}

.status-value {
	font-size: 39rpx;
	color: #ffffff;
	font-weight: bold;
}

/* 右下角启动按钮 */
.start-btn {
	background: #000000;
	border-radius: 22rpx;
	padding: 30rpx 50rpx;
}

.start-btn:active {
	opacity: 0.8;
	transform: scale(0.98);
}

.start-text {
	font-size: 39rpx;
	color: #ffffff;
	font-weight: bold;
}

/* 操作提醒弹窗 */
.reminder-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.reminder-card {
	background: #ffffff;
	border-radius: 20rpx;
	width: 600rpx;
	padding: 30rpx 20rpx;
	box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.2);
}

.reminder-header {
	text-align: center;
	margin-bottom: 30rpx;
}

.reminder-title {
	font-size: 40rpx;
	color: #333333;
	font-weight: bold;
}

.reminder-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40rpx;
}

.reminder-image {
	width: 85%;
	height: 400rpx;
	margin-bottom: 30rpx;
}

.reminder-text {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.reminder-desc {
	font-size: 32rpx;
	color: #666666;
	line-height: 48rpx;
	text-align: center;
}

.reminder-footer {
	display: flex;
	justify-content: center;
}

.confirm-btn {
	background: #000000;
	border-radius: 16rpx;
	padding: 20rpx 80rpx;
	cursor: pointer;
}

.confirm-btn:active {
	opacity: 0.8;
	transform: scale(0.98);
}

.confirm-text {
	font-size: 32rpx;
	color: #ffffff;
	font-weight: bold;
}
</style>

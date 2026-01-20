<template>
	<view class="page-container">
		<!-- 左上角返回按钮 -->
		<view class="back-btn-wrapper">
			<common-back-btn />
		</view>
		
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<!-- 中间标题 -->
			<text class="page-title">{{ t('remote.title') }}</text>
			
			<!-- 右侧状态栏和机器人头像 -->
			<view class="nav-right">
				<nav-status />
				<image 
					class="robot-avatar" 
					src="/static/icons/remote/robot-stand.png" 
					mode="aspectFit"
				/>
			</view>
		</view>
		
		<!-- 主内容卡片 -->
		<view class="content-card">
			<!-- 展示功能区标题 -->
			<text class="section-title">{{ t('remote.functionArea') }}</text>
			
			<!-- 功能按钮网格 -->
			<view class="button-grid">
				<!-- 第一行：4个按钮 -->
				<view class="button-row">
					<view 
						v-for="item in actionButtons.slice(0, 4)" 
						:key="item.key"
						class="action-btn"
						@click="handleAction(item.key)"
					>
						<text class="btn-text">{{ t(`remote.actions.${item.key}`) }}</text>
						<image class="btn-icon" :src="item.icon" mode="aspectFit" />
					</view>
				</view>
				
				<!-- 第二行：3个按钮 -->
				<view class="button-row">
					<view 
						v-for="item in actionButtons.slice(4, 7)" 
						:key="item.key"
						class="action-btn"
						@click="handleAction(item.key)"
					>
						<text class="btn-text">{{ t(`remote.actions.${item.key}`) }}</text>
						<image class="btn-icon" :src="item.icon" mode="aspectFit" />
					</view>
				</view>
				
				<!-- 第三行：3个按钮 -->
				<view class="button-row">
					<view 
						v-for="item in actionButtons.slice(7, 10)" 
						:key="item.key"
						class="action-btn"
						@click="handleAction(item.key)"
					>
						<text class="btn-text">{{ t(`remote.actions.${item.key}`) }}</text>
						<image class="btn-icon" :src="item.icon" mode="aspectFit" />
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部摇杆区域 -->
		<view class="joystick-area">
			<!-- 左侧摇杆：前进/后退 -->
			<virtual-joystick 
				mode="throttle"
				:size="140"
				:knob-size="64"
				@start="onJoystickStart('throttle')"
				@change="onJoystickChange"
				@end="onJoystickEnd('throttle')"
			/>
			
			<!-- 右侧摇杆：左转/右转 -->
			<virtual-joystick 
				mode="yaw"
				:size="140"
				:knob-size="64"
				@start="onJoystickStart('yaw')"
				@change="onJoystickChange"
				@end="onJoystickEnd('yaw')"
			/>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import CommonBackBtn from '@/components/ui-box/common-back-btn.vue'
import NavStatus from '@/components/navigation/nav-statusBYClaude.vue'
import VirtualJoystick from '@/components/ui-box/virtual-joystick.vue'

const { t } = useI18n()

// 动作按钮配置
const actionButtons = reactive([
	{ key: 'highFive', icon: '/static/icons/remote/击掌.png' },
	{ key: 'handshake', icon: '/static/icons/remote/握手.png' },
	{ key: 'hug', icon: '/static/icons/remote/拥抱.png' },
	{ key: 'clap', icon: '/static/icons/remote/鼓掌.png' },
	{ key: 'wave', icon: '/static/icons/remote/挥手.png' },
	{ key: 'raiseHands', icon: '/static/icons/remote/举双手.png' },
	{ key: 'doubleHeart', icon: '/static/icons/remote/双手比心.png' },
	{ key: 'raiseRight', icon: '/static/icons/remote/举右手.png' },
	{ key: 'blowKiss', icon: '/static/icons/remote/右手飞吻.png' },
	{ key: 'chestWave', icon: '/static/icons/remote/胸前挥手.png' }
])

// 处理动作按钮点击
const handleAction = (actionKey) => {
	console.log('Action triggered:', actionKey)
	// TODO: 后续添加具体逻辑，发送指令给机器人
}

// 摇杆事件处理
const onJoystickStart = (mode) => {
	console.log('Joystick start:', mode)
}

const onJoystickChange = (data) => {
	console.log('Joystick change:', data)
	// TODO: 后续添加控制逻辑
}

const onJoystickEnd = (mode) => {
	console.log('Joystick end:', mode)
}
</script>

<style scoped lang="scss">
/* 设计变量 */
.page-container {
	--page-gap: 54rpx;
	--card-inner-gap: 50rpx;
	--btn-gap: 32rpx;
	--bg-gray: #dfe4e8;
	--card-gray: #edf1f3;
	--btn-white: #ffffff;
}

/* 页面容器 */
.page-container {
	width: 100%;
	height: 100vh;
	position: relative;
	background: var(--bg-gray);
	padding: var(--page-gap);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

/* 返回按钮包裹器 */
.back-btn-wrapper {
	position: absolute;
	left: 40rpx;
	top: 30rpx;
	z-index: 100;
}

/* 顶部导航栏 */
.nav-bar {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 20rpx;
}

.page-title {
	font-size: 40rpx;
	font-weight: bold;
	color: #333;
}

.nav-right {
	position: absolute;
	right: 0;
	display: flex;
	align-items: center;
	gap: 20rpx;
}

.robot-avatar {
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%; 
}

/* 主内容卡片 */
.content-card {
	position: relative;
	margin-top: 90rpx;
	z-index: 1;
	background: var(--card-gray);
	border: 1rpx solid rgba(0, 0, 0, 0.08);
	border-radius: 40rpx;
	padding: var(--card-inner-gap);
	box-sizing: border-box;
	box-shadow: 0 10rpx 26rpx rgba(0, 0, 0, 0.08);
	height: 900rpx;
	display: flex;
	flex-direction: column;
}

/* 功能区标题 */
.section-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
	text-align: center;
	margin-bottom: 20rpx;
	display: block;
	flex-shrink: 0;
}

/* 按钮网格 */
.button-grid {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.button-row {
	display: flex;
	justify-content: space-between;
	gap: var(--btn-gap);
}

/* 动作按钮 */
.action-btn {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16rpx;
	background-color: var(--btn-white);
	border-radius: 20rpx;
	padding: 20rpx 16rpx;
	border: 1rpx solid rgba(0, 0, 0, 0.06);
	box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
	transition: all 0.2s ease;
	
	&:active {
		transform: scale(0.96);
		background-color: #f5f5f5;
	}
}

.btn-text {
	font-size: 42rpx;
	font-weight: 600;
	color: #333;
	white-space: nowrap;
}

.btn-icon {
	width: 148rpx;
	height: 148rpx;
	flex-shrink: 0;
}

/* 底部摇杆区域 */
.joystick-area {
	position: fixed;
	bottom: 80rpx; // 距离底部
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	padding: 0 100rpx; // 左右内边距
	pointer-events: none;
	
	:deep(.vj) {
		pointer-events: auto;
	}
}
</style>

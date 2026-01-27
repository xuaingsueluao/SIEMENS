<!--
/**
 * TipModal - 提示弹窗组件
 * 
 * 用途：带有背景图的居中提示弹窗，支持纯提示和确认选择两种模式
 * 使用位置：
 *   - pages/index/home.vue: 路线选择成功提示、无可用路线提示
 * 
 * Props:
 *   - visible: 是否显示弹窗
 *   - message: 提示消息文本
 *   - type: 弹窗类型 ('info' 纯提示 | 'confirm' 确认选择)
 *   - confirmText: 确定按钮文字（默认"确定"）
 *   - cancelText: 取消按钮文字（默认"取消"）
 *   - width: 弹窗宽度（默认"1170rpx"）
 *   - minHeight: 弹窗最小高度（默认"754rpx"）
 *   - padding: 内容区域内边距（默认"52rpx 52rpx"）
 * 
 * Events:
 *   - confirm: 点击确定按钮时触发
 *   - cancel: 点击取消按钮时触发
 *   - close: 关闭弹窗时触发
 */
-->
<template>
	<view class="tip-modal" v-if="visible" @click="handleClose">
		<view class="tip-content" :style="contentStyle" @click.stop>
			<image class="tip-bg" src="/static/icons/home/pop-up.png" mode="aspectFit"></image>
			<view class="tip-message-area" :style="messageAreaStyle">
				<text class="tip-message">{{ message }}</text>
				<view class="tip-buttons" v-if="type === 'confirm'">
					<view class="tip-btn tip-btn-confirm" @click="handleConfirm">
						<text class="tip-btn-text">{{ confirmText }}</text>
					</view>
					<view class="tip-btn tip-btn-cancel" @click="handleCancel">
						<text class="tip-btn-text">{{ cancelText }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

// 定义属性
const props = defineProps({
	// 是否显示
	visible: {
		type: Boolean,
		default: false
	},
	// 提示消息
	message: {
		type: String,
		default: ''
	},
	// 弹窗类型：'info' 纯提示 | 'confirm' 确认选择
	type: {
		type: String,
		default: 'info',
		validator: (value) => ['info', 'confirm'].includes(value)
	},
	// 确定按钮文字
	confirmText: {
		type: String,
		default: '确定'
	},
	// 取消按钮文字
	cancelText: {
		type: String,
		default: '取消'
	},
	// 弹窗宽度
	width: {
		type: String,
		default: '1170rpx'
	},
	// 弹窗最小高度
	minHeight: {
		type: String,
		default: '754rpx'
	},
	// 内容区域内边距
	padding: {
		type: String,
		default: '52rpx 52rpx'
	}
})

// 定义事件
const emit = defineEmits(['confirm', 'cancel', 'close'])

// 计算样式
const contentStyle = computed(() => ({
	width: props.width,
	minHeight: props.minHeight
}))

// 内容区域样式
const messageAreaStyle = computed(() => ({
	padding: props.padding
}))

// 关闭弹窗
const handleClose = () => {
	emit('close')
}

// 点击确定
const handleConfirm = () => {
	emit('confirm')
}

// 点击取消
const handleCancel = () => {
	emit('cancel')
}
</script>

<style scoped>
.tip-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 3000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tip-content {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}

.tip-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}

.tip-message-area {
	position: relative;
	z-index: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40rpx;
}

.tip-message {
	font-size: 32rpx;
	color: #333;
	font-weight: 600;
	text-align: center;
	line-height: 48rpx;
}

.tip-buttons {
	display: flex;
	flex-direction: row;
	gap: 30rpx;
}

.tip-btn {
	padding: 20rpx 50rpx;
	border-radius: 30rpx;
	min-width: 150rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tip-btn-cancel {
	background: #e0e0e0;
}

.tip-btn-confirm {
	background: linear-gradient(135deg, #00b3b3 0%, #009999 100%);
}

.tip-btn:active {
	opacity: 0.8;
	transform: scale(0.95);
}

.tip-btn-text {
	font-size: 28rpx;
	color: #333;
	font-weight: 600;
}

.tip-btn-confirm .tip-btn-text {
	color: #ffffff;
}
</style>

<!--
/**
 * BeautifulCard - 美化选择卡片组件
 * 
 * 视觉效果：
 *   - 默认态：白色背景，圆角卡片
 *   - 选中态：青色边框 + 向上浮起(translateY -4rpx) + 青色阴影(box-shadow)
 *   - 播放态：边框呼吸动画 + 播放按钮青色高亮 + 脉冲动画
 *   - 点击反馈：轻微缩放(scale 0.98)
 * 
 * 用途：配置选择、表单选项等需要凹凸感/浮起效果的场景
 * 
 * Props:
 *   - text: 显示文字
 *   - isSelected: 是否选中（显示浮起+阴影效果）
 *   - isPlaying: 是否播放中（显示呼吸动画，用于音频试听场景）
 *   - showPlayBtn: 是否显示右侧播放按钮
 *   - disabled: 是否禁用
 * 
 * Events:
 *   - click: 点击卡片
 *   - play: 点击播放按钮（仅当 showPlayBtn 为 true 时触发）
 * 
 * 使用示例：
 *   <BeautifulCard 
 *     text="A (男声)" 
 *     :isSelected="selectedId === 1"
 *     :isPlaying="playingId === 1"
 *     :showPlayBtn="true"
 *     @click="handleSelect(1)"
 *     @play="handlePlay(1)"
 *   />
 */
-->
<template>
	<view 
		class="beautiful-card" 
		:class="{ 
			'beautiful-card-selected': isSelected,
			'beautiful-card-playing': isPlaying,
			'beautiful-card-disabled': disabled
		}"
		@click="handleClick"
	>
		<view class="card-content">
			<text class="card-text">{{ text }}</text>
		</view>
		
		<!-- 右侧播放按钮（可选） -->
		<view 
			v-if="showPlayBtn"
			class="play-btn" 
			:class="{ 'play-btn-active': isPlaying }"
			@click.stop="handlePlay"
		>
			<image 
				class="play-icon" 
				:class="{ 'play-icon-active': isPlaying }"
				src="/static/icons/general/icon_sound.svg" 
				mode="aspectFit" 
			/>
		</view>
	</view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 定义属性
const props = defineProps({
	// 显示文字
	text: {
		type: String,
		required: true
	},
	// 是否选中状态（浮起+阴影）
	isSelected: {
		type: Boolean,
		default: false
	},
	// 是否播放中（呼吸动画）
	isPlaying: {
		type: Boolean,
		default: false
	},
	// 是否显示播放按钮
	showPlayBtn: {
		type: Boolean,
		default: false
	},
	// 是否禁用
	disabled: {
		type: Boolean,
		default: false
	}
})

// 定义事件
const emit = defineEmits(['click', 'play'])

// 点击卡片
const handleClick = () => {
	if (!props.disabled) {
		emit('click')
	}
}

// 点击播放按钮
const handlePlay = () => {
	if (!props.disabled) {
		emit('play')
	}
}
</script>

<style scoped>
.beautiful-card {
	background: #ffffff;
	border-radius: 24rpx;
	padding: 28rpx 30rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	border: 2rpx solid transparent;
	position: relative;
	cursor: pointer;
}

/* 点击反馈 */
.beautiful-card:active {
	transform: scale(0.98);
}

/* ==================== 选中态 - 浮起 + 边框 + 阴影 ==================== */
.beautiful-card-selected {
	border-color: #009999;
	background: #ffffff;
	box-shadow: 0 8rpx 30rpx rgba(0, 153, 153, 0.25);
	transform: translateY(-4rpx);
}

.beautiful-card-selected:active {
	transform: translateY(-2rpx) scale(0.99);
}

/* ==================== 播放态 - 边框呼吸动画 ==================== */
.beautiful-card-playing {
	border-color: #009999;
	animation: borderPulse 1.5s ease-in-out infinite;
}

@keyframes borderPulse {
	0%, 100% {
		box-shadow: 0 0 0 0 rgba(0, 153, 153, 0.4);
	}
	50% {
		box-shadow: 0 0 0 8rpx rgba(0, 153, 153, 0.1);
	}
}

/* 选中+播放态同时存在时，保持浮起效果 */
.beautiful-card-selected.beautiful-card-playing {
	transform: translateY(-4rpx);
	animation: borderPulseWithShadow 1.5s ease-in-out infinite;
}

@keyframes borderPulseWithShadow {
	0%, 100% {
		box-shadow: 0 8rpx 30rpx rgba(0, 153, 153, 0.25), 0 0 0 0 rgba(0, 153, 153, 0.4);
	}
	50% {
		box-shadow: 0 8rpx 30rpx rgba(0, 153, 153, 0.25), 0 0 0 8rpx rgba(0, 153, 153, 0.1);
	}
}

/* ==================== 禁用态 ==================== */
.beautiful-card-disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.beautiful-card-disabled:active {
	transform: none;
}

/* ==================== 内容区域 ==================== */
.card-content {
	flex: 1;
}

.card-text {
	font-size: 28rpx;
	color: #333;
	font-weight: 500;
	transition: all 0.2s ease;
}

.beautiful-card-selected .card-text {
	color: #009999;
	font-weight: 600;
}

/* ==================== 播放按钮 ==================== */
.play-btn {
	width: 64rpx;
	height: 64rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: #f5f5f5;
	transition: all 0.2s ease;
	margin-left: 20rpx;
}

.play-btn:active {
	transform: scale(0.9);
	background: #e8e8e8;
}

/* 播放中按钮状态 */
.play-btn-active {
	background: #009999;
	animation: playPulse 1s ease-in-out infinite;
}

@keyframes playPulse {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
}

.play-icon {
	width: 36rpx;
	height: 36rpx;
	transition: all 0.2s ease;
}

.play-icon-active {
	filter: brightness(0) invert(1);
}
</style>

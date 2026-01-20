<!--
/**
 * CapsuleButton - 胶囊按钮组件
 * 
 * 用途：可重用的半透明胶囊形按钮，带有激活状态和禁用状态
 * 使用位置：
 *   - pages/index/home.vue: 顶部导航栏的6个功能按钮（设置、遥控模式、新建路线、人脸识别、语音设置、建图导航）
 *   - pages/index/home.vue: 左侧控制栏的5个按钮（初始定位、选择路线、开启导览、关闭导览、关闭机器人）
 * 
 * Props:
 *   - text: 按钮文字
 *   - isActive: 是否激活（激活时背景变为青色）
 *   - disabled: 是否禁用
 */
-->
<template>
	<view 
		class="capsule-btn" 
		:class="{ 'active': isActive, 'disabled': disabled }"
		@click="handleClick"
	>
		<text class="capsule-text">{{ text }}</text>
	</view>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 定义属性
const props = defineProps({
	// 按钮文字
	text: {
		type: String,
		required: true
	},
	// 是否激活状态
	isActive: {
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
const emit = defineEmits(['click'])

// 点击处理
const handleClick = () => {
	if (!props.disabled) {
		emit('click')
	}
}

// 根据语言动态计算字号
const fontSize = computed(() => {
	return locale.value === 'zh-CN' ? '32rpx' : '28rpx'
})
</script>

<style scoped>
.capsule-btn {
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(10px);
	border-radius: 30rpx;
	padding: 12rpx 16rpx; 
	min-height: 66rpx;	min-width: 180rpx;	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	border: 1px solid rgba(255, 255, 255, 0.4);
}

.capsule-btn:active {
	transform: scale(0.95);
	opacity: 0.8;
}

.capsule-btn.active {
	background: rgba(0, 153, 153, 0.6);
	border-color: rgba(0, 153, 153, 0.8);
}

.capsule-btn.disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.capsule-text {
	font-size: 32rpx;
	font-size: v-bind(fontSize);
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 280rpx;
	text-align: center;
}

.capsule-btn.active .capsule-text {
	color: #ffffff;
	font-weight: bold;
}
</style>

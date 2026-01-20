<!--
/**
 * ExpandableCapsule - 可展开的胶囊按钮组件
 * 
 * 用途：点击后向下展开显示内容的胶囊按钮，使用绝对定位避免影响页面布局
 * 使用位置：
 *   - pages/index/home.vue: 顶部导航栏的"音量调节"按钮（展开后显示音量滑块）
 * 
 * Props:
 *   - text: 按钮文字
 *   - defaultExpanded: 默认是否展开
 * 
 * 特性：
 *   - 展开面板使用绝对定位，不会推动其他元素
 *   - 支持自定义内容（通过slot插槽）
 *   - 展开时按钮变为青色背景
 */
-->
<template>
	<view class="expandable-capsule">
		<!-- 胶囊按钮头部 -->
		<view 
			class="capsule-header" 
			:class="{ 'active': externalActive !== undefined ? externalActive : isExpanded }"
			@click="toggleExpand"
		>
			<text class="capsule-text">{{ text }}</text>
		</view>
		
		<!-- 向下展开的面板 -->
		<view class="capsule-panel" v-if="isExpanded">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 定义属性
const props = defineProps({
	// 按钮文字
	text: {
		type: String,
		required: true
	},
	// 默认是否展开
	defaultExpanded: {
		type: Boolean,
		default: false
	},
	// 外部控制的active状态（优先级高于内部isExpanded）
	externalActive: {
		type: Boolean,
		default: undefined
	},
	// 胶囊按钮圆角
	capsuleRadius: {
		type: String,
		default: '30rpx'
	},
	// 延展面板圆角
	panelRadius: {
		type: String,
		default: '30rpx'
	}
})

// 定义事件
const emit = defineEmits(['expand', 'collapse'])

// 展开状态
const isExpanded = ref(props.defaultExpanded)

// 根据语言动态计算字号
const fontSize = computed(() => {
	return locale.value === 'zh-CN' ? '32rpx' : '28rpx'
})

// 切换展开/收起
const toggleExpand = () => {
	isExpanded.value = !isExpanded.value
	if (isExpanded.value) {
		emit('expand')
	} else {
		emit('collapse')
	}
}

// 暴露方法供外部调用
defineExpose({
	expand: () => {
		isExpanded.value = true
		emit('expand')
	},
	collapse: () => {
		isExpanded.value = false
		emit('collapse')
	}
})
</script>

<style scoped>
.expandable-capsule {
	position: relative;
	display: inline-flex;
	flex-direction: column;
	align-items: stretch;
}

.capsule-header {
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(10px);
	border-radius: v-bind(capsuleRadius);
	padding: 12rpx 16rpx;
	min-height: 66rpx;	min-width: 180rpx;	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	border: 1px solid rgba(255, 255, 255, 0.4);
}

.capsule-header.active {
	background: rgba(0, 153, 153, 0.6);
	border-color: rgba(0, 153, 153, 0.8);
}

.capsule-header:active {
	transform: scale(0.95);
	opacity: 0.8;
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

.capsule-header.active .capsule-text {
	color: #ffffff;
	font-weight: bold;
}

.capsule-panel {
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(255, 255, 255, 0.85);
	backdrop-filter: blur(10px);
	border-radius: v-bind(panelRadius);
	padding: 20rpx 30rpx;
	border: 1px solid rgba(0, 153, 153, 0.8);
	min-width: 200rpx;
	z-index: 100;
	margin-top: 8rpx;
}
</style>

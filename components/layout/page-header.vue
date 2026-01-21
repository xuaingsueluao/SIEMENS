<!--
 * 页面顶部导航栏布局组件
 * 包含：返回按钮、功能按钮组、音量调节、状态栏
 * 布局与首页完全一致，确保跳转时功能按钮位置不变
 * 使用场景：需要显示统一顶部导航的页面
 -->
<template>
	<view class="page-header">
		<!-- 返回按钮 - 绝对定位，不影响其他元素布局 -->
		<view class="back-btn-wrapper">
			<CommonBackBtn />
		</view>
		
		<!-- 主内容区域 -->
		<view class="main-content">
			<!-- 顶部导航栏 - 与首页结构完全一致 -->
			<view class="top-nav">
				<!-- 左侧占位：与首页 Logo 同宽，保持功能按钮位置一致 -->
				<view class="nav-left-placeholder"></view>
				
				<!-- 中间功能按钮组 -->
				<view class="nav-buttons">
					<CapsuleButton 
						v-for="(btn, index) in topButtons" 
						:key="index"
						:text="btn.text"
						:isActive="isButtonActive(btn.key)"
						@click="handleButtonClick(btn)"
					/>
					
					<!-- 音量调节（可展开） -->
					<view class="volume-wrapper">
						<ExpandableCapsule :text="t('home.volume')">
							<view class="volume-content">
								<slider 
									:value="volume" 
									:min="0" 
									:max="100" 
									activeColor="#009999"
									backgroundColor="#e0e0e0"
									block-size="20" 
									@change="onVolumeChange"
								/>
								<text class="volume-value">{{ volume }}%</text>
							</view>
						</ExpandableCapsule>
					</view>
				</view>
				
				<!-- 右侧状态栏 -->
				<NavStatusBYClaude />
			</view>
			
			<!-- 页面内容插槽 -->
			<view class="page-body">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CommonBackBtn from '@/components/ui-box/common-back-btn.vue'
import CapsuleButton from '@/components/ui-box/capsule-button.vue'
import ExpandableCapsule from '@/components/ui-box/expandable-capsule.vue'
import NavStatusBYClaude from '@/components/navigation/nav-statusBYClaude.vue'

const { t } = useI18n()

// Props
const props = defineProps({
	// 当前激活的按钮 key（用于高亮显示）
	activeKey: {
		type: String,
		default: ''
	}
})

// 音量
const volume = ref(50)

// 顶部按钮配置
const topButtonsConfig = [
	{ key: 'settings', route: '/pages/settings/index' },
	{ key: 'remote', route: '/pages/remote/index' },
	{ key: 'newRoute', route: '/pages/route/index' },
	{ key: 'faceRecognition', route: '/pages/face/index' },
	{ key: 'voiceSettings', route: '/pages/voice/index' },
	{ key: 'mapping', route: '/pages/mapping/index' }
]

// 计算按钮列表（带翻译）
const topButtons = computed(() => 
	topButtonsConfig.map(btn => ({
		...btn,
		text: t(`home.${btn.key}`)
	}))
)

// 判断按钮是否激活
const isButtonActive = (key) => {
	return key === props.activeKey
}

// 按钮点击处理
const handleButtonClick = (btn) => {
	if (btn.route) {
		// 如果点击的是当前页面的按钮，不做跳转
		if (btn.key === props.activeKey) {
			return
		}
		uni.navigateTo({ url: btn.route })
	}
}

// 音量改变事件
const onVolumeChange = (e) => {
	volume.value = e.detail.value
	console.log('音量调整为:', volume.value)
	// TODO: 发送音量控制指令给机器人
}
</script>

<style scoped>
.page-header {
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background: #dfe4e8;
}

/* 返回按钮 - 绝对定位，不影响布局 */
.back-btn-wrapper {
	position: absolute;
	left: 40rpx;
	top: 20rpx;
	z-index: 100;
}

.main-content {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

/* 顶部导航栏 - 与首页完全一致 */
.top-nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 28rpx 30rpx 20rpx 30rpx;
}

/* 左侧占位区域 - 与首页 Logo 宽度一致 */
.nav-left-placeholder {
	flex-shrink: 0;
	width: 160rpx; /* 与首页 SIEMENS logo 宽度相当 */
}

.nav-buttons {
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20rpx;
	flex-wrap: wrap;
}

/* 音量调节包装器 */
.volume-wrapper {
	margin-left: 40rpx;
}

/* 音量调节内容 */
.volume-content {
	display: flex;  
	flex-direction: column;
	align-items: center;
	gap: 5rpx;
	width: 300rpx;
}

.volume-content slider {
	width: 100%;
} 

.volume-value {
	font-size: 40rpx;
	color: #009999;
	font-weight: bold;
}

/* 页面主体内容区域 */
.page-body {
	flex: 1;
	position: relative;
	overflow: hidden;
}
</style>

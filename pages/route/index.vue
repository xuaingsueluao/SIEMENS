<template>
	<PageHeader activeKey="newRoute">
		<view class="route-container">
			<!-- 左侧地图区域 -->
			<view class="map-area">
				<image 
					class="map-image" 
					src="/static/icons/route/background.jpg" 
					mode="aspectFill"
				/>
			</view>
			
			<!-- 右侧控制面板 -->
			<view class="control-panel">
				<!-- 添加讲解内容按钮 -->
				<view class="control-item">
					<view class="control-btn-bordered" @click="showContentInput">
						<text class="control-btn-text">{{ $t('route.addContent') }}</text>
					</view>
				</view>
				
				<!-- 路线名称 -->
				<view class="control-item">
					<view class="route-name-btn" @click="showRouteNameInput">
						<text class="route-name-text">{{ routeName || $t('route.defaultRouteName') }}</text>
					</view>
				</view>
				
				<!-- 前进速度选择 - 直接展示 -->
				<view class="control-item">
					<view class="control-label">{{ $t('route.forwardSpeed') }}</view>
					<view class="speed-options">
						<view 
							v-for="speed in speedList" 
							:key="speed.id"
							class="speed-btn"
							:class="{ 'speed-btn-active': selectedSpeedId === speed.id }"
							@click="handleSpeedSelect(speed.id)"
						>
							<text class="speed-btn-text">{{ speed.name }}</text>
						</view>
					</view>
				</view>
				
				<!-- 保存按钮 -->
				<view class="save-btn-wrapper">
					<view class="save-btn" @click="handleSave">
						<text class="save-btn-text">{{ $t('common.save') }}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 路线名称输入弹窗 -->
		<view class="input-modal" v-if="isRouteNameModalVisible" @click="hideRouteNameInput">
			<view class="input-modal-content" @click.stop>
				<text class="input-modal-title">{{ $t('route.editRouteName') }}</text>
				<input 
					class="input-modal-input"
					v-model="tempRouteName"
					:placeholder="$t('route.routeNamePlaceholder')"
					@confirm="confirmRouteName"
				/>
				<view class="input-modal-buttons">
					<view class="input-modal-btn input-modal-btn-cancel" @click="hideRouteNameInput">
						<text class="input-modal-btn-text">{{ $t('common.cancel') }}</text>
					</view>
					<view class="input-modal-btn input-modal-btn-confirm" @click="confirmRouteName">
						<text class="input-modal-btn-text-confirm">{{ $t('common.confirm') }}</text>
					</view>
				</view>
			</view>
		</view>
		
	</PageHeader>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/layout/page-header.vue'

const { t } = useI18n()

// 路线名称（空字符串表示使用默认翻译值）
const routeName = ref('')
const tempRouteName = ref('')
const isRouteNameModalVisible = ref(false)

// 显示路线名称输入弹窗
const showRouteNameInput = () => {
	tempRouteName.value = routeName.value
	isRouteNameModalVisible.value = true
}

// 隐藏路线名称输入弹窗
const hideRouteNameInput = () => {
	isRouteNameModalVisible.value = false
}

// 确认路线名称
const confirmRouteName = () => {
	if (tempRouteName.value.trim()) {
		routeName.value = tempRouteName.value.trim()
	}
	hideRouteNameInput()
}

// 讲解内容 - 跳转到配置页面
const showContentInput = () => {
	uni.navigateTo({ url: '/pages/route/content' })
}

// 速度列表
const speedList = ref([
	{ id: 1, name: 'V1' },
	{ id: 2, name: 'V2' },
	{ id: 3, name: 'V3' }
])

// 当前选中的速度
const selectedSpeedId = ref(1)

// 当前速度名称
const currentSpeedName = computed(() => {
	const speed = speedList.value.find(s => s.id === selectedSpeedId.value)
	return speed ? speed.name : ''
})

// 选择速度
const handleSpeedSelect = (id) => {
	selectedSpeedId.value = id
}

// 保存
const handleSave = () => {
	console.log('保存路线', {
		routeName: routeName.value,
		speedId: selectedSpeedId.value
	})
	// TODO: 实现保存功能
}
</script>

<style scoped>
.route-container {
	display: flex;
	flex-direction: row;
	height: 100%;
	padding: 30rpx 50rpx 50rpx 50rpx;
	gap: 40rpx;
	box-sizing: border-box;
}

/* 左侧地图区域 */
.map-area {
	flex: 1;
	background: #edf1f3;
	border-radius: 40rpx;
	overflow: hidden;
}

.map-image {
	width: 100%;
	height: 100%;
}

/* 右侧控制面板 */
.control-panel {
	width: 280rpx;
	display: flex;
	flex-direction: column;
	gap: 60rpx;
}

.control-item {
	display: flex;
	flex-direction: column;
	gap: 10rpx;
}

.control-label {
	font-size: 26rpx;
	color: #666;
	padding-left: 10rpx;
}

/* 控制按钮 */
.control-btn {
	background: #ffffff;
	border-radius: 40rpx;
	padding: 20rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.control-btn:active {
	opacity: 0.8;
}

.control-btn-text {
	font-size: 28rpx;
	color: #333;
}

/* 青色包边按钮 */
.control-btn-bordered {
	background: #ffffff;
	border: 3rpx solid #009999;
	border-radius: 40rpx;
	padding: 20rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.control-btn-bordered:active {
	opacity: 0.8;
}

/* 路线名称按钮 - 青色包边 */
.route-name-btn {
	background: #ffffff;
	border: 3rpx solid #009999;
	border-radius: 40rpx;
	padding: 20rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.route-name-btn:active {
	opacity: 0.8;
}

.route-name-text {
	font-size: 28rpx;
	color: #333;
}

/* 输入弹窗 */
.input-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 2000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.input-modal-content {
	width: 600rpx;
	background: #ffffff;
	border-radius: 30rpx;
	padding: 50rpx 40rpx;
	display: flex;
	flex-direction: column;
	gap: 30rpx;
}

.input-modal-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
	text-align: center;
}

.input-modal-input {
	background: #f5f5f5;
	border-radius: 20rpx;
	padding: 24rpx 30rpx;
	font-size: 30rpx;
	color: #333;
}

.input-modal-content-large {
	width: 700rpx;
}

.input-modal-textarea {
	background: #f5f5f5;
	border-radius: 20rpx;
	padding: 24rpx 30rpx;
	font-size: 30rpx;
	color: #333;
	height: 300rpx;
	width: 100%;
	box-sizing: border-box;
}

.input-modal-buttons {
	display: flex;
	flex-direction: row;
	gap: 30rpx;
	margin-top: 20rpx;
}

.input-modal-btn {
	flex: 1;
	padding: 24rpx;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.input-modal-btn-cancel {
	background: #e0e0e0;
}

.input-modal-btn-confirm {
	background: #009999;
}

.input-modal-btn-text {
	font-size: 28rpx;
	color: #666;
}

.input-modal-btn-text-confirm {
	font-size: 28rpx;
	color: #ffffff;
	font-weight: 600;
}

/* 速度选项 - 直接展示 */
.speed-options {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.speed-btn {
	background: #ffffff;
	border-radius: 30rpx;
	padding: 18rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
}

.speed-btn:active {
	opacity: 0.8;
}

.speed-btn-active {
	background: #009999;
}

.speed-btn-text {
	font-size: 28rpx;
	color: #333;
}

.speed-btn-active .speed-btn-text {
	color: #ffffff;
	font-weight: 600;
}

/* 保存按钮 */
.save-btn-wrapper {
	margin-top: auto;
}

.save-btn {
	background: #333333;
	border-radius: 40rpx;
	padding: 24rpx 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.save-btn:active {
	opacity: 0.8;
}

.save-btn-text {
	font-size: 30rpx;
	color: #ffffff;
	font-weight: 600;
}
</style>

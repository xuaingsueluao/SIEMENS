<template>
	<view class="home-container">
		<!-- 背景图 -->
		<image class="background" src="/static/icons/home/background.png" mode="aspectFill"></image>
		
		<!-- 主内容区域 -->
		<view class="main-content">
			<!-- 顶部导航栏 -->
			<view class="top-nav">
				<!-- 左侧 Logo -->
				<view class="nav-logo">
					<text class="logo-text">SIEMENS</text>
				</view>
				
				<!-- 中间功能按钮组 -->
				<view class="nav-buttons">
					<CapsuleButton 
						v-for="(btn, index) in topButtons" 
						:key="index"
						:text="btn.text"
						:isActive="btn.isActive"
						@click="handleTopButtonClick(btn)"
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
			
			<!-- 左侧控制栏 -->
			<view class="left-sidebar">
				<CapsuleButton 
					v-for="(btn, index) in sideButtons" 
					:key="index"
					:text="btn.text"
					:isActive="btn.isActive"
					@click="handleSideButtonClick(btn)"
				/>
			</view>
			
			<!-- 左下角机器人视角 -->
			<view class="robot-perspective">
				<text class="perspective-label">{{ t('home.robotPerspective') }}：</text>
				<view class="perspective-view">
					<!-- 保持空白 -->
				</view>
			</view>
		</view>
		
		<!-- 操作弹窗 -->
		<view class="operation-modal" v-if="isOperationModalVisible">
			<view class="operation-content" @click.stop>
				<!-- 顶部提示文字 -->
				<text class="operation-tip">请操作摇杆开始定位</text>
				
				<!-- 中间图片区域 -->
				<view class="operation-image-wrapper">
					<image 
						class="operation-image" 
						src="/static/icons/home/location-placeholder.jpg" 
						mode="aspectFill"
					/>
					
					<!-- 左侧摇杆：控制前后 -->
					<view class="joystick-left">
						<VirtualJoystick 
							mode="throttle"
							:size="140"
							:knobSize="64"
							:deadZone="0.15"
							@change="onThrottleChange"
						/>
					</view>
					
					<!-- 右侧摇杆：控制艏向 -->
					<view class="joystick-right">
						<VirtualJoystick 
							mode="yaw"
							:size="140"
							:knobSize="64"
							:deadZone="0.15"
							@change="onYawChange"
						/>
					</view>
				</view>
				
				<!-- 底部关闭按钮 -->
				<view class="operation-close-btn" @click="closeOperationModal">
					<text class="close-btn-text">退出</text>
				</view>
			</view>
		</view>
		
		<!-- 右侧路线选择边栏 -->
		<view class="route-sidebar-overlay" v-if="isRouteSidebarVisible" @click="closeRouteSidebar">
			<view class="route-sidebar" @click.stop>
				<text class="route-sidebar-title">{{ t('home.selectRouteTitle') }}</text>
				<view class="route-list">
					<view 
						v-for="route in routes" 
						:key="route.id"
						class="route-item"
						:class="{ 'route-item-selected': selectedRoute && selectedRoute.id === route.id }"
						@click="selectRoute(route)"
					>
						<text class="route-name">{{ route.name }}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 中间提示弹窗 -->
		<TipModal 
			:visible="isCenterTipVisible"
			:message="centerTipMessage"
			:type="centerTipType"
			width="900rpx"
			minHeight="520rpx"
			@close="closeCenterTip"
			@cancel="closeCenterTip"
			@confirm="goToNewRoute"
		/>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CapsuleButton from '@/components/ui-box/capsule-button.vue'
import ExpandableCapsule from '@/components/ui-box/expandable-capsule.vue'
import TipModal from '@/components/ui-box/tip-modal.vue'
import VirtualJoystick from '@/components/ui-box/virtual-joystick.vue'
import NavStatusBYClaude from '@/components/navigation/nav-statusBYClaude.vue'

const { t } = useI18n()

// 音量
const volume = ref(50)

// 操作弹窗显示状态
const isOperationModalVisible = ref(false)

// 右侧路线选择边栏显示状态
const isRouteSidebarVisible = ref(false)

// 中间提示弹窗状态
const isCenterTipVisible = ref(false)
const centerTipMessage = ref('')
const centerTipType = ref('info') // 'info' 或 'confirm'

// 路线列表（模拟数据）
const routes = ref([
	{ id: 1, name: '路线1' },
	{ id: 2, name: '路线2' },
	{ id: 3, name: '路线3' }
])

// 当前选中的路线
const selectedRoute = ref(null)

// 打开操作弹窗
const openOperationModal = () => {
	isOperationModalVisible.value = true
}

// 关闭操作弹窗
const closeOperationModal = () => {
	isOperationModalVisible.value = false
}

// 打开右侧路线选择边栏
const openRouteSidebar = () => {
	isRouteSidebarVisible.value = true
}

// 关闭右侧路线选择边栏
const closeRouteSidebar = () => {
	isRouteSidebarVisible.value = false
}

// 显示中间提示弹窗
const showCenterTip = (message, type = 'info') => {
	centerTipMessage.value = message
	centerTipType.value = type
	isCenterTipVisible.value = true
}

// 关闭中间提示弹窗
const closeCenterTip = () => {
	isCenterTipVisible.value = false
}

// 选择路线
const selectRoute = (route) => {
	selectedRoute.value = route
	// 显示选择成功提示
	showCenterTip(`您已经选择${route.name}`)
	// 更新左侧按钮文字
	const routeBtn = sideButtons.value.find(b => b.action === 'select-route')
	if (routeBtn) {
		routeBtn.text = route.name
	}
	// 1.5秒后关闭右侧边栏和提示
	setTimeout(() => {
		closeRouteSidebar()
		closeCenterTip()
	}, 1500)
}

// 前往新建路线
const goToNewRoute = () => {
	closeCenterTip()
	uni.navigateTo({ url: '/pages/route/index' })
}

// 音量改变事件
const onVolumeChange = (e) => {
	volume.value = e.detail.value
	console.log('音量调整为:', volume.value)
}

// 摇杆控制状态
const throttleDir = ref('stop')  // front | back | stop
const yawDir = ref('stop')       // left | right | stop

// 前后摇杆变化
const onThrottleChange = ({ dir }) => {
	throttleDir.value = dir
	sendPositionCommand()
}

// 艏向摇杆变化
const onYawChange = ({ dir }) => {
	yawDir.value = dir
	sendPositionCommand()
}

// 发送定位控制指令
const sendPositionCommand = () => {
	const command = {
		throttle: throttleDir.value,
		yaw: yawDir.value
	}
	console.log('定位指令:', command)
	// TODO: 通过 WebSocket/API 发送给机器人
}

// 顶部按钮配置（使用 computed 动态翻译）
const topButtonsConfig = ref([
	{ key: 'settings', isActive: false, route: '/pages/settings/index' },
	{ key: 'remote', isActive: false, route: '/pages/remote/index' },
	{ key: 'newRoute', isActive: false, route: '/pages/route/index' },
	{ key: 'faceRecognition', isActive: false, route: '/pages/face/index' },
	{ key: 'voiceSettings', isActive: false, route: '/pages/voice/index' },
	{ key: 'mapping', isActive: true, route: '/pages/mapping/index' }
])

const topButtons = computed(() => 
	topButtonsConfig.value.map(btn => ({
		...btn,
		text: t(`home.${btn.key}`)
	}))
)

// 左侧按钮配置（使用 computed 动态翻译）
const sideButtonsConfig = ref([
	{ key: 'initialPosition', isActive: false, action: 'initial-position' },
	{ key: 'selectRoute', isActive: false, action: 'select-route' },
	{ key: 'startTour', isActive: false, action: 'start-tour' },
	{ key: 'stopTour', isActive: false, action: 'stop-tour' },
	{ key: 'shutdown', isActive: false, action: 'shutdown' }
])

const sideButtons = computed(() => 
	sideButtonsConfig.value.map(btn => ({
		...btn,
		text: t(`home.${btn.key}`)
	}))
)

// 顶部按钮点击
const handleTopButtonClick = (btn) => {
	// 更新激活状态
	topButtonsConfig.value.forEach(b => b.isActive = false)
	// 找到原始配置项并更新
	const config = topButtonsConfig.value.find(b => b.key === btn.key)
	if (config) config.isActive = true
	// 跳转页面
	if (btn.route) {
		uni.navigateTo({ url: btn.route })
	}
}

// 左侧按钮点击
const handleSideButtonClick = (btn) => {
	// 更新激活状态
	sideButtonsConfig.value.forEach(b => b.isActive = false)
	// 找到原始配置项并更新
	const config = sideButtonsConfig.value.find(b => b.key === btn.key)
	if (config) config.isActive = true
	
	// 根据不同的action执行不同操作
	if (btn.action === 'initial-position') {
		// 初始定位：打开操作弹窗
		openOperationModal()
	} else if (btn.action === 'select-route') {
		// 选择路线：检查是否有路线
		if (routes.value.length === 0) {
			// 没有路线，显示提示
			showCenterTip('无可用路线请前往新建路线', 'confirm')
		} else {
			// 有路线，打开右侧边栏
			openRouteSidebar()
		}
	}
	
	// 执行动作
	console.log('执行动作:', btn.action)
}
</script>

<style scoped>
.home-container {
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

.main-content {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

/* 顶部导航栏 */
.top-nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 28rpx 30rpx 20rpx 30rpx;
}

.nav-logo {
	flex-shrink: 0;
}

.logo-text {
	font-size: 43rpx;
	font-weight: bold;
	color: #009999;
}

.nav-buttons {
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20rpx;
	flex-wrap: wrap;
}

/* 左侧控制栏 */
.left-sidebar {
	position: absolute;
	left: 30rpx; 
	top: 260rpx; 
	display: flex; 
	flex-direction: column;  
	gap: 40rpx; 
}

/* 左下角机器人视角 */
.robot-perspective {
	position: absolute;
	left: 30rpx;
	bottom: 30rpx;
}

.perspective-label {
	font-size: 24rpx;
	color: #009999;
	background: rgba(255, 255, 255, 0.7);
	padding: 10rpx 20rpx;
	border-radius: 20rpx 20rpx 0 0;
}

.perspective-view {
	width: 600rpx;
	height: 400rpx;
	background: rgba(255, 255, 255, 0.3);
	border: 2rpx solid #009999;
	border-radius: 0 20rpx 20rpx 20rpx;
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

/* 操作弹窗 */
.operation-modal {
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

.operation-content {
	width: 80%;
	height: 70%;
	background: linear-gradient(135deg, #00b3b3 0%, #009999 100%);
	border-radius: 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40rpx;
	box-sizing: border-box;
	box-shadow: 0 20rpx 60rpx rgba(0, 0, 0, 0.3);
}

.operation-tip {
	font-size: 45rpx;
	color: rgb(255, 255, 255);
	font-weight: 700;
	margin-bottom: 30rpx;
}

/* 图片区域 */
.operation-image-wrapper {
	position: relative;
	width: 80%;
	height: 80%;
	flex: 1;
}

.operation-image {
	width: 100%;
	height: 100%;
	border-radius: 20rpx;
	border: 4rpx solid rgba(255, 255, 255, 0.3);
}

/* 左侧摇杆 */
.joystick-left {
	position: absolute;
	left: -70rpx;
	bottom: -60rpx;
	z-index: 10;
}

/* 右侧摇杆 */
.joystick-right {
	position: absolute;
	right: -70rpx;
	bottom: -60rpx;
	z-index: 10;
}

/* 关闭按钮 */
.operation-close-btn {
	margin-top: 30rpx;
	padding: 18rpx 120rpx;
	background: #333333;
	border-radius: 16rpx;
	cursor: pointer;
	transition: all 0.3s ease;
}

.operation-close-btn:active {
	transform: scale(0.95);
	opacity: 0.8;
}

.close-btn-text {
	font-size: 32rpx;
	color: #ffffff;
	font-weight: 600;
}

/* 右侧路线选择边栏 */
.route-sidebar-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	z-index: 2000;
}

.route-sidebar {
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 400rpx;
	height: 70%;
	background: rgba(255, 255, 255, 0.4);
	box-shadow: -10rpx 0 30rpx rgba(0, 0, 0, 0.2);
	border-radius: 40rpx 0 0 40rpx;
	padding: 40rpx 30rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	transition: all 0.5s ease;
}

.route-sidebar-title {
	font-size: 36rpx;
	color: #009999;
	font-weight: bold;
	margin-bottom: 30rpx;
}

.route-list {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.route-item {
	background: #ffffff;
	border-radius: 20rpx;
	padding: 25rpx 30rpx;
	border: 2rpx solid rgba(0, 153, 153, 0.3);
	transition: all 0.3s ease;
}

.route-item:active {
	transform: scale(0.98);
}

.route-item-selected {
	background: rgba(0, 153, 153, 0.6);
	border-color: rgba(0, 153, 153, 0.8);
}

.route-name {
	font-size: 32rpx;
	color: #009999;
	font-weight: 600;
}

.route-item-selected .route-name {
	color: #ffffff;
}
</style>

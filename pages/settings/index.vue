<template>
	<PageHeader activeKey="settings">
		<!-- 设置页面内容 -->
		<view class="settings-container">
			<!-- 外层大卡片 -->
			<view class="settings-card">
				<view class="pill-list">
					<!-- 机器人型号 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.robotModel') }}：</text>
						<text class="pill-value">G1-U2</text>
					</view>

					<!-- 语言切换 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.languageSwitch') }}：</text>
						<view class="pill-value voice-wrap">
							<view class="expandable-wrapper full-width">
								<ExpandableCapsule 
									ref="languageCapsule"
									:text="currentLanguageName"
									capsuleRadius="40rpx"
									panelRadius="40rpx"
								>
									<view class="language-panel">
										<view 
											v-for="lang in supportedLanguages" 
											:key="lang.code"
											class="language-item"
											:class="{ 'language-selected': locale === lang.code }"
											@click="handleLanguageSelect(lang.code)"
										>
											<text class="language-name">{{ lang.nativeName }}</text>
										</view>
									</view>
								</ExpandableCapsule>
							</view>
						</view>
					</view>

					<!-- 音源选择 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.audioSource') }}：</text>
						<view class="pill-value voice-wrap">
							<view 
								class="voice-pill" 
								:class="{ 'active': audioSource === 'internal' }"
								@click="handleInternalClick"
							>
								{{ $t('settings.audioSourceInternal') }}
							</view>
							<view class="expandable-wrapper">
								<ExpandableCapsule 
									ref="externalCapsule"
									:text="$t('settings.audioSourceExternal')"
									:externalActive="audioSource === 'external'"
									@expand="handleExternalExpand"
									@collapse="handleExternalCollapse"
								>
									<view class="external-device-panel">
										<view class="device-section">
											<text class="device-label">可用设备</text>
											<view 
												class="device-item"
												:class="{ 'device-selected': selectedDevice === 'EXA-H0001' }"
												@click="handleDeviceSelect('EXA-H0001')"
											>
												<text class="device-name">EXA-H0001</text>
											</view>
										</view>
										<text class="device-tip">注意：使用外接音响时，音量会较大</text>
									</view>
								</ExpandableCapsule>
							</view>
						</view>
					</view>

					<!-- 设备编号 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.deviceNumber') }}：</text>
						<text class="pill-value">xxxx xxxx</text>
					</view>

					<!-- 服务器IP -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.serviceIP') }}：</text>
						<text class="pill-value">192.168.1.1</text>
					</view>

					<!-- 部署时间 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.deploymentTime') }}：</text>
						<text class="pill-value">2025.11.28</text>
					</view>

					<!-- WLAN -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.wlan') }}：</text>
						<text class="pill-value">ZJU Office</text>
					</view>

					<!-- 连接状态 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.connectionStatus') }}：</text>
						<text class="pill-value">已连接</text>
					</view>

					<!-- 联系我们 -->
					<view class="pill-item">
						<text class="pill-label">{{ $t('settings.contactUs') }}：</text>
						<text class="pill-value">xxx公司</text>
					</view>
				</view>
			</view>
		</view>
	</PageHeader>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { supportedLanguages } from '@/locale/index.js'
import PageHeader from '@/components/layout/page-header.vue'
import ExpandableCapsule from '@/components/ui-box/expandable-capsule.vue'

const { locale } = useI18n()

// 语言切换
const languageCapsule = ref(null)

// 当前语言显示名称（使用全局 locale）
const currentLanguageName = computed(() => {
	const lang = supportedLanguages.find(l => l.code === locale.value)
	return lang ? lang.nativeName : '中文'
})

// 选择语言（直接修改全局 locale）
const handleLanguageSelect = (langCode) => {
	locale.value = langCode
	// 关闭语言选择面板
	if (languageCapsule.value) {
		languageCapsule.value.collapse()
	}
}

// 音源选择：'internal' 本体音响 | 'external' 外接音响
const audioSource = ref('internal')

// 选中的外接设备
const selectedDevice = ref(null)

// 外接音响胶囊组件ref
const externalCapsule = ref(null)

// 是否是通过选择设备来关闭面板（用于区分点击空白和选择设备）
const isDeviceSelecting = ref(false)

// 点击本体音响
const handleInternalClick = () => {
	audioSource.value = 'internal'
	selectedDevice.value = null
}

// 外接音响展开时
const handleExternalExpand = () => {
	// 展开面板时不改变声源选择，只是打开查看设备列表
	// audioSource保持当前状态
}

// 外接音响收起时（点击空白）
const handleExternalCollapse = () => {
	// 如果是通过选择设备关闭的，不做任何处理
	if (isDeviceSelecting.value) {
		isDeviceSelecting.value = false
		return
	}
	
	// 点击空白关闭，说明用户放弃选择外接音响
	// 无论之前是什么状态，都回到本体音响（除非已经选过设备）
	if (!selectedDevice.value) {
		audioSource.value = 'internal'
	}
	// 如果已经选过设备，保持外接音响选中
}

// 选择设备
const handleDeviceSelect = (deviceName) => {
	isDeviceSelecting.value = true
	selectedDevice.value = deviceName
	audioSource.value = 'external'
	// 关闭延展面板
	if (externalCapsule.value) {
		externalCapsule.value.collapse()
	}
}
</script>

<style scoped>
/*
  三层结构：
  背景（中灰） -> 大卡片（更浅一点） -> 胶囊（浅灰） -> 按钮（白）
*/
.settings-container {
	/* 页面边距 */
	--page-gap: 54rpx;

	/* 大卡片内边距：控制胶囊距离大卡片边缘的距离 */
	--card-inner-gap: 32rpx;

	/* 胶囊之间间距 */
	--pill-gap: 32rpx;

	/* 尺寸 */
	--pill-height: 98rpx;
	--pill-radius: 18rpx;

	/* 颜色层级 */
	--card-gray: #edf1f3;    /* 大卡片：更浅 */
	--pill-gray: #eef2f4;    /* 胶囊：浅灰 */
	--btn-white: #ffffff;    /* 按钮：白色 */
	
	width: 100%;
	height: 100%;
	padding: var(--page-gap);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

/* 大卡片：更浅 + 内边距加大 */
.settings-card {
	position: relative;
	z-index: 1;
	flex: 1;
	min-height: 0;

	background: var(--card-gray);
	border: 1rpx solid rgba(0, 0, 0, 0.08);
	border-radius: 40rpx;

	/* 这里就是"胶囊距离大卡片边缘"的控制项 */
	padding: var(--card-inner-gap);
	box-sizing: border-box;

	box-shadow: 0 10rpx 26rpx rgba(0, 0, 0, 0.08);
}

/* 胶囊列表：间距与 card 内边距一致 */
.pill-list {
	display: flex;
	flex-direction: column;
	gap: var(--pill-gap);
}

/* 胶囊：浅灰 */
.pill-item {
	height: var(--pill-height);
	padding: 0 24rpx;
	box-sizing: border-box;

	display: flex;
	align-items: center;

	border-radius: var(--pill-radius);
	background: var(--pill-gray);
	border: 1rpx solid rgba(0, 0, 0, 0.10);
}

/* 文本 */
.pill-label {
	width: 220rpx;
	font-size: 28rpx;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.42);
	letter-spacing: 0.5rpx;
}

/* 数值 */
.pill-value {
	flex: 1;
	font-size: 30rpx;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.66);
	letter-spacing: 0.5rpx;
}

/* 音源选择：按钮白色 */
.voice-wrap {
	display: flex;
	gap: 60rpx;
	align-items: center;
}

.expandable-wrapper {
	position: relative;
}

.full-width {
	flex: 1;
}

/* 按钮胶囊样式 */
.voice-pill {
	height: 62rpx;
	min-width: 190rpx;
	padding: 0 20rpx;
	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 16rpx;
	background: var(--btn-white);
	border: 1rpx solid rgba(0, 0, 0, 0.10);

	font-size: 26rpx;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.42);
	cursor: pointer;
	transition: all 0.3s ease;
}

/* 选中态：更清晰 */
.voice-pill.active {
	background: #009999;
	border-color: #009999;
	color: #ffffff;
}

/* 外接设备面板 */
.external-device-panel {
	padding: 10rpx;  
	min-width: 400rpx;
	display: flex;
	flex-direction: column;
	gap: 16rpx;  
}

/* 设备列表 */
.device-section {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
}

.device-label {
	font-size: 28rpx;
	color: #009999;
	font-weight: 600;
	text-align: center;
}

.device-item {
	background: #ffffff;
	border-radius: 12rpx;
	padding: 16rpx 20rpx;
	border: 1rpx solid rgba(0, 153, 153, 0.3);
	cursor: pointer;
	transition: all 0.3s ease;
}

.device-item:active {
	transform: scale(0.98);
}

.device-item.device-selected {
	background: #009999;
	border-color: #009999;
}

.device-name {
	font-size: 28rpx;
	color: #333;
	font-weight: 600;
	white-space: nowrap;
}

.device-item.device-selected .device-name {
	color: #ffffff;
}

.device-tip {
	font-size: 24rpx;
	color: rgba(0, 0, 0, 0.5);
	line-height: 1.5;
}

/* 语言选择面板 */
.language-panel {
	padding: 10rpx;
	min-width: 320rpx;
	display: flex;
	flex-direction: column;
	gap: 12rpx;
}

.language-item {
	background: #ffffff;
	border-radius: 12rpx;
	padding: 16rpx 20rpx;
	border: 1rpx solid rgba(0, 153, 153, 0.3);
	cursor: pointer;
	transition: all 0.3s ease;
	text-align: center;
}

.language-item:active {
	transform: scale(0.98);
}

.language-item.language-selected {
	background: #009999;
	border-color: #009999;
}

.language-name {
	font-size: 28rpx;
	color: #333;
	font-weight: 600;
	white-space: nowrap;
}

.language-item.language-selected .language-name {
	color: #ffffff;
}
</style>

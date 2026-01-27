<template>
	<PageHeader activeKey="voiceSettings">
		<view class="page-content">
			<!-- 语音设置主卡片 -->
			<view class="voice-card">
				<!-- 左侧配置区域 -->
				<view class="left-config-area">
					<!-- 人物设定 - 音色选择 -->
					<view class="config-section">
						<view class="section-header">
							<text class="section-title">{{ $t('voice.characterSettings') }}</text>
						</view>
						<view class="section-content">
							<text class="config-label">{{ $t('voice.voiceSelect') }}</text>
							<view class="dropdown-select" @click="toggleVoiceDropdown">
								<text class="dropdown-text">{{ currentVoiceText }}</text>
								<image 
									class="dropdown-arrow" 
									:class="{ 'arrow-up': showVoiceDropdown }"
									src="/static/icons/general/icon_arrow_down.svg" 
									mode="aspectFit"
								/>
							</view>
							<!-- 下拉选项 -->
							<view class="dropdown-options" v-if="showVoiceDropdown">
								<view 
									v-for="voice in voiceOptions" 
									:key="voice.id"
									class="dropdown-option"
									:class="{ 'option-selected': selectedVoice === voice.id }"
									@click="selectVoice(voice.id)"
								>
									<text>{{ voice.name }}</text>
								</view>
							</view>
						</view>
					</view>

					<!-- 回复内容&知识库 -->
					<view class="config-section knowledge-section">
						<view class="section-header">
							<text class="section-title">{{ $t('voice.replyContent') }}</text>
						</view>
						<view class="section-content">
							<!-- 大语言模型选择 -->
							<text class="config-label">{{ $t('voice.llmSelect') }}</text>
							<view class="dropdown-select" @click="toggleLLMDropdown">
								<text class="dropdown-text">{{ currentLLMText }}</text>
								<image 
									class="dropdown-arrow" 
									:class="{ 'arrow-up': showLLMDropdown }"
									src="/static/icons/general/icon_arrow_down.svg" 
									mode="aspectFit"
								/>
							</view>
							<!-- 下拉选项 -->
							<view class="dropdown-options" v-if="showLLMDropdown">
								<view 
									v-for="llm in llmOptions" 
									:key="llm.id"
									class="dropdown-option"
									:class="{ 'option-selected': selectedLLM === llm.id }"
									@click="selectLLM(llm.id)"
								>
									<text>{{ llm.name }}</text>
								</view>
							</view>

							<!-- Q&A知识库 -->
							<view class="knowledge-base-row">
								<text class="config-label">{{ $t('voice.qaKnowledgeBase') }}</text>
								<view class="toggle-upload-group">
									<view class="toggle-switch" :class="{ 'toggle-on': qaEnabled }" @click="toggleQA">
										<view class="toggle-thumb"></view>
										<text class="toggle-text">{{ qaEnabled ? $t('voice.enabled') : $t('voice.disabled') }}</text>
									</view>
									<view class="upload-btn" @click="handleUpload">
										<image class="upload-icon" src="/static/icons/general/icon_upload.svg" mode="aspectFit" />
										<text>{{ $t('voice.clickUpload') }}</text>
									</view>
								</view>
							</view>

							<!-- 知识库列表 -->
							<view class="knowledge-list">
								<view class="knowledge-item">
									<image class="file-icon" src="/static/icons/general/icon_file.svg" mode="aspectFit" />
									<text class="file-name">{{ $t('voice.uploadedKnowledge') }}</text>
								</view>
								<view class="knowledge-tips">
									<view class="tip-row">
										<image class="warning-icon" src="/static/icons/general/icon-warning.svg" mode="aspectFit" />
										<text class="tip-text">{{ $t('voice.uploadTip1') }}</text>
									</view>
									<view class="tip-row">
										<image class="warning-icon" src="/static/icons/general/icon-warning.svg" mode="aspectFit" />
										<text class="tip-text">{{ $t('voice.uploadTip2') }}</text>
									</view>
									<view class="tip-row">
										<image class="warning-icon" src="/static/icons/general/icon-warning.svg" mode="aspectFit" />
										<text class="tip-text">{{ $t('voice.uploadTip3') }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 中间机器人图片 -->
				<view class="robot-area">
					<image 
						class="robot-image" 
						src="/static/icons/voice/robot-stand-xxhdpi.webp" 
						mode="heightFix"
					/>
				</view>

				<!-- 右侧语音识别记录 -->
				<view class="chat-area">
					<view class="chat-header">
						<text class="chat-title">{{ $t('voice.voiceRecognition') }}</text>
						<view class="connection-status">
							<text class="status-text">{{ $t('voice.connectionStatus') }}</text>
							<view class="status-dot" :class="{ 'connected': isConnected }"></view>
							<text class="status-label">{{ isConnected ? $t('voice.connected') : $t('voice.disconnected') }}</text>
						</view>
					</view>
					
					<scroll-view class="chat-messages" scroll-y :scroll-top="scrollTop">
						<view 
							v-for="(msg, index) in chatMessages" 
							:key="index"
							class="message-item"
							:class="{ 'message-robot': msg.type === 'robot', 'message-user': msg.type === 'user' }"
						>
							<view class="message-sender" v-if="msg.type === 'robot'">
								<text class="sender-name">{{ $t('voice.robot') }}</text>
							</view>
							<view class="message-bubble" :class="{ 'bubble-robot': msg.type === 'robot', 'bubble-user': msg.type === 'user' }">
								<text class="message-text">{{ msg.content }}</text>
							</view>
							<text class="message-time">{{ msg.time }}</text>
						</view>
					</scroll-view>
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

// 音色选择
const selectedVoice = ref('B')
const showVoiceDropdown = ref(false)
const voiceOptions = computed(() => [
	{ id: 'A', name: t('voice.voiceA') },
	{ id: 'B', name: t('voice.voiceB') },
	{ id: 'C', name: t('voice.voiceC') }
])

const currentVoiceText = computed(() => {
	const voice = voiceOptions.value.find(v => v.id === selectedVoice.value)
	return voice ? voice.name : ''
})

const toggleVoiceDropdown = () => {
	showVoiceDropdown.value = !showVoiceDropdown.value
	showLLMDropdown.value = false
}

const selectVoice = (id) => {
	selectedVoice.value = id
	showVoiceDropdown.value = false
}

// 大语言模型选择
const selectedLLM = ref('tongyi')
const showLLMDropdown = ref(false)
const llmOptions = [
	{ id: 'tongyi', name: '通义千问' },
	{ id: 'deepseek', name: 'DeepSeek' },
	{ id: 'chatgpt', name: 'ChatGPT' }
]

const currentLLMText = computed(() => {
	const llm = llmOptions.find(l => l.id === selectedLLM.value)
	return llm ? llm.name : ''
})

const toggleLLMDropdown = () => {
	showLLMDropdown.value = !showLLMDropdown.value
	showVoiceDropdown.value = false
}

const selectLLM = (id) => {
	selectedLLM.value = id
	showLLMDropdown.value = false
}

// Q&A知识库开关
const qaEnabled = ref(true)
const toggleQA = () => {
	qaEnabled.value = !qaEnabled.value
}

// 上传
const handleUpload = () => {
	uni.showToast({
		title: '上传功能开发中',
		icon: 'none'
	})
}

// 连接状态
const isConnected = ref(true)

// 聊天记录
const scrollTop = ref(0)
const chatMessages = ref([
	{
		type: 'robot',
		content: '大家好我是西门子智能机器人，我叫"小西"',
		time: '2025.11.30  12:30:55'
	},
	{
		type: 'user',
		content: '下面的环节带领大家参观的3个地方',
		time: ''
	},
	{
		type: 'robot',
		content: '大家好我是西门子智能机器人，我叫"小西"',
		time: '2025.11.30  12:30:55'
	},
	{
		type: 'user',
		content: '下面的环节带领大家参观的3个地方',
		time: ''
	},
	{
		type: 'robot',
		content: '大家好我是西门子智能机器人，我叫"小西"',
		time: '2025.11.30  12:30:55'
	},
	{
		type: 'user',
		content: '我',
		time: ''
	}
])
</script>

<style scoped>
.page-content {
	padding: 30rpx 50rpx;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

.voice-card {
	background: #edf1f3;
	border-radius: 40rpx;
	padding: 40rpx;
	display: flex;
	flex-direction: row;
	flex: 1;
	gap: 30rpx;
	overflow: hidden;
}

/* 左侧配置区域 */
.left-config-area {
	width: 700rpx;
	display: flex;
	flex-direction: column;
	gap: 100rpx;
	flex-shrink: 0;
}

.config-section {
	background: rgba(255, 255, 255, 0.7);
	border-radius: 30rpx;
	padding: 30rpx;
}

.knowledge-section {
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-top: 100rpx;
}

.section-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
	margin-bottom: 24rpx;
	padding-bottom: 16rpx;
	border-bottom: 2rpx solid rgba(0, 153, 153, 0.2);
}

.section-icon {
	font-size: 32rpx;
}

.section-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #009999;
}

.section-content {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
	flex: 1;
	position: relative;
}

.config-label {
	font-size: 30rpx;
	color: #333;
	font-weight: 600;
}

/* 下拉选择框 */
.dropdown-select {
	background: #ffffff;
	border-radius: 20rpx;
	padding: 20rpx 24rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
}

.dropdown-text {
	font-size: 30rpx;
	color: #333;
}

.dropdown-arrow {
	width: 32rpx;
	height: 32rpx;
	transition: transform 0.3s ease;
}

.arrow-up {
	transform: rotate(180deg);
}

.dropdown-options {
	position: absolute;
	left: 0;
	right: 0;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.15);
	z-index: 100;
	overflow: hidden;
	margin-top: 8rpx;
}

.dropdown-option {
	padding: 24rpx;
	font-size: 30rpx;
	color: #333;
	transition: background 0.2s;
}

.dropdown-option:active {
	background: #f5f5f5;
}

.option-selected {
	background: rgba(0, 153, 153, 0.1);
	color: #009999;
}

/* 知识库行 */
.knowledge-base-row {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
	margin-top: 100rpx;
}

.toggle-upload-group {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16rpx;
}

/* 开关 */
.toggle-switch {
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #e0e0e0;
	border-radius: 30rpx;
	padding: 8rpx 16rpx 8rpx 8rpx;
	cursor: pointer;
	transition: background 0.3s;
}

.toggle-on {
	background: #009999;
}

.toggle-thumb {
	width: 36rpx;
	height: 36rpx;
	background: #ffffff;
	border-radius: 50%;
	margin-right: 12rpx;
	transition: transform 0.3s;
}

.toggle-on .toggle-thumb {
	transform: translateX(0);
}

.toggle-text {
	font-size: 26rpx;
	color: #666;
}

.toggle-on .toggle-text {
	color: #ffffff;
}

/* 上传按钮 */
.upload-btn {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8rpx;
	background: #009999;
	color: #ffffff;
	padding: 8rpx 20rpx;
	border-radius: 20rpx;
	font-size: 26rpx;
	cursor: pointer;
	height: 52rpx;
	box-sizing: border-box;
}

.upload-btn:active {
	opacity: 0.8;
}

.upload-icon {
	width: 28rpx;
	height: 28rpx;
}

/* 知识库列表 */
.knowledge-list {
	margin-top: 16rpx;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.knowledge-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
	background: rgba(0, 153, 153, 0.1);
	padding: 16rpx 20rpx;
	border-radius: 16rpx;
	margin-bottom: 12rpx;
}

.file-icon {
	width: 32rpx;
	height: 32rpx;
}

.file-name {
	font-size: 28rpx;
	color: #009999;
}

.knowledge-tips {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 8rpx;
}

.tip-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8rpx;
}

.warning-icon {
	width: 28rpx;
	height: 28rpx;
	flex-shrink: 0;
}

.tip-text {
	font-size: 24rpx;
	color: #999;
	line-height: 28rpx;
}

/* 中间机器人区域 */
.robot-area {
	flex: 1;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	min-width: 300rpx;
}

.robot-image {
	height: 1320rpx;
}

/* 右侧聊天区域 */
.chat-area {
	width: 700rpx;
	background: rgba(255, 255, 255, 0.7);
	border-radius: 30rpx;
	padding: 24rpx;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
}

.chat-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rpx;
	border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
	margin-bottom: 20rpx;
}

.chat-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
}

.connection-status {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8rpx;
	background: rgba(0, 0, 0, 0.05);
	padding: 8rpx 16rpx;
	border-radius: 20rpx;
}

.status-text {
	font-size: 24rpx;
	color: #666;
}

.status-dot {
	width: 12rpx;
	height: 12rpx;
	border-radius: 50%;
	background: #ccc;
}

.status-dot.connected {
	background: #009999;
}

.status-label {
	font-size: 24rpx;
	color: #009999;
}

/* 聊天消息 */
.chat-messages {
	flex: 1;
	overflow-y: auto;
}

.message-item {
	margin-bottom: 24rpx;
}

.message-robot {
	align-items: flex-start;
}

.message-user {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.message-sender {
	margin-bottom: 8rpx;
}

.sender-name {
	font-size: 26rpx;
	color: #666;
	font-weight: 500;
}

.message-bubble {
	max-width: 90%;
	padding: 20rpx 24rpx;
	border-radius: 20rpx;
	word-break: break-all;
}

.bubble-robot {
	background: #ffffff;
	border-radius: 4rpx 20rpx 20rpx 20rpx;
}

.bubble-user {
	background: rgba(0, 153, 153, 0.15);
	border-radius: 20rpx 4rpx 20rpx 20rpx;
}

.message-text {
	font-size: 28rpx;
	color: #333;
	line-height: 1.5;
}

.message-time {
	font-size: 22rpx;
	color: #999;
	margin-top: 8rpx;
}
</style>

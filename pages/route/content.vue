<template>
	<PageHeader activeKey="newRoute">
		<view class="content-container">
			<!-- 三栏卡片区域 -->
			<view class="cards-area">
				<!-- 左栏 - 执行动作 -->
				<view class="card">
					<text class="card-title">{{ $t('routeContent.actionTitle') }}</text>
					<view class="card-options">
						<view 
							v-for="action in actionList" 
							:key="action.id"
							class="option-btn"
							:class="{ 'option-btn-active': selectedActionId === action.id }"
							@click="handleActionSelect(action.id)"
						>
							<text class="option-btn-text">{{ $t(`routeContent.actions.${action.key}`) }}</text>
						</view>
					</view>
				</view>
				
				<!-- 中栏 - 语言 -->
				<view class="card">
					<text class="card-title">{{ $t('routeContent.languageTitle') }}</text>
					<view class="card-options">
						<view 
							v-for="lang in languageList" 
							:key="lang.id"
							class="option-btn"
							:class="{ 'option-btn-active': selectedLanguageId === lang.id }"
							@click="handleLanguageSelect(lang.id)"
						>
							<text class="option-btn-text">{{ $t(`routeContent.languages.${lang.key}`) }}</text>
						</view>
					</view>
				</view>
				
				<!-- 右栏 - 声音选择 -->
				<view class="card">
					<text class="card-title">{{ $t('routeContent.voiceTitle') }}</text>
					<view class="card-options">
						<view 
							v-for="voice in voiceList" 
							:key="voice.id"
							class="voice-option"
							:class="{ 'voice-option-active': selectedVoiceId === voice.id }"
							@click="handleVoiceSelect(voice.id)"
						>
							<text class="voice-option-text">{{ $t(`routeContent.voices.${voice.key}`) }}</text>
							<view 
								class="voice-play-btn" 
								:class="{ 'voice-play-btn-playing': playingVoiceId === voice.id }"
								@click.stop="handlePlayVoice(voice.id)"
							>
								<image class="voice-icon" src="/static/icons/general/icon_sound.svg" mode="aspectFit" />
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 底部保存按钮 -->
			<view class="save-btn-area">
				<view class="save-btn" @click="handleSave">
					<text class="save-btn-text">{{ $t('common.save') }}</text>
				</view>
			</view>
		</view>
	</PageHeader>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/layout/page-header.vue'

const { t } = useI18n()

// 执行动作列表
const actionList = ref([
	{ id: 1, key: 'guideRight' },
	{ id: 2, key: 'guideLeft' },
	{ id: 3, key: 'introduceRight' },
	{ id: 4, key: 'introduceLeft' },
	{ id: 5, key: 'welcome' },
	{ id: 6, key: 'auto' }
])

// 当前选中的动作
const selectedActionId = ref(1)

// 语言列表
const languageList = ref([
	{ id: 1, key: 'chinese' },
	{ id: 2, key: 'english' },
	{ id: 3, key: 'german' }
])

// 当前选中的语言
const selectedLanguageId = ref(1)

// 声音列表（包含音频路径）
const voiceList = ref([
	{ id: 1, key: 'maleA', audioSrc: '/static/icons/route/helloSir.m4a' },
	{ id: 2, key: 'femaleB', audioSrc: '/static/icons/route/helloSir.m4a' },  // TODO: 替换为女声音频
	{ id: 3, key: 'childC', audioSrc: '/static/icons/route/helloSir.m4a' }   // TODO: 替换为童声音频
])

// 当前选中的声音
const selectedVoiceId = ref(1)

// 音频播放器实例
const audioContext = ref(null)
// 当前正在播放的声音ID
const playingVoiceId = ref(null)

// 选择动作
const handleActionSelect = (id) => {
	selectedActionId.value = id
}

// 选择语言
const handleLanguageSelect = (id) => {
	selectedLanguageId.value = id
}

// 选择声音
const handleVoiceSelect = (id) => {
	selectedVoiceId.value = id
}

// 试听声音
const handlePlayVoice = (id) => {
	const voice = voiceList.value.find(v => v.id === id)
	if (!voice || !voice.audioSrc) {
		console.warn('未找到音频文件')
		return
	}
	
	// 如果正在播放同一个声音，停止播放
	if (playingVoiceId.value === id && audioContext.value) {
		audioContext.value.stop()
		playingVoiceId.value = null
		return
	}
	
	// 停止之前的播放
	if (audioContext.value) {
		audioContext.value.stop()
		audioContext.value.destroy()
	}
	
	// 创建新的音频实例
	audioContext.value = uni.createInnerAudioContext()
	audioContext.value.src = voice.audioSrc
	
	// 播放结束回调
	audioContext.value.onEnded(() => {
		playingVoiceId.value = null
	})
	
	// 播放错误回调
	audioContext.value.onError((err) => {
		console.error('音频播放错误:', err)
		playingVoiceId.value = null
		uni.showToast({
			title: '播放失败',
			icon: 'none'
		})
	})
	
	// 开始播放
	playingVoiceId.value = id
	audioContext.value.play()
}

// 保存
const handleSave = () => {
	// 停止播放
	if (audioContext.value) {
		audioContext.value.stop()
		audioContext.value.destroy()
	}
	
	console.log('保存讲解内容配置', {
		actionId: selectedActionId.value,
		languageId: selectedLanguageId.value,
		voiceId: selectedVoiceId.value
	})
	// TODO: 保存配置并返回上一页
	uni.navigateBack()
}

// 页面卸载时清理音频资源
onUnmounted(() => {
	if (audioContext.value) {
		audioContext.value.stop()
		audioContext.value.destroy()
		audioContext.value = null
	}
})
</script>

<style scoped>
.content-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 30rpx 50rpx 50rpx 50rpx;
	box-sizing: border-box;
}

/* 三栏卡片区域 */
.cards-area {
	flex: 1;
	display: flex;
	flex-direction: row;
	gap: 40rpx;
}

/* 卡片 */
.card {
	flex: 1;
	background: #edf1f3;
	border-radius: 40rpx;
	padding: 40rpx 30rpx;
	display: flex;
	flex-direction: column;
	gap: 30rpx;
}

.card-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
	text-align: center;
}

.card-options {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

/* 选项按钮 */
.option-btn {
	background: #ffffff;
	border-radius: 30rpx;
	padding: 24rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
}

.option-btn:active {
	opacity: 0.8;
}

.option-btn-active {
	background: #009999;
}

.option-btn-text {
	font-size: 28rpx;
	color: #333;
}

.option-btn-active .option-btn-text {
	color: #ffffff;
	font-weight: 600;
}

/* 声音选项（带试听按钮） */
.voice-option {
	background: #ffffff;
	border-radius: 30rpx;
	padding: 24rpx 30rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	transition: all 0.2s ease;
}

.voice-option:active {
	opacity: 0.8;
}

.voice-option-active {
	background: #009999;
}

.voice-option-text {
	font-size: 28rpx;
	color: #333;
}

.voice-option-active .voice-option-text {
	color: #ffffff;
	font-weight: 600;
}

.voice-play-btn {
	width: 50rpx;
	height: 50rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all 0.2s ease;
}

.voice-play-btn:active {
	opacity: 0.7;
}

.voice-play-btn-playing {
	background: rgba(0, 153, 153, 0.2);
	animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
}

.voice-icon {
	width: 36rpx;
	height: 36rpx;
}

.voice-play-btn-playing .voice-icon {
	filter: invert(38%) sepia(93%) saturate(1000%) hue-rotate(157deg) brightness(92%) contrast(101%);
}

.voice-option-active .voice-icon {
	filter: brightness(0) invert(1);
}

/* 底部保存按钮区域 */
.save-btn-area {
	display: flex;
	justify-content: flex-end;
	padding-top: 30rpx;
}

.save-btn {
	background: #333333;
	border-radius: 40rpx;
	padding: 24rpx 80rpx;
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

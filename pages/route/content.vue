<template>
	<PageHeader activeKey="newRoute">
		<view class="content-container">
			<!-- 三栏区域 -->
			<view class="cards-area">
				<!-- 左栏 - 执行动作（大卡片包裹） -->
				<view class="section-card">
					<text class="section-title">{{ $t('routeContent.actionTitle') }}</text>
					<view class="options-list">
						<BeautifulCard 
							v-for="action in actionList" 
							:key="action.id"
							:text="$t(`routeContent.actions.${action.key}`)"
							:isSelected="selectedActionId === action.id"
							@click="handleActionSelect(action.id)"
						/>
					</view>
				</view>
				
				<!-- 中栏 - 语言（大卡片包裹） -->
				<view class="section-card section-card-center">
					<text class="section-title">{{ $t('routeContent.languageTitle') }}</text>
					<view class="options-list options-list-center">
						<BeautifulCard 
							v-for="lang in languageList" 
							:key="lang.id"
							:text="$t(`routeContent.languages.${lang.key}`)"
							:isSelected="selectedLanguageId === lang.id"
							@click="handleLanguageSelect(lang.id)"
						/>
					</view>
				</view>
				
				<!-- 右栏 - 声音选择（大卡片包裹） -->
				<view class="section-card">
					<text class="section-title">{{ $t('routeContent.voiceTitle') }}</text>
					<view class="options-list">
						<BeautifulCard 
							v-for="voice in voiceList" 
							:key="voice.id"
							:text="$t(`routeContent.voices.${voice.key}`)"
							:isSelected="selectedVoiceId === voice.id"
							:isPlaying="playingVoiceId === voice.id"
							:showPlayBtn="true"
							@click="handleVoiceSelect(voice.id)"
							@play="handlePlayVoice(voice.id)"
						/>
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
import BeautifulCard from '@/components/ui-box/beautiful-card.vue'

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

// 声音列表（包含音频路径）//三个声音按钮暂时都指向同一个测试音频
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
	padding: 80rpx 160rpx;
	box-sizing: border-box;
}

/* 三栏区域 - 间距增大4倍 */
.cards-area {
	flex: 1;
	display: flex;
	flex-direction: row;
	gap: 160rpx;
}

/* 大卡片容器 */
.section-card {
	flex: 1;
	background: #edf1f3;
	border-radius: 40rpx;
	padding: 40rpx 36rpx;
	display: flex;
	flex-direction: column;
}

.section-card-center {
	flex: 0.6;
	align-items: center;
}

/* 通用标题 */
.section-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
	margin-bottom: 30rpx;
	text-align: center;
}

/* ==================== 选项列表 ==================== */
.options-list {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20rpx;
}

.options-list-center {
	width: 100%;
}

/* ==================== 底部保存按钮 ==================== */
.save-btn-area {
	display: flex;
	justify-content: flex-end;
	padding-top: 60rpx;
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

<template>
	<PageHeader activeKey="faceRecognition">
		<view class="face-container">
			<!-- 左侧 - 已保存人脸数据 -->
			<view class="saved-panel">
				<view class="panel-header">
					<text class="panel-title">{{ $t('face.savedFaces') }}</text>
				</view>
				<scroll-view class="face-grid-scroll" scroll-y :show-scrollbar="true" :enhanced="true" :bounces="true">
					<view class="face-grid">
						<view 
							v-for="face in savedFaces" 
							:key="face.id"
							class="face-card"
							:class="{ 'face-card-selected': selectedFaceId === face.id }"
							@click="handleSelectFace(face.id)"
						>
							<view class="face-avatar-wrapper">
							<image v-if="face.avatar" class="face-avatar" :src="face.avatar" mode="aspectFill" />
							<view v-else class="face-avatar-placeholder">
								<text class="face-avatar-letter">{{ face.name.charAt(0).toUpperCase() }}</text>
							</view>
						</view>
							<text class="face-name">{{ face.name }}</text>
							<view class="face-delete-btn" @click.stop="handleDeleteFace(face.id)">
								<text class="face-delete-text">{{ $t('common.delete') }}</text>
							</view>
						</view>
					</view>
					<view class="no-more" v-if="savedFaces.length > 0">
						<text class="no-more-text">{{ $t('face.noMore') }}</text>
					</view>
					<view class="empty-tip" v-else>
						<text class="empty-tip-text">{{ $t('face.emptyTip') }}</text>
					</view>
				</scroll-view>
			</view>
			
			<!-- 右侧 - 上传照片 -->
			<view class="upload-panel">
				<view class="panel-header">
					<text class="panel-title">{{ $t('face.uploadPhotos') }}</text>
				</view>
				<view class="upload-grid">
					<view 
						v-for="slot in uploadSlots" 
						:key="slot.id"
						class="upload-slot"
					>
						<!-- 图片预览或上传区域 -->
						<view 
							class="upload-area"
							:class="{ 'upload-area-filled': slot.image }"
							@click="handleChooseImage(slot.id)"
						>
							<image 
								v-if="slot.image" 
								class="upload-preview" 
								:src="slot.image" 
								mode="aspectFill" 
							/>
							<view v-else class="upload-placeholder">
								<text class="upload-plus">+</text>
							</view>
						</view>
						<!-- 名称输入 -->
						<input 
							class="upload-name-input"
							v-model="slot.name"
							:placeholder="$t('face.namePlaceholder')"
						/>
						<!-- 上传按钮 -->
						<view class="upload-btn" @click="handleUploadSingle(slot.id)">
							<image class="upload-btn-icon" src="/static/icons/general/icon_upload.svg" mode="aspectFit" />
							<text class="upload-btn-text">{{ $t('face.upload') }}</text>
						</view>
					</view>
				</view>
				<!-- 保存按钮 -->
				<view class="save-btn-area">
					<view class="save-btn" @click="handleSaveAll">
						<text class="save-btn-text">Save</text>
					</view>
				</view>
			</view>
		</view>
	</PageHeader>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/layout/page-header.vue'

const { t } = useI18n()

// 已保存的人脸列表（模拟数据 - 使用空头像占位）
// TODO: 实际数据从后端 API 获取
const savedFaces = ref([
	{ id: 1, name: 'Alex', avatar: '' },
	{ id: 2, name: 'Bella', avatar: '' },
	{ id: 3, name: 'Chris', avatar: '' },
	{ id: 4, name: 'David', avatar: '' },
	{ id: 5, name: 'Emily', avatar: '' },
	{ id: 6, name: 'Frank', avatar: '' },
	{ id: 7, name: 'Grace', avatar: '' },
	{ id: 8, name: 'Henry', avatar: '' },
	{ id: 9, name: 'Iris', avatar: '' },
	{ id: 10, name: 'Jack', avatar: '' },
	{ id: 11, name: 'Kate', avatar: '' },
	{ id: 12, name: 'Leo', avatar: '' },
	{ id: 13, name: 'Mia', avatar: '' },
	{ id: 14, name: 'Noah', avatar: '' },
	{ id: 15, name: 'Olivia', avatar: '' },
	{ id: 16, name: 'Paul', avatar: '' },
	{ id: 17, name: 'Quinn', avatar: '' },
	{ id: 18, name: 'Ruby', avatar: '' },
	{ id: 19, name: 'Sam', avatar: '' },
	{ id: 20, name: 'Tom', avatar: '' }
])

// 当前选中的人脸ID
const selectedFaceId = ref(null)

// 上传槽位（4个）
const uploadSlots = ref([
	{ id: 1, image: null, name: '' },
	{ id: 2, image: null, name: '' },
	{ id: 3, image: null, name: '' },
	{ id: 4, image: null, name: '' }
])

// 选中人脸
const handleSelectFace = (id) => {
	selectedFaceId.value = selectedFaceId.value === id ? null : id
}

// 删除人脸
const handleDeleteFace = (id) => {
	uni.showModal({
		title: t('face.deleteConfirmTitle'),
		content: t('face.deleteConfirmContent'),
		success: (res) => {
			if (res.confirm) {
				savedFaces.value = savedFaces.value.filter(f => f.id !== id)
				if (selectedFaceId.value === id) {
					selectedFaceId.value = null
				}
				uni.showToast({
					title: t('common.success'),
					icon: 'success'
				})
			}
		}
	})
}

// 选择图片
const handleChooseImage = (slotId) => {
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'],
		sourceType: ['album', 'camera'],
		success: (res) => {
			const slot = uploadSlots.value.find(s => s.id === slotId)
			if (slot) {
				slot.image = res.tempFilePaths[0]
			}
		}
	})
}

// 单个上传
const handleUploadSingle = (slotId) => {
	const slot = uploadSlots.value.find(s => s.id === slotId)
	if (!slot || !slot.image) {
		uni.showToast({
			title: t('face.pleaseSelectImage'),
			icon: 'none'
		})
		return
	}
	if (!slot.name.trim()) {
		uni.showToast({
			title: t('face.pleaseEnterName'),
			icon: 'none'
		})
		return
	}
	
	console.log('上传单个人脸:', slot)
	// TODO: 调用上传API
	uni.showToast({
		title: t('common.success'),
		icon: 'success'
	})
	
	// 上传成功后添加到已保存列表
	savedFaces.value.push({
		id: Date.now(),
		name: slot.name,
		avatar: slot.image
	})
	
	// 清空该槽位
	slot.image = null
	slot.name = ''
}

// 批量保存
const handleSaveAll = () => {
	const filledSlots = uploadSlots.value.filter(s => s.image && s.name.trim())
	if (filledSlots.length === 0) {
		uni.showToast({
			title: t('face.noDataToSave'),
			icon: 'none'
		})
		return
	}
	
	console.log('批量保存人脸:', filledSlots)
	// TODO: 调用批量上传API
	
	// 添加到已保存列表
	filledSlots.forEach(slot => {
		savedFaces.value.push({
			id: Date.now() + slot.id,
			name: slot.name,
			avatar: slot.image
		})
	})
	
	// 清空所有槽位
	uploadSlots.value.forEach(slot => {
		slot.image = null
		slot.name = ''
	})
	
	uni.showToast({
		title: t('common.success'),
		icon: 'success'
	})
}
</script>

<style scoped>
.face-container {
	display: flex;
	flex-direction: row;
	height: 100%;
	padding: 30rpx 50rpx;
	gap: 40rpx;
	box-sizing: border-box;
}

/* ==================== 左侧面板 - 已保存人脸 ==================== */
.saved-panel {
	flex: 1.2;
	background: #edf1f3;
	border-radius: 30rpx;
	border: 4rpx solid #009999;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.panel-header {
	text-align: center;
	margin-bottom: 12rpx;
	margin-top: 18rpx;
}

/* 左侧面板标题 */
.saved-panel .panel-title {
	font-size: 34rpx;
	font-weight: 600;
	color: #333;
	
}

/* 右侧面板标题 */
.upload-panel .panel-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333;
}

.face-grid-scroll {
	flex: 1;
	height: 0;
	padding: 10rpx 40rpx 40rpx 40rpx;
	width: 100%;
	box-sizing: border-box;
}

/* 自定义滚动条样式 */
.face-grid-scroll ::-webkit-scrollbar {
	width: 8rpx;
	display: block;
}

.face-grid-scroll ::-webkit-scrollbar-track {
	background: #e0e0e0;
	border-radius: 4rpx;
}

.face-grid-scroll ::-webkit-scrollbar-thumb {
	background: #009999;
	border-radius: 4rpx;
}

.face-grid-scroll ::-webkit-scrollbar-thumb:hover {
	background: #007777;
}

.face-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 20rpx;
}

.face-card {
	width: calc(25% - 15rpx);
	background: #ffffff;
	border-radius: 16rpx;
	padding: 16rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12rpx;
	border: 3rpx solid transparent;
	transition: all 0.2s ease;
	box-sizing: border-box;
}

.face-card-selected {
	border-color: #ff4d4f;
}

.face-avatar-wrapper {
	width: 100%;
	aspect-ratio: 1;
	border-radius: 12rpx;
	overflow: hidden;
}

.face-avatar {
	width: 100%;
	height: 100%;
}

.face-avatar-placeholder {
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #009999 0%, #00cccc 100%);
	display: flex;
	align-items: center;
	justify-content: center;
}

.face-avatar-letter {
	font-size: 48rpx;
	font-weight: 600;
	color: #ffffff;
}

.face-name {
	font-size: 24rpx;
	color: #333;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
}

.face-delete-btn {
	width: 100%;
	background: #333;
	border-radius: 8rpx;
	padding: 10rpx 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.face-delete-btn:active {
	opacity: 0.8;
}

.face-delete-text {
	font-size: 22rpx;
	color: #ffffff;
}

.no-more {
	padding: 30rpx 0;
	display: flex;
	justify-content: center;
}

.no-more-text {
	font-size: 26rpx;
	color: #999;
}

.empty-tip {
	padding: 60rpx 0;
	display: flex;
	justify-content: center;
}

.empty-tip-text {
	font-size: 28rpx;
	color: #999;
}

/* ==================== 右侧面板 - 上传照片 ==================== */
.upload-panel {
	flex: 0.8;
	background: #edf1f3;
	border-radius: 30rpx;
	padding: 50rpx 60rpx;
	display: flex;
	flex-direction: column;
}

.upload-grid {
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 40rpx 50rpx; /* 行间距和列间距 */
	margin-top: 40rpx; /* 与标题的间距 */
}

.upload-slot {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20rpx;
}

.upload-area {
	width: 80%;
	aspect-ratio: 1;
	background: #f5f5f5;
	border-radius: 16rpx; 
	display: flex;
	align-items: center; 
	justify-content: center;
	overflow: hidden;
}

.upload-area-filled {
	background: #ffffff;
	border: 2rpx solid #009999;
}

.upload-area:active {
	opacity: 0.8;
}

.upload-preview {
	width: 100%;
	height: 100%;
}

.upload-placeholder {
	display: flex;
	align-items: center;
	justify-content: center;
}

.upload-plus {
	font-size: 80rpx;
	color: #ccc;
	font-weight: 200;
}

.upload-name-input {
	background: #ffffff;
	border-radius: 8rpx;
	padding: 24rpx 16rpx;
	font-size: 24rpx;
	color: #333;
	width: 40%;
	text-align: center;
	box-sizing: border-box;
}

.upload-btn {
	background: #333333;
	border-radius: 8rpx;
	padding: 14rpx 16rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8rpx;
	width: 40%;
	box-sizing: border-box;
}

.upload-btn:active {
	opacity: 0.8;
}

.upload-btn-icon {
	width: 32rpx;
	height: 32rpx;
	filter: brightness(0) invert(1);
}

.upload-btn-text {
	font-size: 26rpx;
	color: #ffffff;
}

/* ==================== 保存按钮 ==================== */
.save-btn-area {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
}

.save-btn {
	background: #333333;
	border-radius: 16rpx;
	padding: 20rpx 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.save-btn:active {
	opacity: 0.8;
}

.save-btn-text {
	font-size: 28rpx;
	color: #ffffff;
	font-weight: 500;
}
</style>

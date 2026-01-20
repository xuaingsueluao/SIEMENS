<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* ==================== 字体配置 ==================== */
	
	/* 阿里巴巴健康体 - 常规 (45R) */
	@font-face {
		font-family: 'AlibabaHealth';
		src: url('/static/fonts/AlibabaHealthFont2.0CN-45R.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	
	/* 阿里巴巴健康体 - 粗体 (85B) */
	@font-face {
		font-family: 'AlibabaHealth';
		src: url('/static/fonts/AlibabaHealthFont2.0CN-85B.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}
	
	/* ==================== 全局样式 ==================== */
	
	/* 全局应用字体 */
	page {
		font-family: 'AlibabaHealth', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	
	/* 通用文本样式 */
	.font-regular {
		font-weight: normal;
	}
	
	.font-bold {
		font-weight: bold;
	}
</style>

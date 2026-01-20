import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.js'
import enUS from './en-US.js'
import deDE from './de-DE.js'

const i18n = createI18n({
	legacy: false, // 使用 Composition API 模式
	globalInjection: true, // 全局注入 $t 函数
	locale: 'zh-CN', // 始终默认中文
	fallbackLocale: 'zh-CN', // 回退语言
	messages: {
		'zh-CN': zhCN,
		'en-US': enUS,
		'de-DE': deDE
	}
})

// 切换语言的工具函数（仅在当前会话有效）
export const setLanguage = (lang) => {
	i18n.global.locale.value = lang
}

// 获取当前语言
export const getLanguage = () => {
	return i18n.global.locale.value
}

// 支持的语言列表
export const supportedLanguages = [
	{ code: 'zh-CN', name: '中文', nativeName: '中文' },
	{ code: 'en-US', name: 'English', nativeName: 'English' },
	{ code: 'de-DE', name: 'Deutsch', nativeName: 'Deutsch' }
]

export default i18n

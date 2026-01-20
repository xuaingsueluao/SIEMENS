<!--markdownlint-disable-->
# vue-i18n 多语言使用教程

> 本文档详细介绍如何在本项目中使用国际化功能

---

## 📁 文件结构

```
locale/
├── index.js      # i18n 配置入口（已配置好，一般不需要改动）
├── zh-CN.js      # 中文语言包（添加中文翻译）
└── de-DE.js      # 德语语言包（添加德语翻译）
```

---

## 🚀 快速开始

### 1. 在模板中使用（最常用）

```vue
<template>
  <view>
    <!-- 使用 $t() 函数 -->
    <text>{{ $t('common.confirm') }}</text>
    
    <!-- 输出：确认（中文） 或 Bestätigen（德语） -->
  </view>
</template>

<script setup>
// 模板中使用 $t() 不需要任何 import！
</script>
```

### 2. 在 JS/TS 中使用

```vue
<script setup>
import { useI18n } from 'vue-i18n'

// 获取 t 函数
const { t } = useI18n()

// 使用翻译
const message = t('common.confirm')
console.log(message) // 输出：确认

// 在函数中使用
const showToast = () => {
  uni.showToast({
    title: t('common.success'),
    icon: 'success'
  })
}
</script>
```

---

## 🔄 切换语言

```vue
<script setup>
import { setLanguage, getLanguage, supportedLanguages } from '@/locale'

// 获取当前语言
const currentLang = getLanguage()
console.log(currentLang) // 'zh-CN' 或 'de-DE'

// 切换到德语
setLanguage('de-DE')

// 切换到中文
setLanguage('zh-CN')

// 获取支持的语言列表
console.log(supportedLanguages)
// [
//   { code: 'zh-CN', name: '中文', nativeName: '中文' },
//   { code: 'de-DE', name: 'German', nativeName: 'Deutsch' }
// ]
</script>
```

### 语言切换器组件示例

```vue
<template>
  <view class="lang-switcher">
    <text 
      v-for="lang in supportedLanguages" 
      :key="lang.code"
      :class="{ active: currentLang === lang.code }"
      @click="switchLang(lang.code)"
    >
      {{ lang.nativeName }}
    </text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { setLanguage, getLanguage, supportedLanguages } from '@/locale'

const currentLang = ref(getLanguage())

const switchLang = (langCode) => {
  setLanguage(langCode)
  currentLang.value = langCode
}
</script>
```

---

## 📝 添加新的翻译

### 步骤 1：在中文语言包添加

打开 `locale/zh-CN.js`：

```js
export default {
  common: {
    confirm: '确认',
    // ... 已有的
  },
  
  // 添加新模块
  control: {
    start: '启动',
    stop: '停止',
    speed: '速度',
    temperature: '温度'
  }
}
```

### 步骤 2：在德语语言包添加相同结构

打开 `locale/de-DE.js`：

```js
export default {
  common: {
    confirm: 'Bestätigen',
    // ... 已有的
  },
  
  // 添加对应的德语翻译
  control: {
    start: 'Starten',
    stop: 'Stoppen',
    speed: 'Geschwindigkeit',
    temperature: 'Temperatur'
  }
}
```

### 步骤 3：在页面中使用

```vue
<template>
  <view>
    <button>{{ $t('control.start') }}</button>
    <button>{{ $t('control.stop') }}</button>
    <text>{{ $t('control.speed') }}: 100 rpm</text>
  </view>
</template>
```

---

## 🎯 高级用法

### 1. 带参数的翻译

**语言包定义：**
```js
// zh-CN.js
export default {
  message: {
    hello: '你好，{name}！',
    items: '共 {count} 个项目'
  }
}

// de-DE.js
export default {
  message: {
    hello: 'Hallo, {name}!',
    items: 'Insgesamt {count} Artikel'
  }
}
```

**使用：**
```vue
<template>
  <!-- 传递参数 -->
  <text>{{ $t('message.hello', { name: '张三' }) }}</text>
  <!-- 输出：你好，张三！ -->
  
  <text>{{ $t('message.items', { count: 5 }) }}</text>
  <!-- 输出：共 5 个项目 -->
</template>
```

### 2. 复数形式

**语言包定义：**
```js
// zh-CN.js
export default {
  car: '没有车 | 1 辆车 | {count} 辆车'
}

// de-DE.js  
export default {
  car: 'Kein Auto | 1 Auto | {count} Autos'
}
```

**使用：**
```vue
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

t('car', 0)  // 没有车
t('car', 1)  // 1 辆车
t('car', 5)  // 5 辆车
</script>
```

### 3. 在组件外使用（工具函数中）

```js
// utils/helper.js
import i18n from '@/locale'

export function getErrorMessage(code) {
  const { t } = i18n.global
  
  switch(code) {
    case 1001:
      return t('error.networkFailed')
    case 1002:
      return t('error.timeout')
    default:
      return t('error.unknown')
  }
}
```

---

## ⚠️ 常见问题

### Q1: $t is not defined

**原因**：在 `<script setup>` 中直接用 `$t` 是不行的

**解决**：
```vue
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 用 t() 而不是 $t()
const msg = t('common.confirm')
</script>

<template>
  <!-- 模板中可以直接用 $t -->
  <text>{{ $t('common.confirm') }}</text>
</template>
```

### Q2: 切换语言后页面没更新

**解决**：确保使用响应式方式获取语言
```vue
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 使用 computed 确保响应式
const title = computed(() => t('home.title'))
</script>
```

### Q3: 语言设置没有持久化

本项目已经处理了！`setLanguage()` 函数会自动保存到 `uni.setStorageSync`，下次打开 App 会自动加载上次的语言设置。

---

## 📋 现有翻译 Key 参考

```
common.confirm      - 确认/Bestätigen
common.cancel       - 取消/Abbrechen
common.save         - 保存/Speichern
common.delete       - 删除/Löschen
common.edit         - 编辑/Bearbeiten
common.loading      - 加载中.../Laden...
common.success      - 操作成功/Erfolgreich
common.failed       - 操作失败/Fehlgeschlagen
common.retry        - 重试/Wiederholen
common.back         - 返回/Zurück

home.title          - 控制面板/Bedienfeld
home.welcome        - 欢迎使用.../Willkommen...

device.status       - 设备状态/Gerätestatus
device.online       - 在线/Online
device.offline      - 离线/Offline
device.connect      - 连接/Verbinden
device.disconnect   - 断开连接/Trennen

settings.title      - 设置/Einstellungen
settings.language   - 语言/Sprache
settings.theme      - 主题/Thema
```

---

## 🔗 参考资料

- [vue-i18n 官方文档](https://vue-i18n.intlify.dev/)
- [uni-app 国际化](https://uniapp.dcloud.net.cn/tutorial/i18n.html)

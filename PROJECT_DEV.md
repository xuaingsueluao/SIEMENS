<!-- markdownlint-disable -->
# SIEMENS 控制上位机 App 开发文档

> 📅 创建日期：2026年1月8日  
> 📱 目标平台：Android 设备  
> 🛠️ 技术栈：uni-app (经典版) + Vue 3

---

## 📋 项目概述

这是一个**控制类型的上位机应用程序**，专为 Android 设备打造。

### 技术要点

| 项目 | 说明 |
|------|------|
| 框架 | uni-app（经典版，非 uni-app X） |
| Vue 版本 | **Vue 3**（使用 Composition API） |
| 目标平台 | Android App |
| 项目类型 | 工业控制上位机 |

### 开发注意事项

1. **Vue 3 语法规范**
   - 使用 `<script setup>` 语法糖
   - 使用 Composition API（`ref`, `reactive`, `computed`, `watch` 等）
   - 避免使用 Vue 2 的 Options API 风格

2. **平台限制**
   - 仅针对 Android 平台开发
   - 不考虑浏览器 H5 兼容性
   - 不考虑小程序兼容性

3. **上位机特性**
   - 可能涉及设备通信（串口、蓝牙、网络等）
   - 实时数据展示与控制
   - 工业级 UI 设计

---

## 📁 项目结构

```
SIEMENS/
├── App.vue                 # 应用入口组件（含字体配置）
├── main.js                 # 应用入口文件
├── manifest.json           # 应用配置文件
├── pages.json              # 页面路由配置
├── package.json            # 依赖配置
├── uni.scss                # 全局样式变量
├── uni.promisify.adaptor.js
├── index.html
│
├── pages/                  # 📱 页面目录
│   ├── index/              # 入口页面
│   │   ├── welcome.vue     # 欢迎页（启动页）
│   │   └── home.vue        # 主界面（功能大厅）
│   │
│   ├── settings/           # ⚙️ 设置
│   │   └── index.vue
│   │
│   ├── remote/             # 🎮 遥控模式
│   │   └── index.vue
│   │
│   ├── route/              # 🗺️ 新建路线
│   │   └── index.vue
│   │
│   ├── face/               # 👤 人脸识别
│   │   └── index.vue
│   │
│   ├── voice/              # 🎙️ 语音设置
│   │   └── index.vue
│   │
│   ├── mapping/            # 📍 建图和导航
│   │   └── index.vue
│   │
│   └── volume/             # 🔊 音量调节
│       └── index.vue
│
├── locale/                 # 🌍 多语言配置
│   ├── index.js            # i18n 配置入口
│   ├── zh-CN.js            # 中文语言包
│   └── de-DE.js            # 德语语言包
│
├── static/                 # 静态资源目录
│   └── fonts/              # 🔤 字体文件
│       ├── AlibabaHealthFont2.0CN-45R.ttf  # 常规体
│       └── AlibabaHealthFont2.0CN-85B.ttf  # 粗体
│
├── docs/                   # 📚 文档目录
└── PROJECT_DEV.md          # 本开发文档
```

---

## 📝 开发日志

### 2026-01-08
- ✅ 项目初始化
- ✅ 创建开发文档
- ✅ 搭建多语言框架（vue-i18n）
- ✅ 创建中文/德语语言包
- ✅ 配置阿里巴巴健康体字体
- ✅ 创建页面结构（欢迎页、主页、7个功能模块）
- ✅ 配置 pages.json 路由

---

### 🌍 多语言支持 (i18n)

**支持语言：**
- 中文 (zh-CN) - 默认
- 德语 (de-DE)

**使用方式：**

```vue
<template>
  <!-- 模板中使用 -->
  <text>{{ $t('common.confirm') }}</text>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { setLanguage } from '@/locale'

const { t } = useI18n()

// JS 中使用
console.log(t('home.title'))

// 切换语言
setLanguage('de-DE')
</script>
```

**依赖：** `vue-i18n@^9.2.2`模块

> 待补充...

---

## 🎨 UI 设计规范

### 页面基础配置

**1. 去除默认导航栏**

所有页面使用自定义导航栏，在 `pages.json` 中配置：

```json
{
  "path": "pages/xxx/index",
  "style": {
    "navigationStyle": "custom",
    "navigationBarTitleText": ""
  }
}
```

**2. 去除橡皮筋效果（iOS 弹性滚动）**

在 `pages.json` 的 `globalStyle` 中配置：

```json
"globalStyle": {
  "app-plus": {
    "bounce": "none"
  }
}
```

**3. 一屏式页面（不可滚动）**

页面容器使用固定视口高度：

```scss
.page-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
```

---

### 颜色层级体系

采用三层灰度递进设计，营造层次感：

| 层级 | 变量名 | 色值 | 用途 |
|------|--------|------|------|
| 背景层 | `--bg-gray` | `#dfe4e8` | 页面背景 |
| 卡片层 | `--card-gray` | `#edf1f3` | 大卡片背景 |
| 按钮层 | `--btn-white` | `#ffffff` | 按钮/胶囊背景 |

---

### 页面布局结构

```
┌─────────────────────────────────────────┐
│  [返回按钮]      标题      [状态栏] [头像] │  ← 顶部导航区
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │         主内容卡片               │    │  ← 内容区
│  │                                 │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  [摇杆]                       [摇杆]     │  ← 底部控制区（可选）
└─────────────────────────────────────────┘
```

**关键样式：**

```scss
/* 页面容器 */
.page-container {
  --page-gap: 54rpx;        /* 页面边距 */
  --card-inner-gap: 50rpx;  /* 卡片内边距 */
  
  width: 100%;
  height: 100vh;
  padding: var(--page-gap);
  background: var(--bg-gray);
  display: flex;
  flex-direction: column;
}

/* 返回按钮（绝对定位） */
.back-btn-wrapper {
  position: absolute;
  left: 40rpx;
  top: 30rpx;
  z-index: 100;
}

/* 大卡片 */
.content-card {
  background: var(--card-gray);
  border: 1rpx solid rgba(0, 0, 0, 0.08);
  border-radius: 40rpx;
  padding: var(--card-inner-gap);
  box-shadow: 0 10rpx 26rpx rgba(0, 0, 0, 0.08);
}
```

---

### 公共组件

| 组件 | 路径 | 用途 |
|------|------|------|
| 返回按钮 | `@/components/ui-box/common-back-btn.vue` | 左上角返回 |
| 状态栏 | `@/components/navigation/nav-statusBYClaude.vue` | 时间+电量显示 |
| 虚拟摇杆 | `@/components/ui-box/virtual-joystick.vue` | 方向控制 |
| 可展开胶囊 | `@/components/ui-box/expandable-capsule.vue` | 下拉选择 |
| 提示弹窗 | `@/components/ui-box/tip-modal.vue` | 操作确认 |

---

### 字体规范

- **主字体**：阿里巴巴健康体 2.0
- **常规体**：`AlibabaHealthFont2.0CN-45R.ttf`
- **粗体**：`AlibabaHealthFont2.0CN-85B.ttf`

---

## 🐛 问题记录

> 待补充...

---

## 📚 参考资料

- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [uni-app Android 原生插件开发](https://nativesupport.dcloud.net.cn/)


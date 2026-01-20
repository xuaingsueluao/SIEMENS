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

## 🐛 问题记录

> 待补充...

---

## 📚 参考资料

- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [uni-app Android 原生插件开发](https://nativesupport.dcloud.net.cn/)


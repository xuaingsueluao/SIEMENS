<!--markdownlint-disable-->
# VirtualJoystick 虚拟摇杆组件

## 组件概述

`VirtualJoystick` 是一个用于触摸屏设备的**虚拟摇杆控制器**组件，用于模拟物理摇杆的交互方式。

### 主要用途
- **机器人遥控**：控制机器人的前进/后退、左转/右转
- **游戏控制**：角色移动、方向控制
- **车辆操控**：油门/刹车、转向控制

---

## 核心功能

| 功能 | 说明 |
|------|------|
| **双模式支持** | `throttle`（油门模式：前后）/ `yaw`（偏航模式：左右） |
| **死区设置** | 中心区域不触发指令，防止误操作 |
| **方向反转** | 可选反转方向映射 |
| **视觉反馈** | 摇杆帽跟随手指移动 |
| **自动回中** | 松手后摇杆自动复位 |
| **箭头指示** | 可选显示方向箭头 |

---

## Props 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | String | `'throttle'` | 工作模式：`'throttle'`（前后）或 `'yaw'`（左右） |
| `size` | Number | `160` | 外圈直径（px） |
| `knobSize` | Number | `72` | 摇杆帽直径（px） |
| `deadZone` | Number | `0.14` | 死区比例（0~1），中心区域输出 `stop` |
| `invert` | Boolean | `false` | 是否反转方向 |
| `showArrows` | Boolean | `true` | 是否显示方向箭头 |

---

## Events 事件

| 事件 | 参数 | 触发时机 |
|------|------|----------|
| `@start` | 无 | 手指按下摇杆时 |
| `@change` | `{ mode, dir }` | 方向改变时（防重复触发） |
| `@end` | 无 | 手指松开时 |

### `@change` 事件的 `dir` 值

| mode | 可能的 dir 值 |
|------|---------------|
| `throttle` | `'front'`（前进）、`'back'`（后退）、`'stop'`（停止） |
| `yaw` | `'left'`（左转）、`'right'`（右转）、`'stop'`（停止） |

---

## 使用示例

### 基础用法 - 单摇杆

```vue
<template>
  <VirtualJoystick 
    mode="throttle"
    @change="onJoystickChange"
  />
</template>

<script setup>
import VirtualJoystick from '@/components/ui-box/virtual-joystick.vue'

const onJoystickChange = ({ mode, dir }) => {
  console.log(`模式: ${mode}, 方向: ${dir}`)
  // dir: 'front' | 'back' | 'stop'
}
</script>
```

### 进阶用法 - 双摇杆（推荐用于机器人遥控）

```vue
<template>
  <view class="joystick-container">
    <!-- 左摇杆：控制前进/后退 -->
    <VirtualJoystick 
      mode="throttle"
      :size="180"
      :knobSize="80"
      :deadZone="0.2"
      @change="onThrottleChange"
      @start="onJoystickStart"
      @end="onJoystickEnd"
    />
    
    <!-- 右摇杆：控制左转/右转 -->
    <VirtualJoystick 
      mode="yaw"
      :size="180"
      :knobSize="80"
      :deadZone="0.2"
      @change="onYawChange"
      @start="onJoystickStart"
      @end="onJoystickEnd"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import VirtualJoystick from '@/components/ui-box/virtual-joystick.vue'

// 当前控制状态
const throttleDir = ref('stop')  // front | back | stop
const yawDir = ref('stop')       // left | right | stop

const onThrottleChange = ({ dir }) => {
  throttleDir.value = dir
  sendControlCommand()
}

const onYawChange = ({ dir }) => {
  yawDir.value = dir
  sendControlCommand()
}

// 发送控制指令到机器人
const sendControlCommand = () => {
  const command = {
    throttle: throttleDir.value,
    yaw: yawDir.value
  }
  console.log('发送指令:', command)
  // TODO: 通过 WebSocket/API 发送给机器人
}

const onJoystickStart = () => {
  console.log('开始操控')
}

const onJoystickEnd = () => {
  console.log('操控结束')
}
</script>

<style scoped>
.joystick-container {
  display: flex;
  justify-content: space-between;
  padding: 40rpx;
}
</style>
```

### 自定义样式 - 调整大小

```vue
<VirtualJoystick 
  mode="throttle"
  :size="200"        <!-- 外圈更大 -->
  :knobSize="90"     <!-- 摇杆帽更大 -->
  :deadZone="0.1"    <!-- 死区更小，更灵敏 -->
  :showArrows="false" <!-- 隐藏箭头 -->
/>
```

---

## 在项目中的应用场景

### 1. 遥控模式页面 (`/pages/remote/index.vue`)

这是**最适合**使用该组件的地方！可以实现：

```
┌─────────────────────────────────────┐
│           遥控模式                   │
│                                     │
│   ┌─────┐             ┌─────┐      │
│   │ 前进 │             │ 左转 │      │
│   │  ◉  │             │  ◉  │      │
│   │ 后退 │             │ 右转 │      │
│   └─────┘             └─────┘      │
│   油门摇杆             方向摇杆       │
└─────────────────────────────────────┘
```

### 2. 初始定位弹窗 (`operation-modal`)

在 home.vue 中，点击"初始定位"按钮后弹出的操作弹窗，提示语是"请操作摇杆开始定位"，正好可以放置这个摇杆组件！

---

## 与项目的兼容性

| 检查项 | 状态 | 说明 |
|--------|------|------|
| **框架兼容** | 通过 | Vue 3 Composition API，与项目一致 |
| **uni-app 兼容** | 通过 | 使用 `uni.createSelectorQuery`，原生支持 |
| **触摸事件** | 通过 | 使用标准 touch 事件，移动端完美支持 |
| **样式隔离** | 通过 | 使用 `scoped`，不会污染全局样式 |
| **主题色** | 需调整 | 当前使用青色系 `rgba(0, 200, 220)`，与项目主题色 `#009999` 接近 |

### 建议的样式微调

如果需要完全匹配项目主题色，可修改以下颜色：

```css
/* 将 rgba(0, 200, 220, x) 替换为 rgba(0, 153, 153, x) */
/* 即 #009999 的 rgba 形式 */
```

---

## 技术实现要点

1. **触摸追踪**：通过 `touchId` 追踪特定手指，支持多点触控
2. **边界限制**：使用 `clamp` 和向量缩放确保摇杆不超出边界
3. **死区计算**：中心 14% 区域（默认）为死区，输出 `stop`
4. **防抖优化**：`emitIfChanged` 仅在方向改变时触发事件，避免重复
5. **自动回中**：`onEnd` 时重置 `offset` 并发送 `stop`

---

## 快速集成步骤

1. **组件已就位**：`@/components/ui-box/virtual-joystick.vue`

2. **在目标页面引入**：
   ```javascript
   import VirtualJoystick from '@/components/ui-box/virtual-joystick.vue'
   ```

3. **放置组件并监听事件**：
   ```vue
   <VirtualJoystick mode="throttle" @change="handleChange" />
   ```

4. **处理控制逻辑**：
   ```javascript
   const handleChange = ({ dir }) => {
     // 发送指令给机器人
   }
   ```

---

## 总结

| 评估维度 | 评分 | 说明 |
|----------|------|------|
| **代码质量** | 优秀 | 结构清晰，注释完善，逻辑严谨 |
| **功能完整性** | 优秀 | 双模式、死区、反转、回中全支持 |
| **项目适配度** | 优秀 | 非常适合机器人遥控场景 |
| **可定制性** | 良好 | Props 丰富，但颜色需手动调整 |

**结论**：**强烈推荐使用！** 这个组件完美契合你的机器人控制项目，特别适合用在**遥控模式页面**和**初始定位弹窗**中。

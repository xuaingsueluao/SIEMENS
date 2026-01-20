<!--
可配置性更高
time?: string
batteryLevel?: number
autoTime?: boolean        //  控制是否自动刷新
autoBattery?: boolean     //  控制是否自动获取电量
timeFormat?: "HH:mm" | "HH:mm:ss"  //  支持秒级显示
label?: string            //  可自定义标签
iconSrc?: string          //  可自定义图标
showBattery?: boolean     //  可隐藏电池区域
bg?: string               //  背景色可配置
percentColor?: string     //  电量颜色可配置
-->

<template>
  <!-- 右侧状态栏 -->
  <view class="nav-status">
    <view class="status-display" :style="{ background: bg }">
      <view class="time-section">
        <text class="time-text">{{ showTime }}</text>
      </view>

      <view v-if="showBattery" class="battery-section">
        <text class="battery-label">{{ label }}</text>
        <view class="battery-info">
          <image class="battery-icon" :src="iconSrc" mode="aspectFit" />
          <text class="battery-percent" :style="{ color: percentColor }">
            {{ showBatteryLevel }}%
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

type TimeFormat = "HH:mm" | "HH:mm:ss";

const props = withDefaults(
  defineProps<{
    /** 外部传入时间（传了就用传入的；不传则可自动刷新） */
    time?: string;
    /** 外部传入电量（传了就用传入的；不传则可自动获取） */
    batteryLevel?: number;

    /** 是否自动刷新时间 */
    autoTime?: boolean;
    /** 是否自动获取电量 */
    autoBattery?: boolean;

    timeFormat?: TimeFormat;
    label?: string;
    iconSrc?: string;

    showBattery?: boolean;

    /** 样式可配置 */
    bg?: string;
    percentColor?: string;
  }>(),
  {
    autoTime: true,
    autoBattery: true,
    timeFormat: "HH:mm",
    label: "Ladestand",
    iconSrc: "/static/icons/home/battery.png",
    showBattery: true,
    bg: "rgba(255, 255, 255, 0.3)",
    percentColor: "#009999",
  }
);

const innerTime = ref("");
const innerBattery = ref<number>(100);

watch(
  () => props.time,
  (v) => {
    if (typeof v === "string") innerTime.value = v;
  },
  { immediate: true }
);

watch(
  () => props.batteryLevel,
  (v) => {
    if (typeof v === "number") innerBattery.value = v;
  },
  { immediate: true }
);

function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatTime(d: Date, fmt: TimeFormat) {
  const hh = pad2(d.getHours());
  const mm = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  return fmt === "HH:mm:ss" ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
}
function updateTime() {
  innerTime.value = formatTime(new Date(), props.timeFormat);
}

async function updateBattery() {
  // uni.getBatteryInfo 在 App 端可用（Android/iOS）
  // 失败就保持上一次值
  try {
    uni.getBatteryInfo({
      success: (res: any) => {
        const lv = Number(res?.level);
        if (!Number.isNaN(lv)) innerBattery.value = Math.round(lv);
      },
    });
  } catch (e) {}
}

let timeTimer: any = null;
let batteryTimer: any = null;

onMounted(() => {
  // 时间：如果父组件没传 time，并且允许 autoTime，就自己刷新
  if (props.autoTime && props.time == null) {
    updateTime();
    // 显示到分钟就够了：30s 刷新一次避免错过分钟切换
    const interval = props.timeFormat === "HH:mm:ss" ? 1000 : 30000;
    timeTimer = setInterval(updateTime, interval);
  }

  // 电量：如果父组件没传 batteryLevel，并且允许 autoBattery，就自己获取
  if (props.autoBattery && props.batteryLevel == null) {
    updateBattery();
    batteryTimer = setInterval(updateBattery, 30000);
  }
});

onUnmounted(() => {
  if (timeTimer) clearInterval(timeTimer);
  if (batteryTimer) clearInterval(batteryTimer);
});

const showTime = computed(() => props.time ?? innerTime.value);
const showBatteryLevel = computed(() => props.batteryLevel ?? innerBattery.value);

const label = computed(() => props.label);
const iconSrc = computed(() => props.iconSrc);
const bg = computed(() => props.bg);
const percentColor = computed(() => props.percentColor);
const showBattery = computed(() => props.showBattery);
</script>

<style scoped>
.nav-status {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.status-display {
  border-radius: 30rpx;
  padding: 18rpx 36rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40rpx;

  /* 玻璃态：某些端不一定支持，但不影响基础显示 */
  backdrop-filter: blur(10px);
}

.time-section {
  display: flex;
  align-items: center;
}

.time-text {
  font-size: 43rpx;
  font-weight: bold;
  color: #333;
}

.battery-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rpx;
}

.battery-label {
  font-size: 24rpx;
  color: #666;
}

.battery-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rpx;
}

.battery-icon {
  width: 60rpx;
  height: 36rpx;
}

.battery-percent {
  font-size: 32rpx;
  font-weight: bold;
}
</style>

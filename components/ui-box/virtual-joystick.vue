<template>
  <view
    class="vj"
    :style="wrapStyle"
    @touchstart.stop.prevent="onStart"
    @touchmove.stop.prevent="onMove"
    @touchend.stop.prevent="onEnd"
    @touchcancel.stop.prevent="onEnd"
  >
    <view class="vj-base"></view>

    <!-- 摇杆帽：视觉跟随手指 -->
    <view class="vj-knob" :style="knobStyle">
      <view v-if="showArrows" class="vj-arrows">
        <!-- throttle模式：只显示上下箭头 -->
        <view v-if="mode === 'throttle'" class="arr up"></view>
        <!-- yaw模式：只显示左右箭头 -->
        <view v-if="mode === 'yaw'" class="arr right"></view>
        <!-- throttle模式：只显示上下箭头 -->
        <view v-if="mode === 'throttle'" class="arr down"></view>
        <!-- yaw模式：只显示左右箭头 -->
        <view v-if="mode === 'yaw'" class="arr left"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, nextTick, getCurrentInstance } from "vue";

const props = defineProps({
  /** throttle=前后(front/back)；yaw=左右(left/right) */
  mode: { type: String, default: "throttle" }, // "throttle" | "yaw"
  /** 外圈直径(px) */
  size: { type: Number, default: 160 },
  /** 摇杆帽直径(px) */
  knobSize: { type: Number, default: 72 },
  /** 死区比例(0~1)：中心这圈输出 stop */
  deadZone: { type: Number, default: 0.14 },
  /** 反转方向（可选） */
  invert: { type: Boolean, default: false },
  /** 是否显示箭头 */
  showArrows: { type: Boolean, default: true },
});

const emit = defineEmits(["start", "change", "end"]);

const inst = getCurrentInstance();

const center = ref({ x: 0, y: 0 });
const baseR = ref(0);
const knobR = ref(0);

const dragging = ref(false);
const touchId = ref(null);

const offset = ref({ x: 0, y: 0 }); // px
const lastDir = ref("stop");

const wrapStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));

const knobStyle = computed(() => ({
  width: `${props.knobSize}px`,
  height: `${props.knobSize}px`,
  transform: `translate(-50%, -50%) translate(${offset.value.x}px, ${offset.value.y}px)`,
}));

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function getTouch(e, id) {
  const touches = e.touches || [];
  const changed = e.changedTouches || [];

  // 关键：touchstart 时要拿“这次新变化的触点”
  if (id == null) return changed[0] || touches[0];

  // move 时优先在 touches 里找（仍然按着的）
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === id) return touches[i];
  }
  // 某些平台 end/cancel 时只在 changedTouches 里
  for (let i = 0; i < changed.length; i++) {
    if (changed[i].identifier === id) return changed[i];
  }

  return null;
}

function queryRect() {
  return new Promise((resolve) => {
    const q = uni.createSelectorQuery();
    q.in(inst.proxy)
      .select(".vj")
      .boundingClientRect((rect) => resolve(rect))
      .exec();
  });
}

/** 只做 dir 判定：front/back/stop 或 left/right/stop */
function calcDir(dx, dy, maxDist) {
  const dist = Math.sqrt(dx * dx + dy * dy);
  const deadPx = maxDist * props.deadZone;
  if (dist <= deadPx) return "stop";

  let dir;
  if (props.mode === "throttle") {
    // 屏幕坐标：y向下为正 => dy<0 表示上半圆 => front
    dir = dy < 0 ? "front" : "back";
  } else {
    dir = dx < 0 ? "left" : "right";
  }

  if (!props.invert) return dir;

  // invert
  const map = { front: "back", back: "front", left: "right", right: "left" };
  return map[dir] || dir;
}

function emitIfChanged(dir) {
  if (dir === lastDir.value) return;
  lastDir.value = dir;
  emit("change", { mode: props.mode, dir });
}

async function onStart(e) {
  dragging.value = true;
  const t = getTouch(e);
  touchId.value = t?.identifier ?? null;

  await nextTick();
  const rect = await queryRect();

  baseR.value = rect.width / 2;
  knobR.value = props.knobSize / 2;
  center.value = { x: rect.left + baseR.value, y: rect.top + baseR.value };

  emit("start");
  // 初始发 stop（且会避免重复）
  emitIfChanged("stop");
}

function onMove(e) {
  if (!dragging.value) return;
  const t = getTouch(e, touchId.value);
  if (!t) return;

  const dxRaw = t.clientX - center.value.x;
  const dyRaw = t.clientY - center.value.y;

  const maxDist = Math.max(1, baseR.value - knobR.value);
  const dist = Math.sqrt(dxRaw * dxRaw + dyRaw * dyRaw);
  const scale = dist > maxDist && dist > 0 ? maxDist / dist : 1;

  const dx = dxRaw * scale;
  const dy = dyRaw * scale;

  // 视觉跟随
  offset.value = { x: dx, y: dy };

  // 业务输出
  const dir = calcDir(dx, dy, maxDist);
  emitIfChanged(dir);
}

function onEnd() {
  if (!dragging.value) return;
  dragging.value = false;
  touchId.value = null;

  // 回中
  offset.value = { x: 0, y: 0 };
  emitIfChanged("stop");

  emit("end");
}
</script>

<style scoped>
.vj {
  position: relative;
  border-radius: 999px;
}

.vj-base {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.95), rgba(230, 245, 255, 0.95));
  box-shadow:
    0 10px 18px rgba(0, 0, 0, 0.12),
    inset 0 0 0 10px rgba(0, 200, 220, 0.15),
    inset 0 0 0 2px rgba(255, 255, 255, 0.7);
}

.vj-knob {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #ffffff, #e8f7ff);
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.15),
    inset 0 0 0 2px rgba(255, 255, 255, 0.9),
    inset 0 0 0 10px rgba(0, 200, 220, 0.12);
}

/* 可选箭头：纯CSS */
.vj-arrows { position: absolute; inset: 0; }
.arr { position: absolute; width: 0; height: 0; opacity: 0.75; }
.arr.up {
  left: 50%; top: 16%; transform: translateX(-50%);
  border-left: 6px solid transparent; border-right: 6px solid transparent;
  border-bottom: 8px solid rgba(0, 150, 170, 0.9);
}
.arr.right {
  right: 16%; top: 50%; transform: translateY(-50%);
  border-top: 6px solid transparent; border-bottom: 6px solid transparent;
  border-left: 8px solid rgba(0, 150, 170, 0.9);
}
.arr.down {
  left: 50%; bottom: 16%; transform: translateX(-50%);
  border-left: 6px solid transparent; border-right: 6px solid transparent;
  border-top: 8px solid rgba(0, 150, 170, 0.9);
}
.arr.left {
  left: 16%; top: 50%; transform: translateY(-50%);
  border-top: 6px solid transparent; border-bottom: 6px solid transparent;
  border-right: 8px solid rgba(0, 150, 170, 0.9);
}
</style>

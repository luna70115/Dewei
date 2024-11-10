<script setup lang="ts">
import { computed, defineAsyncComponent, provide } from "vue";
import { useRoute } from "vue-router";
import { isNil, defaultTo, path } from "ramda";
import { useDevice } from "@/utils/useDevice"; // 引入 useDevice

const route = useRoute();
const { isMobile } = useDevice(); // 使用 useDevice composable，獲取裝置狀態
provide("isMobile", isMobile); // 將 isMobile 提供給所有子組件

// 計算屬性 layout，用於根據當前裝置動態設置 layout
const layout = computed(() => {
  if (isNil(route?.path)) return null;

  const currentLayout = defaultTo("layout-error")(
    path(["meta", "layout"], route)
  );
  const useAwd = defaultTo(false)(path(["meta", "useAwd"], route));
  const useSameLayout = defaultTo(false)(
    path(["meta", "awdUseSameLayout"], route)
  );
  console.log(useSameLayout, "useSameLayout");
  const mobileLayout = currentLayout + "-mobile";
  // 使用 AWD 且不使用相同的layout時，則使用 mobileLayout
  return useAwd && !useSameLayout && isMobile.value
    ? mobileLayout
    : currentLayout;
});

// 動態選擇 AWD 組件（若組件包含 desktop 和 mobile 版本，則根據裝置選擇相應的組件版本）
const getComponent = (vnode: VNode) => {
  if (vnode?.type && typeof vnode.type === "object") {
    const componentType = vnode.type as {
      desktop?: () => Promise<Component>;
      mobile?: () => Promise<Component>;
    };

    if ("desktop" in componentType && "mobile" in componentType) {
      const selectedComponent = isMobile.value
        ? componentType.mobile
        : componentType.desktop;
      return defineAsyncComponent({ loader: selectedComponent });
    }
  }
  return vnode;
};

console.log("testHusky");
</script>

<template>
  <!-- 根據計算屬性 layout 動態載入 layout 組件 -->
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <!-- 使用 getComponent 函數選擇 desktop 或 mobile 版本的組件 -->
      <component :is="getComponent(Component)" />
    </router-view>
  </component>
</template>

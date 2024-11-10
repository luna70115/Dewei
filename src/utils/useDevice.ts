// src/composables/useDevice.ts
import debounce from "lodash/debounce";

// useDevice composable 用於判斷當前裝置是否為手機
// 並根據裝置選擇不同版本的元件
export function useDevice() {
  const isMobile = ref(false); // 判斷是否為手機裝置的標誌

  // 檢查裝置是否為手機，使用 debounce 限制頻繁調用
  const checkDevice = debounce(() => {
    isMobile.value = window.innerWidth <= 768; // 當視窗寬度小於等於 768px 時，認為是手機裝置
  }, 200);

  // 當組件掛載時，初始化裝置檢查並添加 resize 事件監聽器
  onMounted(() => {
    checkDevice(); // 初始化裝置檢查
    window.addEventListener("resize", checkDevice); // 監聽 resize 事件以便動態更新裝置狀態
  });

  // 當組件卸載時，移除 resize 事件監聽器，避免記憶體洩漏
  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkDevice);
  });

  // 動態選擇 AWD 組件（若組件包含 desktop 和 mobile 版本，則根據裝置選擇相應的組件版本）
  const getComponent = (vnode: VNode) => {
    if (vnode?.type && typeof vnode.type === "object") {
      // 將 vnode 的類型轉換為特定的 AWD 組件類型，方便讀取 desktop 和 mobile 屬性
      const componentType = vnode.type as {
        desktop?: () => Promise<Component>; // 定義桌面版組件
        mobile?: () => Promise<Component>; // 定義手機版組件
      };

      // 檢查該組件是否包含 desktop 和 mobile 版本
      if ("desktop" in componentType && "mobile" in componentType) {
        // 使用 defineAsyncComponent 動態載入根據當前裝置選擇的組件版本
        return defineAsyncComponent({
          loader: isMobile.value ? componentType.mobile : componentType.desktop // 當前裝置的組件版本
        });
      }
    }
    // 若組件並非 AWD 組件（不包含 desktop 和 mobile），直接返回原始 vnode
    return vnode;
  };

  // 返回裝置狀態和 getComponent 方法
  return {
    isMobile, // 判斷是否為手機的 ref
    getComponent // 根據裝置選擇相應組件版本的函數
  };
}

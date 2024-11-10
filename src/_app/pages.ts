import { Component } from "vue";
import { markRaw } from "vue";

interface PageModule {
  default: {
    layout?: string;
    title?: string;
    header?: string;
    noScroll?: boolean;
    awdUseSameLayout?: boolean;
  };
}

interface Route {
  path: string;
  name: string;
  meta: {
    layout: string;
    title: string;
    useAwd?: boolean;
    awdUseSameLayout?: boolean;
  };
  component:
    | (() => Promise<Component>)
    | {
        desktop: () => Promise<Component>;
        mobile: () => Promise<Component>;
      };
}

const files = import.meta.glob("../pages/**/*.vue");
const defaults = import.meta.glob<PageModule>("../pages/**/*.vue", {
  eager: true
});

const modules: Route[] = [];
const processedPaths = new Set<string>();

for (const path in files) {
  // 檢查是否為 desktop 或 mobile 文件
  const isDesktop = path.includes("/desktop.vue");
  const isMobile = path.includes("/desktop.vue");

  // 獲取基礎路徑
  let routePath;
  if (isDesktop || isMobile) {
    // 如果是 desktop 或 mobile 文件，去掉最後的 /desktop.vue 或 /desktop.vue
    routePath = path
      .replace("../pages", "")
      .replace(/\/(desktop|mobile)\.vue$/, "")
      .toLowerCase();
  } else {
    // 一般文件保持原有的處理方式
    routePath = path.replace("../pages", "").toLowerCase().replace(".vue", "");
  }

  // 處理路由路徑
  routePath = routePath.replace(/\/index$/, "").replace(/\/_+/g, "/:");

  // 如果已經處理過這個路徑，跳過
  if (processedPaths.has(routePath)) {
    continue;
  }

  // 檢查是否存在對應的桌面版和移動版文件
  const basePath = path.replace(/\/(desktop|mobile)\.vue$/, "");
  const desktopPath = `${basePath}/desktop.vue`;
  const mobilePath = `${basePath}/mobile.vue`;

  const hasDesktop = files[desktopPath];
  const hasMobile = files[mobilePath];

  if (hasDesktop && hasMobile) {
    // 如果同時存在桌面版和移動版
    const pageModule = defaults[desktopPath];
    modules.push({
      path: routePath,
      name: routePath,
      meta: {
        layout: pageModule.default.layout || "layout-default",
        title: pageModule.default.title || "app.project.title",
        useAwd: true,
        awdUseSameLayout: pageModule.default.awdUseSameLayout || false
      },
      component: markRaw({
        desktop: files[desktopPath],
        mobile: files[mobilePath]
      })
    });
  } else if (!isDesktop && !isMobile) {
    // 單一版本的頁面
    const pageModule = defaults[path];
    modules.push({
      path: routePath,
      name: routePath,
      meta: {
        layout: pageModule.default.layout || "layout-default",
        title: pageModule.default.title || "app.project.title"
      },
      component: files[path]
    });
  }

  processedPaths.add(routePath);
}

export default modules;

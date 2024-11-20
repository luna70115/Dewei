// src/directives/bgImage.ts
export default {
  mounted(el: HTMLElement, binding: { value: string }) {
    el.style.backgroundImage = `url('${binding.value}')`;
    el.style.backgroundSize = "cover"; // 根據需求可以增加樣式
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
  },
  updated(el: HTMLElement, binding: { value: string }) {
    el.style.backgroundImage = `url('${binding.value}')`;
  }
};

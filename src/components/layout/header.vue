<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <header class="header">
    <img src="@/assets/images/logo.png" alt="" @click="router.push('/')" />
    <div class="header-card">
      <div class="header-box dropDown">
        <a href="" class="">About</a>
        <ul>
          <li><a href="">3D設計</a></li>
          <li><a href="">Draft2D工程圖</a></li>
          <li><a href="">授權方式</a></li>
        </ul>
      </div>
      <div class="header-box"><a href="">NEWS</a></div>

      <div class="header-box dropDown">
        <a href="">ADD-ON</a>
        <ul>
          <li><a href="">Mechanical</a></li>
          <li><a href="">Keyshot</a></li>
          <li><a href="">MultiPhysics</a></li>
          <li><a href="">Translator</a></li>
        </ul>
      </div>
      <div class="header-box"><a href="">Solidworks</a></div>
      <div class="header-box dropDown">
        <a href="">ENCYCAM</a>
        <ul>
          <li><a href="">2.5和3軸銑削</a></li>
          <li><a href="">4軸同動銑削</a></li>
          <li><a href="">5軸同動銑削</a></li>
          <li><a href="">車床加工</a></li>
        </ul>
      </div>
      <div class="header-box"><a href="">API</a></div>
      <div class="header-box">
        <a href=""> <a href="">Courses</a> </a>
      </div>
    </div>
    <div class="md-header-card">
      <i class="fab fa-youtube"></i> <i class="fab fa-facebook"></i>
      <i class="fas fa-headset"></i><i class="fas fa-align-justify"></i>
    </div>
  </header>
</template>

<style scoped lang="scss">
@keyframes arrowBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px); // 向下位移 4px，可依需求調整
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgb(0 0 0 / 9%);
  color: #444;
  font-size: 16px;
  font-weight: 500;
  &-card {
    display: flex;
    height: 100%;
    @include MQ(d1120) {
      display: none;
    }
  }
  &-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 100%;
    cursor: pointer;
    &:hover {
      background: rgb(222, 222, 222);
    }
    &:hover ul {
      opacity: 1;
      pointer-events: auto;
    }
    &:hover dropDown after {
      transform: translateY(3px); // 向下滑動
    }
  }
  img {
    max-width: 120px;
    width: 100%;
    cursor: pointer;
    margin-left: 20px;
  }
  ul {
    display: block; // 重要：改用 block 搭配透明度隱藏，才能動畫
    opacity: 0;
    pointer-events: none; // 避免 hover 到下拉選單時立即消失
    transition: opacity 0.4s ease;
    position: absolute;
    top: 70px;
    background: rgb(146, 146, 146);
    color: #fff;
    width: 140px;
    border-radius: 0 0 10px 10px;
    z-index: 10;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px 0;
      letter-spacing: 1px;
      font-size: 16px;
      transition: all 0.3s ease;
      &:hover {
        font-size: 18px;
        font-weight: 500;
      }
    }
    li:not(:last-child) {
      border-bottom: 1px solid #ccc; // 自行設定顏色
    }
  }
}
.md-header-card {
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  height: 100%;
  margin-right: 20px;

  i {
    cursor: pointer;
    font-size: 24px;
    display: inline-block; // 動畫需要元素具備可轉換性
    transform: translateY(0);
    transition: transform 0.2s ease;
    &:not(:last-of-type):hover {
      transform: translateY(-10px);
    }
  }

  @include MQ(d1120) {
    display: flex;
  }
}
.dropDown {
  &::after {
    content: "";
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #444; // 灰色向下箭頭
    transform: translateY(0);
  }
  &:hover::after {
    animation: arrowBounce 0.6s ease-in-out infinite;
  }
}
</style>

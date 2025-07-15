<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <header class="header">
    <img src="@/assets/images/logo.png" alt="" @click="router.push('/')" />

    <nav class="header-nav">
      <div class="header-nav-item">
        <a href="#" class="header-arrow">About</a>
        <ul class="header-dropdown">
          <li><a href="#">3D設計</a></li>
          <li><a href="#">Draft2D工程圖</a></li>
          <li><a href="#">授權方式</a></li>
        </ul>
      </div>
      <div class="header-nav-item">
        <a href="#">NEWS</a>
      </div>
      <div class="header-nav-item">
        <a href="#" class="header-arrow">ADD-ON</a>
        <ul class="header-dropdown">
          <li><a href="#">Mechanical</a></li>
          <li><a href="#">Keyshot</a></li>
          <li><a href="#">MultiPhysics</a></li>
          <li><a href="#">Translator</a></li>
        </ul>
      </div>
      <div class="header-nav-item">
        <a href="#">NEWS</a>
      </div>
      <div class="header-nav-item">
        <a href="#" class="header-arrow">ENCYCAM</a>
        <ul class="header-dropdown">
          <li><a href="#">2.5和3軸銑削</a></li>
          <li><a href="#">4軸同動銑削</a></li>
          <li><a href="#">5軸同動銑削</a></li>
          <li><a href="#">車床加工</a></li>
        </ul>
      </div>
      <div class="header-nav-item">
        <a href="#">API</a>
      </div>
      <div class="header-nav-item">
        <a href="#">Courses</a>
      </div>
    </nav>
    <nav class="header-mobile-nav">
      <div>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-facebook"></i><i class="bi bi-headset"></i>
        <i class="bi bi-text-paragraph"></i>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #f5f5f5;
  font-family: "Playfair", serif;
  font-size: 20px;
  font-weight: 500;
  img {
    width: 120px;
    cursor: pointer;
    margin-left: 20px;
  }

  &-nav {
    display: flex;
    justify-content: end;
    height: 100%;
    width: 100%;
    @include MQ(d1120) {
      display: none;
    }
  }
  &-mobile-nav {
    display: none;
    @include MQ(d1120) {
      display: block;
      div {
        display: flex;
        gap: 10px;
        margin-right: 20px;
      }
      i {
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
}
.header-nav-item {
  position: relative;
  height: 100%;
  width: 140px;
  &:hover {
    background: #e1e1e1;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #333;
    width: 100%;
    height: 100%;
  }

  &:hover .header-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
}
.header-dropdown {
  position: absolute;
  top: 70px;
  left: 0;
  background: #444;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 140px;
  border-radius: 0 0 8px 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(1);
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 100;
  li {
    text-align: center;
    border-bottom: 1px solid #858585;
    a {
      display: block;
      color: white;
      padding: 14px 0;
      text-decoration: none;
      &:hover {
        background: #555;
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
.header-dropdown li:last-child a:hover {
  border-radius: 0 0 8px 8px;
}
.header-arrow {
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #444;
  }
}
</style>

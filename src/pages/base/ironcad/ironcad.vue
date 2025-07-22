<script setup lang="ts">
// import { getImageUrl } from "@/utils/getImageUrl";
// import "mdb-ui-kit/css/mdb.min.css";
</script>

<template>
  <div class="ironCAD">
    <section class="ironCAD-info">
      <div class="ironCAD-info-content">
        <img src="@/assets/images/logo.png" alt="" class="ironCAD-info-logo" />
        <h1>使用 IronCAD 工作效率更高</h1>
        <p>
          結合創新設計與直覺操作的3D建模工具，支援拖放式建模。即時視覺化設計，提升團隊溝通與開發效率，快速完成產品開發。
        </p>
        <div>
          <button class="ironCAD-info-freeBtn">免費試用</button>
          <button class="ironCAD-info-downloadBtn">下載IronCAD</button>
        </div>
      </div>
      <img
        src="@/assets/images/ironCAD-title.jpg"
        alt=""
        class="ironCAD-info-img"
      />
    </section>
    <section class="ironCAD-notes">
      <p>
        IronCAD 是創新的3D
        CAD設計軟體，結合參數化建模與直接建模技術，讓設計師能夠快速且直覺地進行3D產品設計。
        無論是機械設計、產品開發或模具設計，IronCAD
        都能提供強大而靈活的解決方案。
      </p>
    </section>
    <section class="ironCAD-advantage">
      <div class="ironCAD-advantage-card lightBlue">
        <img src="@/assets/images/advantage2.png" alt="" />
        <div>
          <p>更快速</p>
          <h1>全方位功能整合，從設計到出圖一站完成</h1>
          <h2>
            支援 3D 建模、曲面造型、板金模組、裝配干涉檢查、自動化出圖與 BOM
            產出，有效減少多平台轉換與錯誤風險，提升設計精度與效率。
          </h2>
        </div>
      </div>
      <div class="ironCAD-advantage-card yellow">
        <img src="@/assets/images/advantage1.jpg" alt="" />
        <div>
          <p>更輕鬆</p>
          <h1>直覺式操作介面，加速設計週期</h1>
          <h2>
            IronCAD
            採用獨特的拖放式建模與雙建模引擎（參數化＋直接建模），讓工程師快速上手、靈活建構複雜零組件，顯著縮短產品開發時程。
          </h2>
        </div>
      </div>

      <div class="ironCAD-advantage-card green">
        <img src="@/assets/images/advantage3.jpg" alt="" />
        <div>
          <p>更流暢</p>
          <h1>強化團隊協作與資料整合能力</h1>
          <h2>
            IronCAD 可輕鬆匯入多種 CAD
            檔案格式，搭配可視化爆炸圖與動畫模擬功能，提升跨部門溝通效率，加速設計審查與決策流程。
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.ironCAD {
  width: 100%;
}
.ironCAD-info {
  display: flex;
  @include MQ(d1120) {
    flex-direction: column;
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 100%;
    min-width: 500px;
    color: black;
    padding: 80px 60px;
    @include MQ(t768) {
      padding: 6vw;
      gap: 6vw;
      min-width: 0;
    }
    h1 {
      font-size: 30px;
      font-weight: 700;
      @include MQ(t768) {
        font-size: 6vw;
      }
    }
    p {
      color: #444;
      line-height: 1.5;
      font-size: 20px;
      @include MQ(t768) {
        font-size: 3vw;
      }
    }
    div {
      display: flex;
      gap: 20px;
    }
  }
  &-logo {
    width: 400px;
    @include MQ(t768) {
      width: 50vw;
    }
  }
  &-freeBtn {
    padding: 10px 20px;
    border: 2px solid black;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      background: rgb(0, 0, 0);
      color: #fff;
    }
  }
  &-downloadBtn {
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 500;
    background: rgb(98, 137, 195);
    color: #fff;
    &:hover {
      background: rgb(65, 90, 129);
    }
  }
  &-img {
    width: 60%;
    object-fit: cover;
    @include MQ(d1120) {
      width: 100%;
      height: 300px;
    }
  }
}
.ironCAD-notes {
  text-align: center;
  padding: 20px;
  background: #000000;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1.5;
    @include MQ(t768) {
      font-size: 3vw;
    }
  }
}
.ironCAD-advantage {
  .lightBlue {
    background: rgb(74, 206, 250);
  }
  .yellow {
    background: rgb(255, 185, 45);
  }
  .green {
    background: rgb(0, 128, 0);
  }
  &-card {
    display: flex;
    align-items: center;
    background: #000000;
    color: #fff;
    height: 500px;
    padding: 70px;
    gap: 50px;
    @include MQ(t768) {
      flex-direction: column;
      padding: 12vw;
      gap: 4vw;
      height: auto;
    }
    img {
      border-radius: 30px;
      transition: all 0.3s ease;
      aspect-ratio: 3 / 2;

      width: 360px;
      height: 240px;
      &:hover {
        transform: scale(1.1);
      }
      @include MQ(t768) {
        width: 100%;
        height: 100%;
        &:hover {
          transform: scale(1);
        }
      }
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 50%;
      color: black;
      @include MQ(t768) {
        width: 100%;
        gap: 3vw;
      }
      p {
        font-size: 14px;
        @include MQ(t768) {
          font-size: 2.8vw;
        }
      }
      h1 {
        font-size: 30px;
        letter-spacing: 1px;
        @include MQ(t768) {
          font-size: 6vw;
        }
      }
      h2 {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 1px;
        @include MQ(t768) {
          font-size: 3vw;
        }
      }
    }
  }
}
</style>

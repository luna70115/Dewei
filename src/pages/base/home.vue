<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";

onMounted(() => {
  initMDB({ Dropdown, Ripple });
});
</script>

<template>
  <!--首頁影片介紹-->
  <div class="home-video-wrapper">
    <div class="home-video-overlay"></div>
    <iframe
      class="home-bg-video"
      src="https://www.youtube.com/embed/2HosZbvECHo?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=2HosZbvECHo"
      title="YouTube video player"
      frameborder="0"
      allow="autoplay; encrypted-media"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    <div class="home-video-content">
      <div class="home-video-content-box">
        <h1>迪威科技 IronCAD 台灣首位總代理</h1>
        <h2>
          作為 IronCAD
          在台灣的首位總代理與最大代理商，我們擁有最堅強的專業團隊，掌握原廠同步的技術實力，並具備獨家
          API
          二次開發能力，協助企業量身打造專屬的設計流程，自動化操作、無痛轉換舊有平台，真正做到設計效率最大化。
        </h2>
        <h2>CAD/CAM/CAE/PDM</h2>
        <h2>獨家API客製化軟體開發</h2>
        <p>– IronCAD直覺式3D建模，創新且高度自由的設計方式，提升設計效率</p>
        <p>– 永久授權買斷，大幅降低成本</p>
        <p>– 迪威科技專業技術團隊提供完善的教育訓練與技術支援</p>
      </div>
      <div class="home-video-btn">
        <button>IronCAD免費試用</button>
        <button>2025 中文版下載</button>
        <button>IronCAD中文教學網</button>
      </div>
    </div>
  </div>
  <!--首頁橫條-->

  <h4 class="home-horizontalBar">
    獨家設計 IronCAD API 二次開發程式 , 免費提供客戶使用大幅提升設計效率 ,
    並且大量減少人為的疏失及錯誤
  </h4>
  <!--切去分頁功能-->
  <section class="home-function">
    <div class="home-function-card" data-aos="fade-up">
      <i class="bi bi-file-earmark-code"></i>
      <h2>關於ENCYCAM</h2>
      <p>
        新一代的CAD/CAM整合系統 透過直覺的使用者介面和自然的工作流程提供先進的
        CAM 技術
      </p>
      <button>獲取更多信息</button>
    </div>
    <div class="home-function-card" data-aos="fade-up">
      <i class="bi bi-file-earmark-code"></i>
      <h2>Solidworks差異</h2>
      <div>
        <p>
          -觀看對比實測 <br />
          -速度差異展示 <br />-革新設計方式 <br />-使用IronCAD的十個優勢
        </p>
      </div>
      <button>獲取更多信息</button>
    </div>
    <div class="home-function-card" data-aos="fade-up">
      <i class="bi bi-file-earmark-code"></i>
      <h2>API客製化</h2>
      <p>
        已開發多達20項專業功能，提供設計者有效率更聰明的設計工具，提升您的創造力！
      </p>
      <button>獲取更多信息</button>
    </div>
  </section>
  <!--迪威介紹-->
  <section class="home-info">
    <div class="home-info-overlay"></div>
    <!-- <h1>關於迪威科技</h1> -->
    <div>
      <p>
        迪威科技為 IronCAD
        台灣區最具規模的核心夥伴，擁有深厚的技術底蘊與完整的服務體系。我們致力於提供先進的
        3D
        設計解決方案，協助企業快速升級設計流程，強化產品開發效能，全面提升競爭力。透過完善的在地支援與顧問式導入服務，我們成為台灣製造業邁向數位轉型的重要推手。
      </p>
      <p>
        我們擁有專業的導入經驗與獨家二次開發技術，能將客戶既有平台的 API
        無縫轉移至
        IronCAD，確保系統穩定且快速上手。成功協助台達電等大型企業導入逾 250 套
        IronCAD
        系統，展現我們在大型專案管理、技術整合與客戶支援上的卓越實力，是值得信賴的長期合作夥伴。
      </p>
    </div>
  </section>
  <!--優勢列表-->
  <section class="home-advantages">
    <img src="@/assets/images/meeting.png" alt="" />
    <div class="home-advantages-card">
      <div class="home-advantages-box">
        <i class="bi bi-file-earmark-code"></i>
        <div>
          <h1>API客製化</h1>
          <p>
            迪威擁有資歷豐富的工程師專門設計二次開發，致力於研發提高效率及高穩定性的API程式，擁有許多客戶成功案例
            !
          </p>
        </div>
      </div>
      <div class="home-advantages-box">
        <i class="bi bi-file-earmark-code"></i>
        <div>
          <h1>API客製化</h1>
          <p>
            已開發多達20項專業功能，提供設計者有效率更聰明的設計工具，提升您的創造力！
          </p>
        </div>
      </div>
      <div class="home-advantages-box">
        <i class="bi bi-file-earmark-code"></i>
        <div>
          <h1>API客製化</h1>
          <p>API客製化API客製化API客製化API客製化</p>
        </div>
      </div>
      <div class="home-advantages-box">
        <i class="bi bi-file-earmark-code"></i>
        <div>
          <h1>API客製化</h1>
          <p>API客製化API客製化API客製化API客製化</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-video-wrapper {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: black;
    z-index: 2;
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: black;
    z-index: 2;
    pointer-events: none;
  }
  @include MQ(t768) {
    height: 80vw;
  }
}

.home-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.home-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  pointer-events: none;
}
.home-video-content {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 30px;
  gap: 10px;
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
  }
  &-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include MQ(t768) {
      gap: 2vw;
    }
  }
  @include MQ(d1120) {
    flex-direction: column;
    justify-content: center;
    gap: 6vw;
    h1,
    h2,
    p {
      text-align: center;
    }
  }
  @include MQ(t768) {
    padding: 4vw;
    h1 {
      font-size: 5vw;
    }
    h2 {
      font-size: 2.8vw;
    }
    p {
      font-size: 1.8vw;
    }
  }
}
.home-video-btn {
  display: flex;
  flex-direction: column;
  gap: 10px;
  @include MQ(d1120) {
    flex-direction: row;
  }
  button {
    padding: 20px;
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 50%);
    background: transparent;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    min-width: 220px;
    @include MQ(t768) {
      font-size: 2.8vw;
      padding: 1.6vw 2vw;
      min-width: 10vw;
    }

    &:hover {
      background: hsl(0, 0%, 100%);
      color: hsl(0, 0%, 0%);
    }
  }
}
.home-horizontalBar {
  background: rgb(98, 137, 195);
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  @include MQ(t768) {
    font-size: 2vw;
    padding: 2vw;
  }
}
.home-function {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 50px;
  // background: rgb(216, 238, 255);
  @include MQ(t768) {
    flex-direction: column;
    gap: 4vw;
    padding: 4vw;
  }
  &-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(205, 205, 205);
    padding: 30px;
    gap: 20px;
    flex: 0 0 30%;
    min-height: 312px;
    width: 100%;

    i {
      font-size: 36px;
    }
    h2 {
      font-size: 20px;
    }
    div {
      text-align: center;
      @include MQ(t768) {
        display: flex;
      }
    }
    p {
      text-align: center;
      line-height: 1.8;
      font-size: 12px;
    }
    button {
      padding: 10px 20px;
      background: transparent;
      border: 1px solid black;
      font-size: 12px;
      &:hover {
        background: black;
        color: #fff;
      }
    }
  }
}
.home-info {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 60px;
  gap: 20px;
  background-image: url("@/assets/images/home-info.jpg");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  &-overlay {
    position: absolute;
    inset: 0;

    background-color: rgba(20, 20, 20, 0.7); /* 深藍半透明遮罩 */
    z-index: 1;
  }
  h1 {
    position: relative;
    z-index: 2;
    font-size: 40px;
    font-weight: 700;
    padding: 10px;
    border-bottom: 1px solid rgb(205, 205, 205);
    color: #fff;
  }
  div {
    display: flex;
    gap: 20px;
    @include MQ(t768) {
      flex-direction: column;
    }
  }
  p {
    position: relative;
    z-index: 2;
    line-height: 1.8;
    font-size: 14px;
    color: #fff;
  }
}
.home-advantages {
  display: flex;
  img {
    width: 50%;
    object-fit: contain;
  }
  &-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  &-box {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    i {
      font-size: 50px;
    }
    h1 {
      font-size: 30px;
      font-weight: 700;
    }
    p {
      line-height: 1.5;
      letter-spacing: 1px;
      font-size: 12px;
    }
  }
}
</style>

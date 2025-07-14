<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import { getImageUrl } from "@/utils/getImageUrl";

import "mdb-ui-kit/css/mdb.min.css";
// import { Vue3Marquee } from "vue3-marquee";

//軟體使用企業變數
const companies = [
  {
    name: "Hitachi",
    link: "https://hitachi-homeappliances.com.tw/",
    image: "company1.jpg",
    duration: 1000
  },
  {
    name: "Toyota",
    link: "https://www.toyota.com.tw/showroom/COROLLA_CROSS?gad_source=1&gad_campaignid=14073708874&gbraid=0AAAAADkWlksY_4xpNeVjjs4A3UkdTJtx2&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQXbdmRwdg43IU5Xry5lbUU07VfBiLbn0n8J9aTuRvgemD74DWkdzDxoCsGkQAvD_BwE",
    image: "company2.jpg",
    duration: 1400
  },
  {
    name: "Huawei",
    link: "https://consumer.huawei.com/tw/",
    image: "company3.jpg",
    duration: 1800
  },
  {
    name: "Ricoh",
    link: "https://www.ricoh.com.tw/",
    image: "company4.jpg",
    duration: 2200
  },
  {
    name: "Husqvarna",
    link: "https://husqvarnataiwan.com.tw/",
    image: "company5.jpg",
    duration: 2600
  },
  {
    name: "Ericsson",
    link: "https://www.ericsson.com/en",
    image: "company6.jpg",
    duration: 3000
  }
];
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
        <h1>台灣首位 IronCAD 總代理，15 年專業經驗，市值得信賴的首選！</h1>
        <h2>
          <strong class="home-video-content-strong"> 迪威科技</strong>
          作為 IronCAD 在台灣的第一個正式總代理，我們已深耕市場超過
          <strong>15</strong>

          年，是目前規模最大、經驗最完整的專業團隊。
          我們不只提供原廠同步技術支援，

          <strong> 更具備全台唯一 IronCAD API 二次開發實力</strong>
          ，能依企業需求 量身打造設計流程、導入自動化操作、無痛轉換舊有平台，
          真正實現從設計到製造的高效整合，幫助客戶大幅提升研發效率與競爭力。
        </h2>

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

  <!--優勢列表-->
  <section class="home-advantages">
    <div class="home-advantages-img">
      <img src="@/assets/images/meeting.png" alt="" />
      <img src="@/assets/images/meeting2.png" alt="" />
    </div>
    <div class="home-advantages-card">
      <div class="home-advantages-box" data-aos="fade-right">
        <i class="bi bi-file-earmark-code"></i>
        <div>
          <h1>依照客戶需求，API客製化</h1>
          <p>
            迪威擁有資歷豐富的工程師專門設計二次開發，致力於研發提高效率及高穩定性的API程式，擁有許多客戶成功案例
            !
          </p>
        </div>
      </div>
      <div class="home-advantages-box" data-aos="fade-left">
        <i class="bi bi-cash-coin"></i>
        <div>
          <h1>經濟實惠，入門簡單，功能強大</h1>
          <p>
            IronCAD 提供彈性授權方案，讓設計團隊以合理成本導入高階功能，
            不需長時間訓練，即可上手，新手也能快速成為高手！
          </p>
        </div>
      </div>
      <div class="home-advantages-box" data-aos="fade-right">
        <i class="bi bi-brush"></i>
        <div>
          <h1>設計即展示，讓銷售與客戶一眼看懂</h1>
          <p>
            即時視覺化呈現，非設計人員也能輕鬆操作與展示，
            不只幫助設計，更成為銷售最有力的助攻！促進跨部門溝通，加速決策與成交！
          </p>
        </div>
      </div>
      <div class="home-advantages-box" data-aos="fade-left">
        <i class="bi bi-clock-history"></i>
        <div>
          <h1>全面提升工作效率，從概念到量產更快一步</h1>
          <p>
            集成多種智慧工具，搭配人性化介面，從發想到建模、從設計到製造，
            IronCAD 全面加速每個環節，讓設計師專注創意、不再為工具分心！
          </p>
        </div>
      </div>
      <div class="home-advantages-box" data-aos="fade-right">
        <i class="bi bi-arrow-repeat"></i>
        <div>
          <h1>無痛資料交換，整合無礙</h1>
          <p>
            同時支援 ACIS 和 Parasolid 兩大核心引擎， 完美匯入各式 3D CAD
            檔案格式（如 SolidWorks、Inventor、STEP
            等），重複使用與再設計都簡單無縫！
          </p>
        </div>
      </div>
      <div class="home-advantages-box" data-aos="fade-left">
        <i class="bi bi-clipboard2-data"></i>
        <div>
          <h1>節省設計時間，靈感無限延伸</h1>
          <p>
            拖放式設計搭配預設特徵與零件目錄資料庫，幾何變化一指搞定！
            只需輕鬆拖曳，即可快速建構或客製複雜模型，加速設計週期，靈感所至，立即呈現！
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--軟體使用企業-->
  <section class="home-company">
    <h1>全球知名 IronCAD 使用者</h1>
    <h2>
      來自製造業、工程、產品設計等多元產業的企業，透過 IronCAD
      大幅提升設計效率、加快產品上市時程，並有效降低開發與生產成本。
    </h2>
    <div>
      <a
        v-for="(company, index) in companies"
        :key="index"
        :href="company.link"
        target="_blank"
      >
        <img
          :src="getImageUrl(company.image)"
          :alt="company.name"
          data-aos="flip-up"
          :data-aos-duration="company.duration"
        />
      </a>
    </div>
  </section>

  <!--統計數據-->
  <section class="home-statistics">
    <h1>IronCAD統計數據</h1>
    <div class="home-statistics-card">
      <div
        class="home-statistics-box"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>50%</h2>
        <p>設計時間縮短達</p>
      </div>
      <div
        class="home-statistics-box"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2>90%</h2>
        <p>高達 90% 的使用者表示學習門檻低、上手快</p>
      </div>

      <div
        class="home-statistics-box"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>2 倍</h2>
        <p>整體專案效率提升 2 倍以上</p>
      </div>
      <div
        class="home-statistics-box"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2>20 萬</h2>
        <p>超過 20 萬設計師信賴</p>
      </div>
      <div
        class="home-statistics-box"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>40%</h2>
        <p>平均導入成本比傳統 CAD 軟體低 40% 以上</p>
      </div>
      <div
        class="home-statistics-box"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2>50+國</h2>
        <p>全球已有 50+ 國使用中</p>
      </div>
    </div>
  </section>

  <!--迪威介紹-->
  <section class="home-info">
    <div class="home-info-overlay"></div>
    <h1>關於迪威科技</h1>
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
    font-size: 36px;
    font-weight: 700;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1px;
    strong {
      color: rgb(172 143 86);
    }
  }
  &-strong {
    font-size: 30px;
    @include MQ(t768) {
      font-size: 3vw;
    }
  }
  p {
    font-size: 14px;
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
      font-size: 2vw;
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
    font-size: 36px;
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
  width: 100%;
  &-img {
    display: flex;
    flex-direction: column;
  }
  img {
    max-height: 400px;
    object-fit: contain;
    @include MQ(t768) {
      display: none;
    }
  }
  &-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    background: black;

    @include MQ(t768) {
      gap: 3vw;
      background: black;
      padding: 3vw;
    }
  }
  &-box {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    color: #fff;

    @include MQ(t768) {
      border: 1px solid #fff;
      border-radius: 10px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    i {
      font-size: 40px;
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      line-height: 1.5;
      letter-spacing: 1px;
      font-size: 12px;
    }
  }
}
.home-company {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  font-weight: 500;
  padding: 40px;
  border-bottom: 1px solid rgb(205, 205, 205);
  @include MQ(t768) {
    padding: 4vw;
  }

  h1 {
    font-size: 40px;
    @include MQ(t768) {
      font-size: 6vw;
    }
  }
  h2 {
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1px;
    @include MQ(t768) {
      font-size: 2vw;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    @include MQ(t768) {
      gap: 2vw;
    }
  }

  img {
    width: 100px;
    object-fit: contain;
    transition: all 0.3s ease;
    cursor: pointer;
    @include MQ(t768) {
      width: 18vw;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
.home-statistics {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  gap: 40px;
  @include MQ(t768) {
    padding: 4vw;
    gap: 20px;
  }
  &-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    @include MQ(t768) {
      width: 100%;
      height: 18vw;
    }
  }
  &-card {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
    @include MQ(t768) {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 每列兩欄 */
      gap: 4vw;
    }
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    @include MQ(t768) {
      font-size: 6vw;
    }
  }
  h2 {
    font-size: 36px;
    @include MQ(t768) {
      font-size: 5vw;
    }
  }
  p {
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1px;
    @include MQ(t768) {
      font-size: 2vw;
      width: 80%;
    }
  }
}
</style>

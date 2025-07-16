<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import { getImageUrl } from "@/utils/getImageUrl";
import "mdb-ui-kit/css/mdb.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
// Swiper modules
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// 提供給 <Swiper> 使用的模組
const modules = [Autoplay, Pagination];
// import { Vue3Marquee } from "vue3-marquee";
const date = new Date();
const year = date.getFullYear();
const DimensionWayYear = year - 2010;
const companies = [
  {
    name: "Hitachi",
    link: "https://hitachi-homeappliances.com.tw/",
    image: "company1.jpg"
  },
  {
    name: "Toyota",
    link: "https://www.toyota.com.tw/showroom/COROLLA_CROSS?gad_source=1&gad_campaignid=14073708874&gbraid=0AAAAADkWlksY_4xpNeVjjs4A3UkdTJtx2&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQXbdmRwdg43IU5Xry5lbUU07VfBiLbn0n8J9aTuRvgemD74DWkdzDxoCsGkQAvD_BwE",
    image: "company2.jpg"
  },
  {
    name: "Huawei",
    link: "https://consumer.huawei.com/tw/",
    image: "company3.jpg"
  },
  {
    name: "Ricoh",
    link: "https://www.ricoh.com.tw/",
    image: "company4.jpg"
  },
  {
    name: "Husqvarna",
    link: "https://husqvarnataiwan.com.tw/",
    image: "company5.jpg"
  },
  {
    name: "Ericsson",
    link: "https://www.ericsson.com/en",
    image: "company6.jpg"
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
        <h1>
          台灣首位 IronCAD 總代理，{{ DimensionWayYear }}
          年專業經驗，市值得信賴的首選！
        </h1>
        <h2>
          <strong class="home-video-content-strong"> 迪威科技</strong>
          作為 IronCAD 在台灣的第一個正式總代理，我們已深耕市場超過
          <strong class="home-video-content-strong">{{
            DimensionWayYear
          }}</strong>

          年，是目前規模最大、經驗最完整的專業團隊。
          我們不只提供原廠同步技術支援，

          <strong> 更具備全台唯一 IronCAD API 二次開發實力</strong>
          ，能依企業需求 量身打造設計流程、導入自動化操作、無痛轉換舊有平台，
          真正實現從設計到製造的高效整合，幫助客戶大幅提升研發效率與競爭力。
        </h2>
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

  <section class="home-mixCard">
    <!--軟體使用企業-->
    <div class="home-company">
      <h1>全球知名使用者</h1>
      <!-- <h2>
        來自製造業、工程、產品設計等多元產業的企業，透過 IronCAD
        大幅提升設計效率、加快產品上市時程，並有效降低開發與生產成本。
      </h2> -->
      <div>
        <a
          v-for="(company, index) in companies"
          :key="index"
          :href="company.link"
          target="_blank"
        >
          <img :src="getImageUrl(company.image)" :alt="company.name" />
        </a>
      </div>
    </div>

    <!--統計數據-->
    <div class="home-statistics">
      <h1>IronCAD統計數據</h1>
      <div class="home-statistics-card">
        <div class="home-statistics-box">
          <h2>50%</h2>
          <p>設計時間縮短達50%</p>
        </div>
        <div class="home-statistics-box">
          <h2>90%</h2>
          <p>高達 90% 的使用者表示學習門檻低、上手快</p>
        </div>

        <div class="home-statistics-box">
          <h2>2 倍</h2>
          <p>整體專案效率提升 2 倍以上</p>
        </div>
        <div class="home-statistics-box">
          <h2>20 萬</h2>
          <p>超過 20 萬設計師信賴</p>
        </div>
        <div class="home-statistics-box">
          <h2>40%</h2>
          <p>平均導入成本比傳統 CAD 軟體低 40% 以上</p>
        </div>
        <div class="home-statistics-box">
          <h2>50+國</h2>
          <p>全球已有 50+ 國使用中</p>
        </div>
      </div>
    </div>
  </section>

  <!--服務內容-->
  <section class="home-news">
    <div class="home-news-card">
      <div class="home-news-box">
        <img src="@/assets/images/home-news1.jpg" alt="" />
        <div>
          <h1>迪威科技攜手IronCAD原廠，實地走訪五家台灣大型用戶</h1>
          <p>
            IronCAD創辦人- 韓道暘博士 與迪威科技實地走訪五家台灣大型用戶
            迪威科技非常榮幸邀請IronCAD, LLC創辦人
            韓道暘博士，與迪威科技現有客戶實地訪談，拜訪各家公司董事長及設計單位，分享IronCAD軟體未來展望，傾聽使用單位對於IronCAD使用反饋，並提供解決方案。
            除此…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news2.jpg" alt="" />
        <div>
          <h1>IronCAD 第二屆創新設計比賽</h1>
          <p>
            2024年10月26日 —
            由迪威科技主辦的「第二屆IronCAD創新設計獎」於今日圓滿落幕。本次比賽吸引了來自全台各大專院校的近30支隊伍踴躍報名，經過初賽篩選，最終有10支優秀團隊脫穎而出，於嘉義長榮文苑酒店進行決賽。
            近年來，由迪威科技所代理的IronCAD在業界市場的成…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news3.jpg" alt="" />
        <div>
          <h1>迪威科技成功開發AI技術客服</h1>
          <p>
            迪威科技成功開發AI技術客服
            迪威科技成功開發AI客服技術，這是公司策略發展的一大步。這項新技術的加入不僅將加強我們對現有客戶的支持，更會提升整體服務效率，進一步鞏固我們在業界的領先地位。
            技術創新 我們的AI客服系統採用最先進的機器學習和自然語言處理技術，…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news4.jpg" alt="" />
        <div>
          <h1>迪威科技成功促成IronCAD論文獎</h1>
          <p>
            迪威科技 – IronCAD 論文獎
            迪威科技長期致力於將最先進的3D設計工具引入教育領域的公司，近年來在教育界的深耕終於取得顯著成果，成功促成了IronCAD論文獎的設立。這項獎項旨在鼓勵學生深入學習和探索IronCAD軟體，並通過創新的設計解決方案展現其應用能力。此…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news5.jpg" alt="" />
        <div>
          <h1>迪威科技成功導入IronCAD進入逢甲大學</h1>
          <p>
            迪威科技成功導入IronCAD進入逢甲大學
            迪威科技自成立以來，一直致力於將先進的設計軟體技術推廣至各行各業，其中，對於教育領域的貢獻尤為顯著。在這個過程中，迪威科技與台灣知名的逢甲大學展開了深入合作，將IronCAD這一強大的3D設計工具成功引入校園，開創了學術與…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news6.jpg" alt="" />
        <div>
          <h1>迪威科技獲獎IronCAD最佳銷售獎</h1>
          <p>
            迪威科技榮獲最佳銷售成長獎
            在2023年舉行的IronCAD全球高峰會上，一場盛大的晚宴吸引了眾人的目光。這一夜，由IronCAD創辦人及CEO韓道暘博士主持的頒獎儀式上，迪威科技被榮膺「2022-2023年度IronCAD最佳銷售成長」，這一榮譽旨在表彰迪威科技在銷售IronCAD方面取得的…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news7.jpg" alt="" />
        <div>
          <h1>IronCAD 2025 10大新功能介紹</h1>
          <p>
            What’s New in IronCAD 2025 IronCAD 2025 十大新功能
            迪威科技非常榮幸的向各位宣布，IronCAD2025正式推出!
            IronCAD2025包含了許多創新且高效的新功能、強化了軟體效能表現以及全新的功能模組，全面提升設計效率與創新的可能性。
            迪威科技作為IronCAD台灣最佳代…
          </p>
        </div>
      </div>
      <div class="home-news-box">
        <img src="@/assets/images/home-news8.jpg" alt="" />
        <div>
          <h1>IronCAD DCS 2025 的 PU1 更新現已正式發布！</h1>
          <p>
            IronCAD DCS 2025 的 PU1 更新現已正式發布！ IronCAD 2025 產品更新 1
            包含一系列新功能和增強功能，旨在提高您設計流程的效率、靈活性和準確性。此版本包含各個模組的重大更新，確保使用者能夠利用最新的工具和功能來優化工作流程。
            此次更新最突出的新功能之一是管…
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 迪威介紹 -->
  <section class="home-info">
    <h1>DimensionWay</h1>
    <img src="@/assets/images/dimensionWay-logo.png" alt="" />
    <swiper
      :modules="modules"
      class="home-swiper"
      :pagination="{
        dynamicBullets: true
      }"
      :autoplay="{
        delay: 5000, // 每 3 秒輪播一次
        disableOnInteraction: false // 使用者互動後仍繼續自動播放
      }"
      loop
    >
      <swiper-slide class="home-swiper-slide">
        迪威科技深耕 3D 設計領域超過
        {{ DimensionWayYear }} 年，為台灣唯一同時提供北中南全區技術支援的
        IronCAD
        核心代理商。從銷售、培訓到客製開發，提供一站式全方位服務，是您邁向數位轉型的最佳夥伴。</swiper-slide
      >
      <swiper-slide class="home-swiper-slide"
        >迪威科技擁有一支經驗豐富的工程師團隊，提供 獨家 API
        二次開發技術，免費贈送給購買用戶，讓您的 IronCAD
        軟體與企業流程完美整合、效能再進化！</swiper-slide
      ><swiper-slide class="home-swiper-slide"
        >包括台達電在內的眾多大型企業，皆選擇由迪威科技導入 IronCAD。超過 250
        套系統的成功部署，證明我們在 專案管理、平台轉移與技術整合
        方面的領先實力，是您值得託付的長期合作夥伴。</swiper-slide
      >
      <swiper-slide class="home-swiper-slide"
        >迪威科技設有台北、台中、台南辦公室，即時提供技術支援與教育訓練。無論您在哪個城市，我們都能在第一時間幫您解決問題，讓您專注設計、穩健生產。</swiper-slide
      ><swiper-slide class="home-swiper-slide"
        >無論您是設計師、工程單位，還是企業團隊，迪威科技都能依據需求提供
        顧問式導入服務與完整培訓課程，快速提升 IronCAD
        操作效率與設計能力。</swiper-slide
      >
      <swiper-slide class="home-swiper-slide"
        >IronCAD 是全球頂尖的 3D
        工業設計工具，**選對代理，事半功倍！**迪威科技不只是銷售軟體，更提供完整解決方案，協助您加速設計流程、強化團隊競爭力，全面升級您的產品開發能力。</swiper-slide
      >
    </swiper>
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
  gap: 30px;
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
  gap: 30px;
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
    min-width: 230px;
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
  padding: 100px 60px;
  gap: 30px;
  @include MQ(t768) {
    padding: 8vw 4vw;
    gap: 6vw;
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border: 1px solid rgb(205, 205, 205);
    border-radius: 50%;
    padding: 10px;
    @include MQ(t768) {
      width: 14vw;
      height: 14vw;
    }
  }
  h1 {
    font-size: 50px;
    font-weight: 500;
    font-family: "Playfair", serif;
    font-weight: 600;
    @include MQ(t768) {
      font-size: 8vw;
    }
  }
  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  p {
    position: relative;
    z-index: 2;
    line-height: 1.8;
    font-size: 14px;
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
.home-mixCard {
  display: flex;
  justify-content: space-around;
  padding: 80px 40px;
  width: 100%;
  gap: 20px;
  div {
    max-width: 400px;
    @include MQ(t768) {
      max-width: 100%;
    }
  }
  @include MQ(t768) {
    flex-direction: column;
    padding: 4vw;
    gap: 6vw;
  }
}
.home-company {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 50%;
  font-weight: 500;
  @include MQ(t768) {
    width: 100%;
    gap: 4vw;
  }

  h1 {
    font-size: 30px;
    text-align: center;
    letter-spacing: 1px;
    @include MQ(t768) {
      font-size: 5vw;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每列兩欄 */
    width: 100%;
    gap: 20px;
    @include MQ(t768) {
      gap: 2vw;
    }
    a {
      text-align: center;
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
  align-items: center;
  flex-direction: column;
  width: 50%;
  gap: 40px;
  @include MQ(t768) {
    gap: 6vw;
    width: 100%;
  }
  &-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100px;
    height: 100px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    @include MQ(t768) {
      width: 100%;
      height: 18vw;
    }
  }
  &-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每列兩欄 */
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    @include MQ(t768) {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 每列兩欄 */
      gap: 4vw;
    }
  }
  h1 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;

    @include MQ(t768) {
      font-size: 5vw;
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
.home-news {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    font-weight: 500;
    @include MQ(t768) {
      font-size: 6vw;
    }
  }

  &-card {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 每列兩欄 */
    width: 100%;
    padding: 36px;
    background: linear-gradient(135deg, #596670, #8d99ae, #edf2f4);
    @include MQ(d1366) {
      grid-template-columns: repeat(3, 1fr); /* 每列兩欄 */
    }

    @include MQ(d1120) {
      grid-template-columns: repeat(2, 1fr); /* 每列一欄 */
    }
  }
  &-box {
    position: relative; // 讓子元素絕對定位的參考點
    overflow: hidden; // 避免放大後溢位
    aspect-ratio: 1 / 1;
    cursor: pointer;

    img,
    p {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }

    img {
      object-fit: cover;
      display: block;
    }

    div {
      opacity: 0; // 預設隱藏
      position: absolute;
      top: 0;
      left: 0;
      gap: 40px;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8); // 半透明遮罩
      color: #fff;
      padding: 30px;
      h1 {
        position: relative;
        font-size: 20px;
        text-align: center;
      }
      p {
        letter-spacing: 1px;
        line-height: 1.5;
        text-align: center;
        height: auto;
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
        z-index: 1;
      }
      div {
        opacity: 1; // 文字淡入
        z-index: 2;
      }
    }
  }
}
.home-swiper {
  width: 100%;
  height: 100%;
}

.home-swiper-slide {
  text-align: center;
  font-size: 20px;
  display: flex;
  height: 140px;
  margin-top: 10px;
  @include MQ(t768) {
    font-size: 2.8vw;
    height: 20vw;
  }
}
</style>

<script setup lang="ts">
// import { getImageUrl } from "@/utils/getImageUrl";
// import "mdb-ui-kit/css/mdb.min.css";
</script>

<template>
  <section class="authorize">
    <div class="authorize-header">
      <h1>一次買斷、永久授權 IronCAD 為企業打造最划算的 3D 設計投資</h1>
      <p>
        IronCAD
        採用買斷式授權模式，企業只需一次性投資即可永久擁有軟體使用權，無須承擔持續的訂閱費用負擔。這款專業級
        3D 設計軟體與 CAD
        解決方案，特別適合中小型企業及設計工作室進行高精度的立體建模與產品開發作業，透過長期使用有效控制營運成本，創造卓越的投資效益。
        迪威科技提供多元化的採購選擇與在地化技術服務，幫助企業明智選購 IronCAD
        3D 設計平台，穩步提升設計能量，強化團隊專業優勢。採用
        IronCAD，掌握先進的立體建模與 CAD 技術應用，開創設計領域的全新標竿。
      </p>
    </div>
  </section>
  <section class="authorize-info">
    <div>
      <img src="@/assets/images/authorize-info1.png" alt="" />
      <h1>USB Dongle 授權</h1>
      <p>
        透過 USB Dongle
        控制軟體使用權限，插入已安裝IronCAD的電腦即可直接執行，免註冊程序。需要在多台設備間使用時，只需移動
        USB Dongle 至目標電腦即可立即啟用，提供高度使用彈性。
      </p>
      <router-link to="/">USB授權 教學</router-link>
    </div>
    <div>
      <img src="@/assets/images/authorize-info2.png" alt="" />
      <h1>單機授權</h1>
      <p>
        序號限定於一台特定電腦使用，適合單一用戶或單一工作站環境。系統重灌或更換電腦時，可透過線上自助平台進行授權轉移或重新授權。
      </p>
      <router-link to="/">單機授權 教學</router-link>
      <router-link to="/">單機授權更新 教學</router-link>
      <router-link to="/">單機授權移除 教學</router-link>
    </div>
    <div>
      <img src="@/assets/images/authorize-info3.png" alt="" />
      <h1>網路版授權</h1>
      <p>
        授權序號集中存放於內部伺服器，各電腦透過區域網路連線取得使用權限。適合多授權企業統一管控，可裝於多台電腦但同時使用數不得超過購買授權數量。
      </p>
      <router-link to="/">網路版伺服器授權 教學</router-link>

      <router-link to="/">使用者配置 教學</router-link>

      <router-link to="/">網路版授權借出 教學</router-link>
    </div>
  </section>
  <section class="ironCAD-table">
    <h1>IronCAD的電腦設備建議</h1>
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>最低設備</th>
          <th>建議設備</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>作業系統</td>
          <td>
            64 位元版本的 Windows<br />
            Microsoft Windows 11<br />
            Microsoft Windows 10<br />
            Microsoft Windows 8.1
          </td>
          <td>
            64 位元版本的 Windows<br />
            Microsoft Windows 11<br />
            Microsoft Windows 10
          </td>
        </tr>
        <tr>
          <td>中央處理器</td>
          <td>
            1.6 GHz 或更快的多核心處理器<br />
            Intel Xeon 系列<br />
            Intel Core i 系列<br />
            AMD Opteron 系列<br />
            AMD Athlon 系列或更高版本
          </td>
          <td>
            2.0 GHz 或更快的多核心處理器<br />
            Intel Xeon 系列<br />
            Intel Core i 系列<br />
            AMD Ryzen 系列
          </td>
        </tr>
        <tr>
          <td>記憶體</td>
          <td>8 GB 或更多</td>
          <td>16 GB 或更多</td>
        </tr>
        <tr>
          <td>GPU</td>
          <td>DirectX 9 或 OpenGL 2 相容顯示卡（256 MB 或更多視訊記憶體）</td>
          <td>
            DirectX 11 或 OpenGL 2 相容顯示卡（中階或以上）<br />
            NVIDIA Quadro / GeForce 系列<br />
            AMD Radeon Pro / Radeon 系列<br />
            *GPU 記憶體 4GB 或以上
          </td>
        </tr>
        <tr>
          <td>儲存空間</td>
          <td>10 GB 或更多可用空間</td>
          <td>10 GB 或更多可用空間</td>
        </tr>
        <tr>
          <td>顯示器解析度</td>
          <td>1280 x 768 或更高</td>
          <td>1920 x 1080 或更高</td>
        </tr>
        <tr>
          <td>應用</td>
          <td>網路瀏覽器/Adobe Reader</td>
          <td>Microsoft Excel<br />（BOM 運動／參數運動）</td>
        </tr>
        <tr>
          <td>其他的</td>
          <td colspan="2">
            連接到網際網路<br />
            * 單機許可證透過網路啟動許可
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped lang="scss">
.authorize {
  position: relative;
  width: 100%;
  padding: 120px 80px;
  overflow: hidden;
  z-index: 0;
  @include MQ(t768) {
    padding: 8vw;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("@/assets/images/authorize-bg.jpg");
    background-position: center;
    background-size: cover;
    filter: grayscale(80%);
    z-index: -1;
  }
}
.authorize-header {
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #fff;
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: rgb(255, 153, 0);

    @include MQ(t768) {
      font-size: 5vw;
    }
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
    letter-spacing: 1px;
    width: 100%;
    @include MQ(t768) {
      font-size: 3vw;
    }
  }
}
.authorize-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 80px;
  @include MQ(d1120) {
    display: flex;
    flex-direction: column;
  }
  @include MQ(t768) {
    padding: 2vw;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @include MQ(t768) {
      gap: 4vw;
    }
  }
  img {
    height: 200px;
    width: 300px;
    object-fit: contain;
  }
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: rgb(172, 143, 86);
    @include MQ(t768) {
      font-size: 5vw;
    }
  }
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
    letter-spacing: 1px;
    width: 100%;
    height: 240px;
    padding: 10px;
    @include MQ(d1120) {
      height: 100%;
    }

    @include MQ(t768) {
      font-size: 3vw;
    }
  }
  a {
    width: 94%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: rgb(0, 191, 255);
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    box-shadow: 4px 4px rgb(146, 150, 151);
    text-align: center;
    @include MQ(t768) {
      font-size: 3vw;
      padding: 2vw;
    }
    &:hover {
      background: rgb(255, 153, 0);
    }
  }
}
.ironCAD-table {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  @include MQ(t768) {
    padding: 5vw;
  }

  h1 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    color: black;
    @include MQ(t768) {
      font-size: 6vw;
    }
  }
  table,
  tbody,
  tr,
  td,
  th {
    border: 1px solid #444;
    background: rgb(255, 242, 216);
    color: black;
    padding: 4px;
    line-height: 1.5;
    font-weight: 500;
    @include MQ(t768) {
      font-size: 2.4vw;
    }
  }
}
</style>

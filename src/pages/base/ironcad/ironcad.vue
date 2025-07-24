<script setup lang="ts">
// import { getImageUrl } from "@/utils/getImageUrl";
// import "mdb-ui-kit/css/mdb.min.css";
</script>

<template>
  <div class="ironCAD">
    <section class="ironCAD-info">
      <div class="ironCAD-info-content">
        <!-- <img src="@/assets/images/logo.png" alt="" class="ironCAD-info-logo" /> -->
        <h2>使用 IronCAD 工作效率更高</h2>
        <p>
          結合創新設計與直覺操作的3D建模工具，支援拖放式建模。即時視覺化設計，提升團隊溝通與開發效率，快速完成產品開發。
        </p>
        <div>
          <button class="ironCAD-info-freeBtn">免費試用</button>
          <button class="ironCAD-info-downloadBtn">聯絡我們</button>
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
      <h1>IronCAD 專業3D建模功能與優勢</h1>
      <div class="ironCAD-advantage-card" data-aos="fade-right">
        <img src="@/assets/images/advantage1.png" alt="" />
        <div>
          <h2>直覺式3D建模設計</h2>
          <h3>
            IronCAD和一般3D
            CAD相似，具有草圖與特徵建立的功能。IronCAD具有多元化建構模型的彈性，設計師可以為圖塊目錄建立所需的3D圖塊，作為後續標準化的特徵再利用，大幅加速設計流程。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-left">
        <img src="@/assets/images/advantage2.png" alt="" />
        <div>
          <h2>智能圖庫與參數化設計</h2>
          <h3>
            IronCAD內建豐富的智能圖庫，包含大量的幾何圖形、板金、材質、五金工具之外，只需透過滑鼠拖拉就能輕鬆運用，也提供使用者客製化建立屬於自己的圖庫，能有效的管理圖檔資源，重複利用。
          </h3>
        </div>
      </div>

      <div class="ironCAD-advantage-card" data-aos="fade-right">
        <img src="@/assets/images/advantage3.png" alt="" />
        <div>
          <h2>專利三維球操作技術</h2>
          <h3>
            IronCAD專利三維球，在設計時使用者能快速直覺地將選取的物件進行移動、旋轉、複製、鏡像等操作，無需使用拘束即可完成零件組裝。
          </h3>
        </div>
      </div>

      <div class="ironCAD-advantage-card" data-aos="fade-left">
        <img src="@/assets/images/advantage4.png" alt="" />
        <div>
          <h2>單一設計環境</h2>
          <h3>
            IronCAD由於無零件與裝配體的附檔名區別，完全展現了由上而下(Top Down
            Design)的設計模式，在單一檔案中進行多零件設計並同時進行組裝，無論多少個零件只需儲存一個檔案。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-right">
        <img src="@/assets/images/advantage5.png" alt="" />
        <div>
          <h2>雙核心建模技術：ACIS + Parasolid</h2>
          <h3>
            IronCAD同時具備ACIS與Parasolid核心技術，有助於建立複雜幾何並解決讀取外部檔案破面或失敗。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-left">
        <img src="@/assets/images/advantage6.png" alt="" />
        <div>
          <h2>輕易編輯外部格式圖檔</h2>
          <h3>
            IronCAD針對外部格式檔案匯後，可以通過直接面編輯的功能來編輯無設計歷程的零件，有效的達到圖檔再利用。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-right">
        <img src="@/assets/images/advantage7.png" alt="" />
        <div>
          <h2>內含與AutoCAD相容工程圖</h2>
          <h3>
            IronCAD
            Draft內建工程圖系統，軟體核心與AutoCAD相容，支援AutoCAD操作及指令，可重複使用原有圖框及標註樣式等資訊，使用者可以無痛轉換
            , 更棒的是3D 設變 , 工程圖同步更新 , 達成3D 與DWG同步工程的功能 。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-left">
        <img src="@/assets/images/advantage8.png" alt="" />
        <div>
          <h2>獨家智能裝配</h2>
          <h3>
            IronCAD在組立件設計的最大特色就是能夠將組立件非常快速地直接裝配，IronCAD提供預先設置約束定義，IronCAD通過目錄資料直覺地將右方零件直接拖拉至設計頁面，IronCAD
            便會智能化地將裝配條件自動完成。此外IronCAD可利用智能附著點搭配參數化使用。
          </h3>
        </div>
      </div>
      <div class="ironCAD-advantage-card" data-aos="fade-right">
        <img src="@/assets/images/advantage9.png" alt="" />
        <div>
          <h2>支援大規模組裝</h2>
          <h3>
            由於IronCAD自由的創作模式，大規模組裝不需要在意歷史或父子關係，可以任意的移動、刪除、抑制、重塑每個零件或裝配體。
          </h3>
        </div>
      </div>
    </section>
    <section class="ironCAD-superb">
      <h1>IronCAD能夠加速您的設計流程</h1>
      <div class="ironCAD-superb-box" data-aos="fade-down">
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb1.png" alt="" />
            <h2>拉伸、旋轉、疊層拉伸</h2>
          </div>

          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb2.png" alt="" />
            <h2>2D草圖</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb3.png" alt="" />
            <h2>2D曲線/3D曲線功能</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb4.png" alt="" />
            <h2>曲面設計與G2曲率連續</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb5.png" alt="" />
            <h2>布林運算</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb6.png" alt="" />
            <h2>裝配干涉檢查與機構模擬</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb7.png" alt="" />
            <h2>3D PMI產品製造資訊</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb8.png" alt="" />
            <h2>草圖拘束</h2>
          </div>
          <p>
            與傳統的3D
            CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
          </p>
        </div>
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
    h2 {
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
    transition: all 0.3s ease;
    @include MQ(t768) {
      padding: 2vw 4vw;

      font-size: 3vw;
    }
    &:hover {
      background: rgb(0, 0, 0);
      color: #fff;
      transform: scale(1.1);
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
    transition: all 0.3s ease;

    @include MQ(t768) {
      padding: 2vw 3vw;
      font-size: 3vw;
    }
    &:hover {
      background: rgb(65, 90, 129);
      transform: scale(1.1);
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
  display: flex;
  flex-direction: column;
  gap: 60px;
  background: linear-gradient(135deg, #04c9ff, #3749d3, #541caa);
  padding: 70px;
  @include MQ(d1120) {
    padding: 8vw 12vw;
    gap: 8vw;
  }
  h1 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    color: black;
    @include MQ(t768) {
      font-size: 5vw;
    }
  }
  &-card {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 50px;
    @include MQ(d1120) {
      flex-direction: column;
      gap: 6vw;
      height: auto;
    }
    img {
      border-radius: 30px;
      transition: all 0.3s ease;
      aspect-ratio: 3 / 2;
      width: 360px;
      height: 240px;
      border: 3px solid #120030;
      box-shadow: 14px 16px rgba(0, 0, 0, 0.6);

      @include MQ(d1120) {
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
      justify-content: center;
      gap: 20px;
      width: 50%;
      height: 240px;
      color: #fff;
      @include MQ(d1120) {
        justify-content: start;
        height: auto;
        width: 100%;
        gap: 3vw;
      }

      h2 {
        font-size: 30px;
        letter-spacing: 1px;
        font-weight: 700;
        text-shadow: 4px 4px rgba(0, 0, 0, 0.4);
        @include MQ(t768) {
          font-size: 5vw;
        }
      }
      h3 {
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 1px;
        font-weight: 700;
        @include MQ(t768) {
          font-size: 3vw;
        }
      }
    }
  }
}
.ironCAD-superb {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  background: black;
  color: #fff;
  @include MQ(d1120) {
    padding: 5vw;
    gap: 5vw;
  }
  h1 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    @include MQ(t768) {
      font-size: 5vw;
    }
  }
  &-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @include MQ(d1120) {
      grid-template-columns: repeat(3, 1fr);
    }
    @include MQ(t768) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include MQ(m480) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    cursor: crosshair;
    &:hover img {
      opacity: 0.2;
    }
    &:hover h2 {
      opacity: 1;
    }

    div {
      position: relative;
    }
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
      border: 1px solid #444;
      object-fit: contain;
      transition: all 0.3s ease;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      opacity: 0;
      width: 100%;
      text-align: center;
      transition: all 0.3s ease;
      padding: 10px;
    }
    p {
      padding: 20px;
      line-height: 1.5;
      letter-spacing: 2px;
      border: 1px solid #444;
      border-top: none;
      border-radius: 0 0 10px 10px;
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
      font-size: 5vw;
    }
  }
  table,
  tbody,
  tr,
  td,
  th {
    border: 1px solid #444;
    background: rgb(187, 214, 255);
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

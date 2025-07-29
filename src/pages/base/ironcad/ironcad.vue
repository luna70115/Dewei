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
      <h1>3D建模功能與優勢</h1>

      <div class="ironCAD-advantage-block">
        <div class="ironCAD-advantage-cardBox">
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage1.png" alt="" />
            <div>
              <h2>直覺式3D建模設計</h2>
              <h3>
                IronCAD和一般3D
                CAD相似，具有草圖與特徵建立的功能。IronCAD具有多元化建構模型的彈性，設計師可以為圖塊目錄建立所需的3D圖塊，作為後續標準化的特徵再利用，大幅加速設計流程。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage2.png" alt="" />
            <div>
              <h2>智能圖庫與參數化設計</h2>
              <h3>
                IronCAD內建豐富的智能圖庫，包含大量的幾何圖形、板金、材質、五金工具之外，只需透過滑鼠拖拉就能輕鬆運用，也提供使用者客製化建立屬於自己的圖庫，能有效的管理圖檔資源，重複利用。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage3.png" alt="" />
            <div>
              <h2>專利三維球操作技術</h2>
              <h3>
                IronCAD專利三維球，在設計時使用者能快速直覺地將選取的物件進行移動、旋轉、複製、鏡像等操作，無需使用拘束即可完成零件組裝。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage4.png" alt="" />
            <div>
              <h2>單一設計環境</h2>
              <h3>
                IronCAD由於無零件與裝配體的附檔名區別，完全展現了由上而下(Top
                Down
                Design)的設計模式，在單一檔案中進行多零件設計並同時進行組裝，無論多少個零件只需儲存一個檔案。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage5.png" alt="" />
            <div>
              <h2>雙核心建模技術：ACIS + Parasolid</h2>
              <h3>
                IronCAD同時具備ACIS與Parasolid核心技術，有助於建立複雜幾何並解決讀取外部檔案破面或失敗。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage6.png" alt="" />
            <div>
              <h2>輕易編輯外部格式圖檔</h2>
              <h3>
                IronCAD針對外部格式檔案匯後，可以通過直接面編輯的功能來編輯無設計歷程的零件，有效的達到圖檔再利用。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage7.png" alt="" />
            <div>
              <h2>內含與AutoCAD相容工程圖</h2>
              <h3>
                IronCAD
                Draft內建工程圖系統，軟體核心與AutoCAD相容，支援AutoCAD操作及指令，可重複使用原有圖框及標註樣式等資訊，使用者可以無痛轉換
                , 更棒的是3D 設變 , 工程圖同步更新 , 達成3D 與DWG同步工程的功能
                。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage8.png" alt="" />
            <div>
              <h2>獨家智能裝配</h2>
              <h3>
                IronCAD在組立件設計的最大特色就是能夠將組立件非常快速地直接裝配，IronCAD提供預先設置約束定義，IronCAD通過目錄資料直覺地將右方零件直接拖拉至設計頁面，IronCAD
                便會智能化地將裝配條件自動完成。此外IronCAD可利用智能附著點搭配參數化使用。
              </h3>
            </div>
          </div>
          <div class="ironCAD-advantage-card">
            <img src="@/assets/images/advantage9.png" alt="" />
            <div>
              <h2>支援大規模組裝</h2>
              <h3>
                由於IronCAD自由的創作模式，大規模組裝不需要在意歷史或父子關係，可以任意的移動、刪除、抑制、重塑每個零件或裝配體。
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ironCAD-superb">
      <h1>IronCAD能夠加速您的設計流程</h1>
      <div class="ironCAD-superb-box">
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb1.png" alt="" />
            <h2>
              與傳統的3D
              CAD類似，創建草圖和建模的功能，使用此方法可以創建圖庫中沒有的形狀。
            </h2>
          </div>

          <p>拉伸、旋轉、疊層拉伸</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb2.png" alt="" />
            <h2>
              DWG/DXF
              可以作為橫斷面匯入，您可以選擇要匯入的圖層，例如中心線和隱藏線，也可以將其放置在
              3D 空間中並參考它進行建模。
            </h2>
          </div>
          <p>2D草圖</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb3.png" alt="" />
            <h2>
              您可以在IronCAD指定3D曲線的控制點位置和切線大小（以插入點為單位），顯示曲率生成精確的曲線。
            </h2>
          </div>
          <p>2D曲線/3D曲線功能</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb4.png" alt="" />
            <h2>
              IronCAD
              產品曲面設計，滿足產品設計在曲面與3D曲線建構需求，G2曲率連續品質，快速通過曲面縫合實體，建立精確3D模型。
            </h2>
          </div>
          <p>曲面設計與G2曲率連續</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb5.png" alt="" />
            <h2>您可以在創建零件後對各個零件進行組合、減去和相交。</h2>
          </div>
          <p>布林運算</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb6.png" alt="" />
            <h2>
              透過組裝和放置拘束可以進行操作驗證，您可以即時檢查碰撞和乾擾。
            </h2>
          </div>
          <p>裝配干涉檢查與機構模擬</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb7.png" alt="" />
            <h2>
              在3D模型中包含尺寸、註釋、公差、表面光潔度、焊接和基準，這些可以轉移到
              2D 環境（Draft）中。
            </h2>
          </div>
          <p>3D PMI產品製造資訊</p>
        </div>
        <div class="ironCAD-superb-card">
          <div>
            <img src="@/assets/images/superb8.png" alt="" />
            <h2>
              此功能可讓您在對齊零件或草圖中繪圖時設定角度等條件，僅在必要時使用約束。
            </h2>
          </div>
          <p>草圖拘束</p>
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
    padding: 180px 60px;

    @include MQ(t768) {
      padding: 14vw 6vw;
      gap: 6vw;
      min-width: 0;
    }
    h2 {
      font-size: 50px;
      font-weight: 900;
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
  gap: 40px;
  // background: linear-gradient(135deg, #04c9ff, #3749d3, #541caa);
  padding: 70px;
  @include MQ(d1120) {
    padding: 8vw 12vw;
    gap: 6vw;
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
  &-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // background: #ededed;
    border: 2px solid #120030;
    // border-radius: 20px;
    height: 100%;
  }
  &-cardBox {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 60px;
    height: 600px; // 滾軸樣式
    padding: 30px;
    &::-webkit-scrollbar {
      width: 10px; // 滾軸寬度
    }

    &::-webkit-scrollbar-track {
      background-color: #aaaaaa; // 滾軌背景色
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff870e; // 滾軸本體顏色
      border-radius: 4px;
    }

    @include MQ(t768) {
      height: 50vw;
      padding: 0;
      gap: 0;
    }
  }
  &-card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 20px;
    transition: all 0.3s ease;
    &:hover {
      background: #e1e1e1;
      border-radius: 20px;
    }
    @include MQ(d1120) {
      flex-direction: column;
      gap: 4vw;
      height: auto;
    }
    img {
      border-radius: 30px;
      transition: all 0.3s ease;
      aspect-ratio: 3 / 2;
      width: 360px;
      height: 240px;
      border: 3px solid #120030;
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.6);

      @include MQ(d1120) {
        width: 50%;
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
      align-items: center;
      gap: 20px;
      width: 50%;
      height: 240px;
      color: #5c5c5c;
      @include MQ(d1120) {
        justify-content: start;
        height: auto;
        width: 100%;
        gap: 3vw;
      }

      h2 {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 700;
        // text-shadow: 4px 4px rgba(0, 0, 0, 0.4);
        color: black;
        @include MQ(t768) {
          font-size: 3vw;
        }
      }
      h3 {
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 1px;
        font-weight: 700;
        @include MQ(t768) {
          font-size: 2vw;
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
  color: black;
  @include MQ(d1120) {
    padding: 5vw;
    gap: 5vw;
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
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    &:hover img {
      opacity: 0.2;
    }
    &:hover h2 {
      opacity: 1;
    }
    &:hover p {
      background: black;
      color: #fff;
    }
    div {
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
      object-fit: contain;
      transition: all 0.3s ease;
    }
    h2 {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px 10px 0 0;
      font-size: 30px;
      opacity: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 0.3s ease;
      background: rgb(0, 0, 0);
      color: #fff;
      padding: 0 40px;
      letter-spacing: 1px;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 2px;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      height: 100%;
      font-size: 20px;
      font-weight: 700;
      border-top: none;
      border-radius: 0 0 10px 10px;
      transition: all 0.3s ease;
    }
  }
}
</style>

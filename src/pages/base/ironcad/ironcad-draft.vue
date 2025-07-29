<script setup lang="ts">
// import { getImageUrl } from "@/utils/getImageUrl";
// import "mdb-ui-kit/css/mdb.min.css";
</script>

<template>
  <div class="draft2D">
    <section class="draft2D-info">
      <img src="@/assets/images/draft2D.png" alt="" />
      <div>
        <h1>IronCAD Draft 2D</h1>
      </div>
    </section>
    <section class="draft2D-content">
      <div class="draft2D-content-card">
        <div class="draft2D-content-box">
          <div>
            <h1>操作介面</h1>
            <p>
              IronCAD Draft
              擁有易於使用的操作環境，其中包括功能表、工具列、繪圖區、命令欄、屬性選項框和狀態欄，這些都與AutoCAD操作相一致。IronCAD
              Draft的互動式操作設計能即時反映使用者功能選單的交互狀態，從而節省大量指令交互操作時間。
            </p>
          </div>
          <img src="@/assets/images/draft2D1.png" alt="" />
        </div>
        <div class="draft2D-content-box">
          <div>
            <h1>指令操作</h1>
            <p>
              IronCAD Draft
              擁有與AutoCAD一致的繪圖命令結構，使得習慣於2D操作的使用者能夠輕鬆適應並快速熟悉。
              舉例來說，IronCAD Draft 包含了多種核心繪圖指令，如圓形繪製（指令
              C）、線條創建（指令 L）、弧線生成（指令 A）、矩形製作（指令
              REC）、剪切調整（指令 TR）、標註風格設定（指令 D）、層級管理（指令
              LAYER）、塊狀結構構建（指令 B）、元素拆分（指令 X）等。
            </p>
          </div>
          <img src="@/assets/images/draft2D2.png" alt="" />
        </div>
        <div class="draft2D-content-box">
          <div>
            <h1>圖層樣式管理系統</h1>
            <p>
              IronCAD Draft
              擁有高效的樣式管理器，它支援包括幾何符號、明細表格、尺寸標註、引線型式等在內的多種製圖規範元素的配置。
              圖層管理功能提供了對圖層顯示狀態的精確控制，並且允許用戶為每一個圖層定制顏色、線型和線寬，以減少圖形的視覺混亂。
              為了滿足不同圖紙尺寸的需求，其線性管理工具使得使用者可以調節線型的比例，保證線條的長度和寬度與圖紙的大小相匹配。
            </p>
          </div>
          <img src="@/assets/images/draft2D3.png" alt="" />
        </div>
        <div class="draft2D-content-box">
          <div>
            <h1>2D機械零件圖庫</h1>
            <p>
              在IronCAD Draft
              中，用戶可以使用螺栓、螺帽、軸承等標準機械零件的廣泛參數化圖庫，這些元素符合機械繪圖規範。
              提供包括銷、鍵、法蘭以及型鋼和彈簧等在內的多樣化標準圖符，專門為機械設計領域的需求設計。
              此外，IronCAD Draft
              支援靈活的圖庫管理和定製功能，提供管接頭、電子符號和液壓氣動符號等完整的零件庫，方便用戶根據自己的設計需求進行調整和擴充。
            </p>
          </div>
          <img src="@/assets/images/draft2D4.png" alt="" />
        </div>
        <div class="draft2D-content-box">
          <div>
            <h1>3D與2D關聯性</h1>
            <p>
              IronCAD Draft
              支援從各種3D或中繼檔案格式匯入資料，並能開啟這些3D檔案來建構2D的投影圖。它使得創建剖面圖、局部放大圖、標注零件號碼以及產生零件表（BOM）變得迅速便捷。此外，它具備編輯聯動功能，這意味著一旦3D幾何圖形有所更動，與之相關的IronCAD
              Draft的投影圖和尺寸標註也會自動進行更新。
            </p>
          </div>
          <img src="@/assets/images/draft2D5.png" alt="" />
        </div>
      </div>
    </section>
    <section class="draft2D-advantages">
      <div class="draft2D-advantages-card">
        <div class="draft2D-advantages-box1">
          <h1>還在等什麼？立即體驗 IronCAD 的效能提升！</h1>
          <p>
            代替Auto CAD最佳首選2D建模軟體/操作＆介面與Auto CAD相容/支援Auto
            CAD快捷命令/支援匯出＆匯入DWG、DXF/與IronCAD 3D
            整合連動/無痛轉換、快速上手
          </p>
          <button>免費試用下載</button>
        </div>
        <div class="draft2D-advantages-box2">
          <button>
            IronCAD Draft 遵循標準製圖規範，專注於機械工程尺寸和符號標註。
          </button>

          <button>提供熟悉的AutoCAD界面和命令，簡化學習過程。</button>

          <button>容AutoCAD 2021及更早版本至R12的DWG/DXF文件格式</button>

          <button>
            適合專業CAD使用者、工程師和教育工作者的標準2D CAD工具。
          </button>
          <button>支持建立、編輯、查看和標記2D及3D DWG文件。</button>
          <button>
            在線型、圖層、圖塊、尺寸樣式和文字樣式上實現高度兼容，可編輯圖框屬性。
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.draft2D {
  width: 100%;
}
.draft2D-info {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    height: 100%;
  }
  div {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    gap: 30px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    @include MQ(t768) {
      padding: 6vw;
      gap: 5vw;
    }

    h1 {
      font-size: 80px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #86b8ed22;
      text-shadow: 0 0 10px #02b7ff;
      @include MQ(t768) {
        font-size: 9vw;
      }
    }
  }
}

.draft2D-content {
  display: flex;
  flex-direction: column;
  &-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 60px 120px;
    margin: 0 auto;
    @include MQ(t768) {
      padding: 6vw;
      gap: 10vw;
    }
  }
  &-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding: 20px;
    position: relative;
    font-size: 16px;
    background-color: transparent;
    overflow: hidden;
    z-index: 1;
    @include MQ(d1120) {
      flex-direction: column;
      gap: 4vw;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      letter-spacing: 1px;
      width: 60%;
      gap: 10px;
      @include MQ(t768) {
        gap: 3vw;
        width: 100%;
      }
      h1 {
        font-size: 30px;
        text-align: center;
        font-weight: 700;
        color: black;
        @include MQ(t768) {
          font-size: 5vw;
        }
      }
      p {
        color: #444;
        line-height: 1.5;
        letter-spacing: 1px;
        font-size: 14px;
        text-align: center;
        @include MQ(t768) {
          font-size: 3vw;
        }
      }
    }
    img {
      width: 100%;
      max-width: 400px;
      object-fit: contain;
      border-radius: 20px;
      border: 2px solid #444;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
      @include MQ(t768) {
        width: 100%;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgb(225, 225, 225);
      transform: translateX(-100%);
      transition: transform 0.5s ease;
      z-index: -1;
    }
    &:hover::before {
      transform: translateX(0);
    }
  }
}

.draft2D-advantages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  gap: 30px;
  animation: gradientFlow 12s ease infinite;
  background: linear-gradient(135deg, #8e8e8e, #4a4a4a, #000000);
  background-size: 400% 400%;
  @include MQ(t768) {
    padding: 6vw;
    gap: 5vw;
  }
  &-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    @include MQ(d1120) {
      flex-direction: column;
    }
  }
  &-box1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 90%;
    padding: 50px;
    border-radius: 110px 10px 110px 10px;
    --s: 200px; /* control the size */
    --c1: #1d1d1d;
    --c2: #4e4f51;
    --c3: #3c3c3c;
    background:
      repeating-conic-gradient(from 30deg, #0000 0 120deg, var(--c3) 0 180deg)
        calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
      repeating-conic-gradient(
        from 30deg,
        var(--c1) 0 60deg,
        var(--c2) 0 120deg,
        var(--c3) 0 180deg
      );
    background-size: var(--s) calc(var(--s) * 0.577);

    @include MQ(d1120) {
      width: 100%;
      min-height: auto;
      padding: 9vw;
    }

    h1 {
      font-size: 40px;
      font-weight: 500;
      color: #fff;
      @include MQ(t768) {
        font-size: 6vw;
      }
    }
    p {
      font-weight: 500;
      font-size: 20px;
      color: #fff;
      line-height: 1.5;
      letter-spacing: 1px;
      @include MQ(t768) {
        font-size: 3vw;
      }
    }
    button {
      padding: 10px 20px;
      border: 1px solid #fff;
      border-radius: 10px;
      color: #fff;
      font-size: 20px;
      transition: all 0.3s ease;
      font-weight: 700;
      @include MQ(t768) {
        font-size: 3vw;
        padding: 1vw 2vw;
      }
      &:hover {
        cursor: pointer;
        background: transparent;
        transform: scale(1.04);
      }
    }
  }
  &-box2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    @include MQ(d1120) {
      min-height: auto;
      width: 100%;
    }
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    @include MQ(t768) {
      font-size: 6vw;
    }
  }

  button {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    line-height: 1.5;
    letter-spacing: 1px;
    border: none;
    background: rgba(255, 255, 255, 0.1); // 半透明背景
    backdrop-filter: blur(10px); // ✨關鍵：背景模糊
    -webkit-backdrop-filter: blur(10px); // Safari 相容
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    cursor: default;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow:
      0 4px 30px rgba(0, 0, 0, 0.1),
      inset 0.5px 0.5px 2px rgba(255, 255, 255, 0.2),
      inset -0.5px -0.5px 2px rgba(0, 0, 0, 0.2);
    @include MQ(t768) {
      font-size: 3vw;
      padding: 3vw;
    }
  }
}
</style>

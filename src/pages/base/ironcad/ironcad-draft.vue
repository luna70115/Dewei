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
        <p>
          代替Auto CAD最佳首選2D建模軟體/操作＆介面與Auto CAD相容/支援Auto
          CAD快捷命令/支援匯出＆匯入DWG、DXF/與IronCAD 3D
          整合連動/無痛轉換、快速上手
        </p>
      </div>
    </section>

    <section class="draft2D-advantages">
      <div class="draft2D-advantages-card">
        <div class="draft2D-advantages-box1">
          <h1>還在等什麼？立即體驗 IronCAD 的效能提升！</h1>
          <p>
            IronCAD
            能顯著提升設計效率，進而帶動企業整體獲利成長。上手快速、培訓只需數天，越早導入，越快見效！
            我們樂於將 IronCAD 與市面上任何 CAD
            系統進行比較，甚至可以協助您一同測試分析。
            我們的團隊與客戶擁有豐富的跨平台 CAD 經驗，深知各家系統優劣。 對於
            IronCAD 超越傳統 CAD 的強大實力，我們深具信心。
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
      font-size: 40px;
      font-weight: 500;
      @include MQ(t768) {
        font-size: 6vw;
      }
    }
    p {
      font-size: 20px;
      text-align: center;
      line-height: 1.5;
      letter-spacing: 1px;
      @include MQ(t768) {
        font-size: 3vw;
      }
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
    min-height: 80vh;
    padding: 50px;
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
      padding: 5vw;
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

    gap: 30px;
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
    padding: 20px;
    border-radius: 10px;
    line-height: 1.5;
    letter-spacing: 1px;
    border: 1px solid rgba(255, 255, 255, 0.3); // 淡白邊框更像玻璃
    background: rgba(255, 255, 255, 0.1); // 半透明背景
    backdrop-filter: blur(10px); // ✨關鍵：背景模糊
    -webkit-backdrop-filter: blur(10px); // Safari 相容
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    cursor: default;
    font-size: 24px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow:
      0 4px 30px rgba(0, 0, 0, 0.1),
      inset 0.5px 0.5px 2px rgba(255, 255, 255, 0.2),
      inset -0.5px -0.5px 2px rgba(0, 0, 0, 0.2);
    @include MQ(t768) {
      font-size: 3vw;
    }
  }
}
</style>

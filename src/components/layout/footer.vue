<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-header">Contact Us: 04 - 2359 - 8366</div>
    <div class="footer-content">
      <iframe
        class="footer-content-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29120.121758586127!2d120.60412599999998!3d24.171199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693fc1f95fb733%3A0xfa171d78f6feb428!2zSXJvbkNBRCDov6rlqIHnp5HmioAg5Y-w5Lit!5e0!3m2!1szh-TW!2stw!4v1752596029725!5m2!1szh-TW!2stw"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="footer-content-card">
        <div class="footer-content-block">
          <div class="footer-content-box">
            <i class="bi bi-geo-alt"></i>
            <div>
              <p>台北區</p>
              <p>02-2280-3598</p>
              <p>新北市三重區永福街46巷41弄39號2F</p>
            </div>
          </div>
          <div class="footer-content-box">
            <i class="bi bi-geo-alt-fill"></i>
            <div>
              <p>台中區 (總公司)</p>
              <p>04-2359-8366</p>
              <p>台中市西屯區工業區八路11號2F-3</p>
            </div>
          </div>
          <div class="footer-content-box">
            <i class="bi bi-geo-alt"></i>
            <div>
              <p>台南區</p>
              <p>06-593-9589</p>
              <p>台南市安南區義安街128巷15號</p>
            </div>
          </div>
        </div>
        <a
          href="https://line.me/ti/p/0c2QX0e90c"
          target="_blank"
          class="footer-content-qrCode"
        >
          <img src="@/assets/images/qrCode.png" alt="" />
        </a>
      </div>
    </div>
    <div class="footer-footer">
      <div>
        <p>
          Solidworks ®為美商達梭系統旗下的SOLIDWORKS公司所有之商標權，AutoCAD
          ®為美商歐特克公司所有之商標權，本站僅用於表彰IronCAD產品特性說明使用.
        </p>
        <p>Copyright © 2025 迪威科技有限公司</p>
      </div>
      <div>
        <p>
          本網站所提及之商標，商標名稱或公司名稱僅用於識別，其所有權是其各自商標註冊所有者的財產.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
}
.footer-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: rgb(166, 10, 10);
  color: #fff;
  font-size: 40px;
  font-family: "Playfair", serif;
  font-weight: 700;
  @include MQ(t768) {
    font-size: 6vw;
  }
}
.footer-content {
  display: flex;
  border-bottom: 1px solid rgb(0 0 0 / 9%);
  @include MQ(d1120) {
    flex-direction: column;
  }

  &-map {
    width: 50%;
    height: 450px;
    @include MQ(d1120) {
      width: 100%;
    }
  }
  &-qrCode {
    img {
      width: 180px;
      cursor: pointer;

      @include MQ(t768) {
        width: 30vw;
      }
    }
  }
  &-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    padding: 20px 40px;
    gap: 30px;
    background: #c8c8c8;
    color: black;
    font-weight: 500;
    @include MQ(d1120) {
      width: 100%;
      padding: 4vw;
    }
    @include MQ(t768) {
      gap: 6vw;
    }
  }
  &-box {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
    line-height: 1.5;
    letter-spacing: 1px;
    @include MQ(t768) {
      gap: 3vw;
    }
    p:first-of-type {
      font-size: 20px;

      @include MQ(t768) {
        font-size: 3vw;
      }
    }
    p:not(:first-of-type) {
      color: #444;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    p {
      @include MQ(t768) {
        font-size: 2.4vw;
      }
    }
  }
  i {
    font-size: 36px;
    color: rgb(166, 10, 10);

    @include MQ(t768) {
      font-size: 5vw;
    }
  }
}

.footer-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #c8c8c8;
  color: #444;
  font-size: 10px;
  padding: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
  gap: 10px;
  @include MQ(t768) {
    font-size: 2.4vw;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
}
</style>

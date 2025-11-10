<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-header">Contact Us: 04 - 2359 - 8366</div>
      <iframe
        class="footer-content-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29120.121758586127!2d120.60412599999998!3d24.171199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693fc1f95fb733%3A0xfa171d78f6feb428!2zSXJvbkNBRCDov6rlqIHnp5HmioAg5Y-w5Lit!5e0!3m2!1szh-TW!2stw!4v1752596029725!5m2!1szh-TW!2stw"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
  background: #1a1c22;
  color: #fff;
  font-size: 40px;
  font-family: "Playfair", serif;
  font-weight: 700;
  @include MQ(t768) {
    font-size: 1.5rem;
  }
}
.footer-content {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(0 0 0 / 9%);
  background: #1a1c22;
  padding: 2rem 6rem;
  gap: 1rem;
  @include MQ(d1120) {
    padding: 2rem;
  }

  &-map {
    width: 100%;
    height: 450px;
    border-radius: 2rem;
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
    width: 100%;
    gap: 10px;
  }
  &-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    padding: 20px 40px;
    gap: 30px;
    background: #1a1c22;
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
    @include MQ(t768) {
      font-size: 5vw;
    }
  }
}
</style>

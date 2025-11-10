<script setup lang="ts"></script>
<template>
  <div class="chat">
    <img class="chat-hello" src="@/assets/images/hi.png" alt="hi" />
    <a
      href="https://line.me/ti/p/0c2QX0e90c"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="chat-chat" src="@/assets/images/chat.png" alt="chat" />
    </a>
  </div>
</template>
<style scoped>
.chat {
  position: fixed;
  top: 50%;
  right: 1rem;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chat-hello {
  position: absolute;
  top: -60%;
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0; /* 預設隱藏 */
  transform-origin: bottom center; /* 旋轉中心在底部 */
  transition: opacity 0.5s ease;
}

.chat-chat {
  width: 3rem;
  height: 3rem;
  transition: transform 0.3s ease;
}

/* hover 效果：聊天 icon 震動、招手圖示出現並揮手 */
.chat:hover .chat-chat {
  animation: shake 0.4s ease-in-out;
}

.chat:hover .chat-hello {
  opacity: 1;
  animation: waveFade 1.8s ease-in-out forwards;
}

/* 聊天 icon 震動 */
@keyframes shake {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
  75% {
    transform: translateY(-1px);
  }
}

/* 招手動畫（左右揮動） */
@keyframes waveFade {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  10% {
    opacity: 1;
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(4deg);
  }
  90% {
    opacity: 1;
    transform: rotate(2deg);
  }
  100% {
    opacity: 0; /* 淡出 */
    transform: rotate(0deg);
  }
}
</style>

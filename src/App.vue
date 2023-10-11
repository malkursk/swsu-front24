<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import router from "@/plugins/router";

onMounted(() => {});
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <div class="container-fluid">        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarScroll"
          class="collapse navbar-collapse"
        >
          <p @click="router.push('/main')">
            Факультеты
          </p>
          <p @click="router.push('/')">
            Формы обучения
          </p>
          <p @click="router.push('/')">
            Семестр
          </p>
        </div>
      </div>
    </nav>
    <button class="btn">
      <a href="https://swsu.ru/">На сайт ЮЗГУ</a>
    </button>
    <router-view />
  </div>
</template>

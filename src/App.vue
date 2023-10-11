<script setup lang="ts">
import { onMounted } from "vue";
import router from "@/router";

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
          <p @click="router.push('/')">
            Главная
          </p>        
          <p @click="router.push('/facult')">
            Факультеты
          </p>
          <p @click="router.push('/work')">
            Расписание
          </p>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

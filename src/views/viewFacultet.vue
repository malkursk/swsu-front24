<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import useStore from "@/store/storeFacultet";

const STORE = useStore();

let fetches = ref();
const title = "Список факультетов";
onMounted(() => {
  loadFacults();
});

async function loadFacults() {
  fetches.value = await STORE.getData();
}
</script>

<template>
  <div class="container">
    <h5>{{ title }}</h5>
    <div v-if="fetches">
      <div
        v-for="v in fetches.data"
        :key="v.id"
      >
        <li>
          {{ v.name }},<i class="p-1 bi-telephone" />{{ v.decanat_phone }}
        </li>
      </div>
    </div>
  </div>
</template>

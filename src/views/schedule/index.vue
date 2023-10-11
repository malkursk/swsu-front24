<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import useScheduleStore from "@/store/schedule/index";

const scheduleStore = useScheduleStore();

let fetches = ref();
const title = "Список факультетов:";
console.log(123);
onMounted(() => {
  loadFacults();
});

async function loadFacults() {
  fetches.value = await scheduleStore.getFacultets();
}
</script>

<template>
  <div class="container">
    <b>{{ title }}</b>
    <div v-if="fetches">
      <div v-for="v in fetches.data">
        <li>
          {{ v.name }},<i class="p-1 bi-telephone" />{{ v.decanat_phone }}
        </li>
      </div>
    </div>
  </div>
</template>

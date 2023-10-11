<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import useStore from "@/store/storeWork";
// import { socket } from "@/socket";
import { useRoute } from "vue-router";
import router from "@/router";

const STORE = useStore();

let groupName = ref();
let f_groups = ref();
let f_works = ref();
let f_week = ref();
const DAYS = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
const title = "Список занятий";

const WEEKS = new Map([
  ["up", "верхняя неделя"],
  ["1", "верхняя неделя"],
  ["2", "нижняя неделя"],
  ["down", "нижняя неделя"],
  ["all", "каждую неделю"],
]);

const SUBGROUPS = new Map([
  [1, ", первая подгруппа"],
  [2, ", вторая подгруппа"],
]);

const FORMS = new Map([
  [true, "онлайн"],
  [false, "аудиторная"],
]);

const route = useRoute();

onMounted(() => {
  
  listGroupAndWeekType();
  if (route.params && route.params.groupName) {    
    groupName.value = route.params.groupName;
    allByGroup(route.params.groupName as string);
  }

  // socket.open();
  // socket.emit("getNotification", { text: "Hello!" });
});


async function nextGroup(group: string) {
  console.log(group);
  router.push({ name: "work", params: { groupName: group } });
  allByGroup(group);
}

async function listGroupAndWeekType() {
  f_groups.value = await STORE.loadGroups();
  f_week.value = await STORE.loadWeekType();
}

async function allByGroup(v: string) {
  console.log("allByGroup", v);
  const verified = [5, 6, 7].includes(v.length) && v.indexOf("-") == 2;
  if (verified) f_works.value = await STORE.allByGroup(v);
}
</script>

<template>
  <div class="container">
    <h5>{{ title }}</h5>
    Выберите группу
    <select class="form-control" v-model="groupName">
      <option v-for="item in f_groups" v-bind:value="item.groupname">
        {{ item.groupname }}
      </option>
    </select>

    <button class="m-1 btn btn-outline-success" @click="nextGroup(groupName)">
      Обновить
    </button>

    
    <p v-if="f_week">
      текущая неделя:
      <i v-if="f_week.weekid==1" class="bi-arrow-up-circle"></i>
      <i v-else class="bi-arrow-down-circle"></i>
    </p>        
    <div v-for="v in f_works">
      <h5 class="bg-warning">
        {{ v.summary.semestr }}, {{ v.summary.season }}
      </h5>
      <b>{{ v.summary.kurs }} курс, {{ v.summary.forma }} форма обучения</b>
      <div v-for="item in v.data">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header">
            {{ DAYS[item.daynumber - 1] }}, {{ WEEKS.get(item.allupdown) }},
            <i class="bi-geo-alt"></i>
            {{ item.location }} {{ FORMS.get(item.isonline) }}<br /> 
            {{ item.period }}<br />
            {{ SUBGROUPS.get(item.subgroupnumber) }}
            <h5>{{ item.subjname }}, {{ item.kind }}</h5>
            <i class="bi-person"></i>
            {{ item.tutorfio }}
            <div v-if="item.link">
            <a v-bind:href="item.link"> онлайн материалы</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

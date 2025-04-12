<script setup lang="ts">
import { ref } from "vue";

import cardOne from "./components/Molecules/cardOne.vue";
import toggleOff from "~/Icons/toggleOff.vue";
import toggleOne from "~/Icons/toggleOne.vue";



const tabs = ["Foco", "Descanso curto", "Descanso longo"]
const currentTab = ref<number>(0);

const music = ["Clássica", "Lofi", "Nacional"]
const isPlaying = ref(false);


const times = [25 * 60, 5 * 60, 15 * 60];

const musicPlaying = () => {
  isPlaying.value = !isPlaying.value;

}

const classes = [
  {
    "bg-gradient-to-t from-violet-800 to-black text-white flex justify-center items-center": currentTab.value === 0,
  },
  {
    "bg-gradient-to-t from-lime-400 to-green-900 text-white flex justify-center items-center": currentTab.value === 1,
  },
  {
    "bg-gradient-to-t from-violet-800 to-black text-white flex justify-center items-center": currentTab.value === 2,
  }
]



</script>

<template>
  <div class="h-screen flex flex-col">
    <header v-if="currentTab === 0"
      class="bg-gradient-to-t from-violet-800 to-black  text-white flex justify-center items-center">
      <div class="flex flex-row items-center md:space-x-4 mt-5 px-4">
        <p class="text-xl md:text-3xl pr-6 font-light">
          Otimize sua <br class="md:hidden">produtividade, <br>
          <span class="font-medium">mergulhe no <br class="md:hidden">que importa.</span>
        </p>
        <img src="/purple.png"
          class="md:w-[220px] md:h-[230px] w-[150px] h-[150px] relative p-[2px] border-none rounded-lg" />
      </div>
    </header>

    <header v-if="currentTab === 1"
      class="bg-gradient-to-t from-green-500 to-green-950 text-white flex justify-center items-center">
      <div class="flex flex-row items-center md:space-x-4 mt-5 px-4">
        <p class="text-xl md:text-3xl pr-6 font-light">
          Que tal dar <br class="md:hidden">uma respirada? <br>
          <span class="font-medium">Faça uma <br class="md:hidden">pausa curta.</span>
        </p>
        <img src="./public/green2.PNG"
          class="md:w-[220px] md:h-[230px] w-[150px] h-[150px] relative p-[2px] border-none rounded-lg " />
      </div>
    </header>

    <header v-if="currentTab === 2"
      class="bg-gradient-to-t from-blue-500 to-blue-950 text-white flex justify-center items-center">
      <div class="flex flex-row items-center md:space-x-4 mt-5 px-4">
        <p class="text-xl md:text-3xl pr-6 font-light">
          Hora de voltar <br class="md:hidden">à superfície. <br>
          <span class="font-medium">Faça uma <br class="md:hidden">pausa longa.</span>
        </p>
        <img src="./public/blue2.PNG"
          class="md:w-[220px] md:h-[230px] w-[150px] h-[150px] relative p-[2px] border-none rounded-lg " />
      </div>
    </header>


    <section  :class="{
      'bg-gradient-to-b from-violet-800 to-black text-white flex justify-center items-center': currentTab === 0,
      'bg-gradient-to-b from-green-500 to-green-950 text-white flex justify-center items-center': currentTab === 1,
      'bg-gradient-to-b from-blue-500 to-blue-900 text-white flex justify-center items-center': currentTab === 2
    }" class="h-full pb-1 ">

      <div :class="{
        'bg-indigo-900 p-10 md:w-[500px] mx-auto rounded-2xl text-base h-auto flex flex-col justify-between w-[350px]': currentTab === 0,
        'bg-green-900 p-10 md:w-[500px] mx-auto rounded-2xl text-base h-auto flex flex-col justify-between w-[350px]': currentTab === 1,
        'bg-blue-900 p-10 md:w-[500px] mx-auto rounded-2xl text-base h-auto flex flex-col justify-between w-[350px]': currentTab === 2,
      }" class="mt-6">

        <div class="flex justify-between gap-3 mb-4">
          <div v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
            class="cursor-pointer flex-1 text-center py-2 md:mx-2 flex-wrap"
            :class="{ 'border-b-2 border-white rounded-sm font-semibold': currentTab === index }">
            {{ tab }}
          </div>
        </div>

        <div class="flex justify-center items-center flex-grow">
          <cardOne :activeTab="currentTab" />
        </div>
        <!-- <div class="pt-4">
          <div class="border-solid border-white pt-8 flex">
            <toggleOff v-if="!isPlaying" :color="'white'" @click="musicPlaying()" />
            <toggleOne v-if="isPlaying" :color="'white'" @click="musicPlaying()" />
            <p class="px-3">Música: {{ music[currentTab] }}</p>
          </div>

        </div> -->
      </div>
    </section>
    <footer :class="{
      'bg-violet-950 text-white': currentTab === 0,
      'bg-green-800 text-white': currentTab === 1,
      'bg-blue-950 text-white': currentTab === 2
    }" class="w-full text-center py-2">
      <p class="text-sm">Feito com 💻 + 🤍 por Bruna Costa</p>
    </footer>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import MoleculescardOne from '~/components/Molecules/cardOne.vue';
import { PlayCircleIcon } from '@heroicons/vue/24/outline';
import { PauseCircleIcon } from '@heroicons/vue/24/outline';
import { PlayPauseIcon } from '@heroicons/vue/24/outline';

const tabs = ["Foco", "Descanso curto", "Descanso longo"]
const currentTab = ref<number>(0);

const music = ["Clássica", "Lofi", "Nacional"]
const isPlaying = ref(false);
const isCounting = ref(false)

const time=()=>{
  
}

</script>

<template>
  <header class="bg-gradient-to-t from-violet-800 to-black text-white flex justify-center items-center">
    <div class="flex flex-row items-center md:space-x-4 py-5 px-4">
      <p class="text-lg md:text-3xl pr-6 font-light">
        Otimize sua <br class="md:hidden">produtividade, <br>
        <span class="font-medium">mergulhe no <br class="md:hidden">que importa.</span>
      </p>
      <img src="/purple.png"
        class="md:w-[220px] md:h-[230px] w-[100px] h-[100px] relative p-[2px] border-none rounded-lg" />
    </div>
  </header>

  <section class="bg-gradient-to-t from-black to-violet-800 text-white md:py-8 h-screen">
    <div class="bg-indigo-900 p-10 md:w-[500px] mx-auto rounded-2xl text-base h-auto flex flex-col justify-between">


      <div class="flex justify-between gap-3 mb-4">
        <div v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
          class="cursor-pointer flex-1 text-center py-2 md:mx-2 flex-wrap"
          :class="{ 'border-b-2 border-white rounded-sm font-semibold': currentTab === index }">
          {{ tab }}
        </div>
      </div>

      <div class="flex justify-center items-center flex-grow">
        <MoleculescardOne :activeTab="currentTab" />
      </div>


      <div class="pt-4">
        <div class="w-6 h-6 text-white cursor-pointer">
          <PlayCircleIcon class="w-10 h-10 text-white" v-if="!isCounting" />
          <PauseCircleIcon class="w-10 h-10 text-white" v-if="isCounting" />
        </div>

        <div class="border-solid border-white pt-8 flex flex-col">
          <p>Música: {{ music[currentTab] }}</p>
          <PlayPauseIcon class="w-5 h-5 mt-0.5  text-white"/>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from "vue";
import { PlayCircleIcon } from '@heroicons/vue/24/outline';
import { PauseCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{ activeTab: number }>();
const isCounting = ref(false)
const times = [25 * 60, 5 * 60, 15 * 60];
const timeLeft = ref(times[props.activeTab]);
const isRunning = ref(false);
let interval: ReturnType<typeof setInterval> | undefined;


watch(() => props.activeTab, (newTab) => {
  stopTimer();
  timeLeft.value = times[newTab];
});

const startTimer = () => {
  if (isRunning.value) return;
  isRunning.value = true;
  isCounting.value = true;
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      stopTimer();
    }
  }, 1000);
};


const stopTimer = () => {
  isRunning.value = false;
  isCounting.value = false;
  clearInterval(interval);
};


const formattedTime = computed(() => {
  const minutes = ('00' + Math.floor(timeLeft.value / 60)).slice(-2);
  const seconds = ('00' + (timeLeft.value % 60)).slice(-2);
  return `${minutes}:${seconds}`;
});


onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="text-white flex flex-col items-center justify-center rounded-2xl h-auto">
    <span class="text-5xl md:text-9xl">{{ formattedTime }}</span>

    <div class="mt-4 flex gap-4">
      <div class="w-6 h-6 text-white cursor-pointer">
          <PlayCircleIcon class="w-10 h-10 text-white" v-if="!isCounting" @click="startTimer"  />
          <PauseCircleIcon class="w-10 h-10 text-white" v-if="isCounting"  @click="stopTimer"/>
        </div>

    </div>
  </div>
</template>

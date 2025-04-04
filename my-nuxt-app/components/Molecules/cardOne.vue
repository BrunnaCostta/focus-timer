<script setup lang="ts">


const props = defineProps<{
    activeTab: number;
}>();


</script>

<template>
    <div class="text-white flex  rounded-2xl h-auto">
        <div v-if="activeTab === 0">
            <span class="text-9xl">25:00</span>
        </div>
        <div v-else-if="activeTab === 1">
            <span class="text-9xl">5:00</span>
        </div>
        <div v-else-if="activeTab === 2">
            <span class="text-9xl">10:00</span>
        </div>
    </div>


</template>
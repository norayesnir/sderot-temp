<script setup lang="ts">
const props = defineProps<{
  avatar: string | undefined;
  title: string;
}>();
</script>

<template>
  <section class="relative py-20 container">
    <div class="flex flex-col md:grid grid-cols-12 gap-6 items-center">
      <div class="col-span-6">
        <NuxtImg
          :src="props?.avatar"
          :alt="props?.avatar"
          class="rounded-lg object-cover aspect-square w-full"
        />
      </div>
      <div class="col-span-5 col-start-8">
        <h5 class="font-bold">{{ props?.title }}</h5>
        <slot />
      </div>
    </div>
  </section>
</template>

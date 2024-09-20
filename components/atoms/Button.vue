<script setup lang="ts">
// Hydration node mismatch workaround
const loading = ref(true);

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

const props = defineProps({
  type: {
    type: String,
    default: "filled",
  },
  color: {
    type: String,
    default: "primary",
  },
  openInNew: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
});

// Button Variant
const buttonVariant = computed(() => {
  const color = props?.color;
  switch (props?.type) {
    case "filled":
      return `bg-${color} hover:bg-${color}-dark text-white`;
    case "outlined":
      return `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`;
    case "link":
      return `text-${color} hover:text-${color}-dark px-0 hover:border-b-2 hover:border-${color} rounded-none hover:pb-[2px]`;
    case "ghost":
      return `text-${color} hover:bg-${color} hover:text-white`;
    default:
      return `bg-${color} hover:bg-${color}-dark text-white`;
  }
});
</script>

<template>
  <NuxtLink
    v-if="!loading"
    :to="props?.to"
    class="flex gap-2 px-3 pb-1 items-center pt-[5px] font-bold rounded cursor-pointer w-fit"
    :class="[buttonVariant, props?.iconRight ? 'flex-row-reverse' : 'flex-row']"
  >
    <!-- TODO: Make component -->
    <Icon v-if="props?.icon" class="font-reqular" :name="props.icon" />

    {{ props?.title }}
  </NuxtLink>
</template>

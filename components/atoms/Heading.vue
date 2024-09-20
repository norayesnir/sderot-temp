<script setup lang="ts">
const props = defineProps<{
  value: {
    type: String;
    required: true;
  };
  type: {
    type: String;
    default: "h2";
  };
}>();
</script>

<template>
  <Component v-if="props?.value" :is="props.type" :class="props.type">
    {{ props.value }}
  </Component>
</template>

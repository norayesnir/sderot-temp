<script setup lang="ts">
const route = useRoute();
const currentRoute = route.name;
</script>

<template>
  <section class="relative py-20 container">
    <div class="flex flex-col grid grid-cols-12 gap-6">
      <div class="col-span-8">
        <h2>Wie zijn wij?</h2>
        <p class="mb-4">
          Ons bestuur bestaat uit drie toegewijde leden: Herman (Menachem)
          Volders (oprichter), Johan Alblas (oprichter) en Jochem Stolk
          (bestuurslid). Samen worden zij ondersteund door onze gewaardeerde
          partners, Agnes Alblas en Priscilla Stolk. Allen delen een diepe
          passie voor Israël en haar volk, en voelen zich nauw met het land
          verbonden.
        </p>
        <AtomsButton
          v-if="currentRoute != 'over-ons'"
          to="/over-ons"
          class="mt-4"
          title="Lees meer"
          color="primary"
          type="link"
          icon="material-symbols:north-east-rounded"
          iconRight
        />
      </div>
    </div>
  </section>
</template>

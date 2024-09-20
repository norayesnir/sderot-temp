<script setup lang="ts">
const route = useRoute();
const currentRoute = route.name;
</script>

<template>
  <section class="relative py-20 container">
    <div class="flex flex-col md:grid grid-cols-12 gap-6">
      <div class="col-span-5">
        <div class="flex flex-col mb-4">
          <h2 class="h2 font-bold">Oprichting</h2>
          <AtomsSubtitle
            subtitle="De verschrikkingen van 7 oktober 2023"
            class="text-lg"
          />
        </div>
        <p>
          Kort na 7 oktober bezochten Menachem en een bevriende rabbijn uit
          Jeruzalem, Yitzak Naki, de totaal verlaten stad. Het was een
          spookstad. Niets en niemand was er in de stad te vinden. Lege huizen,
          lege winkels, geen enkele auto of teken van leven. Wij waren de enigen
          die door de stad reden. Uiteindelijk troffen wij net buiten de stad op
          een heuvel de gehele samengekomen wereldpers aan.
        </p>
        <AtomsButton
          v-if="currentRoute != 'oprichting'"
          to="/oprichting"
          class="mt-4"
          title="Lees meer"
          color="primary"
          type="link"
          icon="material-symbols:north-east-rounded"
          iconRight
        />
      </div>
      <div class="col-start-8 col-span-6">
        <NuxtImg
          src="media/oprichting-block-one.jpg"
          alt=""
          class="rounded-lg w-full"
        />
      </div>
    </div>
  </section>
</template>

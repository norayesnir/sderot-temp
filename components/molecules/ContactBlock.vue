<script setup lang="ts">
const address = "nederland";
</script>

<template>
  <section class="relative py-20">
    <div class="@container container">
      <div class="flex flex-col @4xl:grid grid-cols-12 gap-6">
        <div class="col-span-5">
          <AtomsSubtitle subtitle="Contact" />
          <h1 class="h2 font-bold">Neem contact op!</h1>
          <p>
            Neem gerust contact met ons op voor verdere informatie of als je
            vragen hebt. We helpen je graag verder!
          </p>
        </div>

        <div class="col-span-6 col-start-8">
          <div class="grid grid-cols-6 gap-6">
            <div
              class="grid grid-cols-[18px_1fr] gap-2 col-span-3 items-center"
            >
              <Icon name="material-symbols:call-outline" size="18" />
              <h6 class="text-base font-semibold">Telefoon</h6>
              <a
                href="tel:0615476363"
                class="col-start-2 border-b-2 border-black w-fit"
              >
                <span class="text-xs">Menachem Volders</span> <br />
                +31 6 15476363
              </a>
              <a
                href="tel:0612345678"
                class="col-start-2 border-b-2 border-black w-fit"
              >
                <span class="text-xs">Johan Alblas</span> <br />
                +31 6 653113750
              </a>
            </div>

            <div
              class="grid grid-cols-[18px_1fr] grid-rows-[24px_1fr] gap-2 col-span-3 items-center row-span-2"
            >
              <Icon name="material-symbols:location-on-outline" size="18" />
              <h6 class="text-base font-semibold">Address</h6>
              <a
                target="_blank"
                :href="`https://maps.google.com/?q=${encodeURIComponent(address.replace(/<\/br>/g, ''))}`"
                class="col-start-2 mb-auto border-b-2 border-black w-fit"
                ><div v-html="address"
              /></a>
            </div>

            <div
              class="grid grid-cols-[18px_1fr] gap-2 col-span-3 items-center"
            >
              <Icon name="material-symbols:mail-outline" size="18" />
              <h6 class="text-base font-semibold">Email</h6>
              <a
                href="`mailto:info@sderot.nl"
                class="col-start-2 border-b-2 border-black w-fit"
                >info@sderot.nl</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

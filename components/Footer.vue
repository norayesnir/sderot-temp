<script setup lang="ts">
// Get current year
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="relative py-20 bg-black">
    <div class="container @container text-white">
      <div class="flex flex-col grid-cols-12 gap-6 @3xl:grid">
        <div class="flex flex-col col-span-4 gap-4 mb-4">
          <h1 class="text-[30px] leading-none font-semibold">SDEROT</h1>

          <address class="not-italic">
            <div class="flex items-center gap-1 py-1 rounded w-fit">
              <Icon name="material-symbols:mail-outline" />
              <a href="mailto:info@sderot.nl" class="text-xs underline">
                info@sderot.nl
              </a>
            </div>
          </address>
        </div>

        <nav class="flex flex-col @3xl:grid grid-cols-8 col-span-6 mb-4 gap-4">
          <!-- Add your route links here -->
          <NuxtLink
            to="/"
            class="col-span-3 py-1 pr-2 hover:underline w-fit h-fit"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/oprichting"
            class="col-span-3 py-1 pr-2 hover:underline w-fit h-fit"
          >
            Oprichting
          </NuxtLink>
          <NuxtLink
            to="/over-ons"
            class="col-span-3 py-1 pr-2 hover:underline w-fit h-fit"
          >
            Over ons
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="col-span-3 py-1 pr-2 hover:underline w-fit h-fit"
          >
            Contact
          </NuxtLink>
        </nav>

        <div
          class="flex flex-col-reverse col-span-12 @4xl:grid grid-cols-12 gap-6 @4xl:items-center"
        >
          <small class="col-span-4 text-xs">
            &copy; {{ currentYear }} · SDEROT · Alle rechten behouden
          </small>

          <div class="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Childrenofsderot/61562973241023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="bxl:facebook" size="24" class="text-lg text-white" />
            </a>
            <a
              href="https://www.instagram.com/childrenofsderot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="bxl:instagram" size="24" class="text-lg text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

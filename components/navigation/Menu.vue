<script setup lang="ts">
import { useNavigationMenuStore } from "~/store/useNavigationMenu";
const navigationMenuStore = useNavigationMenuStore();
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full transition-all bg-white"
    :class="navigationMenuStore.state ? 'h-screen' : 'h-[72px]'"
  >
    <div class="container">
      <div
        class="grid items-center justify-between w-full grid-cols-[1fr_50px] grid-rows-[48px_auto_auto_1fr] py-3 mx-auto lg:flex"
        :class="navigationMenuStore.state ? 'h-full gap-8' : 'h-fit'"
      >
        <NuxtLink to="/" class="w-fit" @click="navigationMenuStore.close()">
          <NuxtImg
            src="/media/lo_sderot_horizontal.svg"
            class="object-contain object-left w-full h-full max-h-12"
          />
        </NuxtLink>
        <NavigationHamburger />
        <div
          class="items-center justify-end gap-8 lg:flex"
          :class="navigationMenuStore.state ? 'col-span-2' : 'hidden'"
        >
          <NuxtLink
            class="flex gap-1 px-2 py-1 w-fit transition-colors duration-200 text-font font-normal border-black hover:pb-[2px] hover:border-b-2 has-[.router-link-active]:border-b-1 has-[.router-link-active]:pb-[2px]"
            to="/"
            @click="navigationMenuStore.close()"
          >
            Home
          </NuxtLink>

          <NuxtLink
            class="flex gap-1 px-2 py-1 w-fit transition-colors duration-200 text-font font-normal border-black hover:pb-[2px] hover:border-b-2 has-[.router-link-active]:border-b-1 has-[.router-link-active]:pb-[2px]"
            to="/oprichting"
            @click="navigationMenuStore.close()"
          >
            Oprichting
          </NuxtLink>

          <NuxtLink
            class="flex gap-1 px-2 py-1 w-fit transition-colors duration-200 text-font font-normal border-black hover:pb-[2px] hover:border-b-2 has-[.router-link-active]:border-b-1 has-[.router-link-active]:pb-[2px]"
            to="/over-ons"
            @click="navigationMenuStore.close()"
          >
            Over ons
          </NuxtLink>

          <NuxtLink
            class="flex gap-1 px-2 py-1 w-fit transition-colors duration-200 text-font font-normal border-black hover:pb-[2px] hover:border-b-2 has-[.router-link-active]:border-b-1 has-[.router-link-active]:pb-[2px]"
            to="/contact"
            @click="navigationMenuStore.close()"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

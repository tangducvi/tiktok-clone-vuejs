<template>
  <div>
    <TopNav />
    <div
      :class="route.fullPath === '/' ? 'max-w-[1140px]' : ''"
      class="flex mx-auto justify-between w-full lg:px-2.5 px-0">
      <div>
        <SideNavMain />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2">
    <img
      class="rounded-full lg:mx-0 mx-auto w-[35px] h-[35px]"
      src="https://picsum.photos/id/83/300/320" />

    <div class="lg:pl-2.5 lg:block hidden">
      <div class="flex items-center">
        <div class="font-bold text-[14px]">User name</div>
        <div class="ml-1 rounded-full bg-[#58d5ec] h-[14px] relative">
          <Icon
            class="relative -top-[3px]"
            name="teenyicons:tick-small-solid"
            style="color: #fff"
            size="15" />
        </div>
      </div>

      <div class="font-light text-[12px] text-gray-600">User name</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['user']);
</script>

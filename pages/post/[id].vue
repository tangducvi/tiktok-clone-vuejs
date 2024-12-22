<template>
  <div
    id="PostPage"
    class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto">
    <div class="lg:w-[calc(100%-540px)] h-full relative">
      <NuxtLink
        class="absolute z-20 w-[40px] h-[40px] m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
        <Icon name="material-symbols:close" style="color: #fff" size="27" />
      </NuxtLink>

      <div v-if="true">
        <button
          @disabled="!isLoaded"
          @click="($event) => loopThroughPostUp()"
          class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
          <Icon name="mdi:chevron-up" style="color: #fff" size="30" />
        </button>

        <button
          @disabled="!isLoaded"
          @click="($event) => loopThroughPostDown()"
          class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
          <Icon name="mdi:chevron-down" style="color: #fff" size="30" />
        </button>
      </div>

      <img
        src="~/assets/images/tiktok-logo-small.png"
        width="45"
        class="absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto" />

      <video
        v-if="true"
        src="/river.mp4"
        class="absolute object-cover w-full my-auto z-[-1] h-screen" />

      <div
        v-if="!isLoaded"
        class="flex items-center justify-center bg-black bg-opacity-70 h-screen lg:min-w-[480px]">
        <Icon
          class="animate-spin ml-1"
          name="mingcute:loading-line"
          size="100"
          style="color: #fff" />
      </div>

      <div class="bg-black bg-opacity-70 lg:min-w-[480px]">
        <video
          v-if="true"
          class="h-screen mx-auto"
          ref="video"
          muted
          loop
          src="/river.mp4" />
      </div>
    </div>

    <div
      v-if="true"
      id="InfoSection"
      class="lg:max-w-[550px] relative w-full h-full bg-white">
      <div class="py-7"></div>
      <div class="flex items-center justify-between px-8">
        <div class="flex items-center">
          <NuxtLink href="/">
            <img
              class="rounded-full lg:mx-0 mx-auto h-[40px]"
              width="40"
              src="https://picsum.photos/id/83/300/320" />
          </NuxtLink>
          <div class="ml-3 pt-0.5">
            <div class="text-[17px] font-semibold">Username</div>
            <div class="text-[13px] -mt-5 font-light">
              Username
              <span class="relative -top-[2px] text-[30px] pr-0.5">.</span>
              <span class="font-medium">Date here</span>
            </div>
          </div>
        </div>
        <Icon
          @click="($event) => deletePost()"
          v-if="true"
          class="cursor-pointer"
          name="material-symbols:delete-outline-sharp"
          size="25" />
      </div>

      <div class="px-8 mt-4 text-sm">This is the post text</div>

      <div class="px-8 mt-4 text-sm font-bold flex items-center gap-1">
        <Icon name="mdi:music" size="17" />
        <span>Original sound - Username</span>
      </div>

      <div class="flex items-center px-8 mt-8">
        <div class="pb-4 text-center flex items-center">
          <button
            class="rounded-full h-[41px] w-[41px] bg-gray-200 p-2 cursor-pointer">
            <Icon name="mdi:heart" size="25" />
          </button>
          <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">
            123
          </span>
        </div>

        <div class="pb-4 text-center flex items-center">
          <button
            class="rounded-full h-[41px] w-[41px] bg-gray-200 p-2 cursor-pointer">
            <Icon name="bx:bxs-message-rounded-dots" size="25" />
          </button>
          <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">
            317
          </span>
        </div>

        <div class="pb-4 text-center flex items-center">
          <button
            class="rounded-full h-[41px] w-[41px] bg-gray-200 p-2 cursor-pointer">
            <Icon name="ri:share-forward-fill" size="25" />
          </button>
          <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">
            1872
          </span>
        </div>
      </div>

      <div
        id="Comments"
        class="bg-[#f8f8f8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto">
        <div class="pt-2"></div>
        <div v-if="false" class="text-center mt-6 text-md text-gray-500">
          No comments...
        </div>

        <div v-else class="flex items-center justify-between px-9 mt-4">
          <div class="flex items-center relative w-full">
            <NuxtLink to="/">
              <img
                class="absolute h-[40px] top-0 rounded-full lg:mx-auto mx-auto"
                width="40"
                src="https://picsum.photos/id/83/300/320" />
            </NuxtLink>
            <div class="ml-14 w-full pt-0.5">
              <div
                class="text-18[px] font-semibold flex items-center justify-between">
                User name
                <Icon
                  v-if="true"
                  @click="($event) => deleteComment()"
                  size="25"
                  name="material-symbols:delete-outline-sharp"
                  class="cursor-pointer" />
              </div>
              <div class="text-[15px] font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                cupiditate error? Nam id doloribus dolorem aperiam nulla
                deserunt excepturi modi eligendi officiis. Nemo adipisci, illum
                alias in molestias praesentium. Aperiam!
              </div>
            </div>
          </div>
        </div>

        <div class="mb-28"></div>
      </div>

      <div
        id="CreateComment"
        v-if="true"
        class="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2">
        <div
          class="bg-[#f1f1f2] flex items-center rounded-lg w-full lg:max-w-[420px]"
          :class="
            inputFocus
              ? 'border-2 border-gray-400'
              : 'border-2 border-[#f1f1f2]'
          ">
          <input
            class="bg-[#f1f1f2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
            v-model="comment"
            type="text"
            placeholder="Add comment..."
            @focus="() => (inputFocus = true)"
            @blur="() => (inputFocus = false)" />
        </div>

        <button
          @disabled="!comment"
          @click="() => addComment()"
          class="font-semibold text-sm ml-5 pr-1"
          :class="comment ? 'text-[#f02c56] cursor-pointer' : 'text-gray-400'">
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const video = ref<HTMLVideoElement | null>(null);
const isLoaded = ref(false);
const inputFocus = ref(false);
const comment = ref(null);

const loopThroughPostUp = () => {};

const loopThroughPostDown = () => {};

const deletePost = () => {};

const deleteComment = () => {};

const addComment = () => {};

onMounted(() => {
  video?.value?.play();
  isLoaded.value = true;
  // if (video.value) {
  //   video.value.addEventListener('loadeddata', (e) => {
  //     setTimeout(() => {
  //       isLoaded.value = true;
  //     }, 500);
  //   });
  // }
});

onBeforeUnmount(() => {
  if (!video.value) return;
  video.value.pause();
  video.value.currentTime = 0;
  video.value.src = '';
});

watch(
  () => isLoaded.value,
  () => {
    setTimeout(() => {
      video?.value?.play();
    }, 500);
  }
);
</script>

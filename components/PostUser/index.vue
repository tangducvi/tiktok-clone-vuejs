<template>
    <div
        class="relative brightness-90 hover:brightness-[1.1] cursor-pointer"
        @mouseenter="$event => isHover(true)"
        @mouseleave="$event => isHover(false)"
    >
        <div 
            v-if="!isLoaded"
            class="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black"
        >
            <Icon name="mingcute:loading-line" size="100" style="color: #fff" class="animate-spin ml-1"/>
        </div>

        <div>
            <video ref="video" muted loop class="aspect-[3/4] object-cover rounded-md" src="/river.mp4"/>
        </div>

        <div class="px-1">
            <div class="text-gray-700 break-words pt-1 text-[15px]">
                This is some text
            </div>
            <div class="flex items-center -ml-1 text-gray-600 font-bold text-xs">
                <Icon name="gg:loadbar-sound" size="20"/>3%
                <Icon class="ml-1" name="tabler:alert-circle" size="16"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['post']);
const route = useRoute();
const router = useRouter();

let video = ref<HTMLVideoElement | null>(null);
let isLoaded = ref(false);

onMounted(() => {
    if(video.value) {
        video.value.addEventListener('loadeddata', (e) => {
            setTimeout(() => {
                isLoaded.value = true;
            }, 200)
        })
    }
})

onBeforeUnmount(() => {
    if(!video.value) return;
    video.value.pause();
    video.value.currentTime = 0;
    video.value.src = ''
})

const isHover = (bool: boolean) => {
    if(bool) {
        video.value?.play();
    } else {
        video.value?.pause();
    }
}
</script>
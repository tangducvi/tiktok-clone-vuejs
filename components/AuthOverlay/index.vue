<template>
    <div id="AuthOverlay" class="bg-black bg-opacity-50 fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full">
        <div class="relative bg-white w-full p-4 rounded-lg max-w-[470px] h-[70%]">
            <div class="w-full flex justify-end">
                <button
                @click="() => $generalStore.isLoginOpen = false"
                class="w-[40px] h-[40px] p-1.5 rounded-full bg-gray-100">
                    <Icon name="mdi:close" size="26"/>
                </button>
            </div>

            <Login v-if="isRegister"/>
            <Register v-else/>

            <div class="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
                <span class="text-[14px] text-gray-600">
                    Don't have an account?
                </span>
                <button
                @click="() => isRegister = !isRegister"
                class="text-[14px] text-[#f02c56] font-semibold pl-1"
                >
                    <span v-if="isRegister">Sign up</span>
                    <span v-else>Log in</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const isRegister = ref(true);
const { $generalStore } = useNuxtApp()
</script>
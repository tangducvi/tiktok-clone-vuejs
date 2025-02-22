<template>
  <div
    id="EditProfileOverlay"
    class="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto">
    <div
      :class="!uploadedImage ? 'h-[655px]' : 'h-[580px]'"
      class="relative bg-white w-full max-w-[700px] h-[655px] mx-3 p-4 rounded-lg mb-10">
      <div
        class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">
        <div class="text-[22px] font-medium">Edit profile</div>
        <button @click="() => ($generalStore.isEditProfileOpen = false)">
          <Icon name="mdi:close" size="25" />
        </button>
      </div>

      <div
        class="h-[calc(500px - 200px)]"
        :class="!uploadedImage ? 'mt-16' : 'mt-[58px]'">
        <div v-if="!uploadedImage">
          <div
            id="ProfilePhotoSection"
            class="flex flex-col border-b h-[145px] px-1.5 py-2 w-full">
            <div
              class="font-semibold text-[15px] mb-1 text-gray-700 text-center">
              Profile Photo
            </div>
            <div class="flex items-center justify-center">
              <label class="relative cursor-pointer" for="image">
                <img
                  class="rounded-full max-h-[95px] w-[95px]"
                  src="https://picsum.photos/id/83/300/320" />

                <div
                  class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]">
                  <Icon
                    name="ph:pencil-simple-line-bold"
                    size="17"
                    class="-mt-1 ml-0.5" />
                </div>
              </label>

              <input
                class="hidden"
                type="file"
                id="image"
                @input="getUploadedImage"
                accept="image/png, image/jpeg, image/jpg" />
            </div>
          </div>

          <div
            id="UsernameSection"
            class="flex flex-col border-b px-1.5 py-2 mt-1.5 w-full">
            <div
              class="font-semibold text-[15px] mb-1 text-gray-700 text-center">
              Username
            </div>

            <div class="flex items-center justify-center">
              <div class="sm:w-[60%] w-full max-w-md">
                <TextInput
                  placeholder="Username"
                  v-model:input="userName"
                  inputType="text"
                  max="30" />

                <div class="text-[11px] text-gray-500 mt-4">
                  Username can only contain letters, numbers, underscores, and
                  periods. Changing your name will also change your profile
                  link.
                </div>
              </div>
            </div>
          </div>

          <div
            id="BioSection"
            class="flex flex-col sm:h-[120px] px-1.5 py-2 mt-2 w-full">
            <div
              class="font-semibold text-[15px] mb-1 text-gray-700 text-center">
              Bio
            </div>
            <div class="flex items-center justify-center">
              <div class="sm:w-[60%] w-full max-w-md">
                <textarea
                  class="resize-none w-full bg-[#f1f1f2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
                  placeholder="Bio"
                  v-model="userBio"
                  rows="4"
                  max="80"></textarea>

                <div v-if="userBio" class="text-[11px] text-gray-500">
                  {{ userBio.length }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="w-full h-[430px]">
          <Cropper
            class="h-[430px]"
            ref="cropper"
            :stencil-component="CircleStencil"
            :src="uploadedImage" />
        </div>
      </div>

      <div
        id="ButtonSection"
        class="absolute p-5 left-0 bottom-0 border-t border-t-gray-300 w-full">
        <div
          class="flex items-center justify-end"
          id="UpdateInfoButtons"
          v-if="!uploadedImage">
            <button @click="() => $generalStore.isEditProfileOpen = false" class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100">
                <span class="px-2 font-medium text-[15px]">Cancel</span>
            </button>

            <button @click="() => cropAndUpdateImage()" class="flex items-center bg-[#f02c56] text-white border rounded-md ml-3 px-3 py-[6px]">
                <span class="mx-4 font-medium text-[15px]">Apply</span>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
const { $generalStore, $userStore, $profileStore } = useNuxtApp();

const { name, bio, image } = storeToRefs($userStore);

onMounted(() => {
    userName.value = name.value;
    userBio.value = bio.value;
    userImage.value = image.value
})

const file = ref<File | null>(null);
const cropper = ref(null);
const uploadedImage = ref<string | null>(null);
const userImage = ref<string | null>(null);
const userName = ref<string | null>(null);
const userBio = ref<string | null>(null);
const isUpdated = ref<boolean>(false);

const getUploadedImage = (e: Event) => {
  const input = e.target as HTMLInputElement;

  if (input.files) {
    file.value = input.files[0];
    uploadedImage.value = URL.createObjectURL(file.value);
  }
};

const cropAndUpdateImage = () => {

}

watch(() => userName.value, () => {
    if (!userName.value || userName.value !== name.value) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})

watch(() => userBio.value, () => {
    if (!userBio.value || userBio.value.length < 1) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})
</script>

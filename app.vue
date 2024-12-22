<template>
  <div>
    <NuxtPage/>
    <AuthOverlay v-if="isLoginOpen"/>
    <EditProfileOverlay v-if="isEditProfileOpen"/>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const { $generalStore } = useNuxtApp()
const { isLoginOpen, isEditProfileOpen } = storeToRefs($generalStore)
</script>
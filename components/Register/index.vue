<template>
    <div>
      <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>
  
      <div class="px-6 pb-1.5 text-[15px]">Full name</div>
      <div class="px-6 pb-2">
        <TextInput
          placeholder="Full name"
          v-model:input="name"
          inputType="text"
          :autoFocus="true"
          error="" />
      </div>
  
      <div class="px-6 pb-1.5 text-[15px]">Email</div>
      <div class="px-6 pb-2">
        <TextInput
          placeholder="Email address"
          v-model:input="email"
          inputType="email"
          error="" />
      </div>

      <div class="px-6 pb-1.5 text-[15px]">Password</div>
      <div class="px-6 pb-2">
        <TextInput
          placeholder="Password"
          v-model:input="password"
          inputType="password"
          error="" />
      </div>

      <div class="px-6 pb-1.5 text-[15px]">Confirm password</div>
      <div class="px-6 pb-2">
        <TextInput
          placeholder="Confirm password"
          v-model:input="confirmPassword"
          inputType="password"
          error="" />
      </div>
  
      <div class="px-6 pb-2 mt-6">
        <button
          @click="() => signUp()"
          :disabled="(!name || !email || !password || !confirmPassword)"
          :class="(!name || !email || !password || !confirmPassword) ? 'bg-gray-200' : 'bg-[#f02c56]'"
          class="w-full text-[17px] font-semibold text-white py-3 rounded-sm">
          Sign up
      </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const name = ref(null)
  const password = ref(null)
  const email = ref(null)
  const confirmPassword = ref(null)
  const errors = ref(null)
  
  const signUp = () => {
      console.log('login');
  }
  </script>
  
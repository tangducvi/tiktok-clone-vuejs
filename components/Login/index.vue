<template>
  <div>
    <div class="text-center text-[28px] mb-4 font-bold">Log in</div>

    <div class="px-6 pb-1.5 text-[15px]">Email address</div>

    <div class="px-6 pb-2">
      <TextInput
        placeholder="Email address"
        v-model:input="email"
        inputType="email"
        :autoFocus="true"
        error="" />
    </div>

    <div class="px-6 pb-1.5 text-[15px]">Password</div>
    <div class="px-6 pb-2">
      <TextInput
        placeholder="Password"
        v-model:input="password"
        inputType="password" />
    </div>

    <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

    <div class="px-6 pb-2 mt-6">
      <button
        @click="() => login()"
        :disabled="(!email || !password)"
        :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#f02c56]'"
        class="w-full text-[17px] font-semibold text-white py-3 rounded-sm">
        Log in
    </button>
    </div>
  </div>
</template>

<script setup>
const email = ref(null)
const password = ref(null)
const errors = ref(null)

watch(() => email.value, (newData, oldData) => {
    console.log(email.value, 'email');
})

const login = () => {
    console.log('login');
}
</script>

<script setup lang="ts">
import { isAdmin, order } from '../api/data';
import New from './New.vue';
import { useRouter } from 'vue-router'

const emit = defineEmits(['novoPratoSalvo'])

const router = useRouter()

const navigateSignup = () => {
  router.push({ name: 'Signup' });
}

const onNovoPratoSalvo = () => {
  emit('novoPratoSalvo');
};

</script>

<template>
  <header class="w-full h-full max-h-24 bg-[#00111A] flex items-center justify-center gap-32 mb-44">
    <h1 @click="isAdmin = true" v-if="!isAdmin" class="flex justify-start hover:scale-105 hover:underline underline-offset-8 cursor-pointer font-bold transition-transform">
      Admin
    </h1>

    <h1 @click="isAdmin = false" v-else class="flex justify-start hover:scale-105 hover:underline underline-offset-8 cursor-pointer font-bold transition-transform">
      Usuário
    </h1>
    <img
      v-if="isAdmin"
      class="w-52" 
      src="../assets/logoadmin.svg"
    />
    <img
      v-else
      class="w-52" 
      src="../assets/image.svg"
    />

    <div class="w-full max-w-[600px] flex items-center justify-center mt-5">
      <VTextField
        prepend-inner-icon="mdi-magnify"
        placeholder="Busque por pratos ou ingredientes"
        variant="outlined"
      />
    </div>

    <New v-if="isAdmin" @novoPratoSalvo="onNovoPratoSalvo" />

    <Order v-else />

    <VIcon
      @click="navigateSignup"
      class="hover:scale-150 transition-transform cursor-pointer"
      icon="mdi-logout"
    />
  </header>
</template>
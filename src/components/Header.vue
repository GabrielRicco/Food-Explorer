<script setup lang="ts">
import { isAdmin } from '../api/data';
import New from './New.vue';

const emit = defineEmits(['novoPratoSalvo'])

const onNovoPratoSalvo = () => {
  // Propaga o evento para o componente Home
  emit('novoPratoSalvo');
};

</script>

<template>
  <header class="w-full h-full max-h-24 bg-[#00111A] flex items-center justify-center gap-32 mb-44">
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

    <VBtn
      v-else
      prepend-icon="mdi-table-chair"
      variant="outlined"
      color="red"
      class="h-50"
    >
      pedidos
    </VBtn>

    <VIcon
      class="hover:scale-150 transition-transform cursor-pointer"
      icon="mdi-logout"
    />
  </header>
</template>
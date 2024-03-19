<script setup lang="ts">
import { ref } from 'vue';
import { VCard, VDivider }  from 'vuetify/lib/components/index.mjs';
import { api } from '../api/data';
import CardsList from './CardsList.vue'
import Header from './Header.vue';
import Footer from './Footer.vue';

const refeicoesData = ref(api.filter(item => item.type === 'refeições'));
const sobremesasData = ref(api.filter(item => item.type === 'sobremesas'));
const bebidasData = ref(api.filter(item => item.type === 'bebidas'));
</script>

<template>
  <Header />

  <main class="flex flex-col gap-12 items-center justify-center">
    <VCard color="card" class="flex justify-between w-[1120px] h-[260px] rounded-lg overflow-visible">
      <div class="relative bottom-[9.1rem]">
        <img src="../assets/pngegg 1.svg">
      </div>
      <div class="flex flex-col gap-5 justify-center">
        <h2 class="text-5xl">Sabores inigualáveis</h2>
        <p class="text-sm">Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </VCard>

    <CardsList :items="refeicoesData" type="Refeições" />

    <CardsList :items="sobremesasData" type="Sobremesas" />

    <CardsList :items="bebidasData" type="Bebidas" />
  </main>

  <Footer />
</template>

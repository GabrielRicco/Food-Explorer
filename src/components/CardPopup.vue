<script setup lang="ts">
import { ref } from 'vue';
import { VBtn, VCard, VDialog } from 'vuetify/lib/components/index.mjs';
import { isAdmin } from '../api/data';
import Edit from './Edit.vue';

const dialog = ref(false)
const item = defineProps(['item'])
</script>

<template>
  <div>
    <VDialog
      v-model="dialog"
      width="1400px"
    >
      <template #activator="{ props }">
        <div class="flex items-center hover:scale-125 cursor-pointer transition-transform hover:text-yellow-600" v-bind="props">
          <h3 class="font-bold hover:underline underline-offset-8 transition-transform">
            {{ item.item.title }}
          </h3>
          <VIcon icon="mdi-chevron-right" />
        </div>
      </template>

      <VCard color="background" class="flex justify-center items-center p-10 rounded-lg border-4">
        <div class="w-75 flex flex-col gap-9 mb-5">
          <VBtn @click="dialog = false" class="flex justify-start w-28" variant="plain" prepend-icon="mdi-chevron-left">
            voltar
          </VBtn>

          <div class="flex gap-28">
            <img class="rounded-full w-96 h-96" src="https://source.unsplash.com/random">

            <div class="flex flex-col justify-start gap-6">
              <h1 class="text-5xl">{{ item.item.title }}</h1>
              <p class="text-lg">{{ item.item.desc }}</p>

              <div class="flex gap-4">
                <div
                  class="bg-[#192227] rounded-lg px-3 py-1 text-base"
                  v-for="ingrediente in item.item.ingredientes" 
                >
                  <p>
                    {{ ingrediente }}
                  </p>
                </div>
              </div>

              <div v-if="isAdmin" class="flex items-center gap-4">
                <Edit :item="item.item" :typeButton="'botao'" />
              </div>

              <div v-else class="flex items-center gap-4">
                <div class="flex gap-2">
                  <VIcon icon="mdi-minus" />

                  <p>01</p>

                  <VIcon icon="mdi-plus" />
                </div>

                <VBtn variant="outlined" color="red">
                  incluir
                </VBtn>
              </div>
            </div>
          </div>
        </div>
      </VCard>
    </VDialog>
  </div>
</template>
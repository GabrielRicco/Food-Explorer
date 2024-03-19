<script setup lang="ts">
import { computed, ref } from 'vue';
import { VIcon } from 'vuetify/lib/components/index.mjs';
import CardPopup from './CardPopup.vue';

  const showAll = ref(false);
  const props = defineProps(['items', 'type'])

  const itemsToShow = computed(() => {
    return showAll.value ? props.items : props.items.slice(0, 4);
  });

  function toggleShowAll() {
    showAll.value = !showAll.value;
  }
</script>

<template>
  <VContainer class="w-[1120px]">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-3xl">{{ props.type }}</h1>
      <VBtn @click="toggleShowAll" variant="plain">
        {{ showAll ? 'Mostrar menos' : 'Ver todos' }}
      </VBtn>
    </div>
    <VRow>
      <VCol v-for="(item, i) in itemsToShow" :key="i" cols="6" sm="3" xl="3" class="flex justify-between w-full">
        <VCard color="darkCard" class="w-full h-[440px] rounded-lg flex flex-col items-center justify-between p-6">
          <VIcon class="absolute flex justify-end w-full right-3 top-2" icon="mdi-heart-outline" />
          <img class="rounded-full w-48 h-48" src="https://source.unsplash.com/random">
          <CardPopup :item="item" />
          <p>{{ item.desc  }}</p>

          <h2>R$ {{ item.price }}</h2>

          <div class="flex items-center gap-4">
            <div class="flex gap-2">
              <VIcon icon="mdi-minus" />

              <p>01</p>

              <VIcon icon="mdi-plus" />
            </div>

            <VBtn variant="outlined" color="warning">
              incluir
            </VBtn>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { order } from '../api/data';

  const dialog = ref(false)

  const total = computed(() => {
    return order.value.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  });

  const finishedOrder = () => {
    order.value = []
    dialog.value = false
  }

</script>

<template>
  <div>
    <VDialog
      v-model="dialog"
      width="1400px"
    >
      <template #activator="{ props }">
        <VBtn
          v-bind="props"
          prepend-icon="mdi-table-chair"
          variant="outlined"
          color="red"
          class="py-6 flex"
        >
          pedidos <p v-if="order.length > 0">({{ order.length }})</p>
        </VBtn>
      </template>

      <VCard color="background" class="w-full flex justify-center items-center p-10 rounded-lg border-4">
        <div class="w-75">
          <VBtn @click="dialog = false" class="flex justify-start w-28" variant="plain" prepend-icon="mdi-chevron-left">
              voltar
          </VBtn>
          <div v-if="order.length > 0" class="flex justify-between">
            <section>
              <VCardTitle class="text-2xl text-start w-full mb-7">Meu pedido</VCardTitle>
      
              <div class="flex flex-col gap-9">
                <VCard class="flex items-center " color="background" v-for="(item, i) in order" :key="i">
                  <img class="w-16 h-16 rounded-full" :src="item.photo" alt="">
                  <div>
                    <VCardTitle class="flex items-center gap-4">
                      {{ item.title }} 
                      <p class="text-sm opacity-55">R$ {{ item.price }}</p>
                    </VCardTitle>
                  </div>
                </VCard>
                <p class="text-xl font-bold">Total R$ {{ total }}</p>
              </div>
            </section>

            <section>
              <VCardTitle class="text-2xl text-start w-full mb-7">Pagamento</VCardTitle>
              <VBtn @click="finishedOrder" class="p-6 flex" variant="outlined" color="red">
                finalizar pagamento
              </VBtn>
            </section>
          </div>

          <div v-else>
            <p class="w-full text-center text-2xl font-bold">Sem pedidos no momento, por favor faça um!</p>
          </div>
        </div>

      </VCard>
    </VDialog>
  </div>
</template>
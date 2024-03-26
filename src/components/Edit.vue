<script setup lang="ts">
import { ref } from 'vue';
import { VAutocomplete, VBtn, VCard, VCol, VDialog, VSelect, VTextField, VTextarea } from 'vuetify/lib/components/index.mjs';
import { api } from '../api/data';

const dialog = ref(false)

const props = defineProps(['typeButton', 'item'])

const todosIngredientes = [...new Set(api.map(item => item.ingredientes).flat())]
const todosTipos = [...new Set(api.map(item => item.type).flat())]

</script>

<template>
  <div>
    <VDialog
      v-model="dialog"
      width="1400px"
    >
      <template #activator="{ props }">
        <VBtn
          v-if="typeButton === 'botao'" 
          v-bind="props"
          variant="outlined" 
          color="red"
        >
          Editar prato
        </VBtn>

        <VIcon v-else 
          v-bind="props"
          class="absolute flex justify-end w-full right-3 top-2 hover:scale-105 cursor-pointer transition-transform" 
          icon="mdi-pencil" 
        />
      </template>

      <VCard color="background" class="flex justify-center items-center p-10 rounded-lg border-4">
        <div class="w-75 flex flex-col gap-9 mb-5">
          <VBtn @click="dialog = false" class="flex justify-start w-28" variant="plain" prepend-icon="mdi-chevron-left">
            voltar
          </VBtn>

          <VCardTitle>Editar prato</VCardTitle>

          <VForm @submit.prevent>
            <VRow>
              <VCol
                cols="4"
              >
                <VFileInput
                  variant="outlined"
                  label="Imagem do prato" 
                  placeholder="Selecione uma imagem"
                />
              </VCol>
              <VCol
                cols="4"
              >
                <VTextField
                  v-model="props.item.title" 
                  variant="outlined"
                  label="Nome" 
                  placeholder="Ex: Salada Caesar"
                />
              </VCol>
              <VCol
                cols="4"
              >
                <VSelect
                  v-model="props.item.type"  
                  variant="outlined"
                  :items="todosTipos"
                  clearable
                  label="Categoria" 
                  placeholder="Ex: Salada Caesar"
                />
              </VCol>
              <VCol
                cols="8"
              >
                <VAutocomplete
                  v-model="props.item.ingredientes"  
                  variant="outlined"
                  label="Ingredientes" 
                  :items="todosIngredientes"
                  placeholder="Adicionar +"
                  chips
                  closable-chips
                  multiple
                />
              </VCol>
              <VCol
                cols="4"
              >
                <VTextField
                  v-model="props.item.price"  
                  variant="outlined"
                  label="Preço" 
                  placeholder="R$ 00,00"
                />
              </VCol>
              <VCol
                cols="12"
              >
                <VTextarea
                  v-model="props.item.desc"  
                  variant="outlined"
                  label="Descrição" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                />
              </VCol>

              <VCol class="flex justify-end w-full gap-4">
                <VBtn variant="outlined" color="warning" class="py-5 flex">
                  Excluir prato
                </VBtn>

                <VBtn type="submit" variant="outlined" color="red" class="py-5 flex">
                  Salvar aletrações
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </div>
      </VCard>
    </VDialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { VAutocomplete, VBtn, VCard, VCol, VDialog, VSelect, VTextField, VTextarea } from 'vuetify/lib/components/index.mjs';
import { api } from '../api/data';

const emit = defineEmits(['novoPratoSalvo'])

const dialog = ref(false)

const formulario = ref({
  title: '',
  desc: '',
  price: 0,
  ingredientes: [],
  type: '',
  photo: '' 
})

const todosIngredientes = [...new Set(api.map(item => item.ingredientes).flat())]
const todosTipos = [...new Set(api.map(item => item.type).flat())]

const salvar = async () => {
  api.push(formulario.value)

  emit('novoPratoSalvo')
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
          prepend-icon="mdi-silverware-fork-knife"
          variant="outlined"
          color="red"
          class="py-6 flex"
        >
          Novo prato
        </VBtn>
      </template>

      <VCard color="background" class="flex justify-center items-center p-10 rounded-lg border-4">
        <div class="w-75 flex flex-col gap-9 mb-5">
          <VBtn @click="dialog = false" class="flex justify-start w-28" variant="plain" prepend-icon="mdi-chevron-left">
            voltar
          </VBtn>

          <VCardTitle>Adicionar prato</VCardTitle>

          <VForm @submit.prevent>
            <VRow>
              <VCol
                cols="4"
              >
                <VFileInput
                  v-model="formulario.photo"
                  accept="image/*"
                  variant="outlined"
                  label="Imagem do prato" 
                  placeholder="Selecione uma imagem"
                />
              </VCol>
              <VCol
                cols="4"
              >
                <VTextField
                  v-model="formulario.title"
                  variant="outlined"
                  label="Nome" 
                  placeholder="Ex: Salada Caesar"
                />
              </VCol>
              <VCol
                cols="4"
              >
                <VSelect
                  v-model="formulario.type" 
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
                  v-model="formulario.ingredientes" 
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
                  v-model="formulario.price" 
                  variant="outlined"
                  type="number"
                  label="Preço" 
                  placeholder="R$ 00,00"
                />
              </VCol>
              <VCol
                cols="12"
              >
                <VTextarea
                  v-model="formulario.desc" 
                  variant="outlined"
                  label="Descrição" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                />
              </VCol>

              <VCol class="flex justify-end w-full">
                <VBtn @click="salvar" type="submit" variant="outlined" color="red" class="py-5 flex">
                  Salvar prato
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </div>
      </VCard>
    </VDialog>
  </div>
</template>
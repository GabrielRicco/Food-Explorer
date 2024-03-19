<template>
  <VContainer color="#001119" class="d-flex align-center justify-center h-screen ma-0 pa-0">
    <div class="w-50 d-flex align-center justify-center">
      <img 
        src="../assets/image.svg"
      />
    </div>
    <VCard class="w-full max-w-[500px] pa-12 rounded-lg" color="card">
      <VCardTitle class="d-flex  justify-center mb-10">
        Crie sua conta
      </VCardTitle>
      <VForm>
        <VRow>
          <VCol
            cols="12"
            md="12"
          >
            <VTextField 
              variant="outlined"
              label="Nome"
              placeholder="Exemplo: Gabriel Ricco"
            />
          </VCol>
          <VCol
            cols="12"
            md="12"
          >
            <VTextField 
              variant="outlined"
              label="E-mail"
              placeholder="Exemplo: gabrielrdantas@outlook.com"
            />
          </VCol>
          <VCol
            cols="12"
            md="12"
          >
            <VTextField 
              variant="outlined"
              label="Senha"
              placeholder="No mínimo 6 caracteres"
            />
          </VCol>
          <VCol
            cols="12"
            md="12"
          >
            <VBtn variant="outlined" color="red" class="w-100 px-4 py-7 d-flex rounded-lg">
              Criar conta
            </VBtn>
          </VCol>

          <VCol
            cols="12"
            md="12"
          >
            <VBtn class="w-100" variant="text">
              Já tenho conta
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { VBtn, VCard, VCardTitle, VCol, VContainer, VForm, VImg, VRow, VTextField } from 'vuetify/lib/components/index.mjs';

  //
</script>

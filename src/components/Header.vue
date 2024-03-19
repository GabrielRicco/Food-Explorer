<script setup lang="ts">
</script>

<template>
  <header class="w-full h-full max-h-24 bg-[#00111A] flex items-center justify-center gap-32 mb-44">
    <img
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

    <VBtn
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
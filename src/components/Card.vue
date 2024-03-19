<script>

</script>

<template>
  <VCard color="darkCard" class="w-72 h-[460px] rounded-lg flex flex-col items-center justify-between p-6">
    <img class="rounded-full w-48 h-48" src="https://source.unsplash.com/random">
    <h3>Comida</h3>
    <p>descrição</p>

    <h2>Preço R$</h2>

    <div class="flex items-center">
      <div class="flex">
        <VIcon icon="mdi-minus" />

        <p>01</p>

        <VIcon icon="mdi-plus" />
      </div>

      <VBtn variant="outlined" color="warning">
        incluir
      </VBtn>
    </div>
  </VCard>
</template>
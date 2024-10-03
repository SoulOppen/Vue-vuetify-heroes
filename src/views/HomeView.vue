<script setup>
import {img} from '@/utils'
</script>

<template>
  <main class="d-flex justify-space-around align-center flex-column total position-relative">
    <VImg :src="img" class="position-absolute w-100 fondo" cover></VImg>
    <VContainer>
      <VCard color="transparent" flat class="w-50 mx-auto border-card">
        <VCardTitle class="font-weight">
          Desafía las expectativas MOBA
        </VCardTitle>
        <VCardText>
          Épicos heroes y accion sin cesar en multiples campos de batalla
        </VCardText>
        <VCardActions>
          <VBtn  class="w-50 mx-auto bg-orange-darken-3" to="/heroes">Ver Heroes</VBtn>
        </VCardActions>
      </VCard>
    </VContainer>
    <VCard class="w-100 opacity-60 pa-5" color="purple-darken-1">
      ¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es posible! Elige entre decenas de héroes legendarios en el reino de Blizzard, personaliza tu talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto no es un moba esto es Heroes Of The Storm!
    </VCard>
  </main>
</template>
<style scoped>
.total{
  min-height: 100%;
}
.fondo{
  filter: brightness(50%);
}
.border-card{
  border: 5px solid white;
}
.font-weight{
  font-size: xx-large;
  font-weight: 700;
}
</style>

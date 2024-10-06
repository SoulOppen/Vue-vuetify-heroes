<script setup>
import { ref,computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import img from'@/utils'
import { useRouter } from 'vue-router';
const store=useStore();
const router=useRouter();
const imagen=ref(img)
const heroes=computed(()=>store.state.heroes)
const fetchDoc=()=>store.dispatch('fetchFire')
const logout=()=>{
  store.dispatch('logout')
  router.push('/')
}
onMounted(
 ()=>fetchDoc()
)
</script>
<template>
  <div class="total position-relative">
    <VImg :src="imagen" class="position-absolute w-100 fondo" cover></VImg>
    <VContainer class="d-flex justify-space-around flex-column position-relative">
      <h2>Héroes</h2>
      <div class="d-flex justify-space-between w-25 bg-gray-darker-1">
        <VIcon>mdi-shield-half-full</VIcon>
        <VIcon>mdi-crosshairs-gps</VIcon>
        <VIcon>mdi-hospital</VIcon>
        <VIcon>mdi-sword</VIcon>
        <VIcon>mdi-arch</VIcon>
        <VIcon>mdi-hand-back-left</VIcon>
      </div>
      <VTable class="my-4 mx-auto body ">
        <thead>
          <tr>
            <th class="text-center">Héroe</th>
            <th class="text-center">Detalles</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="hero in heroes" :key="hero.id">
            <td class="pa-3">
              <VImg :src="hero.imagen" height="5rem" width="5rem" class="d-block mx-auto rounded-circle" cover/>
              <p class="text-center">{{hero.nombre}}</p>
            </td>
            <td>
              <VBtn color="blue" class="d-flex justify-center align-center w-25 mx-auto" :to="`/heroes/${hero.id}`">Detalle</VBtn>
            </td>
          </tr>
        </tbody>
      </VTable>
      <VBtn color="info" class="w-25 mx-auto" @click="logout">logout</VBtn>
    </VContainer>
  </div>
</template>

<style scoped>
.total{
  min-height: 100%;
}
.fondo{
  border-radius: 0;
  filter: blur(5px);
}
.container{
  background-color: transparent;
}
.body{
  overflow-y: auto;
  height: 50vh;
  width:50vw;
}
</style>

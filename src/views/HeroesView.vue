<script setup>
import { ref,computed } from 'vue';
import { useStore } from 'vuex';
import{img} from '@/utils'
const store=useStore();
const imagen=ref(img)
const heroes=computed(()=>store.state.heroes)
</script>
<template>
  <div class="total position-relative">
    <VImg :src="imagen" class="position-absolute w-100 fondo" cover></VImg>
    <VContainer class="d-flex justify-space-around flex-column position-relative">
      <h2>Héroes</h2>
      <div class="d-flex justify-space-between w-25 bg-gray-darker-1">
        <VIcon>mdi-shield</VIcon>
        <VIcon>mdi-crosshairs-gps</VIcon>
        <VIcon>mdi-hospital</VIcon>
        <VIcon>mdi-sword</VIcon>
        <VIcon>mdi-arch</VIcon>
        <VIcon>mdi-hand-back-left</VIcon>
      </div>
      <VTable class="ma-4 body">
        <thead>
          <tr>
            <th>Héroe</th>
            <th>Nombre</th>
            <th>Función</th>
            <th>Título</th>
            <th>Ataque</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="hero in heroes" :key="hero.id">
            <td><VImg :src="hero.imagen" cover/></td>
            <td>{{hero.nombre}}</td>
            <td>{{hero.funcion}}</td>
            <td>{{hero.titulo}}</td>
            <td v-if="typeof(hero.ataque)!=='object'">{{hero.ataque}}</td>
            <td v-else>
              <p v-for="key in Object.keys(hero.ataque)" :key="key">{{key}}:{{hero.ataque[key]}}</p>
            </td>
          </tr>
        </tbody>
      </VTable>
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
}
</style>

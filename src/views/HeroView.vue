<script setup>
import {defineProps,computed} from 'vue';
import { useStore } from 'vuex';
const store =useStore()
const prop=defineProps({
    id:{
        typeof:String,
        require:true
    }
});
const mail='ar@hj'
const hero = computed(()=> store.getters.GET_HERO(prop.id))
</script>
<template>
    <VContainer class="bg-info my-5">
        <h3 class="ms-3 text-yellow-darken-3">Bienvenido {{mail}}</h3>
        <h3 class="text-center  my-1 text-yellow-darken-3">Aquí puedes ver los detalles del héroe seleccionado</h3>
        <VCard class="mx-auto my-3 w-50 bg-shades-white">
            <div class="position-relative w-100 h-25">
                <img :src="hero.imagen"/>
                <div class="position-absolute index w-100">
                    <VCardTitle class="text-center text-white  ">{{hero.nombre}}</VCardTitle>
                </div>
            </div>
            <VCardItem prepend-icon="mdi-sword-cross" class="text-blue-darken-2">
                <div>
                    <p>{{hero.ataque}}</p>
                    <small class="text-grey">Ataque</small>
                </div>
            </VCardItem>
            <VCardItem prepend-icon="mdi-decagram" class="text-blue-darken-2">
                <div>
                    <p>{{hero.titulo}}</p>
                    <small class="text-grey">Titulo</small>
                </div>
            </VCardItem>
            <VCardItem prepend-icon="mdi-tools" class="text-blue-darken-2">
                <div>
                    <p>{{hero.funcion}}</p>
                    <small class="text-grey">Función</small>
                </div>
            </VCardItem>
        </VCard>
    </VContainer>
</template>
<style scoped>
.size{
    width:100%;
    height: 10vh;
}
img{
 width: 100%;
 aspect-ratio: 16/9;
}
.index{
    top:10vh;
    z-index: 6;
}
</style>
<script setup>
import { ref } from 'vue';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const email=ref('');
const pass=ref('');
const router=useRouter()
const store=useStore()
const change=()=>{
    store.dispatch('checkAuth')
}
const login=()=>{
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential)=>{
            const user = userCredential.user;
            change()
            router.push('/heroes');
        })
        .catch(error=>{
            const errorMsg = error.message;
            console.log(errorMsg);
        })
}
</script>
<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="5">
                <h2>Login</h2>
                <h3>User: hola@oppen.cl pass: 1234Oppen</h3>
                <v-form>
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="pass"
                        label="Contraseña"
                        type="password"
                        required>
                    </v-text-field>



                    <v-btn color="info" class="mr-4" @click="login()">
                        Ingresar
                    </v-btn>


                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
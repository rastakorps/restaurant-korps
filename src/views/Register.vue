<template>
        <v-row class="h-screen m-0">
            <v-col cols="12" sm="6" color="primary" class="bg-teal-lighten-1 h-screen d-flex flex-column align-center justify-center">
                <h1>RESTAURANTE</h1>
                <v-avatar image="https://randomuser.me/api/portraits/women/81.jpg" size="350"></v-avatar>
            </v-col>

            <v-col cols="12" sm="12" md="6" class="d-flex flex-column align-center justify-center">
                <v-card class="elevation-12 rounded-box">
                  <v-card-title class="headline text-center">Regístrate</v-card-title>
                  <v-card-text>
                    <v-form ref="form" @submit.prevent="validate">
                      <v-text-field
                        v-model="formInputs.name" 
                        label="Nombre" 
                        prepend-inner-icon="mdi-account"
                        variant="solo"
                        :rules="nameRules"
                        class="mb-1"
                      ></v-text-field>

                      <v-text-field
                        v-model="formInputs.email" 
                        label="Email" 
                        type="email" 
                        prepend-inner-icon="mdi-email"
                        variant="solo"
                        :rules="emailRules"
                        class="mb-1"
                      ></v-text-field>

                      <v-text-field 
                        v-model="formInputs.password" 
                        label="Contraseña" 
                        type="password"
                        prepend-inner-icon="mdi-lock"
                        variant="solo"
                        :rules="passwordRules"
                        class="mb-1"
                        >
                      </v-text-field>
                      <v-row>
                        <v-col>
                          <v-btn type="submit" color="primary">Registrar</v-btn>
                        </v-col>
                        <v-col>
                          <router-link to="/login" class="no-underline"> 
                            <v-btn color="secondary">Entrar</v-btn>
                          </router-link>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
            </v-col>
        </v-row>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';

  const authStore = useAuthStore()
  const form = ref()
  const formInputs = ref({
    name: '',
    email: '',
    password: ''
  })

  const nameRules = ref([
    v => !!v || 'El nombre es requerido',
  ])

  const emailRules = ref([
    v => !!v || 'El correo es requerido',
  ])

  const passwordRules = ref([
    v => !!v || 'La contraseña es requerida',
    v => (v && v.length >= 5) || 'Mínimo 6 caracteres',
  ])
  
  async function validate () {
    const { valid } = await form.value.validate()

    if (valid) {
      authStore.register(formInputs)
    }
  }
  </script>
  
  <style scoped>
  .rounded-box {
    border-radius: 15px;
  }
  
  .text-center {
    text-align: center;
  }

  .no-underline {
    text-decoration: none !important;
  }
  </style>
  
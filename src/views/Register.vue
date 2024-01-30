<template>
        <v-row class="h-screen m-0">
            <v-col cols="12" sm="6" color="primary" class="bg-teal-lighten-1 h-screen d-flex flex-column align-center justify-center">
                <h1>RESTAURANTE KORPS</h1>
                <v-avatar image="https://randomuser.me/api/portraits/women/81.jpg" size="350"></v-avatar>
            </v-col>

            <v-col cols="12" sm="12" md="6" class="d-flex flex-column align-center justify-center">
                <v-card class="elevation-12 rounded-box">
                  <v-card-title class="headline text-center">Registrate</v-card-title>

                  <v-card-text>
                    <v-form @submit.prevent="registerUser">
                      <v-text-field v-model="nombre" label="Nombre" outlined></v-text-field>
                      <v-text-field v-model="email" label="Email" type="email" outlined></v-text-field>
                      <v-text-field v-model="contraseña" label="Contraseña" type="password" outlined></v-text-field>
                    
                      <v-row>
                        <v-col>
                          <v-btn type="submit" color="primary">Registrar</v-btn>
                        </v-col>
                        <v-col>
                          <router-link to="/login">
                            <v-btn color="secondary">Ir a Login</v-btn>
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
  import { useRouter } from 'vue-router';
  
  const nombre = ref('');
  const email = ref('');
  const contraseña = ref('');
  const router = useRouter();
  
  const registerUser = () => {
    // Lógica para registrar al usuario, por ejemplo, enviar una solicitud al servidor
    // y luego redirigir a la página de inicio de sesión
    console.log('Registrando usuario');
    router.push('/login');
  };
  </script>
  
  <style scoped>
  .rounded-box {
    border-radius: 15px;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  
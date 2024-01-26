<script setup>
    import SideBar from '../components/SideBar.vue'
</script>

<template>
    <v-card>
        <v-layout>
            <SideBar/>
            <v-main class="main-container">
              <h1>Hola mundo</h1>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
    .main-container {
        min-height: 100vh;
    }
</style>
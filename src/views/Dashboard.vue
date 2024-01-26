<script setup>
    import { RouterView } from 'vue-router';
    import SidebarMenu from '../components/SidebarMenu.vue'
</script>

<template>
    <v-card>
        <v-layout>
            <SidebarMenu />
            <v-main class="h-screen">
                <RouterView />
            </v-main>
        </v-layout>
    </v-card>
</template>
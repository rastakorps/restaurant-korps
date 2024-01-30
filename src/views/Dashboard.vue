<script setup>
    import { RouterView } from 'vue-router';
    import SidebarMenu from '../components/SidebarMenu.vue';
    import { useAuthStore } from '../stores/auth'

    const auth = useAuthStore()
</script>

<template>
        <v-layout v-if="auth.user">
            <SidebarMenu />
            <v-main class="h-screen">
                <RouterView />
            </v-main>
        </v-layout>

        <v-layout v-else>
            <v-main>
                <RouterView />
            </v-main>
        </v-layout>
</template>
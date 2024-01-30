<script setup>
    import { RouterView } from 'vue-router';
    import SidebarMenu from '../components/SidebarMenu.vue';
    import { ref } from 'vue';

    const showMenu = ref(false);
</script>

<template>
        <v-layout v-if="showMenu">
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
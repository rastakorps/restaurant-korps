<script setup>
import { ref } from 'vue';
import DataTableActionButtons from '../../components/DataTableActionButtons.vue';

    const headersTable = ref([
        {title: 'Id', key: 'id'},
        {title: 'Nombre', key: 'name'},
        {title: 'Email', key: 'email'},
        {title: 'Acciones', key: 'actions'}
    ]);
    const desserts = ref([
          {
            id: 1,
            name: 'José Cruz',
            email: 'jose@test.com',
          },
          {
            id: 2,
            name: 'Luis Castro',
            email: 'luis@test.com',
          },
          {
            id: 3,
            name: 'Felipe Garcia',
            email: 'jelipe@test.com',
          },
          {
            id: 4,
            name: 'Angel Mena',
            email: 'angel@test.com',
          },
          {
            id: 5,
            name: 'Karen Oceguera',
            email: 'karen@test.com',
          },
          {
            id: 6,
            name: 'Hanna Olivares',
            email: 'hanna@test.com',
          },
          {
            id: 7,
            name: 'Susana Ontaria',
            email: 'susana@test.com',
          },
          {
            id: 8,
            name: 'Cristina Olvera',
            email: 'cristina@test.com',
          },
          {
            id: 9,
            name: 'Alma velazco',
            email: 'alma@test.com',
          },
          {
            id: 10,
            name: 'Berenice guerra',
            email: 'bere@test.com',
          },
        ],);

    const sayHello = () => {
        console.log('say hello');
    }
</script>
<template>
    <v-toolbar
        color="teal-lighten-1"
    >
        <v-toolbar-title><strong>Usuarios</strong></v-toolbar-title>
    </v-toolbar>

    <div class="v-container">
        <v-data-table
            :headers="headersTable"
            :items="desserts"
            item-value="name"
        >

            <template v-slot:[`item.price`]={item}>
                $ {{ item.price }}
            </template>

            <template v-slot:[`item.actions`]={item}>
                <DataTableActionButtons 
                    :item="item"
                    @edit="sayHello"
                />
            </template>
        </v-data-table>
    </div> 
</template>
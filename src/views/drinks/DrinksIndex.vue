<script setup>
import { ref } from 'vue';
import DataTableActionButtons from '../../components/DataTableActionButtons.vue';

    const headersTable = ref([
        {title: 'Nombre', key: 'name'},
        {title: 'Precio $', key: 'price'},
        {title: 'Acciones', key: 'actions'}
    ]);
    const desserts = ref([
          {
            name: 'Coca-cola',
            price: 159,
          },
          {
            name: 'Pepsi',
            price: 237,
          },
          {
            name: 'Agua fresca',
            price: 262,
          },
          {
            name: 'Cerveza',
            price: 305,
          },
          {
            name: 'Agua natural',
            price: 356,
          },
          {
            name: 'Sprite',
            price: 375,
          },
          {
            name: 'Fanta',
            price: 392,
          },
          {
            name: 'Honeycomb',
            price: 408,
          },
          {
            name: 'Donut',
            price: 452,
          },
          {
            name: 'KitKat',
            price: 518,
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
        <v-toolbar-title><strong>Bebidas</strong></v-toolbar-title>
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
<script setup>
import { ref } from 'vue';

    const headersTable = ref([
        {title: 'Nombre', key: 'name'},
        {title: 'Precio $', key: 'price'},
        {title: 'Acciones', key: 'actions'}
    ]);
    const desserts = ref([
          {
            name: 'Frozen Yogurt',
            price: 159,
          },
          {
            name: 'Ice cream sandwich',
            price: 237,
          },
          {
            name: 'Eclair',
            price: 262,
          },
          {
            name: 'Cupcake',
            price: 305,
          },
          {
            name: 'Gingerbread',
            price: 356,
          },
          {
            name: 'Jelly bean',
            price: 375,
          },
          {
            name: 'Lollipop',
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
</script>
<template>
    <v-toolbar
        color="teal-lighten-1"
    >
        <v-toolbar-title><strong>Platillos</strong></v-toolbar-title>
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
        </v-data-table>
    </div>
</template>
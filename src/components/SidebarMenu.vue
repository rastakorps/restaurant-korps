<script setup>
    
</script>

<template>
    <v-navigation-drawer
      permanent
      theme="dark"
    >
      <v-list nav>
        <v-list-item 
            prepend-icon="mdi-invoice-list" 
            title="Ordenes" 
            value="orders"
            to="/orders"
        >
        </v-list-item>

        <v-list-item 
            prepend-icon="mdi-pasta" 
            title="Platillos" 
            value="dishes"
            to="/dishes"
        >
        </v-list-item>

        <v-list-item 
            prepend-icon="mdi-glass-mug-variant" 
            title="Bebidas" 
            value="drinks"
            to="/drinks"
        >
        </v-list-item>

        <v-list-item 
            prepend-icon="mdi-account-group" 
            title="Usuarios" 
            value="users"
            to="/users"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
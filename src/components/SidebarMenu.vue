<script setup>
    
</script>

<template>
    <v-navigation-drawer
      permanent
      theme="dark"
    >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
            subtitle="Logged in"
          ></v-list-item>
        </template>

        <v-divider></v-divider>
      <v-list nav>
        <v-list-item 
            prepend-icon="mdi-invoice-list" 
            title="Ordenes" 
            value="orders"
            to="/"
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

        <template v-slot:append>
          <div class="pa-2">
            <v-btn append-icon="mdi-logout">
              Cerrar sesión
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
</template>
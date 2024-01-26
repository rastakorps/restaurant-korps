<template>
    <v-navigation-drawer
      permanent
      theme="dark"
    >
      <v-list nav>
        <v-list-item prepend-icon="mdi-invoice-list" title="Ordenes" value="orders"></v-list-item>
        <v-list-item prepend-icon="mdi-pasta" title="Platillos" value="dishes"></v-list-item>
        <v-list-item prepend-icon="mdi-glass-mug-variant" title="Bebidas" value="drinks"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Usuarios" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
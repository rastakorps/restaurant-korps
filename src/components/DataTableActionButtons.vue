<template>
        <v-tooltip text="Ver" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
                    small
                    color="teal-lighten-1"
                    @click="$emit('edit', 'nada')"
                    class="mr-3"
                    v-bind="props"
                >
                    mdi-eye
                </v-icon>
          </template>
        </v-tooltip>

        <v-tooltip text="Editar" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
                    small
                    color="teal-lighten-1"
                    @click="$emit('edit', 'nada')"
                    class="mr-3"
                    v-bind="props"
                >
                    mdi-pencil
                </v-icon>
          </template>
        </v-tooltip>

        <v-tooltip text="Eliminar" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
                    small
                    color="teal-lighten-1"
                    @click="$emit('edit', 'nada')"
                    v-bind="props"
                >
                    mdi-trash-can
                </v-icon>
          </template>
        </v-tooltip>
</template>
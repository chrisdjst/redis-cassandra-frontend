<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-card width="1000">
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-h4 mb-4">
                            Curso
                        </div>
                        <v-list-item-title class="text-h5 mb-16">
                            Materia
                        </v-list-item-title>
                        <v-list-item-title class="text-h5 mb-1">
                            Turma
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-data-table :headers="headers" :items="desserts" class="elevation-1" hide-default-footer>
                </v-data-table>
                <v-card-actions>
                    <router-link to="/">
                        <v-btn elevation="12" dark x-large>Voltar para Login</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>

        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Componente curricular',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Local', value: 'local' },
          { text: 'Data', value: 'data' },
        ],
        desserts: [
          {
            name: 'Materia - Turma',
            local: 'B1',
            data: '07/03/2022 - 22/07/2022',
          },
          {
            name: 'Materia - Turma',
            local: 'B1',
            data: '07/03/2022 - 22/07/2022',
          },
        ],
      }
    },
  }
</script>
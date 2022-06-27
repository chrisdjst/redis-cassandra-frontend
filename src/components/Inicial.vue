<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-card width="1000">
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="registro-aula mb-4">
                            Curso
                        </v-list-item-title>
                        <v-list-item-title class="registro-aula mb-1">
                            Turma
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <div class="empurra">
                <v-data-table :headers="headers" :items="desserts" class="elevation-1 tabela" hide-default-footer>
                </v-data-table>
                </div>
                <br><br>
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
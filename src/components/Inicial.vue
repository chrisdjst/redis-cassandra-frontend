<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card width="1000">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="registro-aula mb-4">
              Curso
              <v-btn color="primary" rounded>Alterar</v-btn>
            </v-list-item-title>

            <v-list-item-title class="registro-aula mb-1">
              Turma
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="empurra">
          <v-simple-table class="tabela">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Componente curricular
                  </th>
                  <th>
                    Local
                  </th>
                  <th>
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>     
                <tr v-for="item in desserts" :key="item.name">

                  <td>
                    <v-btn plain color="#000000" to="/registroaula">
                      {{ item.name }}
                    </v-btn>    
                  </td>
                  <td>{{ item.local }}</td>
                  <td>{{ item.data }}</td>
                  
                </tr>
                
              </tbody>
              
            </template>
          </v-simple-table>
        </div>
        <br><br>
      </v-card>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Componente curricular',

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

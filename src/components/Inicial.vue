<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card width="1000">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="registro-aula mb-4">
              {{ perfil.tipoUsuario }} {{ perfil.nome }}
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
                <tr v-for="item in diciplinas" :key="item.name">

                  <td>
                    <v-btn @click="Gambiarra(item.materia, item.curso, item.turma)" plain color="#000000" >
                      {{ item.materia }} - {{ item.curso }} {{ item.turma }}
                    </v-btn>
                  </td>
                  <td>B1</td>
                  <td>{{ item.dtInicio }} - {{ item.dtFim }}</td>

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
      perfil: '',
      headers: [
        {
          text: 'Componente curricular',

          value: 'name',
        },
        { text: 'Local', value: 'local' },
        { text: 'Data', value: 'data' },
      ],
      diciplinas: [

      ],
    }
  },
  methods: {
    async ListarDiciplinas(e) {
      const response = await fetch("https://redis-cassandra-backend.herokuapp.com/leciona/" + sessionStorage.getItem('email'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
      });
      const resposta = await response.json();
      this.diciplinas = resposta;
    },
    async PegaNoMeuPerfil(e) {
      const response = await fetch("https://redis-cassandra-backend.herokuapp.com/usuarios/" + sessionStorage.getItem('email'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
      });
      this.perfil = await response.json();
      this.perfil = this.perfil[0];
    },
    Gambiarra(materia, curso, turma){
      localStorage.setItem('materia', materia);
      localStorage.setItem('curso', curso);
      localStorage.setItem('turma', turma);
      this.$router.push('/registroaula')
    }

  },
  created() {
    this.ListarDiciplinas();
    this.PegaNoMeuPerfil();
  },
}
</script>

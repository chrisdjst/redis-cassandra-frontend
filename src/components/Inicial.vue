<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card width="1000">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="registro-aula mb-4">Vínculos do usuário</v-list-item-title>
            <v-list-item-title class="registro-aula mb-4">
              {{ perfil.tipo_usuario }}: {{ perfil.nome }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="empurra" >
          <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Pesquisar disciplina.."/>
          </div>
          <v-simple-table class="tabela">
            <template v-slot:default v-if="tipo_usuario=='Professor'">
              <thead>
                <tr>
                  <th>
                    Componente curricular
                  </th>
                  <th>
                    Data inicial - Data final
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filteredList" :key="item.name">
                  <td>
                    <v-btn @click="Gambiarra(item.materia, item.curso, item.turma)" plain color="#000000" >
                      {{ item.materia }} - {{ item.curso }} {{ item.turma }}
                    </v-btn>
                  </td>
                  <td>{{ item.dt_inicio }} - {{ item.dt_fim }}</td>
                </tr>
              </tbody>
            </template>

            <!-- Alunooo!!!!! -->
            
            <template v-slot:default v-else>
              <thead>
                <tr>
                  <th>
                    Componente curricular
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filteredListAluno" :key="item.disciplina">
                  <td>
                    <v-btn @click="GambiarraAluno(item.disciplina)" plain color="#000000" >
                      {{ item.disciplina }}
                    </v-btn>
                  </td>
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
      tipo_usuario: '',
      headers: [
        {
          text: 'Componente curricular',
          value: 'name',
        },
        { text: 'Data', value: 'data' },
      ],
      search: '',
      disciplinas: [
      ],
    }
  },
  methods: {
    async ListarDiciplinas(e) {
      const response = await fetch("https://redis-cassandra-backend.herokuapp.com/redisLeciona/" + sessionStorage.getItem('email'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
      });
      const resposta = await response.json();
      this.disciplinas = resposta.materias;
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
      this.tipo_usuario = this.perfil.tipo_usuario;
    },
    Gambiarra(materia, curso, turma){
      localStorage.setItem('materia', materia);
      localStorage.setItem('curso', curso);
      localStorage.setItem('turma', turma);
      this.$router.push('/registroaula')
    },
    logado() {
      if (!sessionStorage.getItem('token')) {
        this.$router.push('/')
      }
    },
    async ListarDiciplinasAluno(e) {
      const response = await fetch("https://redis-cassandra-backend.herokuapp.com/redisMatricula/" + sessionStorage.getItem('email'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
      });
      const resposta = await response.json();
      this.disciplinas = resposta.disciplinas;
      localStorage.setItem('curso', resposta.curso);
      localStorage.setItem('turma', resposta.turma);
      this.matricula = resposta.num_matricula;
    },
    GambiarraAluno(disciplina) {
        localStorage.setItem('materia', disciplina);
        this.$router.push('/registroaulaaluno')
    }
  },
  computed: {
    filteredList() {
      return this.disciplinas.filter(a => {
        return a.materia.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredListAluno() {
      return this.disciplinas.filter(a => {
        return a.disciplina.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  async created() {
    this.logado();
    await this.PegaNoMeuPerfil();
    if (this.tipo_usuario == 'Aluno') {
        this.ListarDiciplinasAluno();
    } else {
        this.ListarDiciplinas();
    }
  },
}
</script>
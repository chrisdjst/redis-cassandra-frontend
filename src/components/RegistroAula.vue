<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-card width="1000">
                <div class="empurra">
                    <v-btn to="/inicial" color="primary" rounded>
                        Voltar
                    </v-btn>
                </div>

                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="mb-7 registro-aula">
                            Curso
                        </v-list-item-title>
                        <v-list-item-title class="mb-7 registro-aula">
                            Turma
                        </v-list-item-title>
                        <v-list-item-title class="mb-7 registro-aula">
                            Disciplica
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <div class="aula" v-for="item in turmas">
                    <div class="empurra">
                        {{ item.materia }} - {{ item.turma }} - {{ item.dtAula }}
                        <v-btn icon to="/editarregistro">
                            <v-icon>mdi-pencil-outline</v-icon>
                        </v-btn>
                        <v-divider></v-divider>
                    </div>
                
                <div class="conteudo">
                    {{ item.descricaoAula }}
                </div>
                </div>
                <div class="empurra">
                    <v-btn color="primary" rounded to="/adicionarregistro">Adicionar registro de Aula</v-btn>
                </div>
                <br><br><br>
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
            turmas: [

            ],
        }
    },
    methods: {
        async ListarTurmas(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/aulas/" + this.$store.getters["getEmail"], {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.$store.getters["getToken"]
                }
            });
            const resposta = await response.json();
            this.turmas = resposta;
        },
    },
    created() {
        this.ListarTurmas();
    },
}
</script>

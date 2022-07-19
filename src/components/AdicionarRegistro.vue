<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>

            <v-card width="1000">

                <v-col cols="12" sm="" md="6">
                    <div class="empurra">
                        <v-btn to="/registroaula" color="primary" rounded>
                            Voltar
                        </v-btn>
                    </div>
                </v-col>
                <br>
                <v-hover>
                    <v-col cols="12" sm="6" md="6">
                        <v-card-title class="perfil-titulo2" >
                            Criar Registro da Aula
                        </v-card-title>
                        <div class="empurra">
                            <v-form ref="form" class="perfil2">
                                <v-text-field v-model="curso" label="Curso" outlined :readonly="true"></v-text-field>
                                <v-text-field v-model="turma" label="Turma" outlined :readonly="true"></v-text-field>
                                <v-text-field v-model="materia" label="Materia" outlined :readonly="true"></v-text-field>
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="data_aula"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="data_aula"
                                            label="Data da aula"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            outlined
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="data_aula"
                                        no-title
                                        scrollable
                                    >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false"
                                    > Cancel </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu.save(data_aula)"
                                    > OK </v-btn>
                                    </v-date-picker>
                                </v-menu>
                                <v-textarea outlined name="input-7-4" v-model="conteudo" label="Conteúdo da aula"></v-textarea>
                                <v-alert type="success" v-show="alerta">
                                    Aula registrada com sucesso!
                                </v-alert>
                                <v-alert type="error" v-show="alertaerro">
                                    Erro ao registrar a aula!
                                </v-alert> 

                            </v-form>
                            
                            <br>
                            <v-btn color="primary" v-on:click="CriarRegistro">
                                Registrar aula
                            </v-btn>
                            <br><br>
                        </div>
                    </v-col>
                </v-hover>
            </v-card>

            <v-spacer></v-spacer>

        </v-row>
    </v-container>

</template>

<script>

export default {
    data: () => ({
        alerta: false,
        alertaerro: false,
        curso: '',
        turma: '',
        materia: '',
        data_aula: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        conteudo: '',
        email: '',
        nome: '',
        menu: false,
    }),
    methods: {        
        async CriarRegistro(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/aulas/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage.getItem('token')
                },
                body: JSON.stringify({
                    curso: this.curso,
                    turma: this.turma,
                    materia: this.materia,
                    nome: this.nome,
                    dt_aula: this.data_aula,
                    descricao_aula: this.conteudo,
                    email: sessionStorage.getItem('email'),
                    nome: this.nome,
                }),
            });
            if (response.status == 201) {
                this.alertaerro = false;
                this.alerta = true;
                this.descricao_aula = '';
            } else {
                this.alerta = false;
                this.alertaerro = true;
            }
        },
        async pegarInfoPerfil(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/usuarios/" + sessionStorage.getItem("email"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage.getItem("token")
                }
            });
            const resposta = await response.json();
            const usuario = resposta[0]
            this.email = usuario.email;
            this.nome = usuario.nome;
        }
},
    created() {
        this.curso=localStorage.getItem('curso');
        this.turma=localStorage.getItem('turma');
        this.materia=localStorage.getItem('materia');
        this.pegarInfoPerfil();
    }
}
</script>

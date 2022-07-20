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
                        <v-card-title class="perfil-titulo2">
                            Editar Registro da Aula
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
                                    :readonly="true"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="data_aula"
                                            label="Data da aula"
                                            prepend-icon="mdi-calendar"
                                            readonly
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
                                <v-textarea outlined name="input-7-4" v-model="conteudo" label="Conteúdo da aula">
                                </v-textarea>
                                <v-btn color="primary" v-on:click="AlterarRegistro">
                                Alterar registro da aula
                                </v-btn>
                            </v-form>
                            <br>
                            <v-alert type="success" v-show="alerta">
                                    RegistroAula alterado com sucesso!
                                </v-alert>
                                <v-alert type="error" v-show="alertaerro">
                                    Erro ao alterar o RegistroAula!
                                </v-alert>
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
        curso: '',
        turma: '',
        materia: '',
        data_aula: '',
        conteudo: '',
        menu: false,
        alerta: false,
        alertaerro: false
    }),
    methods: {        
        async AlterarRegistro(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/aulas/" + localStorage.getItem('materia') + "/" + localStorage.getItem('curso') + "/" + localStorage.getItem('data_aula'), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage.getItem('token')
                },
                body: JSON.stringify({
                    turma: this.turma,
                    descricao_aula: this.conteudo,
                }),
            });
            if (response.status !== 200) {
                this.alertaerro = true;
                this.alerta = false;
            } else {
                this.alerta = true;
                this.alertaerro = false;
            }
        }  
    },
    created() {
        this.curso=localStorage.getItem('curso');
        this.turma=localStorage.getItem('turma');
        this.materia=localStorage.getItem('materia');
        this.data_aula=localStorage.getItem('data_aula');
        this.conteudo=localStorage.getItem('conteudo');
    }
}
</script>

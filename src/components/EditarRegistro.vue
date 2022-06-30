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
                <v-hover v-slot:default="{ hover }">
                    <v-col cols="12" sm="6" md="6">
                        <v-card-title class="perfil-titulo2">
                            Editar Registro da Aula
                        </v-card-title>
                        <div class="empurra">
                            <v-form ref="form" class="perfil2" @submit="CriarRegistro">
                                <v-text-field v-model="curso" label="Curso" outlined :readonly="true"></v-text-field>
                                <v-text-field v-model="turma" label="Turma" outlined :readonly="true"></v-text-field>
                                <v-text-field v-model="materia" label="Materia" outlined :readonly="true">
                                </v-text-field>
                                <v-text-field v-model="titulo" label="Titulo da aula" outlined></v-text-field>
                                <v-text-field v-model="data" label="Data da aula" outlined></v-text-field>
                                <v-textarea outlined name="input-7-4" v-model="conteudo" label="Conteúdo da aula">
                                </v-textarea>
                                <v-alert type="success" v-show="alerta">
                                    Perfil alterado com sucesso!
                                </v-alert>
                                <v-alert type="error" v-show="alertaerro">
                                    Erro ao alterar o perfil!
                                </v-alert>

                            </v-form>
                            <br>
                            <v-btn color="primary" type="submit">
                                Alterar registro da aula
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
        curso: '',
        turma: '',
        materia: '',
        titulo: '',
        data: '',
        conteudo: ''
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
                    titulo: this.titulo,
                    data: this.data,
                    conteudo: this.conteudo,
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
    }
}
</script>
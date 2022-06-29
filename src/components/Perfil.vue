<template onload="editarPerfil">
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-card width="1000">
                
                    <v-col cols="12" sm="" md="6">
                        <div class="empurra">
                        <v-btn to="/inicial" color="primary" rounded>
                            Voltar
                        </v-btn>
                        </div>
                    </v-col>
                    <br>
                    <v-hover v-slot:default="{ hover }">
                        <v-col cols="12" sm="6" md="6">
                
                            <v-card-title class="perfil-titulo2">
                            Editar Perfil
                            </v-card-title>
                            <div class="empurra">
                            <v-form ref="form" class="perfil2">
                                <v-text-field v-model="nome" label="Nome" outlined></v-text-field>
                                <v-text-field v-model="senha" label="Senha" outlined></v-text-field>
                                <v-text-field v-model="email" :readonly="true" label="Email" outlined></v-text-field>
                                <v-text-field v-model="cpf" label="CPF" :readonly="true" outlined></v-text-field>
                                <v-text-field v-model="tipo_usuario" :readonly="true" label="Tipo de usuario" outlined></v-text-field>
                                <v-alert type="success" text>
                                Perfil alterado com sucesso!
                            </v-alert>
                            </v-form>
                            <br>
                            <v-btn color="primary" @click="editarPerfil">
                                Alterar Perfil
                            </v-btn>
                            </div>
                            <br><br>
                            
                        </v-col>
                        
                    </v-hover>
                
            </v-card>

            <v-spacer></v-spacer>

        </v-row>
    </v-container>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Perfil',
    computed: {
        ...mapGetters(["isLoggedIn", "getToken", "getEmail"])
    },
    data: () => ({
        nome: '',
        email: '',
        cpf: '',
        tipo: '',
        senha: '',
        tipo_usuario: '',
    }),
    methods: {
        async pegarInfoPerfil(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/usuarios/" + this.$store.getters["getEmail"], {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.$store.getters["getToken"]
            }
        });
        const resposta = await response.json();
        const usuario = resposta[0]
        this.email = usuario.email;
        this.cpf = usuario.cpf;
        this.nome = usuario.nome;
        this.senha = usuario.senha;
        this.tipo_usuario = usuario.tipoUsuario;
        },
        async editarPerfil(e) {
            const response = await fetch("https://redis-cassandra-backend.herokuapp.com/usuarios/" + this.$store.getters["getEmail"], {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.$store.getters["getToken"]
                },
                body: JSON.stringify({
                    nome: this.nome,
                    senha: this.senha,
                }),
            });
            if (response.status !== 200) {
                alert("Error: " + response.status + " - " + response.statusText);
            } else {
                alert("Perfil alterado com sucesso!");
            }
        }
    },
    created() {
        this.pegarInfoPerfil();
  }
}
</script>
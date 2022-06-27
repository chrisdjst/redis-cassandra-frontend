<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <div class="empurra">
                <v-card width="1000">
                    <v-col cols="12" sm="" md="6">
                        <br>
                        <v-btn to="/inicial" color="primary">
                            Voltar
                        </v-btn>
                    </v-col>
                    <br><br>
                    <v-hover v-slot:default="{ hover }">
                        <v-col cols="12" sm="6" md="6">
                            <v-card-title class="perfil-titulo">
                                Editar Perfil
                            </v-card-title>
                            <br><br>

                            <v-form ref="form" class="perfil2">
                                <v-text-field v-model="nome" label="Nome" outlined></v-text-field>
                                <v-text-field v-model="email" label="Email" outlined></v-text-field>
                                <v-text-field v-model="cpf" label="CPF" outlined></v-text-field>
                                <v-text-field v-model="tipo" label="Tipo de usuario" outlined></v-text-field>
                                <v-text-field v-model="senha" label="Senha" outlined></v-text-field>
                            </v-form>
                            <br>
                            <v-btn color="primary">
                                Alterar Perfil
                            </v-btn>
<br><br>
                        </v-col>
                    </v-hover>

                </v-card>
            </div>
            <v-spacer></v-spacer>

        </v-row>
    </v-container>

</template>

<script>
export default {
    data: () => ({
        nome: '{{ getEmail }}',
        email: '{{ getEmail }}',
        cpf: '{{ getEmail }}',
        tipo: '{{ getEmail }}',
        senha: '{{ getEmail }}'
    }),
}
</script>
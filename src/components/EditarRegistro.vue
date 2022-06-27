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
                                Editar Registro da Aula
                            </v-card-title>
                            <br><br>

                            <v-form ref="form" class="perfil2">
                                <v-text-field v-model="curso" label="Curso" outlined></v-text-field>
                                <v-text-field v-model="turma" label="Turma" outlined></v-text-field>
                                <v-text-field v-model="disciplica" label="Disciplina" outlined></v-text-field>
                                <v-text-field v-model="titulo" label="Titulo da aula" outlined></v-text-field>
                                <v-text-field v-model="data" label="Data da aula" outlined></v-text-field>
                                <v-text-field v-model="conteudo" label="Conteudo da aula" outlined></v-text-field>
                                <v-textarea outlined name="input-7-4" v-model="conteudo" label="Conteudo da aula"></v-textarea>
                            </v-form>
                            <br>
                            <v-btn color="primary">
                                Alterar registro da aula
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
        curso: '{{ getEmail }}',
        turma: '{{ getEmail }}',
        disciplica: '{{ getEmail }}',
        titulo: '{{ getEmail }}',
        data: '{{ getEmail }}',
        conteudo: '{{ getEmail }}'
    }),
}
</script>
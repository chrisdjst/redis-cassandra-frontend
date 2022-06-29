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
                <div class="aula"> 
                <div class="empurra">
                Titulo da aula (data da aula)
                <v-btn icon to="/editarregistro">
                    <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-divider></v-divider>
                </div>
                </div>
                <div class="conteudo">
                Conteudo da Aula
                </div>
                 <div class="empurra">
                <v-btn color="primary" rounded to="/adicionarregistro">Adicionar registro de Aula</v-btn>
                </div>
                <br><br><br>
            </v-card>

        </v-row>
    </v-container>
</template>

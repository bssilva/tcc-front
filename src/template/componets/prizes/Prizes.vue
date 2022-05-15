<template>
  <div id="prize">
    <Header
      :title="'Prêmios'"
      :nameButton="'Cadastrar prẽmio'"
      :callback="fillModal"
    />
    <Find :label="'Pesquisar prêmio :'" />
    <Table :headers="headersTable" :items="itemsTable" />

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Inserir Prêmio </v-card-title>

        <v-card-text>
          <v-form>
            <v-label>Nome do Prêmio</v-label>
            <v-text-field solo v-model="prizes.name"></v-text-field>
            <v-label>Descrição</v-label>
            <v-text-field solo v-model="prizes.description"></v-text-field>
            <v-label>Valor (em pontos)</v-label>
            <v-text-field solo v-model="prizes.value"></v-text-field>
            <v-label>Imagem</v-label>
            <v-text-field solo v-model="prizes.image"></v-text-field>
            <v-label>Status</v-label>
            <v-text-field solo v-model="prizes.status"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="insertPoints">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

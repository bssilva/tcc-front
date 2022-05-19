<template>
  <div id="prize">
    <Header
      :title="'Prêmios'"
      :nameButton="'Cadastrar prêmio'"
      :callback="fillModal"
    />
    <Find
      :label="'Pesquisar prêmio :'"
      :items="itemsTable"
      v-model="searchObject"
    />
    <Table
      :headers="headersTable"
      :items="searchObject.length > 0 ? searchObject : itemsTable"
    />

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Inserir Prêmio </v-card-title>

        <v-card-text>
          <v-form>
            <v-label>Nome do Prêmio</v-label>
            <v-text-field
              solo
              v-model="prizes.name"
              :rules="validateForm.required"
            ></v-text-field>
            <v-label>Descrição</v-label>
            <v-text-field
              solo
              v-model="prizes.description"
              :rules="validateForm.required"
            ></v-text-field>
            <v-label>Valor (em pontos)</v-label>
            <v-text-field
              solo
              v-model="prizes.value"
              :rules="validateForm.points"
            ></v-text-field>
            <v-label>Imagem</v-label>
            <v-file-input
              :rules="validateForm.required"
              v-model="prizes.image"
              truncate-length="13"
            ></v-file-input>
            <v-label>Status</v-label>
            <v-checkbox
              label="(Ativo / Inativo)"
              hide-details
              color="#4f8e44"
              v-model="prizes.status"
              :rules="validateForm.required"
            ></v-checkbox>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="insertPrizes">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

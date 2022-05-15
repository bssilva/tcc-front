<template>
  <div id="point">
    <Header
      :title="'Pontos'"
      :nameButton="'Inserir pontos'"
      :callback="fillModal"
    />
    <Find :label="'Pesquisar cliente :'" :items="itemsTable" v-model="searchObject"/>
    <Table :headers="headersTable" :items="searchObject.length > 0 ? searchObject : itemsTable" />

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Inserir Ponto </v-card-title>

        <v-card-text>
          <v-form>
            <v-label>CPF</v-label>
            <v-text-field solo v-model="points.cpf"></v-text-field>
            <v-label>Valor</v-label>
            <v-text-field solo v-model="points.value"></v-text-field>
            <v-label>Data</v-label>
            <v-text-field solo v-model="points.date"></v-text-field>
            <v-label>Descrição</v-label>
            <v-text-field solo v-model="points.description"></v-text-field>
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

<script src="./Points.js" />
<style lang="scss" src="./Points.scss" />

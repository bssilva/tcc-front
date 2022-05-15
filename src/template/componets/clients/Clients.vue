<template>
  <div id="client">
    <Header
      :title="'Clientes'"
      :nameButton="'Cadastrar clientes'"
      :callback="fillModal"
    />
    <Find :label="'Pesquisar cliente :'" />
    <Table :headers="headersTable" :items="itemsTable" />

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Cadastrar cliente </v-card-title>

        <v-card-text>
          <v-form>
            <v-label>Nome</v-label>
            <v-text-field solo v-model="customer.name"></v-text-field>
            <v-label>CPF</v-label>
            <v-text-field solo v-model="customer.cpf"></v-text-field>
            <v-label>Email</v-label>
            <v-text-field solo v-model="customer.email"></v-text-field>
            <v-label>Senha</v-label>
            <v-text-field solo v-model="customer.password"></v-text-field>
            <v-label>Saldo de pontos</v-label>
            <v-text-field solo v-model="customer.balance"></v-text-field>
            <v-label>Celular</v-label>
            <v-text-field solo v-model="customer.cellphone"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="saveCustomer">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

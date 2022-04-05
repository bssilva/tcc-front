<template>
  <div id="client">
    <Header :title="'Clientes'" :nameButton="'Cadastrar clientes'" />
    <Find :label="'Pesquisar clientes :'" />

    <v-data-table
      :headers="ClientModelTable.headers"
      :items="ClientModelTable.items"
    ></v-data-table>
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

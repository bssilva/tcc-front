<template>
  <div id="client">
    <Header :title="'Clientes'" :nameButton="'Cadastrar clientes'" />
    <Find :label="'Pesquisar cliente :'" />

    <Table :headers="headersTable" :items="itemsTable" />
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

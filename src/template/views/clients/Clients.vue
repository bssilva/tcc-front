<template>
  <div id="client">
    <Header :title="'Clientes'" :nameButton="'Cadastrar clientes'" />
    <Find :label="'Pesquisar clientes :'" />

    <Table
      :headers="ClientModelTable.headers"
      :items="ClientModelTable.items"
    />
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

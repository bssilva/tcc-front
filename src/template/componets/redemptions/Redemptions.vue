<template>
  <div id="redemption">
    <Header :title="'Resgates'" :nameButton="'Inserir Resgate'" />
    <Find :label="'Pesquisar resgate :'" />
    <Table :headers="headersTable" :items="itemsTable" />
  </div>
</template>

<script src="./Redemptions.js" />
<style lang="scss" src="./Redemptions.scss" />

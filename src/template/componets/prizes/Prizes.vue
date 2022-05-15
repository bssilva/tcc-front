<template>
  <div id="prize">
    <Header :title="'Prêmios'" :nameButton="'Cadastrar prẽmio'" />
    <Find :label="'Pesquisar prêmio :'" />
    <Table :headers="headersTable" :items="itemsTable" />
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

<template>
  <div id="prize">
    <Header :title="'Prêmios'" :nameButton="'Inserir prêmios'" />
    <Find :label="'Pesquisar prêmios :'" />
    <Table
      :headers="PrizesModelTable.headers"
      :items="PrizesModelTable.items"
    />
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

<template>
  <div id="redemption">
    <Header :title="'Resgates'" :nameButton="'Realizar resgate'" />
    <Find :label="'Pesquisar resgates :'" />
    <Table
      :headers="RedemptionsModelTable.headers"
      :items="RedemptionsModelTable.items"
    />
  </div>
</template>

<script src="./Redemptions.js" />
<style lang="scss" src="./Redemptions.scss" />

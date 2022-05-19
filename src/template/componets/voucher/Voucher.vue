<template>
  <div id="point">
    <Header
      :title="'Pontos'"
    />
    <Find
      :label="'Pesquisar cliente :'"
      :items="itemsTable"
      v-model="searchObject"
    />
    <Table
      :headers="headersTable"
      :items="searchObject.length > 0 ? searchObject : itemsTable"
    />
  </div>
</template>

<script src="./Voucher.js" />
<style lang="scss" src="./Voucher.scss" />

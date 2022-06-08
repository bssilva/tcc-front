<template>
  <div id="prize" v-if="!loading">
    <Prizes 
      :headersTable="PrizesModelTable.headers"
      :itemsTable="PrizesModelTable.items"
    />
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

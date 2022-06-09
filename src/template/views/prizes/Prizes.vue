<template>
  <div id="prize" v-if="!loading">
    <Prizes 
      :headersTable="PrizesModelTable.headers"
      :itemsTable="prizes.length > 0 ? prizes : PrizesModelTable.items"
    />
  </div>
</template>

<script src="./Prizes.js" />
<style lang="scss" src="./Prizes.scss" />

<template>
  <div id="redemption" v-if="!loading">
    <Redemptions
      :headersTable="RedemptionsModelTable.headers"
      :itemsTable="redemptions.length > 0 ? redemptions : RedemptionsModelTable.items"
    />
  </div>
</template>

<script src="./Redemptions.js" />
<style lang="scss" src="./Redemptions.scss" />

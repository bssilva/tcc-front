<template>
  <div id="voucher" v-if="!loading">
    <Voucher
      :headersTable="VoucherModelTable.headers"
      :itemsTable="vouchers.length > 0 ? vouchers : VoucherModelTable.items"
    />
  </div>
</template>

<script src="./Voucher.js" />
<style lang="scss" src="./Voucher.scss" />

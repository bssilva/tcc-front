<template>
  <div id="client-view" v-if="!loading">
    <Clients
      :headersTable="ClientModelTable.headers"
      :itemsTable="dataCustomer.length > 0 ? dataCustomer : ClientModelTable.items"
    />
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

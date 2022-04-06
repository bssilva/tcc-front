<template>
  <div id="client-view">
    <Clients
      :headersTable="ClientModelTable.headers"
      :itemsTable="ClientModelTable.items"
    />
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />

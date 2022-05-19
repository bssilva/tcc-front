<template>
  <div class="header">
    <div class="title-header">
      <h1>{{ title }}</h1>
    </div>
    <div class="btn-header" v-if="nameButton">
      <v-btn @click="callback">{{ nameButton }}</v-btn>
    </div>
  </div>
</template>

<script src="./Header.js" />
<style lang="scss" src="./Header.scss" />

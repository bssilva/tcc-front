<template>
  <div id="point">
    <Header :title="'Pontos'" :nameButton="'Inserir pontos'" />
    <Find :label="'Pesquisar cliente :'" />
    <Table
      :headers="PointsModelTable.headers"
      :items="PointsModelTable.items"
    />
  </div>
</template>

<script src="./Points.js" />
<style lang="scss" src="./Points.scss" />

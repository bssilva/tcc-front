<template>
  <div id="point-view">
    <Points
      :headersTable="PointsModelTable.headers"
      :itemsTable="dataPoints.length > 0 ? dataPoints : PointsModelTable.items"
    />
  </div>
</template>

<script src="./Points.js" />
<style lang="scss" src="./Points.scss" />

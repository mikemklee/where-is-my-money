<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// Initial scaffold example
// import HelloWorld from './components/HelloWorld.vue'
const cars = [
  { brand: "Volkswagen", year: 2012, color: "Orange", vin: "dsad231ff" },
  { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
  { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
  { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
  { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
  { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
  { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
  { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
  { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
  { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" },
];
const columns = [
  { field: "vin", header: "Vin" },
  { field: "year", header: "Year" },
  { field: "brand", header: "Brand" },
  { field: "color", header: "Color" },
];
</script>

<template>
  <Card>
    <template #title> New item </template>
    <template #content>
      <Button>Add</Button>
    </template>
  </Card>
  <Card>
    <template #title> Data </template>
    <template #content>
      <DataTable :value="cars">
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
        />
      </DataTable>
    </template>
  </Card>
</template>

<style scoped>
/* Initial scaffold example */
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>

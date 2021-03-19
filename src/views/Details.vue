<template>
  <div>
    <h1>Details Page</h1>
    <tr id="customers">
      <th>name</th>
      <th>rarity</th>
      <th>cost</th>
      <th>description</th>
    </tr>
    <tr>
      <td>{{ name }}</td>
      <td>{{ rarity }}</td>
      <td>{{ cost }}</td>
      <td>{{ description }}</td>
    </tr>
    <img :src="avatar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class extends Vue {
  async created(): Promise<void> {
    const res = await axios.get(
      `https://fortnite-api.theapinetwork.com/item/get?id=${this.$route.params.id}`
    );

    const results = res.data.data.item;
    this.name = results.name;
    this.rarity = results.rarity;
    this.cost = results.cost;
    this.description = results.description;
    this.avatar = results.images.icon;
  }

  name = "";
  rarity = "";
  cost = 0;
  description = "";
  avatar = "";
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>

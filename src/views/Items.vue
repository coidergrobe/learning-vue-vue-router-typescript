<template>
  <div>
    <h1>Items Page</h1>
    <div v-for="item in items" :key="item.itemId">
      <tr id="customers">
        <th>Name</th>
        <th>Description</th>
        <th>Icon</th>
      </tr>
      <tr>
        <td>{{ item.item.name }}</td>
        <td>{{ item.item.description }}</td>

        <td>
          <router-link
            :to="{
              name: 'details',
              params: { id: item.itemId },
            }"
            ><img :src="item.item.images.icon"
          /></router-link>
        </td>
      </tr>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class extends Vue {
  async created(): Promise<void> {
    const res = await axios.get(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    return (this.items = res.data.data);
  }

  items: [] = [];
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

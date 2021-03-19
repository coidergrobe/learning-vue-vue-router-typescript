<template>
  <div id="app">
    <div id="nav">
      <input value="inputValue" v-model="inputValue" />
      {{ inputValue }}
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/items">Items</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  inputValue = "";
}
</script>

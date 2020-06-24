<style>
#app {
  font-size: 16px;
  color: blue;
}
</style>

<template>
  <div id="app">
    {{getName}}
    <List 
    v-bind:name="name"
    v-bind:rank="rank"
    v-bind:link="link"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import database from '../data/data';

export default {
  data() {
    return {
      message: 'Hello World',
      name : "황준희",
      rank : "사원",
      link : ""
    }
  },
  created() {
    console.log(database)
    // this.dataFetch(database);
    this.$store.dispatch("dataFetch")
  },
  computed : {
    ...mapGetters({ getName : 'getName' })
  },
  methods : {
    ...mapActions({ dataFetch : 'dataFetch'})
  }
}
</script>
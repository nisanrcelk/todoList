<template>
  <div>
    <Header />

    <router-view></router-view>

  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,


  },
  //created() {
  //this.$store.dispatch("initlogin")
  //}
}

</script>

<style>


#app{
  font-size: 24px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>

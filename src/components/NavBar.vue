<template>
  <div>
      <nav>
        <router-link class="menu" to="./Home">Home |</router-link> |
        <router-link class="menu" to="./About">About | </router-link>
        <router-link class="menu" to="./contact">Contact |</router-link>
        <router-link class="menu" to="./Operations">Operations</router-link>

      </nav>
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: grey;
    padding: 10px;
}

.menu{
    font-size: 30px;
    margin: 5px;
}
</style>
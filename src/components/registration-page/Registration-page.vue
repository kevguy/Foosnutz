<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Fuck you</h2>
    <form class="" action="" method="post">
      Email: <input type="email" name="email" v-model="email">
      Password: <input type="password" name="password" v-model="password">
      <button type="button" name="button" v-on:click="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./registration.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" src="./registration.scss"></style>

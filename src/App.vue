<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>


<div class="container">
    <div class="row">
  <div class="col-md-6">
     <!-- <img v-bind:src="require('@/assets/me.JPG')"> -->
     <!-- <img src="@/assets/me.jpg"/> -->
       <v-img v-bind:src="image_src"></v-img>
  <v-img :src="require('@/assets/me.jpg')"></v-img>

         <!-- <img alt="Vue logo" src="../assets/me.JPG"> -->

  </div>
  <div class="col-md-6">

<font-awesome-icon :icon="['fab', 'github']" />


  </div>
</div>
</div>





   
    <a href="https://berlin-now.net">これ</a><br>
        <a href="https://rails-blog-garbage-one.herokuapp.com/">これ</a><br>
        <a href="https://epic-lewin-3f7cfb.netlify.app/">これ</a><br>

 <button class="btn btn-primary">test</button>


    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header
  },
  data() {
  return {
    image_src: require("@/assets/me.jpg"),
  }
}  
}
</script>

<style>
.text-center{
  background-color: aqua;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

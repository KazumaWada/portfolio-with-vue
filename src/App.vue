<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->


<!-- <div class="container">
    <div class="row"> -->
  <!-- <div class="col-md-6">
  </div>
<div class="col-md-6">
</div> -->
  <div class="text-center">
    <h2 class="strong">リンク</h2>
  <!-- <v-row
    align="center"
    justify="space-around"
  > -->
   <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      github
    </v-btn>
     <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      qiita
    </v-btn>
     <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      blog
    </v-btn>
 <!-- </v-row> -->
</div>
<!-- <div>
<button type="button" @click="linkToOtherWindow('https://github.com/kazumawada/')">
github
</button>
</div> -->


<!----------------------- カード -----------------------------------> 

<div class="text-center mt-4">
  <h2 class="strong mb-4">作ったもの</h2>
<v-row
    align="center"
    justify="space-around"
  > 
 

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      @click="linkToOtherWindow('https://berlin-now.net')"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
  </v-card>
 




<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      @click="linkToOtherWindow('https://rails-blog-garbage-one.herokuapp.com/')"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions> -->
  </v-card>




  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      @click="linkToOtherWindow('https://epic-lewin-3f7cfb.netlify.app/')"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions> -->
  </v-card>



</v-row>
</div>





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
  methods: {
    linkToOtherWindow (url) {
      window.open(url, '_blank')
    }
  },
  data() {
  return {
    image_src: require("@/assets/me.jpg"),
  }
}  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Poppins', sans-serif;
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
<template>
  <div class="works">
    <h5>こんにちは。works</h5>


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
      src="https://user-images.githubusercontent.com/57794648/114290351-085f7400-9aba-11eb-945c-d58c6b290e35.png"
      height="200px"
      @click="linkToOtherWindow('https://github.com/kazumawada/myapp')"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pb-0">
      ベルリンなうもっと大きく表示したいから、大きいコンポーネントvuetifyから探す。1列でいいと思う。そんなに表示する部品がないから。
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
      src="https://user-images.githubusercontent.com/57794648/114290386-4eb4d300-9aba-11eb-9784-8ea6a150ae0e.png"
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
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
  </v-card>



</v-row>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Works',
  components: {
    // HelloWorld
  }
}
</script>
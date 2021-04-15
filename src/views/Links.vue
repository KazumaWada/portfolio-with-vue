<template>
  <div class="links">



    <div class="text-center">
   <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      github
    </v-btn>
     <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      qiita
    </v-btn>
     <v-btn text @click="linkToOtherWindow('https://github.com/kazumawada/')">
      blog
    </v-btn>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Links',
  components: {
    // HelloWorld
  },
  methods: {
    linkToOtherWindow (url) {
      window.open(url, '_blank')
    }
  },
}
</script>
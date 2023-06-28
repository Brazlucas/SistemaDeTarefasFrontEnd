<template>
  <hello-world />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Users from '../components/modules/Users/Users.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Users,
    },
  })
</script>

<template>
  <div id="app">
    <router-view v-if="idRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      idRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.idRouterAlive = false
      this.$nextTick(function() {
        this.idRouterAlive = true
      })
    }
  }
}
</script>

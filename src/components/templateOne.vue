<template>
  <footer class="templateOne">
    <ul>
      <li v-for="lis in ul" :key="lis.index">{{lis.li}}</li>
    </ul>
    <p>
      Copyright © {{author}} - 2016 All rights reserved
    </p>
  </footer>
</template>

<script>
    export default {
      name: 'templateOne',
      data () {
        return {
          ul: [
            { li: '琉璃之金' },
            { li: '朦胧之森' },
            { li: '缥缈之滔' },
            { li: '逍遥之火' },
            { li: '璀璨之沙' }
          ]
        }
      },
      mounted(){


      },
      methods:{

      },
      computed: {
        author () {
          return this.$store.state.dialog.author
        }
      }
    }
</script>
<style scoped>

</style>

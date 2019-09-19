<template lang="pug">
table
    tr(v-for="user in this.list")
        td(v-for="characteristics in user")
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'scoreboard',
    data () {
        return {
            list: {}
        }
    },
    mounted() {
        HTTP.get('scoreboard')
        .then(response => {
            this.list = response.data.users
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>


<style scoped>

</style>

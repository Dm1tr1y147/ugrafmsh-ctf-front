<template lang="pug">
ul
    li(v-for="item in list")
        h1(v-on:click="open(item.id)") {{ item.name }}
        h2 {{ item.cost }}
        span {{ item.category }}
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'taskList',
    data () {
        return {
            list: {}
        }
    },
    mounted() {
        HTTP.get('tasks')
        .then(response => {
            this.list = response.data.tasks
        })
        .catch(e => {
            console.log(e)
        })
    },
    methods: {
        open(identificator) {
            router.push({ name: 'task', params: { taskID: identificator } })
        }
    }
}
</script>

<style scoped>

</style>

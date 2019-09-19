<template lang="pug">
div
    h1 {{task.name}}
    p {{task.description}}
    span {{task.category}}
    span {{task.cost}}
    span(v-if="task.solved") Решено
    ul(v-for="name in task.solved_by")
        li {{name}}
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'task',
    data () {
        return {
            task: {}
        }
    },
    props: {
        taskID: {
            type: Number
        }
    },
    mounted() {
        HTTP.get('task', {
            params: {
                id: this.taskID
            }
        })
        .then(response => {
            this.task = response.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>


<style scoped>

</style>

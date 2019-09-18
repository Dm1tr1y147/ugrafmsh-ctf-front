<template lang="pug">
body
    navbar
    #app
        router-view
</template>

<script>
import navbar from "@/components/navbar"

export default {
    name: 'app',
    data () {
        return {
            user: {
                name: 'dsh147',
                points: 0,
                rank: 0
            }
        }
    },
    components: {
        navbar,
    }
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/skeleton.css";
</style>

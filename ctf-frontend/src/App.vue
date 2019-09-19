<template lang="pug">
body
    navbar
    #app
        router-view
</template>

<script>
import navbar from "@/components/navbar"
import Router from "./router"

export default {
    name: 'app',
    data () {
        return { }
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

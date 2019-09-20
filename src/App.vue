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
body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background-color: #343A40;
}
ul,li{
  list-style:none;
}
h1, h2, h3, h4, a, span, p, button {
    color: white;
}
h1 {
    font-weight: 800;
}
a,a:hover{
  text-decoration: none;
}
</style>

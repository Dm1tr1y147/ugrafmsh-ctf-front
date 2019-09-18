<template lang="pug">
nav
    h1 CTFЦТФ {{ auth.username }}
    ul
        li(v-for="item in mainNavbar")
            router-link(:to="item.component") {{item.name}}
    ul(v-if="isLoggedIn")
        li 
            rouuter-link(to="cabinet") Личный кабинет
        li(v-on:click="logOut()")
    ul(v-if="!(isLoggedIn)")
        li
            router-link(to="login")
        li
            router-link(to="register")
</template>

<script>
export default {
    name: 'navbar',
    props: {
        auth: {
            type: Object
        }
    },
    data () {
        return {
            mainNavbar: {
                home: {
                    name: "Главная",
                    component: "index"
                },
                scoreboard: {
                    name: "Статистика",
                    component: "scoreboard"
                },
                tasklist: {
                    name: "Задачи",
                    component: "taskList"
                }
            },
            accountNavbar: {
                cabinet: {
                    name: "Личный кабинет",
                    component: "account"
                }
            },

        }
    },
    methods: {
        logOut: function() {
            console.log("Log out");
        },
        not: function() { },
        isLoggedIn: function() { return true}
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

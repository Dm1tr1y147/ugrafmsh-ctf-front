<template lang="pug">
nav
    h1 CTF ЦТФ
    ul
        li(v-for="item in mainNavbar")
            router-link(:to="item.component") {{item.name}}
    ul(v-if="isLoggedIn")
        li 
            router-link(to="account") Личный кабинет
        li
            a(v-on:click="logOut()") Выход
    ul(v-if="!isLoggedIn")
        li
            router-link(to="login") Вход
        li
            router-link(to="register") Регистрация
</template>

<script>
import router from '../router/index'

export default {
    name: 'navbar',
    data () {
        return {
            isLoggedIn: false,
            mainNavbar: {
                home: {
                    name: "Главная",
                    component: "/"
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
    watch: {
        '$route' (to, from) {
            if(window.$cookies.get('token')) {
                this.isLoggedIn = true
            }
        }
    },
    methods: {
        logOut () {
            window.$cookies.remove('token')
            window.$cookies.remove('username')
            this.isLoggedIn = false
            router.push("login")
        }
    },
    mounted() {
        if(window.$cookies.get('token')) {
            this.isLoggedIn = true
        } else {
            this.isLoggedIn = false
        }
    }
}

</script>


<style scoped>
nav {
    background-color: #17A2B8;
    display: grid;
    width: 100vw;
    grid-template-rows: 10vh;
    grid-template-columns: max-content max-content max-content;
}
ul {
    display: flex;
    flex-direction: row;
}

</style>

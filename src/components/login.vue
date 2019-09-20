<template lang="pug">
    form(@submit.prevent="login")
        fieldset
            legend Вход
            label(for="username") Логин 
                input(v-model="username" required id="username" type="text" placeholder="Логин")
            label(for="password") Пароль
                input(v-model="password" required id="pasword" type="password" placeholder="Пароль")
            button(type="submit") Вход
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'login',
    data () {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login () {
            var body = {
                username: this.username,
                password: this.password
            }
            HTTP.post('auth', body).then(
                response => {
                    window.$cookies.set('token', response.data.token)
                    window.$cookies.set('username', this.username)
                    console.log("congratulations")
                    router.push("account")
                }
            ).catch(e => {
                console.log(e)
            })
        }
    },
    mounted() {
        if(window.$cookies.get('token')) {
            router.push("account")
        }
    }
}
</script>


<style scoped>

</style>

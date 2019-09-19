<template lang="pug">
form(@submit.prevent="login")
        fieldset
            legend Регистрация
            label(for="username") Логин 
                input(v-model="username" required id="username" type="text" placeholder="Логин")
            label(for="password") Пароль
                input(v-model="password" required id="pasword" type="password" placeholder="Пароль")
            button(type="submit") Регистрация
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'register',
    data () {
        return {
            username: "dsh147",
            password: "d1F@g147"
        }
    },
    methods: {
        login () {
            var body = {
                username: this.username,
                password: this.password
            }
            HTTP.post('register', body).then(
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

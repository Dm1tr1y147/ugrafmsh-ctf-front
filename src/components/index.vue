<template lang="pug">
div
    h1 CTF, ЦТФ
    h4 Добро пожаловать на курс, человеки
    p Сюда пишите свои умные мысли и флаги:
    input(for="text" v-model="flag")
    button(@click="sendFlag") Отправить
    p.response {{this.response}}
</template>

<script>
import vueCookies from 'vue-cookies'
import router from '../router/index'
import {HTTP} from '../http-common'

export default {
    name: 'index',
    data () {
        return {
            flag: "",
            response: ""
        }
    },
    methods: {
        sendFlag() {
            var body = {
                flag: this.flag
            }
            HTTP.post('submit', body).then(
                response => {
                    if (response.data.correct) {
                        this.response = "Верно, продолжай в том же духе (нет)"
                    } else {
                        this.response = "Нет, совсем не то"
                    }
                }
            ).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>


<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        text-align: center;
    }
    h4, p {
        margin-bottom: 1vh;
    }
    @media screen and (orientation: landscape) {
        div {
            padding: 0 30vw;
        }
    }
</style>

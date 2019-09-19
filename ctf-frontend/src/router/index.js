import Vue from 'vue'
import Router from 'vue-router'
import vueCookies from 'vue-cookies'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import scoreboard from '@/components/scoreboard'
import taskList from '@/components/taskList'
import task from '@/components/task'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {title: 'Главная'}
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {title: 'Вход'}
        },
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {title: 'Регистрация'}
        },
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: scoreboard,
            meta: {title: 'Таььлица результатов'}
        },
        {
            path: '/taskList',
            name: 'taskList',
            component: taskList,
            meta: {title: 'Список задач'}
        },
        {
            path: '/task/:id',
            name: 'task',
            component: task,
            props: true,
            meta: {title: 'Задача'}
        },
    ]
})

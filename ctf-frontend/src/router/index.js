import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import scoreboard from '@/components/scoreboard'
import taskList from '@/components/taskList'
import task from '@/components/task'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: scoreboard
        },
        {
            path: '/taskList',
            name: 'taskList',
            component: taskList
        },
        {
            path: '/task',
            name: 'task',
            component: task
        }
    ]
})

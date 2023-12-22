import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main'
import TaskList from '@/pages/TaskList'
import Task from '@/pages/Task'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/tasks',
        component: TaskList
    },
    {
        path: '/task/:id',
        component: Task
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
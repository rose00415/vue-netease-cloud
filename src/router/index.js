import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'



const LoginView = () => import('../views/LoginView')
const ProfileVIew=()=>import('../views/ProfileVIew')
const YunCunView=()=>import('../views/YunCunView')
const VideoView=()=>import('../views/VideoView')
const SearchView=()=>import('../views/SearchView')
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileVIew
    }, {
        path: '/yun-cun',
        name: 'yunCun',
        component:YunCunView
    }, {
        path: '/video',
        name: 'video',
        component:VideoView
    }, {
        path: '/search',
        name: 'search',
        component:SearchView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

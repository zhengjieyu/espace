import Vue from 'vue'
import VueRouter from 'vue-router'
import TestPage from "../views/test/TestPage";
import IndexPage from "../views/index/IndexPage";
import team from "../views/team/team"
import teamdetail from "../views/teamdetail/teamdetail"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexPage
    },
    {
        path: '/team',
        component: team,
        name: 'Team'
    },
    {
        path: '/teamdetail',
        component:teamdetail,
        name: 'Teamdetail'
    }

];

const router = new VueRouter({
    routes
});

export default router

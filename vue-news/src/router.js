import { createWebHistory, createRouter } from "vue-router";
import JobsView from './view/JobsView.vue'
import NewsView from './view/NewsView.vue'
import AskView from './view/AskView.vue'
import ItemView from './view/ItemView.vue'
import UserView from './view/UserView.vue'

const routes = [
  {
    path: "/",
    redirect: "/news"
  },
  {
    path: "/jobs",
    component: JobsView,
  },
  {
    path: "/news",
    component: NewsView,
  },
  {
    path: "/ask",
    component: AskView,
  },
  {
    path: "/item",
    component: ItemView,
  },
  {
    path: "/user/:id",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
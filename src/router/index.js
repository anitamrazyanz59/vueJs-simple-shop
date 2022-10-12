import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import AllProductsView from "@/views/AllProductsView";
import ProductView from "@/views/ProductView";
import CartView from "@/views/CartView";
import AllCategoriesView from "@/views/AllCategoriesView";
import CategoryView from "@/views/CategoryView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'productPage',
    component: ProductView
  },
  {
    path: '/categories/:id',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/products',
    name: 'products',
    component: AllProductsView
  },
  {
    path: '/categories',
    name: 'categries',
    component: AllCategoriesView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

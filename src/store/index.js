import { createStore } from 'vuex'
import axios from "axios";
import cart from "@/store/cart";

export default createStore({
  state: {
    productsLoaded: false,
    categoriesLoaded: false,
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    categories: localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [],
  },
  getters: {
    getCategoryByID: (state) => (id) => {
      if (state.categoriesLoaded) {
        console.log('categori by ID')
        return state.categories.find(category => category.id === Number(id))
      }
    },
    getProductByID : (state, getters) => (id) => {
      if (state.productsLoaded) {
        return state.products.find(product => product.id === Number(id))
      }
    },
    getCategorysProducts : (state, getters) => (id) => {
      return state.products.filter(product => product.category.id === Number(id))
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
      state.productsLoaded = true
    },
    setCategories (state, categories) {
      state.categories = categories
      state.categoriesLoaded = true
    },
    productAddedToCart(state, id) {
      state.products = state.products.map(product => {
        if (product.id === Number(id)) {
          product.addedToCart = true
        }
        return product
      })
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    productRemovedFromCart(state, id) {
      state.products = state.products.map(product => {
        if (product.id === Number(id)) {
          product.addedToCart = false
        }
        return product
      })
      localStorage.setItem('products', JSON.stringify(state.products))
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      let products = localStorage.getItem('products')
      if (products) {
        commit('setProducts', JSON.parse(products))
      } else {
        try {
          const data = await axios.get('https://api.escuelajs.co/api/v1/products')
              .then(r => r.data )
              .then(res => {
                commit('setProducts', res)
                localStorage.setItem('products', JSON.stringify(res))
              })
        } catch (error) {
          console.error('store error - ', error)
        }
      }

    },
    async fetchCategories({ commit }) {
      let categories = localStorage.getItem('categories')
      if (categories) {
        commit('setCategories', JSON.parse(categories))
      }
      try {
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories', {
          headers: {"Access-Control-Allow-Origin": "*"}
        })
            .then(r => r.data )
            .then(res => {
              commit('setCategories', res)
              localStorage.setItem('categories', JSON.stringify(res))
            })
      } catch (error) {
        console.error('store error - ', error)
      }
    }
  },
  modules: {
    cart,
  }
})

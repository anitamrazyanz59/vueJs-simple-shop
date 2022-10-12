
export default {
    state: {
      cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    },
    getters: {
        getCartItemsCount(state) {
            let count = 0
            state.cart.forEach(item => {
                count += Number(item.quantity)
            })
            return count
        },
        getCartTotal(state) {
            let total = 0
            state.cart.forEach(item => {
                total += Number(item.quantity) * Number(item.price)
            })
            return total
        }
    },
    mutations: {
        addCartItem (state, item) {
            state.cart.push(item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        deleteFromCart (state, item) {
            state.cart = state.cart.filter(cartItem => cartItem.id !== Number(item))
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
    },
    actions: {
    },
    modules: {
    }
}
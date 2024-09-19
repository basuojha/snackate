const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    selectedRestaurant: null
  },
  reducers: {
    setCartRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload
    },
    addItem: (state, action) => {
      const {
        payload: { id: itemId }
      } = action
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId)
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const {
        payload: { id: itemId }
      } = action
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId)
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1
        } else {
          state.cartItems.splice(itemIndex, 1)
        }
      }
    },
    clearCart: state => {
      state.cartItems = []
    }
  }
})
const { reducer: cartReducer, actions } = cartSlice

export const { addItem, removeItem, clearCart, setCartRestaurant } = actions

export default cartReducer

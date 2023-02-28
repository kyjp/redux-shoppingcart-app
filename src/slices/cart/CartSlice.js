import { createSlice } from '@reduxjs/toolkit'


const cartItems = [
  {
    id: 1,
    title: "Next.js入門講座",
    price: "12000",
    img: "https://uploda1.ysklog.net/uploda/3f3dc982dc.png",
    amount: 1,
  },
  {
    id: 2,
    title: "MERNスタックで本格的なSNSアプリ構築講座",
    price: "24000",
    img: "https://uploda1.ysklog.net/uploda/bf73156667.png",
    amount: 1,
  },
  {
    id: 3,
    title: "GraphQLとApollo入門講座",
    price: "8900",
    img: "https://uploda1.ysklog.net/uploda/9a99f8ca04.png",
    amount: 1,
  },
  {
    id: 4,
    title: "Three.jsでモダンウェブサイト構築講座",
    price: "14000",
    img: "https://uploda1.ysklog.net/uploda/59060b3cd3.png",
    amount: 1,
  },
]


const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 58900,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCartItems(state, _) {
      state.cartItems = []
      state.amount = 0
      state.total = 0
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
    },
    plusItem(state, action) {
      state.cartItems = state.cartItems.map(item => item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item )
    },
    minusItem(state, action) {
      state.cartItems = state.cartItems.map(item => {
        if (item.id === action.payload.id) {
          let temp = item.amount - 1
          if (0 < temp) {
            return { ...item, amount: temp}
          } else {
            return { ...item, amount: 0 }
          }
        } else {
          return item
        }
      })
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach(item => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    }
  },
})


export const { clearCartItems, removeItem, plusItem, minusItem, calculateTotals } = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export const selectAmount = (state) => state.cart.amount
export const selectTotal = (state) => state.cart.total

export default cartSlice.reducer

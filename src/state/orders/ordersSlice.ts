import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrdersState {
  orders: any[]
  isLoadingOrders: boolean
}

const initialState: OrdersState = {
  orders: [],
  isLoadingOrders: false,
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setIsLoadingOrders: (state, action: PayloadAction<boolean>) => {
      state.isLoadingOrders = action.payload
    },
    setOrders: (state, action: PayloadAction<any[]>) => {
      state.orders = action.payload
    },
  },
})
export const { setOrders } = ordersSlice.actions
export default ordersSlice.reducer

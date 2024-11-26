import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user?: any
  authenticated: boolean
}

const initialState: AuthState = {
  authenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; password: string } | undefined>
    ) => {
      state.user = action.payload
      if (!action.payload) {
        state.authenticated = false
        return
      }
      state.authenticated = true
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer

import ordersReducer from '@/state/orders/ordersSlice'
import authReducer from '@/state/auth/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage' // Usa localStorage por defecto
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

const authPersistConfig = {
  key: 'auth',
  storage,
}
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

// Combina reducers
const rootReducer = combineReducers({
  orders: ordersReducer, // No se persiste
  auth: persistedAuthReducer, // Sí se persiste
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora acciones específicas de redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types

export default store

import { Provider } from 'react-redux'
import { Router } from './router/Router'
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Cargando...</div>} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App

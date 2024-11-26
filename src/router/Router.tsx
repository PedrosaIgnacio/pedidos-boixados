import { BrowserRouter } from 'react-router-dom'
import { PrivateRouter } from './private/PrivateRouter'
import { PublicRouter } from './public/PublicRouter'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Router = () => {
  const authenticated = useSelector(
    (state: RootState) => state.auth.authenticated
  )
  return (
    <BrowserRouter>
      {authenticated ? <PrivateRouter /> : <PublicRouter />}
    </BrowserRouter>
  )
}

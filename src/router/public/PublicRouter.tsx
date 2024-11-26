import { FC, ReactElement, ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/login/Login'
import { PublicLayout } from '../../layouts/public/PublicLayout'

const getRouteWithLayout = (children: ReactElement): ReactNode => {
  return <PublicLayout>{children}</PublicLayout>
}

export const PublicRouter: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={getRouteWithLayout(<Login />)} />
      <Route path="*" element={<Navigate to={'/login'} />} />
    </Routes>
  )
}

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../state/auth/authSlice'
export const Login: FC = () => {
  const dispatch = useDispatch()

  const [loginForm, setLoginForm] = useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    console.log('🚀 ~ loginForm:', loginForm)
    dispatch(setUser({ ...loginForm }))
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <Card className="w-[450px] px-4 py-2">
        <CardHeader>
          <CardTitle>Te damos la bienvenida nuevamente!</CardTitle>
          <CardDescription>Ingresa tus datos para continuar</CardDescription>
        </CardHeader>
        <CardContent className="gap-4 flex flex-col">
          <div>
            <Label>Email</Label>
            <Input
              value={loginForm.email}
              onChange={handleChange}
              name={'email'}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              value={loginForm.password}
              onChange={handleChange}
              name={'password'}
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button onClick={handleSubmit} className="w-full">
              Iniciar Sesión
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

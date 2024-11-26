import { FC } from 'react'

interface PublicLayoutProps {
  children: JSX.Element
}

export const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return <div className="w-full h-screen  bg-gray-50">{children}</div>
}

import { BreadcrumbWithCustomSeparator } from '@/components/app-breadcrumb'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

interface PrivateLayoutProps {
  children: JSX.Element
}

export const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  const location = useLocation()

  const breadcrumbItems = useMemo(() => {
    return location.pathname.split('/').filter((item) => item)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="px-2">
          <BreadcrumbWithCustomSeparator items={breadcrumbItems} />
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

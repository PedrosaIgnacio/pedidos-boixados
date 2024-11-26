import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Label } from './ui/label'
import React from 'react'

interface BreadcrumbWithCustomSeparatorProps {
  items: string[]
}

export function BreadcrumbWithCustomSeparator({
  items,
}: BreadcrumbWithCustomSeparatorProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item) => (
          <React.Fragment key={item}>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Label className="capitalize">{item}</Label>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

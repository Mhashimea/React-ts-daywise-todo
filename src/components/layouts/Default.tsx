import React from 'react'
import Navbar from '../ux/Navbar'

interface LayoutProps {
  className?: string,
  children?: any
}

export default function Default({ className, children }: LayoutProps) {
  return (
    <div className="default h-full">
      <Navbar />
      <div className={className} >
        {children}
      </div>
    </div>
  )
}
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

interface HeaderProps {
  title: string,
  buttonText?: string
  onClick?: () => void
}

export default function Header({ title, buttonText, onClick }: HeaderProps) {
  return (
    <div className="app-header flex items-center">
      <div className="flex-1">
        <div className="w-5/6">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae natus inventore provident libero. Totam nam saepe, voluptates veniam dicta accusamus ducimus magni odit eligendi et reprehenderit beatae quidem quasi!</p>
        </div>
      </div>
      <Button type="primary" className="flex items-center rounded-md" onClick={onClick}>
        <PlusCircleOutlined />
        {buttonText}</Button>
    </div>
  )
}
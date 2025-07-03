// app/template.js
'use client'
import { useEffect } from 'react'

export default function Template({children}: { children: React.ReactNode }) {
  useEffect(() => {
    // 每次路由切换都会执行
    console.log('页面切换了！')
  }, [])

  // 此处可以包裹 page.tsx 组件
  return children
}
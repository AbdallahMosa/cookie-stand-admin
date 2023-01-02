"use client"
import { Inter } from '@next/font/google'
import Hero from './components/Hero'
import Form from './components/Form'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-amber-800 to-amber-200'>
      <Hero></Hero>
      <Form></Form>
    </div>
  )
}

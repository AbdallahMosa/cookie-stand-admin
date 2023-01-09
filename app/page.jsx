"use client"
import { Inter } from '@next/font/google'
import Hero from './components/Hero'
import Form from './components/Form'
import LoginForm from './components/LoginForm'
import { useContext} from 'react';
import {AuthContext} from './contexts/auth'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens} = useContext(AuthContext);
  return (
    <div className='dark:bg-black bg-white'>
      {/* <LoginForm></LoginForm>
      <Hero></Hero>
      <Form></Form> */}
      {tokens ? <><Hero /> <Form /></> : <LoginForm />}
    </div>
  )
}

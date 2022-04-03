import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <main className='w-screen h-screen flex flex-col p-12 bg-gradient-to-t from-green-600 to-green-300 justify-center gap-6 select-none'>
        <h1 className='text-white font-bold text-6xl leading-24'>Your'e Note</h1>
      <div className='flex gap-2'>
        <img src={logo} alt="logo Rizal note App" className='h-8 select-none'/>
        <h1 className='text-white font-light select-none'>Rizal Note App</h1>
      </div>
      <Link to="/addnote">
        <button className='h-12 bg-blue-500 text-white text-xl w-full mt-10 rounded-full gap-4 flex justify-center items-center font-thin'>Buat Note Sekarang</button>
      </Link>
    </main>
  )
}

export default Home
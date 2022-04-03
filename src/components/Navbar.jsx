import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome,FiBookOpen,FiEdit } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-screen h-20 flex flex-col justify-center items-center fixed bottom-0 left-0 p-4'>

        <nav className='w-full h-full bg-green-500 text-white flex justify-between items-center rounded-full'>
            <Link to={"/addnote"} className=' flex-1 h-full flex justify-center items-center text-white gap-2 '>
                <small className='flex flex-col justify-center items-center gap-1'>
                    <FiEdit/>
                    Tambah Catatan
                </small>
            </Link>

            <Link to={"/"} className='flex-1 h-full flex justify-center items-center text-white gap-2'>
                <small className='flex flex-col justify-center items-center gap-1'>
                    <FiHome/>
                     Home
                </small>
            </Link>
           
            <Link to={"/note"} className='flex-1 h-full flex justify-center items-center text-white gap-2 '>
                
                <small className=' flex flex-col justify-center items-center gap-1'>
                    <FiBookOpen/>
                    Lihat Catatan
                </small>
            </Link>
            
        </nav>

    </div>
  )
}

export default Navbar
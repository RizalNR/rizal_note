import React from 'react'
import Navbar from '../components/Navbar'
import moment from 'moment'
import { storeToLocal } from '../libs/storeToLocal'


const AddNote = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()

        const {title, content} = event.target
        storeToLocal({
            id : Date.now(),
            title : title.value,
            content : content.value,
            createdAt : moment().format("dddd DD/MM/YYYY hh:mm")
        })
        .then(response => window.location.href = "/note")
    }

  return (
    <main className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6'>
        <h1 className='text-gray-500 font-sans text-2xl select-none'>Create Your Note</h1>

        <form className='w-full h-full p-6 gap-6 flex flex-col' onSubmit={handleSubmit}>
            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="title" className='text-gray-500 font-thin select-none'>Masukkan Judul</label>
                <input type="text" name='title' id='title' className='p-2 h-15 font-sans text-xl' required/>
            </div>

            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="content" className='text-gray-500 font-thin select-none'>Content</label>
                <textarea type="text" name='content' id='content' className='p-2 h-15 font-sans text-xl' required></textarea>
            </div>


            <div className='flex w-full gap-4 rounded-full'>
                <button type='reset' className='h-10 bg-red-400 text-white flex-1 select-none'>Ulangi Menulis</button>
                <button type='submit' className='h-10 bg-green-500 text-white flex-1 select-none'>Save</button>
            </div>
        </form>

        <Navbar/>

    </main>
  )
}

export default AddNote
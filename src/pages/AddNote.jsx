import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import moment from 'moment'
import { storeToLocal } from '../libs/storeToLocal'


const AddNote = () => {

    const [viewImage,setViewImage] = useState()

    const handleSubmit = (event)=>{
        event.preventDefault()
        const {title, content} = event.target
        storeToLocal({
            id : Date.now(),
            title : title.value,
            content : content.value,
            photo : viewImage,
            createdAt : moment().format("dddd DD/MM/YYYY hh:mm")
        })
        .then(response => window.location.href = "/note")
    }

    // function untuk menampilkan image
    const handleViewImage = (e)=>{
        const fr = new FileReader()
        fr.onload = (x)=>{
            setViewImage(x.target.result);
        }
        fr.readAsDataURL(e.target.files[0]);
    }

  return (
    <main className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6 pb-[100px]'>
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

            <img src={viewImage} alt="" className='w-full h-[200px] object-cover' />

            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="photo" className='text-gray-500 font-thin select-none'>Masukkan foto</label>
                <input type="file" name='photo' id='photo' className='p-2 h-15 font-sans text-xl' required accept='image/jpg, image/jpeg, image/png' onChange={handleViewImage} />
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
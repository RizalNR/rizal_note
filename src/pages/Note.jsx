import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { getLocalData } from '../libs/getLocalData'
import { FiX, FiEdit } from 'react-icons/fi'

const Note = () => {

    const [state, setState] = useState([])
    
    useEffect(()=>{

        getLocalData()
        .then(response => setState(response))
        
    }, [])

    //Edit Note
    const handleEdit = ()=>{
        
        console.info("edit note")
    }

    //Delete Note
    const handleDelete = (e)=>{
        
        console.info("hapus note")
    }
    


  return (
    <div className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6 pb-32'>
        <h1 className='text-gray-500 text-4xl font-serif select-none'>Note Anda</h1>

        {state.map((e)=>{
            return (
                <div className='w-full p-4 flex flex-col bg-green-200 gap-2'>
                    <div className='flex justify-end float-right gap-2'>
                        <button type='edit' onClick={handleEdit}>
                            <FiEdit/>
                        </button>
                    
                        <button type='delete' onClick={handleDelete}>
                            <FiX/>
                        </button>

                    </div>

                    <h1 className='text-black font-serif text-2xl'>
                        {e.title}
                    </h1>

                    <p className='text-black font-serif'>
                        {e.content}
                    </p>

                    <small className='text-black font-serif'>
                        {e.createdAt}
                    </small>

                </div>
            )
        })}
    
        <Navbar/>
    </div>
    
  )
}

export default Note
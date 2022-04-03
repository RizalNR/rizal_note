import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getLocalData } from "../libs/getLocalData";
import { FiX, FiEdit } from "react-icons/fi";
import { deleteData } from "../libs/deleteData";
import { editData } from "../libs/editData";

const Note = () => {
  const [state, setState] = useState([]);
  const [editCard, setEditCard] = useState()
  const [defaultValue, setDefaultValue] = useState({
    title : "",
    content : ""
  })

  useEffect(() => {
    getLocalData().then((response) => setState(response));
  }, []);

  //Edit Note
  const handleEdit = (id) => {
    if(editCard){
      setEditCard(false)
      return 
    }
    setEditCard(id)
  };

  //Delete Note
  const handleDelete = (id) => {
    deleteData(id)
    .then(response => {
      window.location.reload()
    })
    .catch(err =>{
      console.info(err)
    })

  };

  return (
    <div className="w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6 pb-32">
      <h1 className="text-gray-500 text-4xl font-serif select-none">
        Note Anda
      </h1>

      {state.map((e) => {
        return (
          <div
            className="w-full p-4 flex flex-col bg-green-200 gap-2"
            key={e.id}
          >
            <div className="flex justify-end float-right gap-2">
              <button type="edit" onClick={()=>{
                handleEdit(e.id)
                setDefaultValue({
                  title : e.title,
                  content : e.content
                })
              }}>
                <FiEdit />
              </button>

              <button type="delete" onClick={()=>{
                  handleDelete(e.id)
              }}>
                <FiX />
              </button>
            </div>

            { editCard === e.id ? (
                      
              <form className='w-full h-full p-6 gap-6 flex flex-col' onSubmit={editData}>
                  <input type="text" hidden id="id" name="id" defaultValue={e.id} />
                  <div className='form_group flex flex-col w-full gap-4'>
                      <label htmlFor="title" className='text-gray-500 font-thin select-none'>Masukkan Judul</label>
                      <input type="text" name='title' id='title' className='p-2 h-15 font-sans text-xl' required 
                      defaultValue={defaultValue.title}/>
                  </div>

                  <div className='form_group flex flex-col w-full gap-4'>
                      <label htmlFor="content" className='text-gray-500 font-thin select-none'>Content</label>
                      <textarea type="text" name='content' id='content' className='p-2 h-15 font-sans text-xl' required 
                      defaultValue={defaultValue.content}></textarea>
                  </div>

                  <div className='flex w-full gap-4 rounded-full'>
                      <button type='reset' className='h-10 bg-red-400 text-white flex-1 select-none' onClick={()=>{
                        setDefaultValue({
                          title : "",
                          content : ""
                        })
                      }}>reset</button>
                      <button type='submit' className='h-10 bg-green-500 text-white flex-1 select-none'>Save</button>
                  </div>
              </form>

            ) : (

              <div className="flex flex-col gap-4">
                <img src={e.photo} alt="" className="w-full h-[200px] object-cover" />
                <h1 className="text-black font-serif text-2xl">{e.title}</h1>
                <p className="text-black font-serif">{e.content}</p>
                <small className="text-black font-serif">{e.createdAt}</small>
              </div>

            ) }

          </div>
        );
      })}

      <Navbar />
    </div>
  );
};

export default Note;

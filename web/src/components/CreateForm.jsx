import React from 'react'
import notesStore from '../stores/notesStore';

const CreateForm = () => {

  const store = notesStore()
  if(store.updateForm._id) return <></>;

  return (
        <div className='w-full max-w-[488px] h-full bg-[#2A2634] p-6 rounded-lg text-white'>
          <h2 className="text-3xl font-bold -translate-y-4">Create note</h2>
          <form onSubmit={store.createNote}
          className='flex flex-col'>

            <input 
            onChange={store.updateCreateFormField}
            value={store.createForm.title}
            name='title'
            placeholder='Título'
            className="w-full h-14 p-4 rounded bg-[#18181B]"
            />

            <textarea
            onChange={store.updateCreateFormField}
            value={store.createForm.body}
            name="body" 
            placeholder='Desenvolvimento'
            className="w-full p-4 my-4 h-[250px] resize-none rounded bg-[#18181B]"
            />

            <button className="bg-[#8B5CF6] mt-2 h-12 rounded w-full" type='submit'>Create note</button>
          </form>
        </div>
  )
}

export default CreateForm
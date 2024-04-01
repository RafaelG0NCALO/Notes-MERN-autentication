import React from 'react'
import notesStore from '../stores/notesStore'
import Note from './Note'

const Notes = () => { 
  const store = notesStore() 

  return (
    <div className='flex items-center bg-[#2A2634] h-full flex-col w-full rounded-lg'>
    <h2 className='w-full text-start p-3 text-xl font-bold text-white'>Notes</h2>
      <div className='grid grid-cols-3 gap-4'>
          {store.notes && store.notes.map(note => {
            return(          
                <Note key={note._id} note={note}/>
            )
          })}
      </div>
    </div>
  )
}

export default Notes
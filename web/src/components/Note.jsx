import React, { useState } from 'react';
import notesStore from '../stores/notesStore';

const Note = ({ note }) => {
  const [showPopup, setShowPopup] = useState(false);
  const store = notesStore((store) => ({
    deleteNote: store.deleteNote,
    toggleUpdate: store.toggleUpdate,
  }));

  const handleNote = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div key={note._id} className='bg-[#18181B] text-white p-3 rounded w-40'>
      <div onClick={handleNote} className='cursor-pointer'>
        <h3 className='font-bold text-2xl truncate leading-5'>{note.title}</h3>
        <h3 className='truncate'>{note.body}</h3>
      </div>
      {showPopup && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-[#18181B] p-4 rounded w-full max-w-3xl'>
            <h3 className='font-bold text-lg'>{note.title}</h3>
            <p className='whitespace-break-spaces'>{note.body}</p>
            <button className='rounded p-2 bg-red-400 text-red-950 mt-2' onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className='w-full flex flex-col gap-2 mt-3'>
        <button className='flex-1 rounded bg-red-400 text-red-950' onClick={() => store.deleteNote(note._id)}>
          Delete
        </button>
        <button className='flex-1 rounded bg-[#8B5CF6] text-violet-950' onClick={() => store.toggleUpdate(note)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Note;

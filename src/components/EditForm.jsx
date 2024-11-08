import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function EditForm({
  editPostData,
  id,
  setIsEditing,
  userId,
  editPost,
  isPostEditing,
}) {
  const [formData, setFormData] = useState({
    title: editPostData.title,
    body: editPostData.body,
    userId,
    id: id,
  });

  function handleSubmit() {
    editPost(formData);
    setTimeout(() => {
      setIsEditing(false);
    }, 1000);
  }

  return (
    <form className='p-8 space-y-4 bg-slate-700 rounded-md shadow-md'>
      <div className=' flex flex-col items-center gap-4'>
        <label
          htmlFor='form'
          className=' capitalize font-semibold text-nowrap '
        >
          edit post
        </label>
        <div className=' flex w-full space-x-4'>
          <input
            id='form'
            type='text'
            className=' px-3 py-1.5 outline outline-2 outline-slate-500 rounded-md w-full placeholder:capitalize bg-slate-600 text-white'
            placeholder='enter title'
            defaultValue={editPostData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <textarea
          name='body'
          id='body'
          className=' w-full h-[100px] p-2 rounded-md bg-slate-600 outline outline-2 outline-slate-500 text-white'
          defaultValue={editPostData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
      </div>
      <button
        className=' px-4 py-3 font-bold uppercase bg-green-600 text-white rounded-md shadow-md hover:bg-green-500 w-full'
        type='button'
        onClick={handleSubmit}
      >
        {isPostEditing ? 'editing...' : 'submit'}
      </button>
      <button
        className=' px-4 py-3 font-bold uppercase bg-red-700 text-white rounded-md shadow-md hover:bg-red-500 w-full'
        type='button'
        onClick={() => setIsEditing(false)}
      >
        close
      </button>
    </form>
  );
}

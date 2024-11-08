/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Form({
  handleSubmit,
  setIsFormOpen,
  isCreatePostLoading,
}) {
  const [form, setForm] = useState({ userId: '', title: '', body: '' });

  return (
    <form className='p-8 space-y-4 bg-slate-700 rounded-md shadow-md'>
      <div className=' flex flex-col items-center gap-4'>
        <label
          htmlFor='form'
          className=' capitalize font-semibold text-nowrap text-lg text-white'
        >
          add post
        </label>
        <div className=' flex w-full space-x-4'>
          <input
            id='form'
            type='text'
            className=' px-3 py-1.5 outline outline-2 outline-slate-500 rounded-md w-full placeholder:capitalize bg-slate-600 text-white'
            onChange={(e) =>
              setForm((ps) => ({ ...ps, title: e.target.value }))
            }
            placeholder='enter title'
          />
        </div>
        <textarea
          name='body'
          id='body'
          className=' w-full h-[100px] p-2 rounded-md bg-slate-600 outline outline-2 outline-slate-500 text-white'
          onChange={(e) => setForm((ps) => ({ ...ps, body: e.target.value }))}
        />
      </div>
      <div className=' w-full flex gap-4'>
        <button
          className=' p-4 rounded-md shadow-md uppercase bg-green-700 text-white font-medium text-xs hover:bg-green-500 w-full'
          type='button'
          onClick={() => {
            handleSubmit(form);
            setTimeout(() => {
              setIsFormOpen(false);
            }, 1000);
          }}
        >
          {isCreatePostLoading ? 'adding post...' : 'submit'}
        </button>
        <button
          className=' px-4 py-3 font-bold uppercase bg-red-700 text-white rounded-md shadow-md hover:bg-red-500 w-full'
          onClick={() => setIsFormOpen(false)}
        >
          close
        </button>
      </div>
    </form>
  );
}

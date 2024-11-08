import { useState } from 'react';
import EditForm from './EditForm';

/* eslint-disable react/prop-types */
export default function Post({
  title,
  id,
  userId,
  deletePost,
  setEditPostData,
  body,
  editPostData,
  editPost,
  isPostEditing,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditForm
          title={title}
          id={id}
          editPostData={editPostData}
          setIsEditing={setIsEditing}
          userId={userId}
          editPost={editPost}
          isPostEditing={isPostEditing}
        />
      ) : (
        <div className=' flex flex-col gap-6 p-6 outline outline-2 outline-slate-500 shadow-lg rounded-md bg-slate-600'>
          <div className=' space-y-2'>
            <div className=' flex gap-2 items-center'>
              <span className=' bg-slate-500 text-white h-8 w-8 p-2 rounded-full flex items-center justify-center font-medium text-xs '>
                {id}
              </span>
              <h2 className=' text-xl font-medium uppercase text-white'>
                {title}
              </h2>
            </div>
            <div className=' text-white/70 text-lg'>{body}</div>
          </div>
          <div className=' w-full flex gap-4'>
            <button
              className=' px-4 py-3 font-bold uppercase bg-green-600 text-white rounded-md shadow-md hover:bg-green-500 w-full'
              onClick={() => {
                setIsEditing(true);
                setEditPostData({
                  title,
                  body,
                  id,
                  userId,
                });
              }}
            >
              edit
            </button>
            <button
              className=' px-4 py-3 font-bold uppercase bg-red-700 text-white rounded-md shadow-md hover:bg-red-500 w-full'
              onClick={() => {
                deletePost(id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

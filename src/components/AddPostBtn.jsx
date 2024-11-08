/* eslint-disable react/prop-types */
export default function AddPostBtn({ setIsFormOpen, isFormOpen }) {
  return (
    <button
      className=' p-4 rounded-md shadow-md uppercase bg-blue-700 text-white font-medium text-xs hover:bg-blue-500 w-full'
      type='button'
      onClick={() => setIsFormOpen(!isFormOpen)}
    >
      {isFormOpen ? 'close' : 'add post'}
    </button>
  );
}

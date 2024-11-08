import { useEffect, useState } from 'react';
import Post from './components/Post';
import Form from './components/Form';
import AddPostBtn from './components/AddPostBtn';
import useCreatePost from './hook/useCreatePost';
import useGetPosts from './hook/useGetPosts';
import LoadingScreen from './components/LoadingScreen';
import useDeletePost from './hook/useDeletePost';
import useEditPost from './hook/useEditPost';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data: posts, isPending: isGetPostLoading } = useGetPosts();
  const { createPost, isPending: isCreatePostLoading } = useCreatePost();
  const { editPost, isPending: isPostEditing } = useEditPost();
  const { deletePost, isPending: isPostDeleting } = useDeletePost();
  const [editPostData, setEditPostData] = useState({});

  const userId = 100;

  function handleSubmit(data) {
    const newData = {
      id: posts.length + 1,
      userId: userId,
      title: data.title,
      body: data.body,
    };
    createPost(newData);
  }

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div className=' flex flex-col p-6 gap-8 bg-slate-800'>
      <AddPostBtn isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      {isFormOpen && (
        <Form
          handleSubmit={handleSubmit}
          isCreatePostLoading={isCreatePostLoading}
          setIsFormOpen={setIsFormOpen}
        />
      )}
      <div className=' p-6 outline outline-2 outline-slate-500 rounded-md space-y-6 bg-slate-700'>
        <span className=' font-medium text-xl text-white '>Posts</span>
        {isGetPostLoading ? (
          <LoadingScreen />
        ) : (
          <div className=' flex flex-col gap-8 '>
            {posts?.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                userId={post.userId}
                title={post.title}
                editPost={editPost}
                body={post.body}
                deletePost={deletePost}
                isPostDeleting={isPostDeleting}
                setEditPostData={setEditPostData}
                editPostData={editPostData}
                isPostEditing={isPostEditing}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

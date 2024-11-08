import { useMutation } from '@tanstack/react-query';
import { createPost as createPostAPI } from '../api/api';

export default function useCreatePost() {
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (formData) => createPostAPI(formData),
    onSuccess: () => {
      alert('Post created');
    },
  });

  return { createPost, isPending };
}

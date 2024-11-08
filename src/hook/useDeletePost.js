import { useMutation } from '@tanstack/react-query';
import { deletePost as deletePostApi } from '../api/api';

export default function useDeletePost() {
  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: (id) => deletePostApi(id),
    onSuccess: () => {
      alert('Post deleted');
    },
  });
  return { deletePost, isPending };
}

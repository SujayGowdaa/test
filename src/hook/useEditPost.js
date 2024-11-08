import { useMutation } from '@tanstack/react-query';
import { editPost as editPostApi } from '../api/api';

export default function useEditPost() {
  const { mutate: editPost, isPending } = useMutation({
    mutationFn: (formData) => editPostApi(formData),
    onSuccess: () => {
      alert('Post edited');
    },
  });

  return { editPost, isPending };
}

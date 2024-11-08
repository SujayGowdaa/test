import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/api';

export default function useGetPosts() {
  const { data, isPending } = useQuery({
    queryFn: getPosts,
    queryKey: ['posts'],
    onSuccess: () => {
      localStorage.setItem('posts', JSON.stringify(data));
    },
  });

  return { data, isPending };
}

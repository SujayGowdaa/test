import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  staleTime: 0,
});

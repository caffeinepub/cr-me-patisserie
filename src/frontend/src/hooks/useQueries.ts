import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitCustomerQuery() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, question }: { email: string; question: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitCustomerQuery(email, question);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customerQueries'] });
    },
  });
}

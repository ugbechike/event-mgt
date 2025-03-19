import { useQuery } from '@tanstack/react-query';
import { tickets } from '../../mocks/tickets';
import { Ticket } from './useGetTicket';

const fetchTicket = async (id: string): Promise<Ticket | undefined> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tickets.find((ticket) => ticket.id === id);
};

export const useGetTicket = (id: string) => {
  return useQuery({
    queryKey: ['ticket', id],
    queryFn: () => fetchTicket(id),
  });
};

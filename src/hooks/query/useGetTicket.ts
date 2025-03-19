import { useQuery } from '@tanstack/react-query';
import { tickets } from '../../mocks/tickets';

export interface Ticket {
    title: string;
    location: string;
    time: string;
    locationAddress: string;
    ticketType: string;
    image: string;
    id: string;
    parentEventId: string;
    quantity: number;
    status: 'upcoming' | 'past';
}

// Simulate API call to fetch tickets
const fetchTickets = async (): Promise<Ticket[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return tickets;
};

export const useGetTickets = () => {
    return useQuery({
        queryKey: ['tickets'],
        queryFn: fetchTickets,
    });
};

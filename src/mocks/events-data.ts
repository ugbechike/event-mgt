export type EventTicket = {
    id: string;
    ticketType: string;
    description: string;
    price: string;
    parentEventId: string;
    status?: string;
}

export type EventData = {
    title: string;
    location: string;
    dateTime: string;
    price: string;
    image: string;
    id: string;
    about: string;
    eventType: string;
    capacity: string;
    ticketsAvailable: boolean;
    rating: number;
    duration: string;
    ageRestriction: string;
    tags: Array<string>;
    availableTickets: number;
    eventTickets: Array<string>;
}

export const eventTickets: Promise<EventTicket[]> = Promise.resolve([

    {
        id: '1',
        ticketType: 'Regular',
        description: 'Admission to the in-person drink & draw',
        price: '35.00',
        parentEventId: '1',
        time: '10:00 PM',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Access to celebrity meet & greet',
        price: '50.00',
        parentEventId: '1',
        time: '10:00 PM',
    },
    {
        id: '3',
        ticketType: 'VVIP',
        description: 'Access to celebrity meet & greet and backstage pass',
        price: '100.00',
        parentEventId: '1',
    },
    {
        id: '1',
        ticketType: 'Regular',
        description: 'React stickers and swags',
        price: '9.99',
        parentEventId: '2',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Access to speakers and workshops',
        price: '50.00',
        parentEventId: '2',
    },
    {
        id: '3',
        ticketType: 'VVIP',
        description: 'Access to speakers and workshops and backstage pass',
        price: '80.00',
        parentEventId: '2',
    },
    {
        id: '1',
        ticketType: 'Regular',
        description: 'Admission to the in-person drink & draw',
        price: '35.00',
        parentEventId: '3',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Access to celebrity meet & greet',
        price: '50.00',
        parentEventId: '3',
    },
    {
        id: '1',
        ticketType: 'Regular',
        description: 'Free drink and snacks',
        price: '35.00',
        parentEventId: '4',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Free drink and snacks and access to the VIP lounge',
        price: '50.00',
        parentEventId: '4',
    },
    {
        id: '1',
        ticketType: 'Regular',
        description: 'Free drink and snacks',
        price: '35.00',
        parentEventId: '5',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Free drink and snacks and access to the VIP lounge',
        price: '50.00',
        parentEventId: '5',
    },
    {
        id: '1',
        ticketType: 'Regular',
        description: 'Free signed jersey',
        price: '35.00',
        parentEventId: '6',
    },
    {
        id: '2',
        ticketType: 'VIP',
        description: 'Free signed jersey and soccer boots',
        price: '50.00',
        parentEventId: '6',
    },
]);

export const eventsData: EventData[] = [
    {
        title: 'Coachella Music Party',
        location: 'Celebration square',
        dateTime: 'July 29. 9:00 PM',
        price: '35.00',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1725505396/2024-coachella-music-party-design-template-f8db4062f9789e8914e67992a16e555b_screen_lixwjz.jpg',
        id: '1',
        about: 'Music festival is a festival oriented towards music that is sometimes presented with a theme such as',
        eventType: 'Music',
        capacity: '5000 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: '18+',
        tags: ['festival', 'live music', 'summer'],
        availableTickets: 10, // Indicates the number of tickets remaining
        eventTickets: ['1', '2', '3'],
    },
    {
        title: 'Jamstack Conf',
        location: 'Toronto city hall',
        dateTime: 'September 29. 9:00 AM',
        price: '$9.99',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1725589349/jamstack_conf_banner_photo_1_hpf6id.jpg',
        id: '2',
        about: 'Tech events are events oriented towards technology that is sometimes presented with a theme such as',
        eventType: 'Educational',
        capacity: '500 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: 'None',
        tags: ['tech', 'educational', 'code', 'javascript', 'react'],
        availableTickets: 100,
        eventTickets: ['1', '2', '3'],
    },
    {
        title: 'Living Arts Music Party',
        location: 'Time square',
        dateTime: 'July 29. 9:00 PM',
        price: '40.99',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1608044595/nikhita-singhal-k8y9HrzonOQ-unsplash_pahypa.jpg',
        id: '3',
        about: 'Music festival is a festival oriented towards music that is sometimes presented with a theme such as',
        eventType: 'Music',
        capacity: '5000 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: '18+',
        tags: ['festival', 'live music', 'summer'],
        availableTickets: 10,
        eventTickets: ['1', '2', '3'],
    },
    {
        title: 'Champions league final',
        location: 'London bristol',
        dateTime: 'July 29. 9:00 PM',
        price: '20.99',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1725588652/champion_q6cwky.webp',
        id: '4',
        about: 'Champions league final between Arsenal and Real Madrid will be the most anticipated match of the season, with Mbappe and Saka leading the attack',
        eventType: 'Sports',
        capacity: '50 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: '18+',
        tags: ['sport', 'summer'],
        availableTickets: 50,
        eventTickets: ['1', '2'],
    },
    {
        title: 'Reading club',
        location: 'Mississauga library',
        dateTime: 'October 29. 9:00 AM',
        price: '10.99',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1725588936/VPL_-_MC_-_CTS_-_Summer_Reading_Club_2024_Drupal_Carousel_2008x1004px_fchzsq.jpg',
        id: '5',
        about: 'Join our monthly reading club to discuss this month\'s featured book and other literary topics.',
        eventType: 'Educational',
        capacity: '20 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: '18+',
        tags: ['reading', 'book', 'summer'],
        availableTickets: 20,
        eventTickets: ['1', '2'],
    },
    {
        title: 'Picked up soccer game',
        location: 'Toronto stadium',
        dateTime: 'October 10. 7:00 PM',
        price: '9.99',
        image: 'https://res.cloudinary.com/code-freak/image/upload/v1508833470/BrfXT06IAAEQJvm_hzecss.jpg',
        id: '6',
        about: 'Soccer game is a game oriented towards soccer that is sometimes presented with a theme such as champions league final',
        eventType: 'Sports',
        capacity: '22 attendees',
        ticketsAvailable: true,
        rating: 4.5,
        duration: '3 hours',
        ageRestriction: '18+',
        tags: ['sports', 'field', 'summer', 'boots'],
        availableTickets: 20,
        eventTickets: ['1', '2'],
    },
];

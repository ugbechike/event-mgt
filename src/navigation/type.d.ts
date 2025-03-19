import type { NativeStackScreenProps } from '@react-navigation/native-stack';


export type RootStackParamList = {
    HomeTab: undefined;
    Auth: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Explore: undefined;
    Ticket: undefined;
    Profile: undefined;
}

export type HomeStackNavigatorPramList = {
    HomeScreen: undefined;
};

export type ExploreStackNavigatorPramList = {
    ExploreScreen: undefined;
    CheckoutScreen: undefined;
};

export type TicketStackNavigatorPramList = {
    TicketsScreen: undefined;
    TicketDetailsScreen: {
        id: string;
    };
};

export type ProfileStackNavigatorPramList = {
    ProfileScreen: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<HomeStackNavigatorPramList, 'HomeScreen'>;

export type ExploreScreenNavigationProps = NativeStackScreenProps<ExploreStackNavigatorPramList, 'ExploreScreen'>;

export type TicketScreenNavigationProps = NativeStackScreenProps<TicketStackNavigatorPramList, 'TicketsScreen'>;

export type ProfileScreenNavigationProps = NativeStackScreenProps<ProfileStackNavigatorPramList, 'ProfileScreen'>;

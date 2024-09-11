import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setToken, setUser, UserData } from '../auth/userSlice';

export const UserAuth = () => {
    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const userData = userState?.user;
    const userToken = userState?.token;
    const isSignedIn = !!userToken;

    //actions
    const setUserAction = (user: UserData | null ) => {
        dispatch(setUser({user}));
    };

    const setTokenAction = (token: string) => {
        dispatch(setToken({ token }));
    };

    return {
        userData,
        userToken,
        isSignedIn,
        setUserAction,
        setTokenAction,
    };
};

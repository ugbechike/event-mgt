import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
    email: string;
    uid: string;
    displayName: string;
    firstName: string;
    lastName: string;
}

export interface UserState {
    user?: UserData | null;
    token?: string | null;
}

const initialState: UserState = {
    user: null,
    token: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload.user;
        },
        setToken: (state, action: PayloadAction<UserState>) => {
            state.token = action.payload.token;
        },
    },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;

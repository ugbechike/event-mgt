import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/userSlice';
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);


export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);

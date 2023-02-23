import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface AuthState {
    authenticated?: boolean;
    accessToken: string;
    refreshToken: string;

    // ! Temporary
    name: string,
    position: string,
}

// Define the initial state using that type
const initialState: AuthState = {
    authenticated: false,
    accessToken: "",
    refreshToken: "",

    // ! Temporary
    name: "",
    position: "",
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.authenticated = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;

            //! Temporary
            state.name = action.payload.name;
            state.position = action.payload.position;
        },
        logout: (state) => {
            state.authenticated = false;
            state.accessToken = "";
            state.refreshToken = "";

            //! Temporary
            state.name = "";
            state.position = "";
        },
    },
})

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSidebarSelectedItemID = (state: RootState) => state.sidebarSelection.selectedItemID

export default authSlice.reducer
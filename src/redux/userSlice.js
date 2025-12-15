import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await fetch('https://dummyjson.com/users');
        return res.json();
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false, 
        error: null,
        usersData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
           })
           .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.usersData = action.payload;
           })
           .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
           });
    },
});

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { createUser, getAllUsers } from "../middleware/userServices";

const initialState = {
    users : [],
    loading : false,
    error : null
}

export const userDetails = createSlice({
    name: 'users',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getAllUsers.fulfilled,(state,action) => {
            state.users = action.payload.data;
            state.loading = false;
            console.log(state.users);
        })
        .addCase(getAllUsers.pending,(state,action) => {
            state.loading = true;
        })
        .addCase(getAllUsers.rejected,(state,action) => {
            state.error = action.payload;
        })
        .addCase(createUser.fulfilled,(state,action) => {
            state.users.push(action.payload.data);
            state.loading = false;
        })
        .addCase(createUser.pending,(state,action) => {
            state.loading = true;
        })
        .addCase(createUser.rejected,(state,action) => {
            state.error = action.payload;
        })
    }
})



export default userDetails.reducer;
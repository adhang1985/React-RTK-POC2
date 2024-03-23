import { createSlice } from "@reduxjs/toolkit"
import { createUser, deleteUser, editUser, getAllUsers, getOneUser } from "../middleware/userServices";

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
        .addCase(getOneUser.pending,(state) => {
            state.loading = true;
        })
        .addCase(getOneUser.fulfilled,(state,action) => {
            state.loading = false;
            state.users = action.payload.data;
            console.log(state.users);
        })
        .addCase(getOneUser.rejected,(state,action) => {
            state.loading = false;
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
        .addCase(editUser.fulfilled,(state,action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele._id === action.payload.data.id ? action.payload.data : ele
            );
            console.log(state.users);
        })
        .addCase(editUser.pending,(state,action) => {
            state.loading = true;
        })
        .addCase(editUser.rejected,(state,action) => {
            state.error = action.payload.message;
        })
        .addCase(deleteUser.pending,(state) => {
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled,(state,action) => {
            state.loading = false;
            const {_id} = action.payload.data;
            console.log(state.users);
            state.users = state.users.filter((ele) => ele._id !== _id);
        })
        .addCase(deleteUser.rejected,(state,action) => {
            state.error = action.payload;
        })
    }
})



export default userDetails.reducer;
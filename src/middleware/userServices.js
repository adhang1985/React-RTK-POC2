import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = "http://localhost:8000/api/users";


// get all users
export const getAllUsers = createAsyncThunk("users/get", async() => {
    try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
});

// get user by id
export const getOneUser = createAsyncThunk("user/get", async(id) => {
    try {
        const response = await fetch(BASE_URL + `/${id}`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
})

// create new user
export const createUser = createAsyncThunk("users/post",async(data) => {
    try {
        const newUser = {
            name : data.name,
            age : Number(data.age),
            email : data.email,
            role : data.role
        }
        const response = await fetch(BASE_URL + '/create',
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }
        )

        const result = response.json();
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
})

// update user
export const editUser = createAsyncThunk("user/put",async(data) => {
    try {
        const newUser = {
            name : data.name,
            age : Number(data.age),
            email : data.email,
            role : data.role
        }
        const response = await fetch(BASE_URL + `/${data._id}`,
        {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }
        )

        const result = response.json();
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
})

// delete user
export const deleteUser = createAsyncThunk("users/delete", async(id,{rejectWithValue}) => {
   

    try {
        const response = await fetch(BASE_URL + `/${id}`,
        {
            method: "DELETE"
        }
    );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})
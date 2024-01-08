
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    isLoading:false,
    error:false,
}

export const fetchUsers = createAsyncThunk("fetchUsers" , async () =>{
    const response = await fetch("https://dummyjson.com/users");
    const data = response.json();
    return data;
})

const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending , (state , action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled , (state , action)=>{
            state.isLoading = false;
            state.users = action.payload.users;
        });
        builder.addCase(fetchUsers.rejected , (state , action) =>{
            state.error = true;
        })
    }
})

export default userSlice.reducer
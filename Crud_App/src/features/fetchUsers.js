
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    isLoading:false,
    error:false,
}

export const fetchUsers = createAsyncThunk("users/fetchUsers" , async () =>{
    const response = await fetch("https://dummyjson.com/users");
    const data = response.json();
    return data;
})

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUsers(state ,action){
            state.users.push(action.payload)
        },
        deleteUsers(state ,action){
            const index = state.users.find(user => user.id  == action.payload)
            state.users.splice(index , 1);
        },

    },
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

export const {addUsers , deleteUsers} = userSlice.actions;
export default userSlice.reducer
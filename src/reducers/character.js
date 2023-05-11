import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk('allCharacters', async ()=>{
    try {
        const {data} = await axios.get('/api/Character');
        return data;
    } catch (err){
        console.log(err)
    }
})

export const characterSlice = createSlice({
    name: 'characters',
    initialState: {},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCharacters.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default characterSlice.reducer;
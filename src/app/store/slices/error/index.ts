import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RESET_APP_ERROR, RESET_APP_DATA , GLOBAL_ERROR} from "../common"
import { ErrorSliceState } from "config/@types/error";


const initialState: ErrorSliceState = {
    payload: null
}


const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {},
    extraReducers: builder => {

        builder.addCase(GLOBAL_ERROR, (state, action: PayloadAction<any>) => {
            state.payload = action.payload
        })

        builder.addCase(RESET_APP_ERROR, (state) => {
            state.payload = null
        })
        builder.addCase(RESET_APP_DATA, (state) => {
            state = initialState
        })
    }
})


export default errorSlice
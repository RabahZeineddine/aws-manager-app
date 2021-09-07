import { createAction } from "@reduxjs/toolkit";
import { AppThunk } from "../..";
import * as LocalSession from 'utils/LocalSession'
import { ErrorType } from "utils/ErrorHandler";


export const RESET_APP_ERROR = createAction('RESET_APP_ERROR')

export const GLOBAL_ERROR = createAction<ErrorType>('GLOBAL_ERROR')

export const RESET_APP_DATA = createAction('RESET_APP_DATA')


export const RESET_APP = (): AppThunk => async (dispatch) => {
    LocalSession.clear()
    dispatch(RESET_APP_DATA())
}
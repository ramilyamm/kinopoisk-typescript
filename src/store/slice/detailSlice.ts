import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filmsAPI } from "../../axios";
import { AxiosError } from "axios";
import { IDetail } from "../modules";


type DetailState = {
    detail: IDetail | null,
    loading: boolean,
    error: null | string | undefined
}

const initialState: DetailState = {
    detail: null,
    loading: false,
    error: null
}

export const fetchByDetailFilm = createAsyncThunk<IDetail, string, { rejectValue: string }>(
    'films/fetchByAllFilms',
    async (id, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getFilmById(id)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('server error')
            }
            const data = res.data
            return data as IDetail
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error
        }
    }
)

const filmSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByDetailFilm.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByDetailFilm.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false
        })
        addCase(fetchByDetailFilm.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })
    },
})

export default filmSlice.reducer
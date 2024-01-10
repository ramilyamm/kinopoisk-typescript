import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IAll, filmsAPI } from "../../axios"
import { IFilms } from "../modules"
import { AxiosError } from "axios"

type FilmsState = {
    film: IFilms[],
    loading: boolean,
    error: null | string | undefined
}

const initialState: FilmsState = {
    film: [],
    loading: false,
    error: null
}

export const fetchByAllFilms = createAsyncThunk<IFilms[], void, { rejectValue: string }>(
    'films/fetchByAllFilms',
    async (_, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getAllFilms()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('server error')
            }
            return res.data.items
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

export const fetchByName = createAsyncThunk<IFilms[], string, { rejectValue: string }>(
    'films/fetchByName',
    async (value, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getFilmByName(value)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('server error')
            }
            return res.data.films
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


export const fetchFilter = createAsyncThunk<IFilms[], IAll, { rejectValue: string }>(
    'films/fetchFilter',
    async (all, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getFilterByYear(all)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('server error')
            }
            return res.data.items
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
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByAllFilms.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByAllFilms.fulfilled, (state, action) => {
            state.film = action.payload
            state.loading = false
        })
        addCase(fetchByAllFilms.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })
        addCase(fetchByName.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByName.fulfilled, (state, action) => {
            state.film = action.payload
            state.loading = false
        })
        addCase(fetchByName.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })
        addCase(fetchFilter.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchFilter.fulfilled, (state, action) => {
            state.film = action.payload
            state.loading = false
        })
        addCase(fetchFilter.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })
    }
})

export default filmSlice.reducer
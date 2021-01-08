import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endPointByLocation } from '../api';

const slice = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        hasError: false,
        data: {}
    },
    reducers: {
        getWeather: state => {
            state.loading = true;
        },
        getWeatherSuccess: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.hasError = false;
        },
        getWeatherFailed: state => {
            state.hasError = true;
            state.loading = false;
        }
    }
});

export default slice.reducer;
const { getWeather, getWeatherSuccess, getWeatherFailed } = slice.actions;

export const fetchWeather = (location) => async dispatch => {
    dispatch(getWeather());

    try {
        const weather = await axios.get(`${endPointByLocation}${location}`);
        dispatch(getWeatherSuccess(weather.data));
    } catch {
        dispatch(getWeatherFailed())
    }
} 

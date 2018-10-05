import weatherTypes from "../types/weather.types";
import axios from "axios";

const getWeatherStart = () => ({
    type: weatherTypes.GET_WEATHER_START,
});

const getWeatherSuccess = payload => ({
    type: weatherTypes.GET_WEATHER_SUCCESS,
    payload,
});

const getWeatherFail = error => ({
    type: weatherTypes.GET_WEATHER_FAIL,
    error,
});

const getWeather = () => (dispatch) => {
    dispatch(getWeatherStart());

    return axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=28e87bf53e5eabbdcb97fcd6a3df0c9f`,
        method: 'get',
    })
        .then(response => {
            dispatch(getWeatherSuccess(response.data));
            return response;
        })
        .catch(error => {
            dispatch(getWeatherFail(error));
            return error;
        });
};

export const weatherActions = {
    getWeather
};
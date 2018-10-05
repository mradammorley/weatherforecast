import weatherTypes from "../types/weather.types";
import {weatherServices} from "../services/weather.services";

const refreshWeather = () => {
    const success = (payload) => {
        return {type: weatherTypes.REFRESH_WEATHER_SUCCESS, payload}
    };

    const failure = (error) => {
        return {type: weatherTypes.REFRESH_WEATHER_ERROR, error}
    };

    return dispatch => {
        weatherServices.refreshWeather()
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
};

export const weatherActions = {
    refreshWeather
};
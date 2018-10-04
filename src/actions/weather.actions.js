import weatherTypes from "../types/weather.types";

const refreshWeather = () => {
    return { type: weatherTypes.REFRESH_WEATHER };
};

export const weatherActions = {
    refreshWeather
};
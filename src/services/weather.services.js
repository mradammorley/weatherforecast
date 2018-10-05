import axios from "axios";

function refreshWeather() {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=28e87bf53e5eabbdcb97fcd6a3df0c9f")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return Promise.reject(error.response.status);
        });
}

export const weatherServices = {
    refreshWeather
};
import weatherTypes from "../types/weather.types";

const initialState = {};

export function weather(state = initialState, action) {
    switch (action.type) {
        case weatherTypes.GET_WEATHER_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
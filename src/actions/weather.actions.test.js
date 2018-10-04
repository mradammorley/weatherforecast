import {weatherActions} from "./weather.actions";
import weatherTypes from "../types/weather.types";

describe("refreshWeather", () => {
    it("should create an action to reload todays weather", () => {
        const expectedAction = {
            type: weatherTypes.REFRESH_WEATHER
        };
        expect(weatherActions.refreshWeather()).toEqual(expectedAction);
    });
});

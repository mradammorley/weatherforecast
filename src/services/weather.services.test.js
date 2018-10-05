import {weatherServices} from "../services/weather.services";

describe("weatherServices.refreshWeather()", () => {
    it("should fetch weather data from openweathermap.org containing london's coords", async () => {
        const weather = await weatherServices.refreshWeather();
        expect(weather).toEqual(
            expect.objectContaining({coord:{lon:-0.13,lat:51.51}}),
        );
    });
});
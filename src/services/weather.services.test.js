import axios from "axios";
import weatherServices from "../services/weather.services";

describe("weatherServices.refreshWeather()", () => {
    it("fetches data from openweathermap.org", async () => {
        const weather = await weatherServices.refreshWeather();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=28e87bf53e5eabbdcb97fcd6a3df0c9f"
        );
        expect(weather).objectContaining({coord:{lon:-0.13,lat:51.51}});
    });
});
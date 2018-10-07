import {getNextTwelveHoursTemperature} from "./getNextTwelveHoursTemperature.helper";
import weatherMock from "../mocks/weather.mock";
import everyThreeHours from "../mocks/everyThreeHours.mock";

describe("getNextTwelveHoursTemperature() function", () => {
    let twelveHours = getNextTwelveHoursTemperature(weatherMock);

    it('Should return a json object with the temperature every 3 hours for the next 12', () => {
        expect(twelveHours).toEqual(everyThreeHours);
    });

});
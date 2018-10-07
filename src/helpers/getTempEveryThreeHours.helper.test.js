import {getTempEveryThreeHours} from "./getTempEveryThreeHours.helper";
import weatherMock from "../mocks/weather.mock";
import everyThreeHours from "../mocks/everyThreeHours.mock";

describe("getTempEveryThreeHours() function", () => {
    let twelveHours = getTempEveryThreeHours(weatherMock);

    it('Should return a json object with the temperature every 3 hours for the next 12', () => {
        expect(twelveHours).toEqual(everyThreeHours);
    });

    let twelveHoursNoDataPassed = getTempEveryThreeHours();

    it('Should return false if no object is passed', () => {
        expect(twelveHoursNoDataPassed).toEqual(false);
    });

});
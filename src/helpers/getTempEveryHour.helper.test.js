import {getTempEveryHour} from "./getTempEveryHour.helper";
import everyThreeHours from "../mocks/everyThreeHours.mock";
import everyHour from "../mocks/everyHour.mock";

describe("getTempEveryHour() function", () => {
    let twelveHours = getTempEveryHour(everyThreeHours);

    it('Should return a json object with the temperature every hour for the next 12', () => {
        expect(twelveHours).toEqual(everyHour);
    });

    let twelveHoursNoDataPassed = getTempEveryHour();

    it('Should return false if no object is passed', () => {
        expect(twelveHoursNoDataPassed).toEqual(false);
    });

});
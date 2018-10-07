import {getOrderedHours} from "./getOrderedHours.helper";
import everyHour from "../mocks/everyHour.mock";
import everyHourOrdered from "../mocks/everyHourOrdered.mock";

describe("getOrderedHours() function", () => {
    let twelveHours = getOrderedHours(everyHour);

    it("Should return a json object with hours in order starting from 0", () => {
        expect(twelveHours).toEqual(everyHourOrdered);
    });

    let twelveHoursNoDataPassed = getOrderedHours();

    it("Should return false if no object is passed", () => {
        expect(twelveHoursNoDataPassed).toEqual(false);
    });

});
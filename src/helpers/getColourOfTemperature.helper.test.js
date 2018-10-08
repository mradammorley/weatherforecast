import {getColourOfTemperature} from "./getColourOfTemperature.helper";

describe("getColourOfTemperature() function", () => {

    let colourHue = getColourOfTemperature(35);
    it("Should return a hue of 0 with a temperature of 35", () => {
        expect(colourHue).toEqual(0);
    });

    colourHue = getColourOfTemperature(-5);
    it("Should return a hue of 200 with a temperature of -5", () => {
        expect(colourHue).toEqual(200);
    });

});
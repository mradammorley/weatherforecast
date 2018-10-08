import {getColourOfTemperature} from "./getColourOfTemperature.helper";

describe("getColourOfTemperature() function", () => {

    let hotColourHue = getColourOfTemperature(35);
    it("Should return a hue of 0 with a temperature of 35", () => {
        expect(hotColourHue).toEqual(0);
    });

    let coldColourHue = getColourOfTemperature(-5);
    it("Should return a hue of 200 with a temperature of -5", () => {
        expect(coldColourHue).toEqual(200);
    });

    let colourHueBadParam = getColourOfTemperature("test");
    it("Should return false with bad params", () => {
        expect(colourHueBadParam).toEqual(false);
    });

});
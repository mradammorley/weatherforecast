import { weather } from "./weather.reducer";

describe("weather reducer", () => {
    it("should return the initial state", () => {
        expect(weather(undefined, {})).toEqual({})
    });
});
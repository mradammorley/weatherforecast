export const getColourOfTemperature = (temperature) => {
    if (typeof temperature !== "number") {
        return false;
    }

    const
        hottestTemp = 35,
        coldestTemp = -5,
        tempRange = hottestTemp - coldestTemp,
        hottestColour = 0,
        coldestColour = 200,
        colourRange = hottestColour - coldestColour,
        multiplier = colourRange / tempRange,
        temperatureOverLowest = temperature - coldestTemp,
        converted = temperatureOverLowest * multiplier;

    return coldestColour + converted;

};
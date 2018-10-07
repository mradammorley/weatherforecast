export const getTempEveryThreeHours = (forecast) => {
    if (typeof forecast !== "object") {
        return false;
    }

    let data = [];
    for (let i = 0; i < 5; i++) {
        let measurement = {};
        let date = new Date(forecast.list[i].dt * 1000);
        measurement["time"] = date.getHours();
        measurement["temp"] = forecast.list[i].main.temp
        data.push(measurement);
    }

    return data;
};
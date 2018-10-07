export const getOrderedHours = (everyHour) => {
    if (typeof everyHour !== "object") {
        return false;
    }

    const compare = (a, b) => {
        if (a.time < b.time)
            return -1;
        if (a.time > b.time)
            return 1;
        return 0;
    };

    return everyHour.sort(compare);

};
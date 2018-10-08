import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getTempEveryThreeHours} from "../helpers/getTempEveryThreeHours.helper";
import {getTempEveryHour} from "../helpers/getTempEveryHour.helper";
import {getOrderedHours} from "../helpers/getOrderedHours.helper";
import {getColourOfTemperature} from "../helpers/getColourOfTemperature.helper";
import HourSegment from "./HourSegment";

class TemperatureClock extends React.Component {

    render() {
        if(this.props.weather.list) {
            const
                tempEveryThreeHours = getTempEveryThreeHours(this.props.weather),
                tempEveryHour = getTempEveryHour(tempEveryThreeHours),
                orderedHours = getOrderedHours(tempEveryHour),
                segments = orderedHours.map((hour, index) =>  {
                    return (
                        <HourSegment
                            hue = {getColourOfTemperature(hour.temp)}
                            temp = {hour.temp}
                            hour = {hour.time}
                            key = {index}
                        />
                    );
                });

            return (
                <div className='TemperatureClock'>
                    {segments}
                </div>
            );
        } else {
            return null
        }
    }
}

TemperatureClock.propTypes = {
    weather: PropTypes.object
};

const mapStateToProps = (store) => {
    return {
        weather: store.weather
    };
};

export default connect(mapStateToProps)(TemperatureClock);

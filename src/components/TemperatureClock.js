import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class TemperatureClock extends React.Component {

    render() {
        return (
            <div className='TemperatureClock' />
        );
    }
}

TemperatureClock.propTypes = {
    weather: PropTypes.object,
    dispatch: PropTypes.func
};

const mapStateToProps = (store) => {
    return {
        weather: store.weather
    };
};

export default connect(mapStateToProps)(TemperatureClock);

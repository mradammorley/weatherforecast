import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {weatherActions} from "../actions/weather.actions";
import TemperatureClock from "./TemperatureClock";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(weatherActions.getWeather());
    }

    render() {
        return (
            <div className='App'>
                <TemperatureClock />
            </div>
        )
    }
}

App.propTypes = {
    weather: PropTypes.object,
    dispatch: PropTypes.func
};

const mapStateToProps = (store) => {
    return {
        weather: store.weather
    };
};

export default connect(mapStateToProps)(App);

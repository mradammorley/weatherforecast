import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {weatherActions} from "../actions/weather.actions";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(weatherActions.refreshWeather());
    }

    render() {
        return (
            <div className='App' />
        );
    }
}

App.propTypes = {
    weather: PropTypes.object,
    dispatch: PropTypes.func
};

const mapStateToProps = (store) => {
    return {
        weather: store.weather,
        store: store
    };
};

export default connect(mapStateToProps)(App);

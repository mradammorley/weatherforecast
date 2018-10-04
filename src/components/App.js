import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className='App' />
        );
    }
}

App.propTypes = {
    weather: PropTypes.object
};

const mapStateToProps = (store) => {
    return {
        weather: store.weather
    };
};

export default connect(mapStateToProps)(App);

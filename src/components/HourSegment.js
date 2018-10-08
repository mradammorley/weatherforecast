import React from "react";
import PropTypes from "prop-types";

class HourSegment extends React.Component {

    render() {
        const rotation = "rotate(" + this.props.hour * 30 + "deg)";
        const svgStyle = {
            position: "absolute",
            transformOrigin: "0% 100%",
            transform: rotation
        };
        return (
            <svg
                className="HourSegment"
                data-name={"segment-" + this.props.hour}
                width="50"
                height="100"
                viewBox="0 0 50 100"
                style={svgStyle}
            >
                <polygon
                    points="0 100 50 13.2 0 0 0 100"
                    fill={"hsl(" + this.props.hue + ", 100%, 50%)"}
                />
            </svg>
        );
    }
}

HourSegment.propTypes = {
    hue: PropTypes.number,
    temp: PropTypes.number,
    hour: PropTypes.number
};

export default HourSegment;

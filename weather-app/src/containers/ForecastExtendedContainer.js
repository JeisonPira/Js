import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from "./../components/ForecastExtended";
import {getCity, getForecastDataFromCities} from "../reducers";

class ForecastExtendedContainer extends Component {

    render() {
        const {city, forecastData} = this.props;
        return (
            <ForecastExtended city={city} forecastData={forecastData}/>
        )
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

const mapStateToProps = state => ({
    city: getCity(state), forecastData: getForecastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

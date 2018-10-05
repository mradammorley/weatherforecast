import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {weatherActions} from "./weather.actions";
import weatherTypes from "../types/weather.types";
import weatherMock from '../mocks/weather.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getWeather actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates GET_WEATHER_SUCCESS after successfully fetching weather', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: weatherMock,
            });
        });

        const expectedActions = [
            { type: weatherTypes.GET_WEATHER_START },
            { type: weatherTypes.GET_WEATHER_SUCCESS, payload: weatherMock },
        ];

        const store = mockStore({ weather: {} })

        return store.dispatch(weatherActions.getWeather()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

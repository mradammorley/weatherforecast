import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {store} from "../helpers/store";
import TemperatureClock from "./TemperatureClock";

describe("TemperatureClock component", () => {
    let mountedComponent;

    beforeEach(() => {
        mountedComponent = mount(
            <Provider store={store}>
                <TemperatureClock />
            </Provider>,
        );
    });

    it('Should render successfully', () => {
        expect(mountedComponent.exists()).toEqual(true);
    });

});
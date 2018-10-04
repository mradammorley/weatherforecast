import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {store} from "../helpers/store";
import App from "./App";

describe("App component", () => {
    let mountedComponent;

    beforeEach(() => {
        mountedComponent = mount(
            <Provider store={store}>
                <App/>
            </Provider>,
        );
    });

    it('Should render successfully', () => {
        expect(mountedComponent.exists()).toEqual(true);
    });

});
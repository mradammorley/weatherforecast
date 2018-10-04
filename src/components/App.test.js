import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App component", () => {
    let component, mountedComponent;

    beforeEach(() => {
        component = shallow(
            <App />,
        );

        mountedComponent = mount(
            <App />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

});
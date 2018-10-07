import React from "react";
import {mount} from "enzyme";
import HourSegment from "./HourSegment";

describe("HourSegment component", () => {
    let mountedComponent;

    beforeEach(() => {
        mountedComponent = mount(
            <HourSegment />,
        );
    });

    it('Should render successfully', () => {
        expect(mountedComponent.exists()).toEqual(true);
    });

});
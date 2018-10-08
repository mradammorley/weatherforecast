# Weather Forecast

A small app that shows how the temperature will change over the next 12 hours using a coloured clock face. Applications for this could be a wallpaper or background for a phone or calendar app.

View a demo here http://adammorley.co.uk/portfolio/weatherforecast/

This uses https://openweathermap.org/ to fetch the weather data and add it to the redux store. Then react renders 12 svg polygons to represent the hours of the day on a clock face (these are then rotated into position using CSS). The segments of the clock are coloured by converting the forecasted temperature into the Hue property of the HSL colour model.

## Getting Started

### Installation

Run `npm install` from the root directory, to install the necessary node modules locally.

### Usage

`npm start` should spin up a server at `localhost:8080` to view the app in your browser.

### Development

If making changes, open another console tab and use `npm run dev` which will watch for changes and rebuild.

## Built With

* [React](https://reactjs.org/) - Rendering the interface
* [Redux](https://redux.js.org/) - State management
* [Jest](https://jestjs.io/) - Testing Library
* [Enzyme](https://github.com/airbnb/enzyme) - More testing utilities
* [Node](https://nodejs.org) - Runtime environment
* [Sass](https://sass-lang.com/) - CSS extension
* [Babel](https://babeljs.io/) - Javascript compiler
* [WebPack](https://webpack.js.org/) - Dependency manager
* [EJS](http://ejs.co/) - Javascript templating

## Potential improvements

* Accuracy has been compromised to improve the UI because the API only has data for every three hours. So the missing hours are made up by assuming a linear change
* The colour model really needs to be customised so that hot and cold are more intuitive represented. Certain colours in the spectrum don't represent the colour changes intended.
* The UI doesn't clearly show which hour the user is currently on. This could easily be corrected in a number of ways
* A button to switch Cities

## Authors

* **Adam Morley** (https://github.com/MrAdamMorley)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


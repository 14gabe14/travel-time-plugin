# Kijiji Travel Time Chrome Extension

The Kijiji Travel Time Chrome Extension enhances the Kijiji website by providing travel time information for the locations mentioned in Kijiji ads. It calculates the estimated travel time from a user-specified origin to the destination address found in the ad, using various modes of transportation.

## Features

- Displays travel time information on Kijiji ad pages
- Supports driving and transit modes of transportation
- Allows users to specify a custom origin address and arrival/departure time
- Automatically refreshes the travel time when the origin address or time is updated

## Installation

1. Clone or download the extension repository.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.
5. The Kijiji Travel Time extension should now be loaded and active.

## Usage

1. Click on the Kijiji Travel Time extension icon in the Chrome toolbar.
2. In the extension popup, enter your desired origin address and arrival/departure time.
3. Select the preferred mode of transportation (driving or transit).
4. Click "Save" to store the settings.
5. Navigate to a Kijiji ad page that includes a destination address.
6. The extension will automatically calculate and display the estimated travel time below the address on the page.
7. If transit mode is selected, the extension will also show the number of transits and total walking time.

## Configuration

The extension requires a valid Google Maps Directions API key to function properly. Make sure to set up an API key and provide it to the extension through the server configuration.

## Dependencies

- Google Maps Directions API
- Kijiji Travel Time API Server

## License

This extension is released under the [MIT License](LICENSE).
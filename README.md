# resin-wifi-connect-api

Example Python web application that uses WiFi Connect's JSON API.

The web application reuses the web-based UI of WiFi Connect by adding an additional form element to the UI.

Both the Python web application and WiFi Connect are running at the same time listening on different ports: 80 and 45454. WiFi Connect is launched as a sub-process from the web application.

The full UI of WiFi Connect is copied into the `/ui/` folder. Then a new `custom` field was added to the `index.html` file.

Data is transferred to both the web application and WiFi Connect at the same time. The `/ui/js/index.js` file that was copied from WiFi Connect was also modified, so that a second request to the web application could be sent when the Submit button is pressed.

The example is designed to be run as Balena application (see `Dockerfile.template`). It can be easily adopted to be run in any type of environment that supports WiFi Connect, but it is advised to use Balena and the Dockerfile before adopting it. To get started with Balena please visit: https://www.balena.io/docs/learn/getting-started/raspberrypi3/python/

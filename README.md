# Weather-App
Explanation:

HTML:

Sets up the basic structure with a title, search input, button, and a container for weather info.

Includes a link to a Google Font for better aesthetics.

Loads style.css and script.js.

The #loading div will display "Loading weather data..." when the weather data is being fetched,

The #error-message div will display an error message if something went wrong.

CSS:

Sets the background to a linear gradient of sky-blue.

Basic styling for layout, colors, and typography.

Responsive design using @media queries to adjust the layout for smaller screens.

JavaScript:

Gets the necessary DOM elements.

apiKey: Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap.

fetchWeather(): Makes the API request, handles errors, and calls displayWeather().

displayWeather(): Updates the weather information on the page.

EventListener: When the search button is clicked, fetchWeather will get called.

Added EventListener to handle the "Enter" key when the user hits enter instead of pressing on the search button.

How to Use:

Get an API Key:

Sign up for a free account at OpenWeatherMap.

Get an API key from their website.

Create Files:

Create three files: index.html, style.css, and script.js.

Paste the code into the respective files.

Replace API Key:

In script.js, replace 'YOUR_API_KEY' with your actual API key.

Open index.html in a Browser:

Open index.html in a browser to test your app.

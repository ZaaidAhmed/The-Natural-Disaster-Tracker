# Natural Disaster Tracker

This project is a **Natural Disaster Tracker** application that uses the NASA Open Earth Observatory (EONET) API to fetch data related to natural disasters and display it on a map. Users can select different disaster categories (such as wildfires, earthquakes, etc.) to view disaster events and their locations on the map.

## Features
- **Category Selection**: Users can choose from various disaster categories such as wildfires, earthquakes, etc.
- **Interactive Map**: The app displays disaster events on an interactive map using **React-Leaflet** and **OpenStreetMap**.
- **Dynamic Data Fetching**: The app fetches disaster data from the NASA EONET API based on the selected category and dynamically updates the map with disaster events.

## Tech Stack
- **Next.js**: For building the React app and handling server-side rendering (SSR).
- **React**: For building the user interface components.
- **Leaflet**: For rendering the map and placing markers on it.
- **OpenStreetMap**: Used as the base map for the application.
- **NASA EONET API**: Provides data related to natural disasters.

## Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 14.x.x)
- **npm** or **yarn**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/natural-disaster-tracker.git
cd natural-disaster-tracker
```
### 2. Install dependencies
```bash
npm install

```
Using yarn:
```bash
yarn install


```
### 3. Run the development server
```bash
npm run dev



```
Using yarn:
```bash
yarn dev




```
Your app should now be running on http://localhost:3000.

###  Project Structure
pages/: Contains the main page of the app.
components/: Contains the map-related components and other reusable UI elements.
map.js: The Map component which renders disaster events on the map.
icon.js: Custom marker icon used for disaster locations on the map.
public/: Contains static assets like the custom marker icon (marker.svg).
styles/: Contains global styles for the application.
### API Documentation

The app uses the NASA EONET API to fetch natural disaster events.

### Endpoint: https://eonet.gsfc.nasa.gov/api/v3/categories

This endpoint returns a list of available disaster categories.
### Endpoint: https://eonet.gsfc.nasa.gov/api/v3/categories/{categoryId}

This endpoint returns disaster events for a specific category.

### Contributions 
Contributions are welcome! Feel free to fork the repository and submit pull requests. If you find any issues or bugs, please open an issue.

### Acknowledgments
NASA's Earth Observatory for providing the disaster data.
Leaflet for the interactive map functionality.
OpenStreetMap for the base map tiles.



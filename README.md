[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![NASA EONET](https://img.shields.io/badge/Data-NASA%20EONET-0B3D91?style=flat)](https://eonet.gsfc.nasa.gov/)
[![Live demo](https://img.shields.io/badge/Demo-live-2ea44f?style=flat)](https://natural-disaster-tracker.onrender.com/)

# Natural Disaster Tracker

[Live demo](https://natural-disaster-tracker.onrender.com/)

A map-based web application that retrieves active natural-disaster events from NASA’s EONET API and presents them through category filters and an interactive map.

## What it demonstrates

- Fetching and presenting external API data in a user-facing workflow.
- Category-based filtering for disaster events such as wildfires and earthquakes.
- Interactive geospatial visualization with React-Leaflet and OpenStreetMap.
- A responsive Next.js/React application structure with reusable components.

## Tech stack

- Next.js and React
- React-Leaflet and OpenStreetMap
- NASA EONET API
- JavaScript
- npm

## Run locally

```bash
git clone https://github.com/ZaaidAhmed/The-Natural-Disaster-Tracker.git
cd The-Natural-Disaster-Tracker
npm install
npm run dev
```

Open http://localhost:3000.

## Data source

This project uses NASA’s [EONET API](https://eonet.gsfc.nasa.gov/) for event categories and disaster-event data.

## Project notes

The project is a portfolio application focused on API integration, geospatial UI, and clear presentation of changing public data.

## Architecture

    Browser
      |
      v
    Next.js / React UI
      |
      +--> Category filter
      |
      +--> React-Leaflet map
      |
      v
    NASA EONET API
      |
      v
    Natural-disaster event data
      |
      v
    Markers and event details on the map

## How it works

1. The user opens the application and selects a disaster category.
2. The frontend requests matching event data from NASA EONET.
3. The response is mapped into event locations and display data.
4. React-Leaflet renders the locations with OpenStreetMap as the map layer.
5. Changing the category refreshes the displayed events.

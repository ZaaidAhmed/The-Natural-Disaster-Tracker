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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

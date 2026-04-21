# WebNavigatorApp

React Native Expo app built with the latest Expo Router (file-based routing) demonstrating deep links, maps integration, and external API calls.

## About

This project was built for SOFT 211 - Mobile Application Development at Bates Technical College using the latest version of React Native with Expo Router, replacing the older navigation architecture.

## Features

- **Deep Links** - Navigate directly to a detail screen from outside the app using `webnavigatorapp://detail/:id`
- **Detail Screen** - Displays item information pulled dynamically from the deep link URL
- **Maps Integration** - Opens Google Maps to a location directly from the detail screen
- **External API** - Opens a related Wikipedia page based on the item ID
- **Validation** - Handles missing or incorrect deep link data without crashing

## Tech Stack

- React Native
- Expo SDK (latest)
- Expo Router (file-based routing)
- TypeScript

## How to Run

```bash
npx expo start
```

## Deep Link Testing

Open in browser:
http://localhost:8081/detail/42

## Project Structure

app/
├── (tabs)/
│ ├── index.tsx # Home screen with deep link items
│ └── explore.tsx # Explore tab
├── detail/
│ └── [id].tsx # Detail screen with maps and Wikipedia integration
└── \_layout.tsx # Root layout

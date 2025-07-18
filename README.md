# 🌦️ React Weather App

A responsive weather application built using **React**, **Tailwind CSS**, and the **OpenWeatherMap API**, with enhanced UX features like auto-location detection and city-based search. This app uses **React's `useContext` hook** for state management and fetches real-time weather data based on either user input or geolocation.

---

## 🚀 Features

- 📍 **Auto Location Detection**  
  If the user doesn't search for a city, the app automatically fetches their **current location** using the browser's **Geolocation API** and shows weather data based on their **latitude and longitude**.

- 🏙️ **Search by City**  
  Users can enter a **city name** to get updated weather conditions.

- ☁️ **Real-Time Weather Data**  
  Fetches and displays current temperature, weather condition, humidity, pressure, wind, and more.

- 🌀 **Context API Integration**  
  Utilizes React's `useContext` hook to manage shared state like city name, weather data, and loading state.

- 💨 **Tailwind CSS Styling**  
  Clean, mobile-friendly, and fully responsive UI using Tailwind CSS utility classes.

---

## 🛠️ Technologies Used

- React (Functional Components + Hooks)  
- Context API (`useContext`, `createContext`)  
- Tailwind CSS  
- OpenWeatherMap API  
- Geolocation API

---

## 🔗 Live Demo

Check out the live demo here: [Weather App Demo]([https://your-live-url.netlify.app](https://weather-app-woad-psi.vercel.app/))

---

## 🧠 How It Works

- On load, checks if user input is provided.
- If not, requests geolocation from browser.
- Uses latitude & longitude to fetch weather via API.
- If city name is entered, uses city-based API fetch.
- Updates UI using shared context (`useContext`) state.


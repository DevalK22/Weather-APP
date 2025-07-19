# 🌤️ Weather App

A clean and responsive weather application built using **HTML**, **CSS (Bootstrap 5)**, and **JavaScript**. Enter any city name and get real-time weather details such as temperature, humidity, wind speed, weather condition, and local time — all with a sleek user interface.

---

## 🚀 Live Preview  
👉 [https://devalk22.github.io/Weather-APP/](https://devalk22.github.io/Weather-APP/)

You can also run this app locally by opening `index.html` in your browser.

> _Tip:_ This project is deployed using GitHub Pages. You can fork and deploy your own version in minutes!

---

## 🔍 Features

- 🔎 Search weather by city name  
- 🌡️ Displays temperature in Celsius  
- 🕒 Shows local time of the city  
- 💧 Humidity and 💨 wind speed  
- 🌍 City, region, and country info  
- 🖼️ Dynamic weather icon and description  
- 📱 Fully responsive design with Bootstrap 5

---

## 🛠️ Built With

- **HTML5**
- **CSS3** (via [Bootstrap 5](https://getbootstrap.com/))
- **JavaScript (ES6)**
- **[WeatherAPI.com](https://www.weatherapi.com/)** via [RapidAPI](https://rapidapi.com/weatherapi/api/weatherapi-com)

---

## 📂 Project Structure

```
Weather-APP/
│
├── index.html        # Main UI
├── script.js         # Handles API calls and DOM manipulation
├── README.md         # Project documentation
```

---

## 🔑 API Key Setup

This app uses [WeatherAPI.com](https://www.weatherapi.com/) through [RapidAPI](https://rapidapi.com/weatherapi/api/weatherapi-com).

### Steps to get and add your API Key:

1. Sign up at [RapidAPI](https://rapidapi.com).
2. Subscribe to **WeatherAPI**.
3. Copy your **X-RapidAPI-Key**.
4. Open `script.js` and replace:

```javascript
const apiKey = 'YOUR_RAPIDAPI_KEY';
```

> 🔐 **Never commit your actual API key to public repositories.**

---

## ⚙️ How to Use

1. Clone or download this repository.
2. Open the folder in your code editor.
3. Open `index.html` in a browser.
4. Enter any city name and click "Search" to view live weather data.

---

## 📈 Future Enhancements

- Toggle between °C and °F  
- Use Geolocation API for current location weather  
- Improved error messages and suggestions  
- Store last searched cities using `localStorage`

---

## 📄 License

This project is licensed under the **MIT License** — free for personal and commercial use with attribution.

---

## 👤 Author

**Deval Kaku**  
- 🐙 [GitHub](https://github.com/Deval_K22)  
- 💼 [LinkedIn](https://linkedin.com/in/deval_kaku)

---

> Created with ❤️ using HTML, CSS, JavaScript, and WeatherAPI.

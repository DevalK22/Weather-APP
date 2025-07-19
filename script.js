const apiKey = '610debf786msh7d4e87c240f12f7p141e47jsn88b521ad03a3';
const apiHost = 'weatherapi-com.p.rapidapi.com';

const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const output = document.getElementById('weather-output');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) return;

  output.innerHTML = `
    <div class="col-12 text-center text-white">
      <div class="spinner-border text-light" role="status"></div>
      <p class="mt-2">Fetching weather for <strong>${city}</strong>...</p>
    </div>
  `;

  try {
    const response = await fetch(`https://${apiHost}/current.json?q=${encodeURIComponent(city)}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    });

    const data = await response.json();

    if (!data.location) {
      output.innerHTML = `
        <div class="alert alert-warning text-center">Location not found. Please try again.</div>
      `;
      return;
    }

    const location = data.location;
    const current = data.current;

    output.innerHTML = `
      <div class="col-12 col-md-8">
        <div class="card p-4">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h2>${location.name}</h2>
              <h5 class="text-primary">${location.region}, ${location.country}</h5>
              <p class="text-muted mb-1">${location.localtime}</p>
              <h1 class="display-4">${current.temp_c}°C</h1>
              <p>${current.condition.text}</p>
              <p><strong>Humidity:</strong> ${current.humidity}%</p>
              <p><strong>Wind:</strong> ${current.wind_kph} kph (${current.wind_dir})</p>
            </div>
            <img src="https:${current.condition.icon}" class="weather-icon" alt="weather-icon">
          </div>
        </div>
      </div>
    `;

  } catch (err) {
    console.error(err);
    output.innerHTML = `
      <div class="alert alert-danger text-center">❌ Error fetching data. Please try again later.</div>
    `;
  }
});

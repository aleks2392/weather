import { ref } from "vue";
import { API_KEY, BASE_URL } from "../constants";

export default function useWeatherApi(cityRef) {
  const weatherInfo = ref(null);

  async function getWeather() {
    try {
      const response = await fetch(
        `${BASE_URL}?q=${cityRef.value}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      weatherInfo.value = await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return { weatherInfo, getWeather };
}

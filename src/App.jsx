import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(true);

  const filteredWeather = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });

  const isGoodWeather = weather;

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivities) {
    setActivities([...activities, { ...newActivities, id: uid() }]);
    console.log(newActivities);
  }

  return (
    <div>
      <div>
        <span>{weather.condition}</span>
        <span>{weather.temperature}</span>
        <p>{weather.isGoodWeather ? "Good :) Weather" : "Bad Weather"}</p>
      </div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredWeather} isGoodWeather={isGoodWeather} />
    </div>
  );
}
export default App;

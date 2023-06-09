import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(null);

  /*   const filteredWeather = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });
 */

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleAddActivity(newActivities) {
    setActivities([...activities, { ...newActivities, id: uid() }]);
    console.log(newActivities);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="app">
      <header className="header">
      <h1 className="header_text">Weather Activity</h1>
      <div>
      <p className="header_temp">
        <span className="header_icon">{weather.condition}</span> {weather.temperature} °C
      </p>
      </div>
      <div>
    <p className="isgoodweather_text">
      {weather?.isGoodWeather ?
          "Great Weather for this Activities: " : "Bad Weather outside for this Activities"}
    </p>
      </div>
      </header>
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={activities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}
export default App;

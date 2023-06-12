import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Form from './components/Form';
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from './components/List';


const isGoodWeather = true;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  


  function handleAddActivity (newActivities) {
    setActivities([...activities, {...newActivities, id: uid()}])
    console.log(newActivities);
  }


  return (
    <div>
<Form  onAddActivity={handleAddActivity} />
<List activities={activities} isGoodWeather={isGoodWeather}/>
</div>
  )
}

export default App

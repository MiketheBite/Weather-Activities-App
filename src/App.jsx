import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Form from './components/Form';
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from './components/List';

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });

  function handleAddActivity (newActivities) {
    setActivities([...activities, {...newActivities, id: uid()}])
    console.log(newActivities);
  }


  return (
<Form  onAddActivity={handleAddActivity} />
<List />
  )
}

export default App

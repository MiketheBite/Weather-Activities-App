export default function List({ activities, isGoodWeather }) {
  
  const headline = isGoodWeather ? "Good Weather" : "Bad Weather";
    const filteredWeather = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  return filteredWeather.map((activity) => {
    return (
      <ul>
        <h2>{headline}</h2>
        <li key={activity.id}>{activity.name}</li>
      </ul>
    );
    console.log(isGoodWeather);
});
  
}

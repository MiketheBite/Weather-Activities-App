export default function List({ activities, isGoodWeather }) {
    /* const filteredWeather = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  ); */
  const mapedWeather = activities.map((activity) => {
    return (
      <ul>
        <li key={activity.id}>{activity.name}</li>
      </ul>
    );
    console.log(isGoodWeather);
});
return (
  <ul>{mapedWeather}</ul>
)
}
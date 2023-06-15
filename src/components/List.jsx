export default function List({ activities, weather, onDeleteActivity }) {
  const filteredWeather = activities.filter((activity) =>
    weather?.isGoodWeather ? activity.goodWeather : !activity.goodWeather
  );

  return (
    <>
      <ul>
        {filteredWeather.map((activity) => (
          <li key={activity.id}>
            {activity.activity}
            <button onClick={() => onDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

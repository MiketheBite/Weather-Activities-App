export default function List({ activities, weather, onDeleteActivity }) {
  const filteredWeather = activities.filter((activity) =>
    weather?.isGoodWeather ? activity.goodWeather : !activity.goodWeather
  );

  return (
    <>
      {weather?.isGoodWeather ? (
        <h2>
          Good Weather Activities {weather?.condition} {weather?.temperature}°C
        </h2>
      ) : (
        <h2>
          Bad Weather Activities {weather?.condition} {weather?.temperature}°C
        </h2>
      )}
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

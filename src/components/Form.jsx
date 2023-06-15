export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const activity = Object.fromEntries(formData);
    onAddActivity(activity);
    form.reset();
    form.elements.activity.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label htmlFor="activity">Activity: </label>
      <input name="activity" type="text" id="activity" />
      <label htmlFor="goodWeather">Good weather activity: </label>
      <input type="checkbox" name="goodWeather" id="goodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}

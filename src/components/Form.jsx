export default function Form({ onAddActivity }) {
    function handleSubmit (event) {
        event.preventDefault();
        const form = event.target;
        const data = {name:form.activity.value, isForGoodWeather:form.checkbox.checked};
        onAddActivity(data)       
        event.target.reset();
        event.target.elements.name.focus();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Activity:</h1>
            <label htmlFor="activity">Activity: </label>
            <input name="activity" type="text" id="activity" />
            <label htmlFor="checkbox">Good-weather activity: </label>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <button type="submit">Submit</button>
        </form>
    )
};

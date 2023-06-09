export default function Form() {


    return (
        <form>
            <h1>Add New Activity:</h1>
            <label htmlFor="activity">Activity: </label>
                <input name="activity" type="text" id="activity" />
            <label htmlFor="checkbox">Good-weather activity: </label>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <button type="submit">Submit</button>
        </form>
    )
};

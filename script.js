
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fitness-form');
    const entriesList = document.getElementById('entries-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const date = document.getElementById('date').value;
        const steps = document.getElementById('steps').value;
        const calories = document.getElementById('calories').value;
        const workout = document.getElementById('workout').value;

        const entry = document.createElement('li');
        entry.textContent = `Date: ${date}, Steps: ${steps}, Calories Burned: ${calories}, Workout Duration: ${workout} mins`;

        entriesList.appendChild(entry);

        form.reset();
    });
});

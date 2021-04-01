document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('hopeful')
    button.addEventListener('click', () => {
        fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/c_245h4b65a51pmcbdeqqdh9p9us@group.calendar.google.com')
            .then(function (response) {
                return response.json();
            }

            ).then(function (data) {
                const trying = data
                console.log(trying)
            }

            ).catch(function (err) {
                console.log("Something Went Wrong", err);
            })
    })

})

export const CurrentLocation = () => {

    if (navigator.geolocation) {
        try{
            this.getPosition()
            .then((position) => {
                this.getWeather(position.coords.latitude, position.coords.longitude);
            });
        }
        catch(err) {
            this.getWeather(0,0)
            alert("You have disabled location service.")
        }
    } else {
        alert("Geolocation not available");
    }
}

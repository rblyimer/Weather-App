const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
document.querySelector(".date").innerText = date;
let api2 = {
    "apiKey": "b984ba3a8f27a415ad58bf0046cc0dd2", 
    fetchWeather: function (zip) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${this.apiKey}`
            )
            .then((response) => response.json()) 
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {icon,description} = data.weather[0];
        const {name} = data;
        const {temp, feels_like, temp_max, temp_min, humidity } = data.main;  
        document.querySelector(".icon2").src= ``
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".desc").innerText = description;
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + " °F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " °F";
        document.querySelector(".feels").innerText = "Feels like: " + feels_like + " °F";
        document.querySelector(".hl").innerText = "H: " + temp_max + " °F" + " | " +  "L: " + temp_min + " °F";
        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchButton").value);
    }
}
document.querySelector(".search button").addEventListener("click", function() {
api2.search();
});

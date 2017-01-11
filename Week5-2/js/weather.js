window.onload = function(){
	var weather = {
		render: function(){
			var bangkok = document.getElementById("bangkok");
			bangkok.addEventListener("click", function(){ //when button is "click" it will do function
				//alert("Get out of this country");
				$.ajax({
					type: "GET", 
					url: "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a",
					success: function(data){
						console.log(data);
						//alert(data.main.temp); // annoying pop up text

						// data.name --> City Name  // V text appear at bottom
						var city = document.getElementById("city-name");
						city.textContent = data.name;

						// data.weather = icon
						var icon = document.getElementById("icon");
						// data.weather[0].icon = array will return 02d
						icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png"
						//02d is string not image link. get string into url

						var des = document.getElementById("des");
						des.textContent = data.weather[0].main + " - " + data.weather[0].description;

						var temperature = document.getElementById("temperature");
						temperature.textContent = data.main.temp - 273.15 + " C";
					}
				});
			});
		}
	};
	weather.render();
};
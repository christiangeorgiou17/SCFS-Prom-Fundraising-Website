fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("caramel-cookies-price").innerHTML = "Price: " + data.CaramelCookies + " each";
    });


//document.getElementById("caramel-cookies-price").innerHTML = "Price: " + caramelCookiesPrice + " each";
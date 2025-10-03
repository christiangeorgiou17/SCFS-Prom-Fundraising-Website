fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("oat-cookies-price").innerHTML = "Price: " + data.OatCookies + " each";
    });


//document.getElementById("oat-cookies-price").innerHTML = "Price: " + oatCookiesPrice + " each";
fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("oat-raisin-cookies-price").innerHTML = "Price: " + data.OatRaisinCookies + " each";
    });


//document.getElementById("oat-raisin-cookies-price").innerHTML = "Price: " + oatRaisinCookiesPrice + " each";
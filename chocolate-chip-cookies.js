fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("chocolate-chip-cookies-price").innerHTML = "Price: " + data.ChocolateChipCookies + " each";
    });


//document.getElementById("chocolate-chip-cookies-price").innerHTML = "Price: " + chocolateChipCookiesPrice + " each";
fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("shortbread-price").innerHTML = "Price: " + data.Shortbread + " each";
    });


//document.getElementById("shortbread-price").innerHTML = "Price: " + shortbreadPrice + " each";
fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("lemon-ckaes-price").innerHTML = "Price: " + data.LemonCakes + " each";
    });


//document.getElementById("lemon-ckaes-price").innerHTML = "Price: " + lemonCakesPrice + " each";
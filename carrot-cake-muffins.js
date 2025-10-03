fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("carrot-cake-muffins-price").innerHTML = "Price: " + data.CarrotCakeMuffins + " each";
    });


//document.getElementById("carrot-cake-muffins-price").innerHTML = "Price: " + carrotCakeMuffinsPrice + " each";
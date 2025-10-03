fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("banana-miffins-price").innerHTML = "Price: " + data.BananaMuffins + " each";
    });


//document.getElementById("banana-miffins-price").innerHTML = "Price: " + bananaMuffinsPrice + " each";
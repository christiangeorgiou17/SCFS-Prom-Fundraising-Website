fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("rice-krispie-treats-price").innerHTML = "Price: " + data.RiceKrispieTreats + " each";
    });


//document.getElementById("rice-krispie-treats-price").innerHTML = "Price: " + riceKrispieTreatsPrice + " each";
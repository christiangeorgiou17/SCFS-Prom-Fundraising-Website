fetch('bakesale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    document.getElementById("bake-sale-date").innerHTML = data.BakeSaleDate; // Use the JSON data here
    document.getElementById("next-bake-sale-products").innerHTML = data.NextBakeSaleProducts;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


//document.getElementById("bake-sale-date").innerHTML = bakeSaleDate;
//document.getElementById("next-bake-sale-products").innerHTML = bakeSaleProducts;
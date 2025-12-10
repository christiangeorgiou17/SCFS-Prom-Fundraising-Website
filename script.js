fetch('totalmoneyraised.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    document.getElementById("money-raised-value").innerHTML = data.TotalMoneyRaised; // Use the JSON data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

fetch('failsafe.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    toLock = data.lock;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

let oldHelpMessage = "Donations are welcome and thank you so much for your help. There also are other ways of helping like our bake sale with very delicious cakes and cookies!"

//document.getElementById("money-raised-value").innerHTML = moneyRaisedValue;

const Elements = [
  document.getElementById("home"),
  document.getElementById("money-raised-section"),
  document.getElementById("how-can-you-help")
]

if (toLock) {
  for (x = 0, x < 3, x ++) {
    Elements[x].remove()
  }
  console.log("Lock")
}

document.getElementById("btn").addEventListener("click", function() {
  // Generate a random hex color
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  // Set the background color of the body to the random color
  document.body.style.backgroundColor = randomColor;

  // Update the color display element with the generated color and its code
  var colorDisplay = document.getElementById("color-display");
  colorDisplay.innerHTML = "<span style='color: white;'>Background-Color:</span> <span style='color: blue;'>" + randomColor + "</span>";
  colorDisplay.style.backgroundColor = "black"; // Light gray background
  colorDisplay.style.color = "#f0f0f0"; // Black text color
  colorDisplay.style.fontSize = "25px";
  colorDisplay.style.padding = "10px"; // Optional: Add padding for better appearance
});

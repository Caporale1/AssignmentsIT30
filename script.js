// Alert when page loads
window.onload = function () {
  alert("Welcome to My Webpage About Nature!");
};

// Array of colors for theme
const colors = ["#d3d3d3", "#FFD700", "#228B22"]; // grey,  sunrise yellow, forest green

// Prompt user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color:\n0 = Tornado Grey\n1 = Sunrise Yellow\n2 = Forest Green");

// Store user input in object
const userInfo = {
  name: userName,
  selectedColor: colors[colorChoice]
};

// Confirm array access works
console.log("The first color in the array is:", colors[0]);

// Apply user-selected color to background
document.body.style.backgroundColor = userInfo.selectedColor;


/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = parseInt(timeString)
  if (hour < 12) return "Good Morning"
  if (hour < 17) return "Good Afternoon"
  if (17 < hour) return "Good Evening"

}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let input = document.getElementById("greeting")
  input.innerText = string
}

  


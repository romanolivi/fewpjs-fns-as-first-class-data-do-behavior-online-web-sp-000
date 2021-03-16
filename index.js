/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const hoursMinutes = timeString.split(':');
  const hours = parseInt(hoursMinutes[0], 10);
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  const time = (hours + minutes / 100);

  if (time < 12) { 
    greeting = "Good Morning";
  } else if (time > 17) { 
    greeting = "Good Evening";
  } else if (12 < time < 17) {
    greeting = "Good Afternoon";
  }

  return greeting;
}

function displayMessage(b) {
  const g = document.getElementById("greeting");
  g.innerText = b;
} 
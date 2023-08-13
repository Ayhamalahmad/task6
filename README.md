# Timer Counter

This is a simple JavaScript timer counter application that displays the elapsed time in days, hours, minutes, and seconds. It provides functionality to start, stop, and reset the timer.

## Demo

You can see the live demo of the timer counter [here](https://ayhamalahmad.github.io/task6TimerCounter/).



## Code Explanation

- `secondsDiv`, `minutesDiv`, `hoursDiv`, and `daysDiv` are HTML elements representing the timer display.
- `buttons` is a NodeList of buttons representing the control buttons.
- `startBtn`, `stopBtn`, and `resetBtn` represent the specific control buttons.
- `seconds`, `minutes`, `hours`, and `days` store the time values.
- `interval` stores the reference to the timer interval.
- `isTimerRunning` is a flag to track if the timer is currently running.

- The `timer()` function is responsible for updating the timer values and displaying them. It increments the seconds, minutes, hours, and days as needed and formats the display with leading zeros.

- Event listeners are attached to the control buttons. Depending on the clicked button, appropriate functions are called to start, stop, or reset the timer.

- The `startTimer()` function initializes the interval to repeatedly call the `timer()` function every 1 millisecond.

- The `resetF()` function resets all time values to zero and updates the display accordingly.

- The `stopF()` function clears the interval, effectively pausing the timer.

## Contributing

Feel free to contribute improvements or enhancements to this simple timer counter application. You can fork the repository, make your changes, and create a pull request.




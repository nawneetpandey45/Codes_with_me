const button = document.querySelector('button'); // Select the button element
const textarea = document.querySelector('textarea'); // Select the textarea element
const root = document.querySelector('#root'); // Select the root element

// Retrieve the saved text from localStorage or initialize with an empty string
textarea.value = localStorage.getItem('savedText') || '';

// Create a new instance of the SpeechRecognition API
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

// Set the language for speech recognition
recognition.lang = 'en-US'; 
recognition.continuous = true; // Enable continuous recognition

// Event triggered when speech recognition produces results
recognition.onresult = function(event) {
  const last = event.results.length - 1; // Get the last result
  const text = event.results[last][0].transcript; // Get the transcribed text

  // Function to type out the recognized text in the textarea with a typing effect
  function typeText(text, index = 0) {
    if (index < text.length) {
      textarea.value += text[index]; // Append the next character to the textarea
      setTimeout(() => typeText(text, index + 1), 50); // Delay for the typing effect
    } else {
      textarea.value += '\n'; // Add a new line after completing the text
      localStorage.setItem('savedText', textarea.value); // Save the updated text to localStorage
    }
  }

  typeText(text); // Call the typing function with the recognized text
};

// Event triggered when an error occurs in speech recognition
recognition.onerror = function(event) {
  root.textContent = 'Please allow microphone access!'; // Show an error message
  console.error('Microphone access denied: ' + event.error); // Log the error to the console
};

// Event listener for the button click
button.addEventListener('click', function() {
  if (button.classList.contains('animation')) {
    recognition.stop(); // Stop speech recognition if already active
    button.classList.remove('animation'); // Remove the animation class
  } else {
    recognition.start(); // Start speech recognition
    button.classList.add('animation'); // Add the animation class
  }
});

// Event listener for textarea input
textarea.addEventListener('input', function() {
  localStorage.setItem('savedText', textarea.value); // Save the updated text to localStorage
});
// hy newneet pandey 
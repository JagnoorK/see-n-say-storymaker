// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
//var textToSpeak = 'This is the text string that you will generate with your script';
var textToSpeak;
var button1 = document.querySelector('#noun');
var button2 = document.querySelector('#verb');
var button3 = document.querySelector('#adjective');
var button4 = document.querySelector('#noun2');
var button5 = document.querySelector('#place');
var button6 = document.querySelector('#sentence');
var button7 = document.querySelector('#random');
var button8 = document.querySelector('#reactivate');
var output=document.querySelector('p');

var nouns =["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
var verbs=["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectives=["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nouns2=["goat","monkey","fish","cow","frog","bug","worm"];
var places=["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

/* Functions
-------------------------------------------------- */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
function randomStory(){
var text=randomValueFromArray(nouns)+randomValueFromArray(verbs)+randomValueFromArray(adjectives)+randomValueFromArray(nouns2)+randomValueFromArray(places);
output.textContent=text;
speakNow(text);
  
}
function concat(array){
textToSpeak +=randomValueFromArray(array);
return textToSpeak;
}
textToSpeak=concat(array);
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

button1.addEventListener('click', concat(nouns));
button2.addEventListener('click', concat(verbs));
button3.addEventListener('click', concat(adjectives));
button4.addEventListener('click', concat(nouns2));
button5.addEventListener('click', concat(places));

button6.onclick = function() {
	speakNow(textToSpeak);
}
button7.addEventListener('click', randomStory());
button8.addEventListener('click', randomStory());
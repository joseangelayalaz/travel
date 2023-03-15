
const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");


toggleButton.addEventListener("click", toggleDark() );

function toggleDark(){
	console.log('Si funciona el boton Angel');
	htmlElement.classList.toggle('dark');
}


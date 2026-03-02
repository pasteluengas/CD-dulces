var options = ["cd", "album", "redes"];

function cd(){
	console.log("Clickeado CD");
	document.getElementById("cd-dialog").showModal();
}

function album(){
	console.log("Clickeado album");
	document.getElementById("album-dialog").showModal();
}

function redes(){
	console.log("Clikceado redes");
	document.getElementById("redes-dialog").showModal();
}

for (let i=0; i<=2; i++){
	console.log(options[i]);
	document.getElementById("close-" + options[i]).addEventListener("click", function () {
	      document.getElementById(options[i] + "-dialog").close();
	    });
}

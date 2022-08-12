"use strict";

//TODO создавать объекты конструктором
let verbs = {
	fahren: {
		Präsens: "fährt",
		Präterutim: "fuhr",
		Perfekt: "ist gefahren",
	},
	essen: {
		Präsens: "isst",
		Präterutim: "aß",
		Perfekt: "hat gegessen",
	},
	lesen: {
		Präsens: "liest",
		Präterutim: "las",
		Perfekt: "hat gelesen",
	},
	schlafen: {
		Präsens: "schläft",
		Präterutim: "schlief",
		Perfekt: "hat geschlafen",
	},
}


button.onclick = function() { //TODO сделать чтобы работало по энтеру
	let usersVerb = document.getElementById('verb').value;
	for (let currentVerb in verbs) {
		if (currentVerb == usersVerb) {
			for (let tempus in verbs[usersVerb]) {
				document.getElementById('output').innerHTML += tempus + ": " + verbs[currentVerb][tempus] + "<br/>";
			}
		}
	}
	
};



var hunger = 50;
var hydration = 50;
var energy = 50;


var hungermeter = document.getElementById('hunger-meter');
var hydrationmeter = document.getElementById('thirst-meter');
var energymeter = document.getElementById('energy-meter');

function eat()
{
	hunger += 15;
	hydration -= 5;
	energy -=5;
	updateHTML();
}


function drink()
{
	hunger -= 5;
	hydration += 15;
	energy -= 2;
	updateHTML();
}

function exercise()
{
	hunger -= 10;
	hydration -= 15;
	energy += 30;
	updateHTML();
}

function updateHTML()
{
	hungermeter.innerHTML = hunger;
	hydrationmeter.innerHTML = hydration;
	energymeter.innerHTML = energy;
}


var hunger = 50;
var hydration = 50;
var energy = 50;


var hungermeter = document.getElementById('hunger-meter');
var hydrationmeter = document.getElementById('thirst-meter');
var energymeter = document.getElementById('energy-meter');
var statusimage = document.getElementById('status-image');


var timeout = setTimeout(timeTick, 2000);

function timeTick()
{
	hunger -= 4;
	hydration -= 8;
	energy -= 2;
	updateHTML();

	clearTimeout(timeout);
	timeout = setTimeout(timeTick, 2000);
}

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

	changeImage();
}


function changeImage()
{
	var lowestStat = Math.min(hunger, hydration, energy);

	if(lowestStat <= 0)
	{
		statusimage.src = './resources/passed-out.jpg';
		endGame();
	}
	else if(lowestStat <= 25)
	{
		statusimage.src = './resources/tired.jpg';
	}
	else if(lowestStat <= 75)
	{
		statusimage.src = './resources/neutral.jpg';
	}
	else if(lowestStat <= 150)
	{
		statusimage.src = './resources/happy.jpg';
	}
	else
	{
		statusimage.src = './resources/ecstatic.jpg';
	}
}


function endGame()
{
	clearTimeout(timeout);
	document.getElementById('food-row').classList.toggle('hidden');
	document.getElementById('thirst-row').classList.toggle('hidden');
	document.getElementById('exercise-row').classList.toggle('hidden');

	document.getElementById('endgame').classList.toggle('hidden');
}


function restartGame()
{
	hunger = 50;
	hydration = 50;
	energy = 50;
	updateHTML();
	
	document.getElementById('food-row').classList.toggle('hidden');
	document.getElementById('thirst-row').classList.toggle('hidden');
	document.getElementById('exercise-row').classList.toggle('hidden');

	document.getElementById('endgame').classList.toggle('hidden');
	timeout = setTimeout(timeTick, 2000);

}
var hunger = 50;
var hydration = 50;
var energy = 50;

var hungermeter = document.getElementById('hunger-meter');
var hydrationmeter = document.getElementById('thirst-meter');
var energymeter = document.getElementById('energy-meter');
var statusimage = document.getElementById('status-image');


var timeout = setTimeout(timeTick, 2000);

// called every 2 seconds
function timeTick()
{
	hunger -= 4;
	hydration -= 8;
	energy -= 2;
	updateHTML();

	clearTimeout(timeout);
	timeout = setTimeout(timeTick, 2000);
}

// update stats after eating
function eat()
{
	hunger += 15;
	hydration -= 5;
	energy -=5;
	updateHTML();
}

// update stats after drinking
function drink()
{
	hunger -= 5;
	hydration += 15;
	energy -= 2;
	updateHTML();
}

// update stats after exercising
function exercise()
{
	hunger -= 10;
	hydration -= 15;
	energy += 30;
	updateHTML();
}

// update the HTML stat indicators
function updateHTML()
{
	hungermeter.innerHTML = hunger;
	hydrationmeter.innerHTML = hydration;
	energymeter.innerHTML = energy;

	changeImage();
}

// set the status to the correct one based on our stats
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

// toggle interactivity, display game over and restart button
function endGame()
{
	clearTimeout(timeout);
	document.getElementById('food-row').classList.toggle('hidden');
	document.getElementById('thirst-row').classList.toggle('hidden');
	document.getElementById('exercise-row').classList.toggle('hidden');

	document.getElementById('endgame').classList.toggle('hidden');
}

// restart the game
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
//	Canvas and context
var canvas,
	ctx,
	univ;

//	Time step variables
var now,
	deltaStep;
var then = Date.now();

//	Grid variables
var TILE_S = 32,
	COLS = 32,
	ROWS = 16;

//	Initializes canvas and actors
function init()
{
	//	Initialize the canvas and context
	canvas = document.createElement("canvas");
	window.ctx = canvas.getContext("2d");
	canvas.width = TILE_S * COLS;
	canvas.height = TILE_S * ROWS;

	//	Adding canvas to canvas div
	document.getElementById("canvas_div").appendChild(canvas);

	//	Universe object initialized
	univ = new Universe();

}

function loadSim(num)
{
	univ.entities.length = 0;
	switch(num)
	{
		case 1:
				univ.entities.push(new Entity(500, 300, 0, 0.2, 10, 5, "#FFffFF"));
				univ.entities.push(new Entity(600, 310, 0, -0.2, 10, 5, "#0000FF"));	
			break;
		case 2:
				univ.entities.push(new Entity(400, 200, 0.0, 0, 10, 20, "#FFffFF"));
				univ.entities.push(new Entity(500, 300, 0.2, -0.2, 10, 5, "#0000FF"));	
				univ.entities.push(new Entity(450, 100, 0.1, 0.1, 10, 10, "#00ff00"));	
			break;
		case 3:
				univ.entities.push(new Entity(200, 200, 0.17, 0.0, 10, 5, "#FFffFF"));
				univ.entities.push(new Entity(400, 200, 0.0, 0.0, 10, 9, "#0000FF"));	
				univ.entities.push(new Entity(200, 400, 0.0, 0.0, 10, 5, "#00ff00"));	
				univ.entities.push(new Entity(400, 400, 0.0, -0.21, 10, 5, "#FF0000"));	
			break;
		case 4:
				univ.entities.push(new Entity(500, 300, 0, 0, 10, 20, "#FFffFF"));
				univ.entities.push(new Entity(600, 310, 0, -0.5, 10, 5, "#0000FF"));	
			break;
	}
}

function delta()
{
	now = Date.now();
	deltaStep = now - then;
	then = now;

	return deltaStep;
}

//	Main game loop
function loop()
{
	updateAll(delta());
	drawAll();
	window.requestAnimationFrame(loop);
}

//	Update the univ object NOT DOING ANYTIHNG WITH DELTA RIGHT NOW :(
function updateAll(delta)
{
	univ.update(delta);
}

//	Draws background and universe
function drawAll()
{	
	//	Draw background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//	Draw the universe
	univ.draw();
}

//	Starting point for program
function main()
{
	init();
	loop();
}

main();

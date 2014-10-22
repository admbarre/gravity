//	Canvas and context
var canvas,
	ctx,
	univ;

//	Time step variables
var now,
	deltaStep;
var then = Date.now();

//	Entity variables for testing
	var e1,
		e2,
		e3;

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

	//	Adding canvas to body
	document.getElementById("body").appendChild(canvas);

	//	Universe object initialized
	univ = new Universe();

	e1 = new Entity(500, 300, 10, 5, "#FFffFF");
	e1.vel = e1.vel.add(new Vector([0.0, 0.2]));

	e2 = new Entity(600, 310, 10, 7, "#55aaFF");
	e2.vel = e2.vel.add(new Vector([0, -0.2]));


	//	Initialize objects here
	univ.entities.push(e1);
	univ.entities.push(e2);
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

//	Update the univ object
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

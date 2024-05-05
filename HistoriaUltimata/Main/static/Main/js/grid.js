{
/* Получаем WebGL2 контекст. Инициализируем WebGL2 */
let canvas = document.querySelector("#canvas")
let canvasDI = new DI(canvas)
let cellGap = 5
let cellSize = 5
let cellsOnX = 100
let cellsOnY = 60
let mapWidth = cellsOnX * cellSize*2 + (1 + cellGap - cellSize) * cellsOnX
let mapHeight = cellsOnY * cellSize*2 + (1 + cellGap - cellSize) * cellsOnY

canvasDI.SetAttribute("a_position");
canvasDI.SetAttribute("a_mvp");
canvasDI.SetAttribute("a_color");
canvasDI.SetAttribute("a_pointSize");

canvasDI.StartVAO(primitives.e_quad, canvasDI.gl.TRIANGLE_STRIP);

for (var i = 0; i < cellsOnX; i++)
	for (var j = 0; j < cellsOnY; j++)
		canvasDI.SetPrimitive({
			pos: [i + cellGap*i + cellSize*i, j + cellGap*j + cellSize*j,0], 
			scale: [cellSize,cellSize,1],
			color: [i/cellsOnX, j/cellsOnY, i/cellsOnX + j/cellsOnY,1],
		});

canvasDI.EndVAO();



var FOVy = 60
var fieldOfViewRadians = M.Degree2Radian(FOVy);
var zNear = 1;
var zFar = 2000;
// -1 because we need to set camera on top of map
var frustumHeightByMapHeight = Math.cos(M.Degree2Radian(FOVy/2)) * ((mapHeight/2) / Math.sin(M.Degree2Radian(FOVy/2)))
var aspectRatio = canvas.clientWidth / canvas.clientHeight;
var frustumWidth = mapHeight * aspectRatio
var FOVx = Math.atan((frustumWidth/2)/frustumHeightByMapHeight)
var frustumHeightByMapWidth = (mapWidth/2) / Math.tan(FOVx)
var cameraHeight = (frustumHeightByMapHeight > frustumHeightByMapWidth ? frustumHeightByMapWidth : frustumHeightByMapHeight) * -1
var cameraPosition = [
	mapWidth/-2, 
	mapHeight/-2, 
	cameraHeight	
];

var rotation = [0, 0, 0];
var scale = [1, 1, 1];
var start = 0
var deltaTime = 0

}
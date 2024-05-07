/* Получаем WebGL2 контекст. Инициализируем WebGL2 */
let canvas = document.querySelector("#canvas")
let canvasDI = new DI(canvas)
let cellGap = 1
let cellSize = 10
let cellsOnX = 100
let cellsOnY = 50
let mapWidth = cellsOnX * cellSize + cellGap * cellsOnX - 1
let mapHeight = cellsOnY * cellSize + cellGap * cellsOnY - 1

canvasDI.SetAttribute("a_position");
canvasDI.SetAttribute("a_mvp");
canvasDI.SetAttribute("a_color");
canvasDI.SetAttribute("a_pointSize");

canvasDI.StartVAO(primitives.e_quad, canvasDI.gl.TRIANGLE_STRIP);

for (var i = 0; i < cellsOnX; i++)
	for (var j = 0; j < cellsOnY; j++)
		canvasDI.SetPrimitive({
			pos: [cellSize/2 + cellGap*i + cellSize*i, cellSize/2 + cellGap*j + cellSize*j, 0], 
			scale: [cellSize/2,cellSize/2,1],
			color: [0.8, 0.8, 0.8,1],
		});

canvasDI.EndVAO();
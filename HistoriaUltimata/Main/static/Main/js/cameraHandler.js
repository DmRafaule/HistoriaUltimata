function findCameraWidth(){
	return Math.tan(FOVx) * cameraPosition[2] * -2
}
function findCameraHeight(){
	return Math.tan(FOVy) * cameraPosition[2] * -2
}

var perspectiveAngle = 60
var viewAngle = M.Degree2Radian(perspectiveAngle);
var FOVy = M.Degree2Radian(perspectiveAngle/2);
var zNear = 1;
var zFar = 2000;
var frustumHeightByMapHeight = Math.cos(FOVy) * ((mapHeight/2) / Math.sin(FOVy))
var aspectRatio = canvas.clientWidth / canvas.clientHeight;
var frustumWidth = mapHeight * aspectRatio
var FOVx = Math.atan((frustumWidth/2)/frustumHeightByMapHeight)
var frustumHeightByMapWidth = (mapWidth/2) / Math.tan(FOVx)
var cameraHeight = (frustumHeightByMapHeight > frustumHeightByMapWidth ? frustumHeightByMapWidth : frustumHeightByMapHeight) * -1
var cameraPosition = [mapWidth/-2, mapHeight/-2, cameraHeight];
var rotation = [0, 0, 0];
var scale = [1, 1, 1];
var start = 0
var deltaTime = 0
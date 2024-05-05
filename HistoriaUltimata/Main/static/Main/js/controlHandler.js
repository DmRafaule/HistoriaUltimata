canvas.addEventListener('click', (event) => {
	if (event.button == 0){
		console.log(cameraPosition)
	}
})

let touch_startX = 0
let touch_startY = 0
let touch_endX = 0
let touch_endY = 0
let isDragCamera = false
let moveSpeed = 10
let zoomSpeed = 30

// CONTROL BY MOUSE
// Move around
canvas.addEventListener("mousedown", (event) => {
	touch_startX = event.x
	touch_startY = event.y
	// CTRL + LEFT_MOUSE_BUTTON
	if (event.ctrlKey && event.button == 0 ){
		isDragCamera = true
		canvas.classList.add('canvas_camera_move')
	}
});
canvas.addEventListener("mouseup", (event) => {
	touch_endX = event.x
	touch_endY = event.y
	isDragCamera = false
	canvas.classList.remove('canvas_camera_move')
});

canvas.addEventListener("mousemove", (event) => {
	if (isDragCamera){
		var signX = touch_startX - event.x
		var signY = touch_startY - event.y
		cameraPosition[0] -= signX * deltaTime * moveSpeed
		cameraPosition[1] += signY * deltaTime * moveSpeed
	}
	else{
		touch_startX = event.x
		touch_startY = event.y
	}
});
// Zoom in, Zoom out
canvas.addEventListener("wheel",(event) => {
	var scale_factor = 1
	scale_factor = event.deltaY * deltaTime * zoomSpeed * -0.1;
	var zoom = cameraPosition[2] + scale_factor
	zoom = Math.min(Math.max(zoom, cameraHeight), -100);
	cameraPosition[2] = zoom
})

// CONTROL BY KEYBOARD
// Move around
window.addEventListener("keydown",(event) => {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}
  
	switch (event.key) {
		case "ArrowDown":
			cameraPosition[1] += moveSpeed * 20 * deltaTime
			break;
		case "ArrowUp":
			cameraPosition[1] -= moveSpeed * 20 * deltaTime
		  	break;
		case "ArrowLeft":
			cameraPosition[0] += moveSpeed * 20 * deltaTime
		  	break;
		case "ArrowRight":
			cameraPosition[0] -= moveSpeed * 20 * deltaTime
		  	break;
		case "Enter":
		  	// Do something for "enter" or "return" key press.
		  	break;
		case " ":
		  	// Do something for "space" key press.
		  	break;
		case "Escape":
		  	// Do something for "esc" key press.
		  	break;
		default:
		  	return; // Quit when this doesn't handle the key event.
	}
  
	// Cancel the default action to avoid it being handled twice
	event.preventDefault();
},true,);

// CONTROL BY TOUCHSCREEN
// Move around
canvas.addEventListener("touchstart", (event) => {
	for (var i = 0; i < event.touches.length; i++){
		touch_startX = event.touches[i].clientX
		touch_startY = event.touches[i].clientY
	}
});

canvas.addEventListener("touchend", (event) => {
	for (var i = 0; i < event.changedTouches.length; i++){
	}
});

canvas.addEventListener("touchmove", (event) => {
	for (var i = 0; i < event.touches.length; i++){
		cameraPosition[0] -= (touch_startX - event.touches[i].clientX)*deltaTime * moveSpeed
		cameraPosition[1] += (touch_startY - event.touches[i].clientY)*deltaTime * moveSpeed
	}
});
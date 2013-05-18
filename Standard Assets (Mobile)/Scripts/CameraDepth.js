if(Input.GetMouseButtonDown(0)){ //0 is left, 1 is right, 2 is middle mouse button
//do something when the mouse button was just pressed down
	camera.depth = Camera.main.depth + 1;
}
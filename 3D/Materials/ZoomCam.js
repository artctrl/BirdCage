function FixedUpdate () {
    if (Input.GetKeyDown ("space"))
		camera.fieldOfView = 10;
	else if (Input.GetKeyUp ("space"))
		camera.fieldOfView = 60;
}
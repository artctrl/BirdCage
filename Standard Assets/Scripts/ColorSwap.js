function FixedUpdate () {
    if (Input.GetButtonDown ("Fire1")) {
		transform.renderer.material.color = Color.yellow;
	}
	if (Input.GetKeyUp ("Fire1")){
		transform.renderer.material.color = Color.red;
	}
}
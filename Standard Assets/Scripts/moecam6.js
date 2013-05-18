    function FixedUpdate () {
        if (Input.GetKeyDown (KeyCode.Space))
		guiText.text = Time.deltaTime.ToString();
    }
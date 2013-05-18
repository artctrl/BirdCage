function OnGUI () {
	// Make a background box

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (500,210,128,56), "Home")) {
		Application.LoadLevel (0);
	}

	// Make the second button.
	if (GUI.Button (Rect (500,270,128,56), "Start")) {
		Application.LoadLevel (1);
	}
	
	if (GUI.Button (Rect (500,350,128,56), "Quit")) {
		Application.Quit();
	}
}
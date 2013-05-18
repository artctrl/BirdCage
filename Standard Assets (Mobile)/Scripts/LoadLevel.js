function OnGUI () {
	// Make a background box
	GUI.Box (Rect (200,190,800,800), "BirdCage-0-3");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (300,200,156,56), "Level 1")) {
		Application.LoadLevel (1);
	}

	// Make the second button.
	if (GUI.Button (Rect (300,256,156,56), "Level 2")) {
		Application.LoadLevel (2);
	}
}
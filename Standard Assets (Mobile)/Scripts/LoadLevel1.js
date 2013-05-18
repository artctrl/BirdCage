function OnGUI () {
	// Make a background box
	GUI.Box (Rect (280,190,100,90), "BirdCage-0-3");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (300,200,80,20), "Level 1")) {
		Application.LoadLevel (1);
	}

	// Make the second button.
	if (GUI.Button (Rect (300,230,80,20), "Level 2")) {
		Application.LoadLevel (2);
	}
}
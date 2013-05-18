function OnGUI () {
	// Make a background box
	GUI.Box (Rect (600,300,100,90), "BirdCage-0-3");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (610,330,80,20), "Level 1")) {
		Application.LoadLevel (1);
	}

	// Make the second button.
	if (GUI.Button (Rect (630,350,80,20), "Level 2")) {
		Application.LoadLevel (2);
	}
}
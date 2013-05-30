function OnGUI () {
	// Make a background box

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (100,210,128,56), "Forest")) {
		Application.LoadLevel (0);
	}
	// Make the second button.
	if (GUI.Button (Rect (100,270,128,56), "Pond")) {
		Application.LoadLevel (1);
	}
	
	if (GUI.Button (Rect (100,350,128,56), "River")) {
		Application.LoadLevel (2);
	}
	
	if (GUI.Button (Rect (100,400,128,56), "Ocean")) {
		Application.LoadLevel (3);
	}
	
	if (GUI.Button (Rect (100,450,128,56), "Quit")) {
		Application.Quit();
	}
}
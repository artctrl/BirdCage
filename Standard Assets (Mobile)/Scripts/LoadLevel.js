function OnGUI () {
	// Make a background box

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (500,210,128,56), "Caladan")) {
		Application.LoadLevel (0);
	}

	// Make the second button.
	if (GUI.Button (Rect (500,270,128,56), "Gomjabbar")) {
		Application.LoadLevel (1);
	}
	
	if (GUI.Button (Rect (500,350,128,56), "Arrakis")) {
		Application.LoadLevel (2);
	}
	
	if (GUI.Button (Rect (500,400,128,56), "Duke Leto")) {
		Application.LoadLevel (3);
	}
	
	if (GUI.Button (Rect (500,450,128,56), "Quit")) {
		Application.Quit();
	}
}
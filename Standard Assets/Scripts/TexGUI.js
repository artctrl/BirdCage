function OnGUI() {
        GUI.color = Color.yellow;
        GUI.Box(Rect(800, 300, 400, 50), "The following events happen between");
		GUI.Label (Rect (800, 400, 100, 20), "Hello World!");
		GUI.Button(Rect(900,500,70,30), "Start");
        
    }

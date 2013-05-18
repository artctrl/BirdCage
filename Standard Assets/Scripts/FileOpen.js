import System.IO;
var fileName = "data.txt";
 
function FixedUpdate () {
    var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();
 
    var lines = fileContents.Split("\n"[0]);
    for (line in lines) {
        print (line);
    }
}
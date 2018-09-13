
//----------------------------------
//          YOUR CODE
//----------------------------------
var counter = 0; 

for (var i= 0; i < 81; i++) {
	
	y = j*15; 
	
	for (var j = 0; j < 53; j++) {
		x = i*15; 
		create(x,y,colors[counter]);
		counter++;
	}
}
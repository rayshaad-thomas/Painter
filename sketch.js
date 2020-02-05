var colour = ('black');
var click = false;
function setup() 
{
  createCanvas(740, 800);
  background(255, 255, 255);
}
function clicked()
{
	if(mouseIsPressed) { click = true; }
	else { click = false; }
	return false;
}
function draw() 
{
  stroke(255, 255 , 255);
	strokeWeight(1);
  fill('red');
  rect(0, 0, 20, 20);
  if (mouseY <= 20 && mouseY >= 0 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('red'); }
  fill('orange');
  rect(0, 20, 20, 20);
  if (mouseY <= 40 && mouseY >= 20 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('orange'); }
  fill('yellow');
  rect(0, 40, 20, 20);
  if (mouseY <= 60 && mouseY >= 40 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('yellow'); }
  fill('green');
  rect(0, 60, 20, 20);
  if (mouseY <= 80 && mouseY >= 60 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('green'); }
  fill('cyan');
  rect(0, 80, 20, 20);
  if (mouseY <= 100 && mouseY >= 80 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('cyan'); }
  fill('blue');
  rect(0, 100, 20, 20);
  if (mouseY <= 120 && mouseY >= 100 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('blue'); }
  fill('pink');
  rect(0, 120, 20, 20);
  if (mouseY <= 140 && mouseY >= 120 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('pink'); }
  fill('brown');
  rect(0, 140, 20, 20);
  if (mouseY <= 160 && mouseY >= 140 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('brown'); }
  fill('white');
  rect(0, 160, 20, 20);
  if (mouseY <= 180 && mouseY >= 160 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('white'); }
  fill('black');
  rect(0, 180, 20, 20);
  if (mouseY <= 200 && mouseY >= 180 && mouseX <= 20 && mouseX >= 0 && click == true) { colour = ('black'); }
  if (mouseIsPressed) 
  {
		stroke(colour);
		strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY); 
  }
	clicked();
}
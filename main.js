
var lastX,lastY;
canvas = document.getElementById('myCanvas'); 
 ctx = canvas.getContext("2d");
 color = "blue";
 width_of_line = 5;
 var width=screen.width;
  newWidth=screen.width-70;
  newHeight=screen.height-300;
 if(width<992)
 {
  
 document.getElementById ("myCanvas").width=newWidth;
 document.getElementById ("myCanvas").height=newHeight;
 }
 canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e)
 {
  lastX = e.touches[0].clientX - canvas.offsetLeft;
   lastY = e.touches[0].clientY - canvas.offsetTop;
 }
 canvas.addEventListener("touchmove",my_touchmove);
 function my_touchmove(e)
 {
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(lastX, lastY);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y); ctx.stroke();
lastX = current_position_of_touch_x; lastY = current_position_of_touch_y;
 }
 mouseEvvarent="empty";
 var lastX,lastY;
 canvas = document.getElementById('myCanvas'); 
  ctx = canvas.getContext("2d");
  color = "red";
  width_of_line = 10;
  canvas.addEventListener("mousedown", my_mousedown);
  function my_mousedown(e)
  {
    mouseEvent="mousdown";
  }
  canvas.addEventListener("mousemove",my_mousemove);
  function my_mousemove(e)
  {
 current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 if (mouseEvent == "mouseDown")
  { ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;
 ctx.moveTo(last_position_of_x, last_position_of_y);
 ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();
 }
 lastX = current_position_of_mouse_x; lastY = current_position_of_mouse_y;
  }
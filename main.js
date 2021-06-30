var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_the_line_=document.getElementById("width_of_line").value;
    Radius=document.getElementById("Radius").value;
    mouseEvent="mousedown";

}

canvas.addEventListener("mouseLeave",my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent="mouseLeave";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup";
    
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent =="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Current position of x and y cordinates=");
        console.log("x=" +current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
      
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, Radius,0,2*Math.PI);
        ctx.stroke();
    }

}

function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
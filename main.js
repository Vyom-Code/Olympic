canvas=document.getElementById("Olympic");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 4;
ctx.rect(130, 130, 430, 200);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(250, 200, 40, 0, 2* Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(350, 200, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(450, 200, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth= 5;
ctx.arc(300, 250, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(400, 250, 40, 0, 2* Math.PI);
ctx.stroke();


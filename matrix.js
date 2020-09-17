var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var symbols = "01000111 01100101 01110100 00100000 01100001 00100000 01101100 01101001 01100110 01100101";
symbols = symbols.split("");

var font_size = 12;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1;

function draw()
{
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#0F0";
	ctx.font = font_size + "px courier";
	for(var i = 0; i < drops.length; i++)
	{
		var text = symbols[Math.floor(Math.random()*symbols.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++;
	}
}

setInterval(draw, 10);

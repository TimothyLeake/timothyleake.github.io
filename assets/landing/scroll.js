let text = "Loading... "

function scroll(){

	text = text.slice(1) + text[0];

	document.getElementById("scroll").textContent = text;

}

getContent("https://www.timothyleake.com/assets/landing/scroll.txt").then(txt => {
  text = (txt).repeat(5);
	setInterval(scroll, 150);
});

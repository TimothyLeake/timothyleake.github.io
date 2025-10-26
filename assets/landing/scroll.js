let text = "Loading... "

function scroll(){

	text = text.slice(1) + text[0];

	document.getElementById("scroll").textContent = text;

}

function getContent() {
  return fetch("https://www.timothyleake.com/assets/landing/scroll.txt").then(res => res.text());
}

getContent().then(txt => {
	text = txt.trimEnd().repeat(10);
	setInterval(scroll, 150);
});

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
};

function updateClock() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').textContent = h + ":" + m + ":" + s;
	setTimeout(updateClock, 1000);
};
window.onload = updateClock;

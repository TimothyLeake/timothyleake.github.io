function updateClock() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').textContent = h + ":" + m + ":" + s;
	setTimeout(updateClock, 1000);
};
window.onload = updateClock;

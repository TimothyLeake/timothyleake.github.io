let suffix = " ";

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
};

function formatTime(i) {
	if (i > 12) {
		i = i - 12;
		suffix = " PM";
	} else {
		suffix = " AM";
	}
	return i;
};

function updateClock() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	h = formatTime(h);
	m = checkTime(m);
	document.getElementById('clock').textContent = h + ":" + m + suffix;
	setTimeout(updateClock, 1000);
};
window.onload = updateClock;

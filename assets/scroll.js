fetch("https://timothyleake.github.io/assets/binary.txt")
  .then(response => response.text())
  .then(data => {
		let scrollState = data;
		function scroll(){
			scrollState = scrollState.slice(1) + scrollState[0];
					document.getElementById("scroll").textContent = scrollState;
		}
		setInterval(scroll, 100);
  });

fetch("https://timothyleake.github.io/assets/binary.txt")
  .then(response => response.text())
  .then(data => {
    document.getElementById("scroll").setAttribute("data-text", data);
  });

const images = document.querySelector('.background-images');
images.addEventListener('click', handleClick, false);

function handleClick(e) {
  if (e.target.matches('img')) {
    const { src } = e.target;
    document.body.style.backgroundImage = `url(${src})`;
  }
}

function instructionsToggle() {
  let rulesText = document.getElementById("instructions-text");
  if (rulesText.style.display === "none") {
    rulesText.style.display = "block";
  } else {
    rulesText.style.display = "none";
  }
}

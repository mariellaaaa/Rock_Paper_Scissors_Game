document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelector('.background-images');
  images.addEventListener('click', handleClick, false);

  function handleClick(e) {
    if (e.target.matches('img')) {
      const { src } = e.target;
      document.body.style.backgroundImage = `url(${src})`;
      const selectedBackground = `url(${src})`;
      localStorage.setItem('userBackground', selectedBackground);
      document.body.style.backgroundImage = selectedBackground;
      let backgrounds = JSON.parse(localStorage.getItem('userBackgrounds')) || [];
      backgrounds.push(selectedBackground);
      localStorage.setItem('userBackgrounds', JSON.stringify(backgrounds));
    }
  }
  const storedBackground = localStorage.getItem('userBackground');
  if (storedBackground) {
    document.body.style.backgroundImage = storedBackground;
  }
})

function instructionsToggle() {
  let rulesText = document.getElementById("instructions-text");
  if (rulesText.style.display === "none") {
    rulesText.style.display = "block";
  } else {
    rulesText.style.display = "none";
  }
}

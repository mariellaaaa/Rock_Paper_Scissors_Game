const images = document.querySelector('.background-images');
images.addEventListener('click', handleClick, false);

function handleClick(e) {
  if (e.target.matches('img')) {
    const { src } = e.target;
    document.body.style.backgroundImage = `url(${src})`;
  }
}

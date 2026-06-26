const video     = document.getElementById('wildlifeVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function () {

  const isHidden = video.style.display === 'none';

  if (isHidden) {
    // Video is hidden → reveal and play
    video.style.display = 'block';
    video.play();
    toggleBtn.textContent = 'Hide Video';

  } else if (!video.paused) {
    // Video is visible and playing → hide it (also pauses)
    video.pause();
    video.style.display = 'none';
    toggleBtn.textContent = 'Show Video';

  } else {
    // Video is visible but paused → play it
    video.play();
    toggleBtn.textContent = 'Hide Video';
  }

});

const video = document.getElementById('video');
const previousButton = document.getElementById('previous');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');

const videos = [
  { title: 'Video Profil', filename: 'assets/media/video_profil_media.mp4' },
  { title: 'Mars SMAGI', filename: 'assets/media/mars_smagi_media.mp4' }
];
let currentIndex = 0;

// Mulai video awal
video.src = 'assets/media/video_profil_media.mp4';
video.play(true);

function nextVideo() {
  currentIndex = (currentIndex + 1) % videos.length;
  video.src = videos[currentIndex].filename;
  document.getElementById('title').innerText = videos[currentIndex].title;
  video.play();
}

function previousVideo() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  video.src = videos[currentIndex].filename;
  document.getElementById('title').innerText = videos[currentIndex].title;
  video.play();
}

playButton.addEventListener('click', () => {
  video.play();
});

previousButton.addEventListener('click', previousVideo);
nextButton.addEventListener('click', nextVideo);

video.src = 'assets/media/video_profil_media.mp4';
video.play(true);


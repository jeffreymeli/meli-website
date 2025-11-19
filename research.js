const publicationsBtn = document.getElementById('publicationsBtn');
const workingPapersBtn = document.getElementById('workingPapersBtn');
const publicationsText = document.getElementById('publicationsText');
const workingPapersText = document.getElementById('workingPapersText');

const presentationsBtn = document.getElementById('presentationsBtn')
const presentationsText = document.getElementById('presentationsText')

publicationsBtn.addEventListener('click', () => {
  const isVisible = publicationsText.style.display === 'block';
  publicationsText.style.display = isVisible ? 'none' : 'block';
  workingPapersText.style.display = 'none';
  presentationsText.style.display = 'none';
});

workingPapersBtn.addEventListener('click', () => {
  const isVisible = workingPapersText.style.display === 'block';
  workingPapersText.style.display = isVisible ? 'none' : 'block';
  publicationsText.style.display = 'none';
  presentationsText.style.display = 'none';
});

presentationsBtn.addEventListener('click', () => {
  const isVisible = presentationsText.style.display === 'block';
  presentationsText.style.display = isVisible ? 'none' : 'block';
  publicationsText.style.display = 'none';
  workingPapersText.style.display = 'none';
});

